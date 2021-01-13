import React from 'react';
import {createAppContainer} from 'react-navigation';
// import { createBottomTabNavigator } from "react-navigation-stack";
import { createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation-tabs";
 
import { View, Text, Button, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import IcoMoonIcon from '../assets/icomoon'
 
import TabHome from '../pages/Tabs/TabHome';
import TabFriend from '../pages/Tabs/TabFriend';
import TabMine from '../pages/Tabs//TabMine';
 
const Tab = createBottomTabNavigator(
    {
        TabHome: {
            screen: TabHome,
            navigationOptions: {
                tabBarLabel: '主页',
                tabBarIcon: ({tintColor, focused}) => (
                    <AntDesign
                    name='home'
                    size={24}
                    style={{color: tintColor}}
                    />
                    // <Ionicons
                    //     name={'ios-home'}
                    //     size={26}
                    //     style={{color: tintColor}}
                    // />
                ),
            }
        },
        TabFriend: {
            screen: TabFriend,
            navigationOptions: {
                tabBarLabel: '统计',
                tabBarIcon: ({focused, tintColor}) => (
                    <AntDesign
                    name='barschart'
                    size={24}
                    style={{color: tintColor}}
                    />
                ),
            }
        },
        TabMine: {
            screen: TabMine,
            navigationOptions: {
                tabBarLabel: '我',
                tabBarIcon: ({focused, tintColor}) => (
                    <AntDesign
                    name='user'
                    size={24}
                    style={{color: tintColor}}
                    />
                ),
            }
        }
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#4BC1D2',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#888888',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            // upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.2,
                paddingTop:0,
                borderTopColor: '#ccc',
                height:45,
                paddingTop:0,
                borderWidth:0
            },
            //每个tab的样式
            tabStyle: {
                borderWidth:0,
                height:43,
            },
            //tab bar的文本样式
            labelStyle: {
                height:11,
                fontSize: 11,
                // margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: {height: 0},
            //是否启用滚动标签。
            // scrollEnabled:true,//false,
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        scrollEndabled:true,
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'initialRoute',
    });
const TabNav = createAppContainer(Tab);
// AppRegistry.registerComponent(appName, () => TabNav);
export default TabNav;