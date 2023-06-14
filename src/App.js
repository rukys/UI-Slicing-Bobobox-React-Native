import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, LogBox} from 'react-native';
import {colors} from './utils';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigations';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={colors}
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
