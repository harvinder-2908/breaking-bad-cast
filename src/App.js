import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/header";
import CharacterGrid from "./components/characters/characterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, getQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const resp = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const respData = await resp.json();
      // console.log(respData);
      setItems(respData);
      setLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header></Header>
      <Search getQuery={getQuery}></Search>
      <CharacterGrid items={items} isLoading={isLoading}></CharacterGrid>
    </div>
  );
};

export default App;
