import React from 'react';
import {
  View, 
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';

const Flex = () => {
  return (
  <SafeAreaView>
       <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
          <View style={{backgroundColor: 'red'}}>
          <Text>One</Text>
          </View>
          <View style={{backgroundColor: 'darkorange'}}>
          <Text>One two</Text>
          </View>
          <View style={{backgroundColor: 'green'}}>
          <Text>One three</Text>
          </View>
          <View style={{ backgroundColor: 'yellow'}}>
          <Text>One Four</Text>
          </View>
             <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </View>
    </SafeAreaView>
   
  );
}
const styles = StyleSheet.create({
topContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    padding: 20,
  },
   scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Flex;