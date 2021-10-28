/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  /*const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };*/

  return (
    <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.Red}>
          {"Benviguts a React Native"}
        </Text>
        <Text style={styles.Blue}>
          {"Primer exercici"}
        </Text>
        <Text style={styles.Normal}>
          {"normal"}
        </Text>
        <Text style={{fontFamily: 'notoserif'}}>
          {"notoserif"}
        </Text>
        <Text style={{fontFamily: 'sans-serif'}}>
          {"sans-serif"}
        </Text>
        <Text style={{fontFamily: 'sans-serif-light'}}>
          {"sans-serif-light"}
        </Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}>
          {"sans-serif-thin "}
        </Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>
          {"sans-serif-condensed "}
        </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>
          {"sans-serif-medium "}
        </Text>
        <Text style={{fontFamily: 'serif'}}>
          {"serif "}
        </Text>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Red: {
    fontSize: 50,
    color: 'red',
  },
  Blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  Normal: {
    fontFamily: 'normal',
  },
});

export default App;
