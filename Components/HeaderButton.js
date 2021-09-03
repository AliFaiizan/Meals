import React from 'react';
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from '@expo/vector-icons';
import Colors from "../Constants/Colors";
import {Platform} from 'react-native';

const HeaderBtn = (props) => {

    return (
        <HeaderButton
                      IconComponent={Ionicons}
                      iconSize={20}
                      {...props}
                      color={Platform.OS==='android'?'white':Colors.primaryColor}
        />
    )
};

export default HeaderBtn;

