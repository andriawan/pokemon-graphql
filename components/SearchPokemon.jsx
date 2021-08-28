import { css } from '@emotion/css';
import { 
  WrapperSearchPokemon, 
  SearchBoxPokemon,
  ButtonSearch
} from '../styled/components/SearchPokemon';

export default function SearchPokemon({ value, onChange}) {
  return (
    <WrapperSearchPokemon>
      <input 
        value={value}
        onChange={onChange}
        className={css`${SearchBoxPokemon}`}
      />
      <button className={css`
        ${ButtonSearch}
        &:hover {
          color: #3B4CCA;
          background-color: #FFFFFF;
        }
      `}
      >
        Search
      </button>
    </WrapperSearchPokemon>
  )
}