import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppRoutes } from "../constants/app_routes";
import PaymentScreen from "../screens/payment/PaymentScreen";

const PaymentNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoutes.PaymentScreen} component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
