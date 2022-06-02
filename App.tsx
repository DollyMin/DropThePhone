import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Appearance, Text, useColorScheme, View} from 'react-native';
import Summary from './src/pages/Summary';
import History from './src/pages/History';
import Tracker from './src/pages/Tracker';
import Settings from './src/pages/Settings';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {dark, light} from './src/styles/themes';

const Tab = createBottomTabNavigator();

function App() {
  const [appTheme, setAppTheme] = useState(light);

  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      setAppTheme(Appearance.getColorScheme() === 'dark' ? dark : light);
    });
    return () => {};
  }, []);

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? dark : light}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Tab.Navigator>
            <Tab.Screen
              name="Summary"
              component={Summary}
              options={{headerShown: false, title: '요약'}}
            />
            <Tab.Screen
              name="History"
              component={History}
              options={{headerShown: false, title: '기록'}}
            />
            <Tab.Screen
              name="Tracker"
              component={Tracker}
              options={{title: '추적'}}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{headerShown: false, title: '설정'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
