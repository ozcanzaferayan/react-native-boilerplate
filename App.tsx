import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { setupStore } from '@store/store';

import Home from './src/home/Home';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
