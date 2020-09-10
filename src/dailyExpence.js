import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, TextInput, SafeAreaView, Picker } from 'react-native'
import CustomAlert from './customAlert'
import Global from './Global'
import { ScrollView } from 'react-native-gesture-handler'






class DailyExpence extends Component {
    constructor(props) {
        super(props)
        this.state = {
            salary: 0,
            selectedValue: null,
            salaryData: [],
            // new

            usersMonths: [],
            expense: null,
            selectedMonth: null

        }
    }

    componentDidMount() {
        console.log('call')
        this.getList()
    }



    getList() {
        Global.getData(Global.monthDataKey)
            .then((res) => {
                if (res != null) {
                    this.setState({ usersMonths: res })
                }
            })

    }

       saveExpense() {
        const { expense, usersMonths, selectedMonth } = this.state
        if (expense > 1) {
            console.log(this.state)

            var data = usersMonths
            console.log(usersMonths, selectedMonth)
            for (let i = 0; i < data.length; i++) {

                if (data[i].month.id === selectedMonth) {

                    var detail = []

                    if (data[i].month.hasOwnProperty("detail")) {
                        detail = data[i].month.detail
                        detail.push({ expense })
                        data[i].month.detail = detail
                        console.log('h', data)
                        Global.saveData(Global.monthDataKey, data)
                            .then(() => {
                                this.setState({ showModel: true, message: "Save expense successfully. check history", selectedMonth: undefined, expense: 0 })
                            })

                    }
                    else {
                        data[i].month.detail = [{ expense }]
                        Global.saveData(Global.monthDataKey, data)
                            .then(() => {
                                this.setState({ showModel: true, message: "Save expense successfully. check history", selectedMonth: undefined, expense: 0 })
                            })

                    }

                }

            }



        }
        else {
            this.setState({ showModel: true, message: "Amount should be greater than 0" })
        }
    }

   



    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#2279a4", paddingTop: 20 }}>

                <View style={{ borderWidth: 1, paddingVertical: 20, marginHorizontal: 20, borderRadius: 10, borderColor: "lightgray" }}>

                    <Text style={{ color: "white", textAlign: "center", paddingBottom: 5 }}>Select Month</Text>
                    <View style={styles.container}>
                        <View style={{}}>


                            <ScrollView >
                                {this.state.usersMonths.map((m, v) => {
                                    return (
                                        <Text style={[{ textAlign: "center", paddingBottom: 3 }, m.month.id === this.state.selectedMonth ? { color: "red" } : { color: "white" }]} key={v} onPress={() => { this.setState({ selectedMonth: m.month.id }) }}>{m.month.name}</Text>

                                    )
                                })}

                            </ScrollView>

                        </View>
                    </View>



                </View>




                {
                    this.state.usersMonths[0] == undefined ? (
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "white" }}>If months selection is empty </Text>
                            <Text style={{ color: "white" }}>then go and add month first </Text>
                        </View>

                    )
                        : null
                }

                {this.state.selectedMonth ? (
                    <View style={{ paddingVertical: 20, marginHorizontal: 20, marginTop: 20 }}>

                        <Text style={{ color: "white", textAlign: "center", paddingBottom: 5 }}>Enter Expense</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ width: "70%" }}>
                                <TextInput placeholderTextColor="white" keyboardType={"number-pad"} value={this.state.expense} placeholder="Enter Amount" onChangeText={(expense) => { this.setState({ expense }) }} style={styles.inputBox} />
                            </View>

                            <TouchableOpacity style={{ width: "25%", alignSelf: "center", borderRadius: 100, backgroundColor: "black", }} onPress={this.saveExpense.bind(this)}>
                                <Text style={{ textAlign: "center", padding: 10, color: "white" }}>Save</Text>
                            </TouchableOpacity>
                        </View>



                    </View>
                ) : null}









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
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "white",
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
        // width: "70%",
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



export default DailyExpence
