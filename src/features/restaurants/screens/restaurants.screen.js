import React, { useContext } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";
import SearchLocationBar from "../../../components/searchbar/search.component";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  margin-bottom: ${(props) => props.theme.space[4]};
`;

const Loading = styled(ActivityIndicator)`
  margin-top: ${(props) => props.theme.space[4]};
`;
export default function RestaurantsScreen({ navigation }) {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <SearchLocationBar />
      </SearchContainer>
      {isLoading && <Loading size={50} animating={true} color="tomato" />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantsInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
