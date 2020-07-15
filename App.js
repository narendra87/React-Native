import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/main/HomeScreen';
import Counter from './src/reduxdemo/view/Counter';
import FlexDemo from './src/flexdemo/FlexDemo';
import FlexDirectionDemo from './src/flexdemo/FlexDirectionDemo';
import justifyContentDemo from './src/flexdemo/JustifyContentDemo';
import AlignSelfDemo from './src/flexdemo/AlignSelfDemo';
import CustomModal from './src/main/CustomModal';
import TimerStopwatch from './src/main/TimerStopwatch';
import HooksDemo from './src/main/HooksDemo';
import LiftScreen from './src/liftdemo/LiftScreen';
import ExecutionSequence from './src/liftdemo/ExecutionSequence';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Counter" component={Counter}
          options={{ title: 'Redux Demo', headerBackTitle: " " }} />
        <Stack.Screen name="FlexDemo" component={FlexDemo}
          options={{ title: 'Flex Demo', headerBackTitle: " " }} />
        <Stack.Screen name="FlexDirectionDemo"
          component={FlexDirectionDemo}
          options={{ title: 'Flex Direction Demo', headerBackTitle: " " }}
        />
        <Stack.Screen name="JustifyContentDemo"
          component={justifyContentDemo}
          options={{ title: 'Justify Content Demo', headerBackTitle: " " }}
        />
        <Stack.Screen name="AlignSelfDemo"
          component={AlignSelfDemo}
          options={{ title: 'Align Self Demo', headerBackTitle: " " }}
        />
         <Stack.Screen name="CustomModal"
          component={CustomModal}
          options={{ title: 'Custom Modal', headerBackTitle: " " }}
        />
         <Stack.Screen name="TimerStopwatch"
          component={TimerStopwatch}
          options={{ title: 'Timer Stopwatch', headerBackTitle: " " }}
        />
       <Stack.Screen name="HooksDemo"
          component={HooksDemo}
          options={{ title: 'Hooks Demo', headerBackTitle: " " }}
        />
         <Stack.Screen name="LiftScreen"
          component={LiftScreen}
          options={{ title: 'Lift', headerBackTitle: " " }}
        />
         <Stack.Screen name="ExecutionSequence"
          component={ExecutionSequence}
          options={{ title: 'Lift Execution Sequence', headerBackTitle: " " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
