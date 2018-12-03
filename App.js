/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    console.log(this.props.fetchData());
  }

  render() {
    let {
      currentPage,
      dataIsLoading,
      fetchData,
      fetchedApiData,
      loadNextPage
    } = this.props;

    console.log(this.props);

    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            loadNextPage(fetchData, currentPage);
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <FlatList
          contentContainerStyle={styles.app}
          data={fetchedApiData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListFooterComponent={() => (
           <ActivityIndicator size="small" color="#0000ff" /> 
          )}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  borderWidth: 0.3,
                  borderColor: "rgba(255, 255, 255, 0.2)"
                }}
              >
                <Image
                  style={styles.img}
                  resizeMode="cover"
                  source={{ uri: item.urls.small }}
                />
                <Text style={{ color: "white", textAlign: "center" }}>
                  {item.user.name}
                </Text>
              </View>
            );
          }}
          onEndReached={() => {
            loadNextPage(fetchData, currentPage);
          }}
        />
        {/*dataIsLoading && <ActivityIndicator size="small" color="#0000ff" />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    // justifyContent: "flex-start",
    // flexDirection: "row",
    // flexWrap: "wrap",
    //   backgroundColor: "#24282a"
    //height: 300,
    // padding: 20,
  },
  img: {
    aspectRatio: 1,
    alignSelf: "center",
    flexDirection: "row",
    height: Dimensions.get("window").height / 3.5,
    width: Dimensions.get("window").width / 2,
    margin: 2

    //borderWidth: 1,
    //borderRadius: 125
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: '#F5FCFF',
    backgroundColor: "#24282a",
    color: "red"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
