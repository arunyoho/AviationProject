// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Src/Navigation';
import { StateContextProvider } from './Src/Context';





function App() {
  return (
    <NavigationContainer>
      <StateContextProvider>
       <Navigation/>
       </StateContextProvider>
    </NavigationContainer>
  );
}

export default App;
