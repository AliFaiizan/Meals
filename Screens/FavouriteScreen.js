import React from 'react'

import Colors from "../Constants/Colors";
import MealList from "../Components/MealList";

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderBtn from "../Components/HeaderButton";
import {useSelector} from "react-redux";



const FavouriteScreen = ({navigation}) => {

    const favMeals=useSelector(state => state.meals.favouriteMeals);


    return (
       <MealList data={favMeals} navigation={navigation} fromFav={true}/>
    )
};

FavouriteScreen.navigationOptions=navigationData => {
    return {
        headerTitle:"My Favourite",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.accentColor : "",
        },
        headerTintColor:
            Platform.OS === "android" ? "white" : Colors.accentColor,
        headerLeft:()=>{
            return <HeaderButtons HeaderButtonComponent={HeaderBtn} >
                <Item title='Drawer' iconName='ios-menu' onPress={()=>{
                    navigationData.navigation.toggleDrawer()
                }}/>
            </HeaderButtons>
        }
    }
};


export default FavouriteScreen


