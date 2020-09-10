import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'


export default class Splash extends Component {


    // componentDidMount() {
    //     setTimeout(() => {
    //         Actions[RouteKey.LOGIN]()
    //         // Actions[RouteKey.REGISTER]()
    //         console.log(this.props)
    //     }, 3000);

    // }


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