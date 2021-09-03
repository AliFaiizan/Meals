import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MealItem from "./MealItem";

const MealList = ({data,navigation}) => {

    const onSelectItem=(itemData)=> {
      navigation.navigate('MealDetail',{
            itemData,
        })
    };

    const renderMealItem=  (itemData) => {
        return (<MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            onSelectItem={onSelectItem.bind(this,itemData)}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}

        />)
    };

    return (
        <View style={styles.list}>
            <FlatList data={data} renderItem={renderMealItem} />
        </View>
    )
};

export default MealList;

const styles = StyleSheet.create({
    list: {
        flex:1,
        backgroundColor:'#202020',
        justifyContent: 'center',
        alignItems: 'center'
    }
});