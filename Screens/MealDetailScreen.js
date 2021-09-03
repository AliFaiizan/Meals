import React, {useState} from 'react'
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderBtn from '../Components/HeaderButton';
import Colors from "../Constants/Colors";


const ListItem=(props)=>{
    return <View style={styles.listItem}>
        <Text style={styles.text} >
            {props.children}
        </Text>
    </View>
};


const MealDetailScreen = (props) => {
    const itemData=props.navigation.getParam('itemData','noData');



    return (
        <ScrollView>
           <Image source={{uri:itemData.item.imageUrl}} style={styles.image} />
           <View style={styles.details}>
               <Text style={styles.text}>{itemData.item.duration}min</Text>
               <Text style={styles.text}>{itemData.item.complexity.toUpperCase()}</Text>
               <Text style={styles.text}>{itemData.item.affordability.toUpperCase()}</Text>
           </View>
            <Text style={styles.title}>Ingredients</Text>
            {itemData.item.ingredients.map(ingredient=>{
                return <ListItem >{ingredient}</ListItem>
            })}

            <Text style={styles.title}>Steps</Text>
            {itemData.item.steps.map(step=>{
                return <ListItem >{step}</ListItem>
            })}
        </ScrollView>
    )
};
MealDetailScreen.navigationOptions= (navigationData)=>{
    const itemData=navigationData.navigation.getParam('itemData','noData');


    return {

        headerTitle:itemData.item.title,
        headerRight: () => {
            return <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item title='Favourite' iconName='ios-star' onPress={()=>{
                    console.log('mark as favourite');

                }}/>
            </HeaderButtons>
        }
    }
};
export default MealDetailScreen

const styles = StyleSheet.create({
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
    },
    title:{
        fontFamily: 'open-sans-bold',
        textAlign:'center',
    },

    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10,
    }
});
