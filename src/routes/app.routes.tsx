import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { DashBoard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

export function AppRoutes(){
  return(
    <Navigator>
      <Screen 
        name="Listagem"
        component={DashBoard}
      />
      <Screen
        name="Cadastrar"
        component={Register}
      />
      <Screen
        name="Resumo"
        component={Register}
      />
    </Navigator>
  )
}