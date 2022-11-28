import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, icons, SIZES } from '../constants';

export default function BalanceInfo({ title, displayAmount, changePct }) {
    return (
        <View style={{ paddingTop: 45, backgroundColor: COLORS.lightGray2, paddingLeft: 20, paddingBottom: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
            <Text style={{ color: COLORS.lightGray, fontSize: SIZES.h2, marginBottom: 10, fontWeight: "bold" }}>{title}</Text>

            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                <Text style={{ color: COLORS.lightGray, fontWeight: "bold", fontSize: SIZES.h3 }}>
                    $
                </Text>
                <Text style={{ color: COLORS.white, fontSize: SIZES.h2, fontWeight: "bold" }}>{" "}{displayAmount}{""}</Text>
                <Text style={{ fontSize: SIZES.h3, marginLeft: 10, color: COLORS.lightGray, fontWeight:"bold" }}>USD</Text>
            </View>


            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={icons.upArrow} resizeMode="contain" style={{ height: 15, width: 15, tintColor: changePct > 0 ? "green" : "red", transform: changePct > 0 ? [{ rotate: "0deg" }] : [{ rotate: "180deg" }] }} />
                    <Text style={{ color: changePct == 0 ? COLORS.lightGray3 : changePct > 0 ? "green" : "red", fontWeight: "bold" }}>
                        {changePct.toFixed(2)}%
                    </Text>
                    <Text style={{ color: COLORS.lightGray, fontWeight: "bold" }}>{" "} 7d Change</Text>
                </View>
                <Text>

                </Text>
            </View>

        </View>
    )
}