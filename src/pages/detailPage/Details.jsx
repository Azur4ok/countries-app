import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import { searchCountryByName } from '../../config';
import { Button } from '../../components/Button';
import { Info } from './Info';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios.get(searchCountryByName(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  const goBackClick = () => navigate(-1);

  console.log(country);
  return (
    <div>
      <Button onClick={goBackClick}>
        {' '}
        <IoArrowBack />
        go Back
      </Button>
      {country && <Info {...country} />}
    </div>
  );
};
