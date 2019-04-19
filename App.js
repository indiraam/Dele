// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });



import * as React from "react";
import { View, StyleSheet, Dimensions, WebView } from "react-native";
import { SearchBar } from "react-native-elements";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={styles.container}>
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://github.com/react-native-community/react-native-webview"
        }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    </View>

    {/* <View style={styles.bottomView}>
          <SearchBar placeholder="Type Here..." />
          <SearchBar placeholder="Searchhh Here..." />
        </View> */}
  </View>
);
const SecondRoute = () => (
  <View style={styles.container}>
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://github.com/react-native-community/react-native-webview"
        }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    </View>

    {
      <View style={styles.bottomView}>
        <SearchBar placeholder="Type Here..." />
        <SearchBar placeholder="Searchhh Here..." />
      </View>
    }
  </View>
);

const ThirdRoute = () => (
  <View style={styles.container}>
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://github.com/react-native-community/react-native-webview"
        }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
        javaScriptEnabled={true}
        onMessage={(event) => {
                        let message = event.nativeEvent.data;
                        console.log("vvvvvv"+message);
                        
                    }}
       
      />
    </View>

    {
      <View style={styles.bottomView}>
        <SearchBar placeholder="Searchhh Here..." />
      </View>
    }
  </View>
);
const FourthRoute = () => (
  <View style={styles.container}>
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://github.com/react-native-community/react-native-webview"
        }}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    </View>

    {
      <View style={styles.bottomView}>
        <View
          style={{
            borderBottomColor: "red",
            borderBottomWidth: 2
          }}
        />
        <SearchBar placeholder="Type Here..." />
        <SearchBar placeholder="Searchhh Here..." />
        <SearchBar placeholder="Searchhh1 Here..." />
        <SearchBar placeholder="Searchhh2 Here..." />
      </View>
    }
  </View>
);

export class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "1Tab" },
      { key: "second", title: "2Tab" },
      { key: "third", title: "3Tab" },
      { key: "fourth", title: "4Tab" }
    ]
  };

  componentWillMount() {
    // arr = [];
    // const { navigation } = this.props;
    // this.state.itemId = navigation.getParam("routename");
    // arr.push(this.state.itemId);
    // this.state.sTime = navigation.getParam("time");
    // arr.push(this.state.sTime);
    // console.log("iddddddddd....." + this.state.sTime);
  }

  render() {
    
  
 
    return (
      // <View style={styles.buttonContainer1}>
      <TabView
        style={styles.myState}
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          fourth: FourthRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
      />

      //</View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  buttonContainer1: {
    // backgroundColor: "#e336d8",
    color: "#FFFFFF",

    backgroundColor: "#ed1a2b"
  },
  myState: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#FFFFFF"
  },
  container: {
    flex: 1,
    paddingTop: 10
  },
  sectionHeader: {
    paddingTop: 4,
    padding: 10,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#ff0000"
  },
  bottomView: {
    width: "100%",
    bottom: 0,
    paddingTop: 15
  },
  item: {
    alignItems: "center",
    paddingTop: 15,
    paddingLeft: 10,
    fontSize: 20,
    height: 60,

    borderColor: "#FAF8F8",
    borderWidth: 1
  }
});




