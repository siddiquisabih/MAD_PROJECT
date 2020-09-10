import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { Actions } from 'react-native-router-flux';
import RouteKey from './Router/routeKey';
import Global from './Global';


export default class Splash extends Component {


    componentDidMount() {
        setTimeout(() => {
            this.checkLogin()
        }, 3000);

    }
 
 
 
    checkLogin() {
        Global.getData(Global.userStorageKey)
            .then((res) => {
                console.log(res)
                if (res != null) {
                    Actions[RouteKey.DRAWER]()
                }
                else{
                    Actions[RouteKey.LOGIN]()

                }
            })

    }


    render() {
        return (
            <SafeAreaView style={styles.container}>


                <Text style={styles.text}> Consumer Application </Text>
                <View style={styles.bottomView}>

                    <Text style={styles.bottomText}>Instructor Danial Nawaz</Text>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = {
    container: {
        flex: 1,
        alignItem: "center",
        justifyContent: "center",
        backgroundColor: "#2279a4"
    },
    text: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
    },
    bottomView: {
        position: "absolute",
        bottom: 50,
        width: "100%"
    },
    bottomText: {
        color: "black",
        textAlign: "center",
        fontSize: 20
    }

}