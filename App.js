
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar, StyleSheet,Text,useColorScheme,View,} from 'react-native';
import { Provider } from 'react-redux';
import NavigationComponent from './app/navigation';
import { store } from './app/store/store';

const App = () => {
  return (
    <Provider store={store}>
    <View style={styles.sectionContainer}>
      <NavigationComponent />
    </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
});



export default App;
