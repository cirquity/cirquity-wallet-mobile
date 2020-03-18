// Copyright (C) 2018, Zpalmtree
// Copyright (C) 2020, Deeterd
//
// Please see the included LICENSE file for more information.

import {StyleSheet} from 'react-native';
import {Themes} from './Themes';
import {Globals} from './Globals';

export const Styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 150
    },
    buttonContainer: {
        borderRadius: 30,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 50,
        shadowOpacity: 0.25
    },
    button: {
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: Themes[Globals.preferences.theme].primaryColour,
        padding: 12,
        width: '80%'
    },
    centeredText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    alignBottom: {
        position: 'absolute',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        bottom: 0,
    }
});

export const legacyRNElementsColors = {
    primary: "#335eea",
    primary1: "#4d86f7",
    primary2: "#6296f9",
    secondary: "#506690",
    secondary2: "#00B233",
    secondary3: "#00FF48",
    grey0: "#1b2a4e",
    grey1: "#384c74",
    grey2: "#506690",
    grey3: "#869ab8",
    grey4: "#abbcd5",
    grey5: "#c6d3e6",
    dkGreyBg: "#232323",
    greyOutline: "#f1f4f8",
    searchBg: "#303337",
    disabled: "#abbcd5",
    white: "#ffffff",
    error: "#df4759",
};
