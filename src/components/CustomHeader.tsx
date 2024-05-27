import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Drawer from './Drawer';

interface Props {
  title: string;
}

const CustomHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      {/* <Drawer /> */}
      <View style={styles.header1}>

        <Text style={styles.title1}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header1: {
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;