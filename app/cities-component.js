"use client";
import React from "react";
import { useAtomValue } from "jotai";
import { citiesAtom } from "./atoms";
import { DataList } from "@chakra-ui/react";
// import List from '@mui/material/List';
// import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";

function CitiesComponent() {
  const cities = useAtomValue(citiesAtom);
  console.log("RE_RENDERED_CITIES_COMPONENT");
  return (
    <DataList.Root>
      {cities.map((city) => (
        <DataList.Item key={city}>
          <DataList.ItemLabel>Name</DataList.ItemLabel>
          <DataList.ItemValue>{city}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
}

export default CitiesComponent;
