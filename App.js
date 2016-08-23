/**
 * Created by Nat on 8/23/2016 AD.
 */

'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';


import Launch from './components/Launch'
import Home from './components/Home'


const scenes = Actions.create(
    <Scene key="root">
        <Scene key="launch" component={Launch} initial hideNavBar={true} hideTabBar title="Launch"/>
        <Scene key="home" component={Home} hideNavBar={false} title="Home"/>
    </Scene>
);


class myreact3 extends Component {
    render() {
        return ( <Router scenes={scenes}/> );
    }
}

export default myreact3;
