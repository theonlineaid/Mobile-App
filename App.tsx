import React from 'react';
import { DrawerLayoutAndroid, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Products from './src/components/Products';
import CustomHeader from './src/components/CustomHeader';
import Drawer from './src/components/Drawer';
import Flex from './src/components/Flex';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <CustomHeader title="LOGO" />
      <Drawer />
      <Flex />
      
      {/* <View style={styles.content}>
        <Drawer /> */}
        <Products />
      {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
});

export default App;
