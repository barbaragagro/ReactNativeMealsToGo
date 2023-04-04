import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../services/location/location.context";

const SearchLocationBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <Searchbar
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        setSearchKeyword(text);
      }}
    />
  );
};

export default SearchLocationBar;
