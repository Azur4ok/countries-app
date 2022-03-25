import React from 'react';
import { List } from '../components/homepage/List';
import { Card } from '../components/homepage/Card';
import { ALL_COUNTRIES } from './../config';
import { Controls } from '../components/searching/Controls';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const HomePage = ({ countries, setCountries }) => {
  const [filtredCountries, setFiltredCountries] = React.useState(countries);
  const navigate = useNavigate();

  React.useEffect(() => {
    function fetchData() {
      if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    handleSearch();
    //eslint-disable-next-line
  }, [countries]);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (search) {
      data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }
    setFiltredCountries(data);
  };

  const renderAllCountries =
    filtredCountries &&
    filtredCountries.map((country) => {
      const countryInfo = {
        image: country.flags.svg,
        title: country.name,
        info: [
          {
            title: 'Population',
            description: country.population.toLocaleString(),
          },
          {
            title: 'Region',
            description: country.region,
          },
          {
            title: 'Capital',
            description: country.capital,
          },
        ],
      };
      return (
        <Card
          key={country.name}
          {...countryInfo}
          onClick={() => navigate(`/country/${country.name}`)}
        />
      );
    });

  return (
    <div>
      <Controls onSearch={handleSearch} />
      <List>{renderAllCountries}</List>
    </div>
  );
};
