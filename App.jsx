import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import AuthContextProvider from './src/context/AuthContext';
import CartContextProvider from './src/context/CartContext';
import OrderContextProvider from './src/context/OrderContext';
import RootNavigator from './src/navigation';

console.disableYellowBox = true;

function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <CartContextProvider>
          <OrderContextProvider>
            <RootNavigator />
          </OrderContextProvider>
        </CartContextProvider>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;
