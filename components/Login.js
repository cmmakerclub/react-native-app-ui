/**
 * Created by Nat on 8/23/2016 AD.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";


export default class extends Component {
    componentDidMount() {
        setTimeout(() => {
            // Actions.pop();
        }, 100);
    }

    render() {
        return (
            <View {...this.props} style={styles.container}>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
