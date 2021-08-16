import { Image, Text, View, ScrollView, TouchableHighlight } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecimens } from "../store/specimens";
import { setSpecimenThunk } from "../store/specimen";

import { useNavigation } from "@react-navigation/core";

function specimenCard(specimen) {
  const nav = useNavigation();
  const dispatch = useDispatch();

  const mainImageArray = specimen.specimenImages.filter(
    (image) => image.isMainImage === true
  );

  return (
    <TouchableHighlight
      style={{ backgroundColor: "#277da1" }}
      onPress={() => {
        dispatch(setSpecimenThunk(specimen.id))
        nav.navigate("Single Specimen View")}}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 40,
          paddingVertical: 20,
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: mainImageArray[0].imageUrl }}
        />
        <View style={{ paddingLeft: 20 }}>
          <Text>{specimen.CommonName}</Text>
          <Text>{specimen.ScientificName}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default function GeodexSearch() {
  const dispatch = useDispatch();
  const specimens = useSelector((state) => state.specimens);

  useEffect(() => {
    //We need to pass in the specimen id from state
    dispatch(fetchSpecimens());
  }, [dispatch]);

  if (specimens) {
    let items = [];
    console.log("THIS IS THE CONSOLE.LOG>>>>>>>", specimens);
    specimens.map((specimen) => {
      items.push(specimenCard(specimen));
    });

    return (
      <View>
        <ScrollView>{items}</ScrollView>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Not rendering what you want :(</Text>
      </View>
    );
  }
}
