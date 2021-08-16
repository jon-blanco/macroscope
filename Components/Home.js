import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/core";
import { createStackNavigator } from '@react-navigation/stack';


const image = {
  uri: "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJmYWxsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
};
const learnScore = "528";
const geodexScore = "208";
const userName = "Jonathan";

export default function Home() {
  const nav = useNavigation()


  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.backGroundImage}
        >
          <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Welcome,</Text>
              <Text style={styles.headerText}>{userName}</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                margin: 20,
                backgroundColor: "#D1D1D1",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <View style={{ alignItems: "flex-end", marginRight: 20 }}>
                <Text style={{ fontSize: 16 }}>Learn Score</Text>
                <Text
                  style={{ fontSize: 24, color: "#43aa8b", fontWeight: "bold" }}
                >
                  {learnScore}
                </Text>
              </View>
              <View style={{ alignItems: "flex-start", marginLeft: 20 }}>
                <Text style={{ fontSize: 16 }}>Geodex Score</Text>
                <Text
                  style={{ fontSize: 24, color: "#277da1", fontWeight: "bold" }}
                >
                  {geodexScore}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.subjectContainer}>
            <Text style={styles.subtext}>Geodex</Text>
            <View style={[styles.subContainer]}>
            <TouchableOpacity
                style={[styles.miniContainer, { backgroundColor: "#90be6d" }]}
              >
                <Image
                  style={styles.iconImages}
                  source={require("../assets/planet-earth.png")}
                />
                <Text style={styles.miniContainerText}>Explore</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.miniContainer, { backgroundColor: "#277da1" }]}
                onPress={()=>nav.navigate("Geodex Search")}
              >
                <Image
                  style={styles.iconImages}
                  source={require("../assets/transparency.png")}
                />
                <Text style={styles.miniContainerText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subjectContainer}>
            <Text style={styles.subtext}>Learn</Text>
            <View style={[styles.subContainer]}>
              <ScrollView horizontal={true}>
              <TouchableOpacity
                style={[styles.miniContainer, { backgroundColor: "#f9c74f" }]}
              >
                <Image
                  style={styles.iconImages}
                  source={require("../assets/bird.png")}
                />
                <Text style={styles.miniContainerText}>Birds</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.miniContainer, { backgroundColor: "#43aa8b" }]}
              >
                <Image
                  style={styles.iconImages}
                  source={require("../assets/tree.png")}
                />
                <Text style={styles.miniContainerText}>Trees</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.miniContainer, { backgroundColor: "#90be6d" }]}
              >
                <Image
                  style={styles.iconImages}
                  source={require("../assets/bush.png")}
                />
                <Text style={styles.miniContainerText}>Shrubs</Text>
              </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          {/* <StatusBar style="auto" /> */}

          {/* <LinearGradient
            colors={["rgba(255, 255, 255, 0)", "black", "black"]}
            start={{ x: 0.5, y: 0.5 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[-2, 1, 2]}
            style={{ width: "100%", height: 100 }}
          ></LinearGradient> */}
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    marginTop: 80,
    marginBottom: 70,
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "rgba(247, 255, 245, 0.5)",
    borderRadius: 20,
  },
  headerTextContainer: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  subjectContainer: {
    alignItems: "flex-start",
    zIndex: 2,
  },
  subContainer: {
    width: "80%",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "rgba(247, 255, 245, 0.5)",
    borderRadius: 20,
    marginBottom: 40,
  },
  miniContainer: {
    margin: 12,
    width: 125,
    height: 125,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  miniContainerText: {
    fontSize: 20,
    paddingVertical: 10,
    color: "black",
  },
  iconImages: {
    marginTop: 15,
    width: 60,
    height: 60,
  },
  backGroundImage: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    zIndex: -2,
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
  },
  subtext: {
    color: "white",
    marginLeft: 20,
    fontSize: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 30,
    // fontWeight:"bold"
  },
  bottomCover: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    width: "100%",
    height: "30%",
    zIndex: 0,
  },
});
