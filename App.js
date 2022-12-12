
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NavigationComponent from './app/navigation';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <NavigationComponent />
    </View>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
});



export default App;
