import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomBarNavigator from './src/navigators/bottomBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  //Loading fonts
  Ionicons.loadFont()
    .then()
    .catch(e => e); //due to load fail warning

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <BottomBarNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
