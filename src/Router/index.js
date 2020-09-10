import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Scene, Drawer } from "react-native-router-flux"
import Splash from '../Splash'
import RouteKey from "./routeKey"
 


export default class Routes extends Component {



    render() {
       
        return (
            <Router>
                <Scene>
                    <Scene type="reset" component={Splash} key={RouteKey.SPLASH} hideNavBar />
                </Scene>

            </Router>
        )
    }
}
