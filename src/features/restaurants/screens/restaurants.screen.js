import React from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import styled from "styled-components";
import MySearchBar from "../../../components/SearchBar";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  // flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  margin-bottom: ${(props) => props.theme.space[4]};
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <MySearchBar />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, {name:5}, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantsInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
