import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, SafeAreaView, Picker } from 'react-native'
import CustomAlert from '../utils/customAlert'
import Global from './global'
import { ScrollView } from 'react-native-gesture-handler'






class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: 0,
            selectedValue: 0,
            salaryData: []
        }
    }

    componentDidMount() {
        this.getList()
    }



    getList() {
        Global.getData(Global.monthDataKey)
            .then((res) => {
                if (res != null) {
                    this.setState({ salaryData: res })
                }
            })

    }

    async validate() {

        var { salary, selectedValue, } = this.state
        console.log(salary, selectedValue)
        if (salary > 1) {
            const data = await Global.getData(Global.monthDataKey)
            console.log(data, "data")
            if(!data){
                var month = Global.monthName[selectedValue]
                var payload = {
                    month,
                    salary : parseInt(salary)
                }
               Global.saveData(Global.monthDataKey,[payload])
               this.getList()
            }
        }
        else {
            return this.setState({ showModel: true, message: "Income Should be greater than 0" })

        }

    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#2279a4", }}>


                <View style={styles.container}>
                    {/* <TextInput placeholderTextColor="white" placeholder="Select Month" onChangeText={(username) => { this.setState({ username }) }} style={styles.inputBox} /> */}
                    <View style={{}}>
                        <Picker
                            selectedValue={this.state.selectedValue}
                            style={[{ width: 100 }]}
                            mode="dropdown"
                            onValueChange={(itemValue) => { this.setState({ selectedValue: itemValue }) }}>
                            {Global.monthName.map((m, v) => {
                                return (
                                    <Picker.Item label={m.name} key={v} value={m.id} />
                                )
                            })}
                        </Picker>
                    </View>
                    <TextInput placeholderTextColor="white" keyboardType={"number-pad"} placeholder="Enter Amount" onChangeText={(salary) => { this.setState({ salary }) }} style={styles.inputBox} />
                </View>





                <View style={{ flex: 1 }}>

                    {/* <View style={styles.container}>
                        <Text style={styles.headingText}> Password </Text>
                        <TextInput placeholderTextColor="white" placeholder="Enter Password (admin)" onChangeText={(password) => { this.setState({ password }) }} style={styles.inputBox} />
                    </View> */}
                    <View style={styles.buttonContainer}>
                        <Text onPress={this.validate.bind(this)} style={[styles.buttonText]}  >Add Income </Text>
                    </View>



                    <View style={{ marginHorizontal: 20, padding: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Monthly Income </Text>
                    </View>


                    <ScrollView>
                        <View style={styles.monthHead}>
                            <Text style={styles.monthNameHead}>January</Text>
                            <Text style={styles.salaryHead}>4000</Text>
                        </View>


                    </ScrollView>

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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headingText: {
        fontSize: 18,
        paddingVertical: 20
    },
    inputBox: {
        borderWidth: 1,
        paddingVertical: 15,
        borderRadius: 10,
        borderColor: "lightgray",
        width: "45%",
        textAlign: "center"
    },
    button: {
        marginVertical: 25
    },
    buttonContainer: {
        // alignItems :"center",
        marginVertical: 15,
        marginHorizontal: 15,

    },
    buttonText: {
        fontSize: 18,
        alignSelf: "center",
        padding: 20,
        borderRadius: 50
    },
    authText: {
        fontSize: 20,
        color: "white"
    },
    monthHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
    monthNameHead: {
        fontSize: 18,
        fontWeight: "600"
    },
    salaryHead: {
        fontSize: 18,

    },


})



export default Login
