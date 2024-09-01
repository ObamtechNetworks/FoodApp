import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("680975");
  return (
    <div className="App">
      <Nav />
      {/* // food data, gotten frm the api in search componnent */}
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/* calling the structure or outer component */}
      <Container>
        {/* nest the child component
        and access as children in the parent component */}
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
