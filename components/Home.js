/**
 * Created by Nat on 8/23/2016 AD.
 */

import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Platform} from "react-native";
import {Actions} from 'react-native-router-flux';
import Button from 'apsl-react-native-button'


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => {
        }, 100);
    }

    _onPress() {
        console.log("pressed!");
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../cmmc1.png")} style={styles.cmmcImage}/>
                <Button
                    style={styles.buttonStyle4} textStyle={styles.textStyle}
                    onPress={this._onPress.bind(this)}> Hello
                </Button>
                <Button style={styles.buttonStyle5} textStyle={styles.textStyle}>Link</Button>
                <Button style={styles.buttonStyle6} textStyle={styles.textStyle}>Link</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
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
    containerInside: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    textStyle: {
        color: 'white',
        fontFamily: 'Avenir',
    },
    buttonStylePressing: {
        borderColor: 'red',
        backgroundColor: 'red'
    },
    buttonStyle4: {
        borderColor: '#27ae60',
        backgroundColor: '#2ecc71'
    },
    buttonStyle5: {
        borderColor: '#2980b9',
        backgroundColor: '#3498db'
    },
    buttonStyle6: {
        borderColor: '#8e44ad',
        backgroundColor: '#9b59b6'
    },
    buttonStyle7: {
        borderColor: '#8e44ad',
        backgroundColor: 'white',
        borderRadius: 0,
        borderWidth: 3,
    },
    buttonStyle8: {
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
    },
    textStyle8: {
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: '#333',
    },
    customViewStyle: {
        width: 120,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    }
});
