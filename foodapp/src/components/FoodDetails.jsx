import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true); //to track when data is done loading frm api
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false`;
  const API_KEY = "6f52575146a74bd9981da214b4ae912c";

  useEffect(() => {
    async function fetchFoodRecipe() {
      const res = await fetch(`${URL}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data); // set the food data to the state variable
      setIsLoading(false);
    }
    fetchFoodRecipe();
  }, [foodId]); // whenever foodid changes, execute the useEffect hook

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕑{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            🤼<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
