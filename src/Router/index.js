import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Scene, Drawer } from "react-native-router-flux"
import Splash from '../Splash'
import RouteKey from "./routeKey"
import Login from "../login"
import IncomeAdd from "../incomeAdd"
import DailyExpence from "../dailyExpence"
import CustomDrawerContent from './drawerContent'
import History from '../history'


export default class Routes extends Component {



    render() {

        return (
            <Router>
                <Scene>
                    <Scene type="reset" component={Splash} key={RouteKey.SPLASH} hideNavBar />
                    <Scene type="reset" component={Login} key={RouteKey.LOGIN} hideNavBar />

                    <Drawer key={RouteKey.DRAWER} type="reset" contentComponent={CustomDrawerContent} hideNavBar title="Consumer Applicatin" drawerWidth={250}>
                        <Scene>
                            <Scene component={DailyExpence} key={RouteKey.DAILY_EXPENCE} initial={true} />
                            <Scene component={IncomeAdd} key={RouteKey.INCOME_ADD} />
                            <Scene component={History} key={RouteKey.HISTORY} />

                        </Scene>
                    </Drawer>
                </Scene>

            </Router>
        )
    }
}
