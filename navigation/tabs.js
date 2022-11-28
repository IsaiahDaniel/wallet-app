import React from "react";
import {
    Image,
    TouchableOpacity,
    Text,
    View
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../slices/tabSlice";
import { useState } from "react";


const Tab = createBottomTabNavigator()

const Tabs = () => {
    const dispatch = useDispatch();
    const { visible } = useSelector((state) => state.tab);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let isTrade;
                    let label;

                    if (route.name === "Home") {
                        isTrade = false;
                        label = "Home";
                        iconName = icons.home
                    } else if (route.name === "Portfolio") {
                        isTrade = false;
                        label = "Portfolio";
                        iconName = icons.briefcase
                    } else if (route.name === "Trade") {
                        isTrade = true;
                        label = "Trade";
                        iconName = visible ? icons.close : icons.trade 
                    } else if (route.name === "Market") {
                        isTrade = false;
                        label = "Market";
                        iconName = icons.market
                    } else if (route.name === "Profile") {
                        isTrade = false;
                        label = "Profile";
                        iconName = icons.profile
                    }

                    if (isTrade) {
                        return (
                            <TouchableOpacity onPress={() => dispatch(toggleModal(!visible))}>
                                <View style={{ backgroundColor: COLORS.black, height: 70, width: 70, alignItems: "center", justifyContent: "center", borderRadius: 50, padding: 10 }}>
                                    <Image source={iconName} resizeMode="contain" style={{ width: visible ? 15 : 25, tintColor: COLORS.white, alignSelf: "center", paddingBottom: 20 }} />
                                    <Text style={{ color: COLORS.white }}>{label}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    } else {
                        if(!visible){
                            return (
                                <View>
                                    <Image source={iconName} resizeMode="contain" style={{ width: 25, tintColor: focused ? COLORS.white : COLORS.secondary, alignSelf: "center" }} />
                                    <Text style={{ color: focused ? COLORS.white : COLORS.secondary }}>{label}</Text>
                                </View>
                            )                        
                        }
                    }
                },
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.secondary,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    height: 140,
                    borderTopColor: "transparent",
                    // borderTopStartRadius: 15,
                    // borderTopEndRadius: 15
                },
                headerShown: false,
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Portfolio" component={Portfolio} />
            <Tab.Screen name="Trade" component={Home} />
            <Tab.Screen name="Market" component={Market} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default Tabs;