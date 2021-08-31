import Image from "next/image";
import { 
  CardPokemonContent, 
  CardPokemonWrapper 
} from "../styled/components/PokemonCard";

export default function PokemonCardCollection({ poke }) {
  return (
    <CardPokemonWrapper>
      <CardPokemonContent>
        <Image 
          src={poke.dreamworld}
          alt={poke.name}
          width={150}
          height={150}
        />
        <h1>
          {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
        </h1>
      </CardPokemonContent>
    </CardPokemonWrapper>
  )
};