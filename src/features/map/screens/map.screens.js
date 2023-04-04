import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import SearchLocationBar from "../../../components/searchbar/search.component";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => (
  <>
    <SearchLocationBar />
    <Map />
  </>
);