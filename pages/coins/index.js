import axios from "axios";
import Image from "next/image";

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <>
            <div>
              <h1>{coin.name}</h1>
              <img src={coin.icon} alt='coin-logo' />
              <p>{coin.price}</p>
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
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};
export default CoinList;
