import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// 把安卓路由动画改为从右向左滑入
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import {name as appName} from '../../app.json';
 
import TabNav from "./TabNav";
 
import Login from "../pages/Login"
import Register from "../pages/Register"
import FirstDetail from "../pages/FirstDetail"
import Detail from "../pages/Detail"

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    Detail: {
        screen: Detail
    },
    TabNav: {
        screen: TabNav,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    FirstDetail: {
        screen: FirstDetail
    },
},{
    // headerMode: 'screen',
    // 把安卓路由动画改为从右向左滑入
    transitionConfig: ()=>({
        /**
        * 1、从右向左：forHorizontal
        * 2、从下向上：forVertical
        * 3、安卓那种的从下向上：forFadeFromBottomAndroid
        * 4、无动画：forInitial
        */
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
})
 
const container = createAppContainer(AppNavigator);
// AppRegistry.registerComponent(appName, () => container);
export default container;