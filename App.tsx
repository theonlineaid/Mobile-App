import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Products from './src/components/Products';
import CustomHeader from './src/components/CustomHeader';
import Drawer from './src/components/Drawer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="LOGO" />
      <View style={styles.content}>
        <Drawer />
        {/* <Products /> */}
      </View>
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
});

export default App;
