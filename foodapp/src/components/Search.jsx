import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6f52575146a74bd9981da214b4ae912c";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    // useffect runs every time the app renders
    // function to make our api call -> make function async
    async function fetchFood() {
      //using the fetch function to fetch data from api (await the resp)
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      // store the data into a json data variable
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results); // stored into the array an accessible to other comp. frm the App Comp
    }
    fetchFood();
  }, [query]);
  function handleInput(event) {
    setQuery(event.target.value);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(event) => handleInput(event)}
        value={query}
        type="text"
      />
    </div>
  );
}
