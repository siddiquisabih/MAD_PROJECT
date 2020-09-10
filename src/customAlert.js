import React, { Component } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";


export default class CustomAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgw: true,
            Message: true
        };
    }

    bgwhite = () => {
        return (
            <TouchableOpacity
                onPress={this.props.close}
                style={{
                    backgroundColor: '#f6b251',
                    opacity: 0.9,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            ></TouchableOpacity>
        );
    };

    Message = () => {
        return (

            <View
                style={{
                    padding: 30,
                    width: "100%",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}
            >
                <View
                    elevation={5}
                    style={{
                        width: "100%"
                    }}
                >
                    <View
                        style={{
                            padding: 10,

                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,

                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontSize: 15, padding: 10, alignSelf: "center", textAlign: "center", color: "black" }}>{this.props.msg}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={this.props.close}
                        style={{
                            padding: 10,
                            // borderRadius: 5,
                            borderTopColor: "gray",
                            borderTopWidth: 1,
                            backgroundColor: "#f6b251",
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <Text style={{ color: "gray", fontSize: 18 }}>
                            {this.props.buttonHeading}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
       
        return (
            <Modal animationType="fade"
                transparent={true}
                visible={this.state.showModel}
                onRequestClose={() => {
                    console.log()
                }} >
                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    justifyContent: "center",
                    alignItems: "center",
                }} >
                    <View style={{ backgroundColor: "#fff", height: 140, width: "80%", zIndex: 10, borderRadius: 20 }} >
                        <View style={{  alignItems: "center", justifyContent: "center",padding:15 }} >
                            <Text style={{ textAlign: "center", fontWeight: "bold", color: "gray" }} >{this.props.msg} </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                            <TouchableOpacity onPress={this.props.close} style={{
                                height: 35, width: "40%", backgroundColor: "#f6b251", justifyContent: "center", alignItems: "center", borderRadius: 5
                            }}>
                                <Text style={{ color: "#fff", fontSize: 15 }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}