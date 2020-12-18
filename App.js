
import React, {Fragment} from 'react';
import {SafeAreaView} from 'react-native';
import HomeView from './src/components/Home/HomeView';

const App = () => {
  return (
        <SafeAreaView style={{flex: 1}}>
            <HomeView/>
        </SafeAreaView>
  );
   };

export default App;
