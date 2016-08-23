/**
 * Created by Nat on 8/23/2016 AD.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import Button from "react-native-button";
import {Scene, Router} from 'react-native-router-flux';
import {Actions} from "react-native-router-flux";

let landingImage = require("../landing.png");

export default class extends Component {
    componentDidMount() {
        setTimeout(() => {
            Actions.home();
        }, 1000);
    }

    render() {
        return (
            <View {...this.props} style={styles.container}>
                <Image source={landingImage} style={styles.backgroundImage}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#519af2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        resizeMode: 'contain',
    },

    button: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: 250,
        height: 200,
        top: 500,
        left: 50,
    }
});
