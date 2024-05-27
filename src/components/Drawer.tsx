import React, { useRef, useState } from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from 'react-native';

const Drawer = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');

  console.log(drawerPosition)

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer, ]}>
      <Button
        title="Content"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300} // Ensure drawerWidth is set
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
        <Text style={styles.paragraph}>
          Swipe from the side or press the button below to see it!
        </Text>
        <Button
          title="LOGO"
          onPress={() => drawer.current?.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 11111111111,
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 700
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Drawer;
