import React, { useState, useEffect } from "react";
import CardList from "./CardListCardList";
import SearchBox from "./SearchBoxSearchBox";
import Scroll from "./Scroll";
import Add from "../components/add/add";

const Load = () => {
  const [load, setload] = useState([]);
  const [searchfield, setSearchfield] = useState(" ");

  useEffect(() => {
    //axios for images and the name.
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  //const filterfiles= //take all na pass objects with lowercase names all so becomes better to search files.

  return !load.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Topic</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList names={filterfiles} />
        <Add />
      </Scroll>
    </div>
  );
};

export default Load;
