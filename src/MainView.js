import React from 'react';
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, BackHandler } from "react-native";
import Route from "./config/route"
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { store2 } from './redux/store2'
import { NavigationActions } from 'react-navigation'
 
import Toast from "react-native-root-toast";
 
 
const AppNavigation = createReduxContainer(Route, 'root')
 
const mapStateToProps = state => ({
    state: state.nav
});
  
const NavigationLinkRedux = connect(mapStateToProps)(AppNavigation)
 
const TOAST_CONFIG = {
    duration: 1000, // toast显示时长
    position: -50, // toast位置
    shadow: true, // toast是否出现阴影
    animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
    hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
    delay: 0, // toast显示的延时
    onShow: () => { 
        // toast出现回调（动画开始时）
    },
    onShown: () => {
        // toast出现回调（动画结束时）
    },
    onHide: () => {
        // toast隐藏回调（动画开始时）
    },
    onHidden: () => {
        // toast隐藏回调（动画结束时）
    }
}
 
class MainView extends React.Component {
  
    constructor(props) {
      super(props);
      this.handleBack = this.handleBack.bind(this);
    }
 
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack)
    }
 
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
    }
 
    handleBack = () => {
        // console.log("MainView-this.state",this.state)
        // console.log("MainView-this.props",this.props)
        if (this.props.state.index < 1) {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                // 最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            console.log('再按一下退出程序')
            Toast.show('再按一下退出程序',TOAST_CONFIG);
            return true;
        }
        if (this.props.state.index >= 1) {
            store2.dispatch(NavigationActions.back())
        }
        return true;
    }
  
    render() {
        return (
            <NavigationLinkRedux/>
        );
    }
}
 
export default connect(
    mapStateToProps
)(MainView);