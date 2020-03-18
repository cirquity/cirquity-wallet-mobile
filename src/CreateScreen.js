// Copyright (C) 2018, Zpalmtree
// Copyright (C) 2020, Deeterd
//
// Please see the included LICENSE file for more information.

import React from 'react';

import {
    View, Text, Button, Image, TouchableOpacity,
} from 'react-native';

import { WalletBackend } from 'turtlecoin-wallet-backend';

import Config from './Config';

import { Styles } from './Styles';
import { Globals } from './Globals';
import { saveToDatabase } from './Database';
import { updateCoinPrice } from './Currency';
import { navigateWithDisabledBack } from './Utilities';
import { BottomButton, SeedComponent } from './SharedComponents';

/**
 * Create or import a wallet
 */
export class WalletOptionScreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: this.props.screenProps.theme.backgroundColour }}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                    <Image
                        source={this.props.screenProps.theme.logo}
                        style={Styles.logo}
                    />
                    <Text style={{
                        fontSize: 20,
                        color: this.props.screenProps.theme.slightlyMoreVisibleColour,
                    }}>
                        {Config.sloganCreateScreen}
                    </Text>
                </View>

                <View style={[Styles.buttonContainer, {bottom: 100, position: 'absolute', alignItems: 'center', justifyContent: 'center', width: '100%'}]}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={Styles.button}
                        onPress={() => this.props.navigation.navigate('Disclaimer', { nextRoute: 'CreateWallet' })}>
                        <Text style={{fontSize: 18, color: '#ffffff'}}>CREATE NEW WALLET</Text>
                    </TouchableOpacity>
                </View>

                <View style={[Styles.buttonContainer, {bottom: 40, position: 'absolute', alignItems: 'center', justifyContent: 'center', width: '100%'}]}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={Styles.button}
                        onPress={() => this.props.navigation.navigate('Disclaimer', { nextRoute: 'ImportWallet' })}>
                        <Text style={{fontSize: 18, color: '#ffffff'}}>RECOVER WALLET</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

/**
 * Create a new wallet
 */
export class CreateWalletScreen extends React.Component {
    static navigationOptions = {
        title: 'Create',
        headerShown: false,
    };

    constructor(props) {
        super(props);

        Globals.wallet = WalletBackend.createWallet(Globals.getDaemon(), Config);

        /* Save wallet in DB */
        saveToDatabase(Globals.wallet);
    };

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: this.props.screenProps.theme.backgroundColour }}>
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 60,
                    marginLeft: 30,
                    marginRight: 30,
                }}>
                    <Text style={{ color: this.props.screenProps.theme.primaryColour, fontSize: 25, marginBottom: 40 }}>
                        Your wallet has been created!
                    </Text>

                    <Text style={{ fontSize: 15, marginBottom: 20, color: this.props.screenProps.theme.slightlyMoreVisibleColour }}>
                        Please save the following backup words somewhere safe.
                    </Text>

                    <Text style={{ fontWeight: 'bold', color: '#ff4081', marginBottom: 20 }}>
                        Without this seed, if your phone gets lost, or your wallet gets corrupted,
                        you cannot restore your wallet, and your funds will be lost forever!
                    </Text>
                </View>

                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-start',
                    marginLeft: 30,
                    marginRight: 30 }}>
                    <SeedComponent
                        seed={Globals.wallet.getMnemonicSeed()[0]}
                        borderColour={'#ff4081'}
                        {...this.props}
                    />
                </View>

                <BottomButton
                    title="Continue"
                    onPress={() => this.props.navigation.navigate('Home')}
                    {...this.props}
                />
            </View>
        );
    }
}
