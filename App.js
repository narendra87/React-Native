import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import ExecutionSequence from './src/ExecutionSequence';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Lift' }}
        />
        
        <Stack.Screen
          name="ExecutionSequence"
          component={ExecutionSequence}
          options={{ title: 'Order of Execution', headerBackTitle: " " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
