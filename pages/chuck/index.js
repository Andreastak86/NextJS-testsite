import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Chuck.module.css";

const baseURL = "https://api.chucknorris.io/jokes/random";

export default function ApiCall() {
  const [post, setPost] = useState("");
  const getJoke = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data.value);
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
        <h1>Something happend</h1>;
      });
  };

  return (
    <div>
      <h1 className={styles.h1}>{post}</h1>
      <button className={styles.button} onClick={getJoke}>
        Get me a new one
      </button>
    </div>
  );
}
