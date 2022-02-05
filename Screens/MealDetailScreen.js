import React, {useCallback, useEffect, useState} from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderBtn from '../Components/HeaderButton';
import {useDispatch, useSelector} from "react-redux";
import {toggleFavourite} from "../store/action/meals";


const ListItem=(props)=>{
    return <View style={styles.listItem}>
        <Text style={styles.text} >
            {props.children}
        </Text>
    </View>
};


const MealDetailScreen = (props) => { //id is passed through navigation and load it in detail screen
    const itemData=props.navigation.getParam('itemData','noData');
    //some return true if a condition is met for at least one item in array
    const isCurrentFavMeal= useSelector(state => state.meals.favouriteMeals.some(meal=>meal.id === itemData.item.id));
    const dispatch=useDispatch(); //will pass it in navigation params

    const toggleFavouriteHandler=useCallback(()=>{
        dispatch(toggleFavourite(itemData.item.id))
    },[dispatch,itemData.item.id]);

    useEffect(()=>{
        props.navigation.setParams({toggleFav:toggleFavouriteHandler})
    },[toggleFavouriteHandler]);
    useEffect(()=>{
        props.navigation.setParams({isFav:isCurrentFavMeal})
    },[isCurrentFavMeal]);
    return (
        <View style={styles.screen}>
        <ScrollView>
           <Image source={{uri:itemData.item.imageUrl}} style={styles.image} />
           <View style={styles.details}>
               <Text style={styles.text}>{itemData.item.duration}min</Text>
               <Text style={styles.text}>{itemData.item.complexity.toUpperCase()}</Text>
               <Text style={styles.text}>{itemData.item.affordability.toUpperCase()}</Text>
           </View>
            <Text style={styles.title}>Ingredients</Text>
            {itemData.item.ingredients.map((ingredient,index)=>{
                return <ListItem key={index}>{ingredient}</ListItem>
            })}

            <Text style={styles.title}>Steps</Text>
            {itemData.item.steps.map((step,index)=>{
                return <ListItem key={index} >{step}</ListItem>
            })}
        </ScrollView>
        </View>
    )
};
MealDetailScreen.navigationOptions= (navigationData)=>{
    const itemData=navigationData.navigation.getParam('itemData','noData');
    const toggleFav= navigationData.navigation.getParam('toggleFav','notoggleFunctionRecieved');
    const isFav= navigationData.navigation.getParam('isFav','false');
    return {

        headerTitle:itemData.item.title,
        headerRight: () => {
            return <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item title='Favourite' iconName={isFav? 'ios-star':'ios-star-outline'} onPress={toggleFav}/>
            </HeaderButtons>
        }
    }
};
export default MealDetailScreen

const styles = StyleSheet.create({
    screen:{
      backgroundColor:'#202020'
    },
    details:{
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around',
    },
    image:{
        width:'100%',
        height:200,
    },
    text:{
        fontFamily:'open-sans',
        color:'white'
    },
    title:{
        fontFamily: 'open-sans-bold',
        textAlign:'center',
        color:'orange'
    },

    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10,
    }
});
