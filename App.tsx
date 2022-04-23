import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/home/Home';
import Details from './src/details/Details';
import Settings from './src/settings/Settings';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
      {/* <Details />
      <Settings /> */}
    </SafeAreaView>
  );
};

export default App;
