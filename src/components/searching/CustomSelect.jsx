import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-element)',
      color: 'var(--color-text)',
      borderRadius: 'var(--br-radius)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
      cursor: 'pointer',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-element)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & * {
    color: var(--color-text) !important;
  }

  & input {
    padding-left: 0.25rem;
  }

  & > div[id] {
      background-color: var(--colors-element)
  }
`;
