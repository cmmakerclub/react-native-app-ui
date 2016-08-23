/**
 * Created by Nat on 8/23/2016 AD.
 */

import React, {Component} from 'react';
import {View, Image, Text, TextInput} from "react-native";
import {StyleSheet, Platform} from "react-native";
import {Actions} from 'react-native-router-flux';
import Button from 'apsl-react-native-button'


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'Email',
            password: 'Password',
        };
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
                    style={styles.buttonStyle5} textStyle={styles.textStyle}
                    onPress={this._onPress.bind(this)}>Login With Facebook</Button>
                <Text>or</Text>
                <TextInput
                    style={{
                        borderRadius: 5,
                        marginTop: 30,
                        padding: 5,
                        height: 40,
                        alignSelf: 'stretch',
                        textAlign: 'left',
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.email}
                />
                <TextInput
                    style={{
                        alignSelf: 'stretch',
                        textAlign: 'left',
                        borderRadius: 5,
                        marginTop: 30,
                        padding: 5,
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1
                    }}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.password}
                />
                {/*<Button style={styles.buttonStyle6} textStyle={styles.textStyle}>Link</Button>*/}
                <Button style={styles.buttonStyle4} textStyle={styles.textStyle}>Login</Button>
                <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={styles.textBottomStyleLeft}>Register</Text>
                    <Text style={styles.textBottomStyleRight}>Forgot?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1,
        justifyContent: "center",
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
        marginTop: 20,
        backgroundColor: '#2ecc71'
    },
    buttonStyle5: {
        borderColor: '#2980b9',
        backgroundColor: '#3498db'
    },
    buttonStyle6: {
        marginTop: 10,
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
    },
    textBottomStyleLeft: {
        textAlign: 'left', alignSelf: 'center', backgroundColor: 'transparent', flex: 1,
    },
    textBottomStyleRight: {
        textAlign: 'right', alignSelf: 'center', backgroundColor: 'transparent', flex: 1
    }
});
