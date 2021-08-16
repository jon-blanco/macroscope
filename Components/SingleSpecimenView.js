import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchSpecimen } from "../store/specimen";

export default function GeodexSearch() {
  const dispatch = useDispatch();
  const specimen = useSelector((state) => state.specimen);

  if (specimen.specimenImages) {
    const mainImageArray = specimen.specimenImages.filter(
      (image) => image.isMainImage === true
    );

    const otherImagesArray = specimen.specimenImages.filter(
      (image) => image.isMainImage === false
    );

    const otherImages = otherImagesArray.map((otherImage) => {
      return (
        <Image
          style={{ width: 150, height: 150, margin: 10 }}
          source={{ uri: otherImage.imageUrl }}
        />
      );
    });

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
          padding: 15,
        }}
      >
        <ScrollView>
          <Text style={styles.titleText}>
            Scientific Name: {specimen.ScientificName}
          </Text>
          <Text style={styles.titleText}>
            Common Name: {specimen.CommonName}
          </Text>
          <Text style={styles.titleText}>Description:</Text>
          <Text style={{marginBottom: 20}}>{specimen.Description}</Text>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 320, height: 700 }}
              source={{ uri: mainImageArray[0].imageUrl }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {otherImages}
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Not displaying what you wanted :(</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    marginBottom: 10
  },
});
