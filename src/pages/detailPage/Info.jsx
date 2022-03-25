import React from 'react';
import { Wrapper } from './styled-components/Wrapper';
import { InfoImage } from './styled-components/InfiImage';
import { InfoTitle } from './styled-components/InfoTitle';
import { ListGroup } from './styled-components/ListGroup';
import { List } from './styled-components/List';
import { ListItem } from './styled-components/ListItem';
import { Meta } from './styled-components/Meta';
import { Tag } from './styled-components/Tag';
import { TagGroup } from './styled-components/TagGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { filterByCode } from '../../config';

export const Info = (props) => {
  const [neighbors, setNeighbors] = React.useState([]);
  const navigate = useNavigate();
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  React.useEffect(() => {
    if (!borders.length) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data && data.map((neighbor) => neighbor.name)));
    }
  }, [borders]);

  const redirectToNeighborClick = (name) => {
    navigate(`/country/${name}`);
  };

  return (
    <Wrapper>
      <InfoImage src={flag} alt="flag" />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain:</b>{' '}
              {topLevelDomain && topLevelDomain.map((domain) => <span key={domain}>{domain}</span>)}
            </ListItem>
            <ListItem>
              <b>Currencies:</b>{' '}
              {currencies &&
                currencies.map((currency) => <span key={currency.code}>{currency.name}</span>)}
            </ListItem>
            <ListItem>
              <b>Languages: </b>{' '}
              {languages &&
                languages.map((language) => <span key={language.name}>{language.name} </span>)}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Borders Countries</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors &&
                neighbors.map((border) => (
                  <Tag onClick={() => redirectToNeighborClick(border)} key={border}>
                    {border}
                  </Tag>
                ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
