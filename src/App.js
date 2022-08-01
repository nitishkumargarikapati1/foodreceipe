import './App.css';
import { useState } from "react";
import Data from "./products";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "a293352b";
  const YOUR_APP_KEY = "9bc036c37df2a0dea0509bbf5978b661";
  
    async function getfunction(event1) {
      event1.preventDefault();
      try {
        const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=23`);
        const responsedata = await response.json();
        setData(responsedata.hits);
      }
      catch 
      {
        window.alert("enter the correct search");
      }
    }

  
 

  
  return (
    <div className="App">
      <div className="image">
      <div className="foodrecipe">Food Recipe</div>
      <form onSubmit={getfunction} className="form">
        <input className="input" value={search} placeholder="Recipe..." onChange={(event) => setSearch(event.target.value)}></input>
        <br></br>
        <button className="button">search</button>
      </form>
      </div>
      
      {data.length>0 ? <Data  data={data} /> :" "}

    </div>
  );
}



export default App;
