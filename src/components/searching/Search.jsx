import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: var(--colors-element);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--br-radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-input);
  background-color: var(--colors-element);
`;

export const Search = ({ search, setSearch }) => {
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleChange} value={search} />
    </InputContainer>
  );
};
