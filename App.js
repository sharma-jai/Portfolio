import 'react-native-gesture-handler';
import React from 'react'
import FirstScreen from './src/components/first_screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


function firstScreen() {
    return (
      <View style={{ flex: 1}}>
        <FirstScreen/>
      </View>
    );
  }


export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Hello" component={FirstScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};
