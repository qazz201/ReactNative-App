/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

componentDidMount(){
  console.log(this.props.fetchData())
 }

  render() {
    let {
      currentPage,
      dataIsLoading,
      fetchData,
      fetchedApiData,
      loadNextPage
    } = this.props;

    console.log(this.props)

    return (
      <View style={styles.container}>

      <Button
        onPress={()=>{loadNextPage( fetchData,currentPage )}}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>


        <FlatList
              data={fetchedApiData}
                keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return(
          <View>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={{ uri: item.urls.thumb }}

              />
              <Text>{item.user.name}</Text>
                  </View>
                )
              }}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
   aspectRatio: 1,
   alignSelf: "center",
   flexDirection: "row",
   height: 250,
   width: 250,
   //borderWidth: 1,
   //borderRadius: 125
 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
