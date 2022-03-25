import React from 'react';
import { Container } from '../Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-element);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fs-medium);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

const ThemeSwitcher = styled.div`
  cursor: pointer;
  font-size: var(--fs-medium);
  font-weight: var(--fw-light);
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const switchThemeClick = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ThemeSwitcher onClick={switchThemeClick}>
            {theme === 'light' ? <IoMoon size="16px" /> : <IoMoonOutline size="16px" />} {theme}{' '}
            Mode
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
