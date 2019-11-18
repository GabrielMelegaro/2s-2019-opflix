import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignInScreen from './pages/signin';
import MainScreen from './pages/main';
import SignUpScreen from './pages/signup';
import ProfileScreen from './pages/profile';

const AuthStack = createStackNavigator({
    SignIn: {screen: SignInScreen},
});

const AuthStack1 = createStackNavigator({
    SignUp:{screen : SignUpScreen},
})

const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: 'Main',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor:'#151516',
            inactiveBackgroundColor: '#ffffff',
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
            AuthStack1,
        },
        {
            initialRouteName:'AuthStack',
        },
    ),
);
