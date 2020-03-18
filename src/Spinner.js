// Copyright (C) 2018, Zpalmtree
// Copyright (C) 2020, Deeterd
//
// Please see the included LICENSE file for more information.

import React from 'react';
import {Image, View} from 'react-native';

export class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={require('../assets/img/logo.png')}
                    style={{resizeMode: 'contain', width: 300}}
                />
            </View>
        );
    }
}
