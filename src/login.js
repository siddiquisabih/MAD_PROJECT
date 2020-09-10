import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native'
import CustomAlert from '../utils/customAlert'
import Global from './global'






 class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            showModel: false,
            message: "",
            loading: false,
        }
    }
    login() {
        // Actions[RouteKey.DRAWER]()
        
    }

    validate() {
        // Actions[RouteKey.DRAWER]()
        var { username, password,   } = this.state

        if (username.trim() == "" || username.length < 5) {
            return this.setState({ showModel: true, message: "Invalid username" })
        }
        if (password.trim() == "" || password.length < 5) {
            return this.setState({ showModel: true, message: "Invalid password" })
        }
       
       
    if(username.toLowerCase() === "admin" && password.toLowerCase() === "admin"){
        Global.saveData(Global.userStorageKey , true)
        //navigate
    }        
    else{
        return this.setState({ showModel: true, message: "Inavlid username and password" })
    }



    }

     
    render() {
        return (
            <SafeAreaView style={{ alignContent: "center", justifyContent: "center", flex: 1,backgroundColor :"#2279a4",  }}>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.authText}>Authentication</Text>
                </View>
                <View style={{ flex: 2, }}>
                    <View style={styles.container}>
                        <Text style={styles.headingText}> User Name </Text>
                        <TextInput placeholderTextColor="white" placeholder="Enter User Name (admin)" onChangeText={(username)=>{this.setState({username})}} style={styles.inputBox} />
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.headingText}> Password </Text>
                        <TextInput placeholderTextColor="white" placeholder="Enter Password (admin)"   onChangeText={(password)=>{this.setState({password})}} style={styles.inputBox} />
                    </View>
                    <View style={styles.buttonContainer}>
                <Text onPress={this.validate.bind(this)} style={[styles.buttonText]}  >login </Text>
            </View>
                </View>




                    {this.state.showModel && (
                    <CustomAlert
                        close={() => {
                            this.setState({ showModel: false, loading: false });
                        }}
                        buttonHeading={"OK"}
                        msg={this.state.message}
                    />
                )}
            </SafeAreaView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        

    },
    headingText: {
        fontSize: 18,
        paddingVertical: 20
    },
    inputBox: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        borderColor: "lightgray"
    },
    button: {
        marginVertical: 25
    },
    buttonContainer :{
        // alignItems :"center",
        marginVertical:15,
        marginHorizontal:15,
    },
    buttonText:{
        fontSize :18,
        textAlign:"center",
    },
    authText:{
        fontSize :20,
        color:"white"
    }
        

})

 

export default Login
