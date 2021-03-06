import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const characterGrid = ({ isLoading, items }) => {
  // console.log(items);
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default characterGrid;
