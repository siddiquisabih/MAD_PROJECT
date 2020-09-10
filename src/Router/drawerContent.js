import React, { Component } from 'react';
import { View, AsyncStorage, StyleSheet, Text, TouchableOpacity, Share, I18nManager, NativeModules, Platform } from "react-native"
import RoutesKey from './routeKey';
import Global from "../Global"
import { Actions } from 'react-native-router-flux';
import RouteKey from './routeKey';


class CustomDrawerContent extends Component {


    constructor() {
        super()
        this.state = {
        }

    }

    logout() {

        AsyncStorage.removeItem(Global.userStorageKey)
            .then(() => {
                Actions[RouteKey.SPLASH]()
            })


    }

    render() {

        return (

            <View>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => Actions[RouteKey.DAILY_EXPENCE]()}>
                    <Text style={styles.buttonText}>DAILY EXPENCE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => Actions[RouteKey.INCOME_ADD]()}>
                    <Text style={styles.buttonText}>NEW INCOME</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => Actions[RouteKey.HISTORY]()}>
                    <Text style={styles.buttonText}>HISTORY</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonStyle} onPress={this.logout.bind(this)}>
                    <Text style={styles.buttonText}>LOGOUT</Text>
                </TouchableOpacity>

            </View>
        )


    }
}
export default CustomDrawerContent

const styles = StyleSheet.create(
    {
        buttonStyle: {
            marginBottom: 15,
            width: '90%',
            marginLeft: '5%',
            marginTop: "10%",
            backgroundColor: "#2279a4",
            padding: 10,
            borderRadius: 100
        },
        buttonText: {
            textAlign: 'center',
            width: '100%',
            color: "white"
        }

    });