import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--br-radius);
  background-color: var(--colors-element);
  box-shadow: var(--shadow);
  overflow: hidden;
  cursor: pointer;
`;

const CardTitle = styled.h3`
margin: 0;
font-size: var(--fs-medium);
font-weight: var(--fw-bold);
`;

const CardBody = styled.div`
padding: 1rem 1.5rem 2rem`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardList = styled.ul`
list-style: none;
margin: 0;
padding: 1rem 0 0;
`;

const CardListItem = styled.li`
font-size: var(--fs-small);
line-height: 1.5;
font-weight: var(--fw-light);

& > b {
  font-weight: var(--fw-bold);
}
`;

export const Card = ({ image, title, info = [], onClick }) => {
  const cardItems =
    info &&
    info.map((item) => (
      <CardListItem key={item.title}>
        <b>{item.title}:</b> {item.description}
      </CardListItem>
    ));

  return (
    <Wrapper onClick={onClick}>
      <CardImage src={image} alt="flag" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardList>{cardItems}</CardList>
      </CardBody>
    </Wrapper>
  );
};
