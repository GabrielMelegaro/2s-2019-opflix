import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignInScreen from './pages/signin';
import MainScreen from './pages/main';
import SignUpScreen from './pages/signup';

const AuthStack = createStackNavigator({
    SignIn: {screen: SignInScreen},
    SignUp: {screen: SignUpScreen},
});

const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen,
        },
    },
    {
        initialRouteName: 'Main',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor:'#9900e6',
            inactiveBackgroundColor: '#b727ff',
            style: {
                width: '100%',
                height: 50
            }
        }
    },
);

export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack,
        },
        {
            initialRouteName:'AuthStack',
        },
    ),
);
