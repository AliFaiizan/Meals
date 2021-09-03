import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback} from 'react-native';

const CategoryItemTile = (props) => {
    let SelectedComponent = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        SelectedComponent = TouchableNativeFeedback;
    }
    return (
        <View style={[styles.gridItem, {backgroundColor: props.color}]}>
            <SelectedComponent
                activeOpacity={0.7}
                style={{flex: 1}}
                onPress={props.onPress}
            >
                <View style={styles.screen}>
                    <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
                </View>
            </SelectedComponent>
        </View>
    )
};


export default CategoryItemTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,
        height: 150,
        borderRadius: 10,
        elevation: 10,
        overflow: 'hidden',

    },
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        margin: 10,
        fontFamily: "open-sans-bold",
        fontSize: 16,
        textAlign: 'right'
    },
});
