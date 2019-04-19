import * as React from 'react';
import { View, StyleSheet, Dimensions,WebView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { SearchBar } from "react-native-elements";
 
// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );
// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );


const FirstRoute = () => (
  <View style={styles.container}>
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://facebook.github.io/react-native/docs/tutorial"
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
          uri: "https://facebook.github.io/react-native/docs/tutorial"
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
          uri: "https://facebook.github.io/react-native/docs/tutorial"
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
          uri: "https://facebook.github.io/react-native/docs/tutorial"
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
 
export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
      { key: 'fourth', title: 'Fourth' },
     
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          fourth: FourthRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});