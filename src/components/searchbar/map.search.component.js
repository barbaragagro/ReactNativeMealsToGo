import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../services/location/location.context";

export const SearchLocationBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <Searchbar
      placeholder="Search for a location"
      icon="map"
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
