/**
 * Created by Nat on 8/23/2016 AD.
 */

import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from "react-native";
import {Actions} from 'react-native-router-flux';


export default class extends Component {
    componentDidMount() {
        setTimeout(() => {
            // Actions.pop();
        }, 100);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../cmmc1.png")} style={styles.cmmcImage}/>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    cmmcImage: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
});
