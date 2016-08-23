/**
 * Created by Nat on 8/23/2016 AD.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Actions} from 'react-native-router-flux';


export default class extends Component {
    componentDidMount() {
        setTimeout(() => {
            // Actions.pop();
        }, 500);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello Home :)</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});
