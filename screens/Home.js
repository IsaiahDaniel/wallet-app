import React from 'react';
import {
    View,
    Text
} from 'react-native';
import BalanceInfo from '../components/BalanceInfo';
import { COLORS } from '../constants';
import { MainLayout } from './';

const Home = () => {

    const renderWalletInfoSection = () => {
        return (
            <View>
                <BalanceInfo 
                    title="Your Wallet"
                    displayAmount="45,000"
                    changePct={0.6}
                />
            </View>
        )
    }

    return (
        <MainLayout>
            <View style={{ flex: 1, backgroundColor: COLORS.black }}>
                { renderWalletInfoSection() }        
            </View>
        </MainLayout>
    )
}

export default Home;