import axios from "axios";

const PokemonList = ({ pokeData }) => {
  // console.log(pokeData.url);
  return (
    <div>
      {pokeData.results.map((poke) => {
        return (
          <>
            <div>
              <h1>{poke.name}</h1>
              {/* <img src={poke.url.sprites}></img> */}
              <button onClick={() => console.log(poke.url.map)}></button>
            </div>
          </>
        );
      })}
    </div>
  );
};
export const getStaticProps = async () => {
  //   const id = params.id;
  const data = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  return {
    props: {
      pokeData: data.data,
    },
  };
};

export default PokemonList;
