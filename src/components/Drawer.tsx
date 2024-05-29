import React, { useRef, useState } from 'react';
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from 'react-native';

const Drawer = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
      style={styles.drawer}
    >
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Open drawer" onPress={() => drawer.current?.openDrawer()} />
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
  },
  buttonContainer: {
    height: 50, // Fixed height for the button container
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Drawer;
