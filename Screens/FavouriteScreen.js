import React from 'react'

import Colors from "../Constants/Colors";
import MealList from "../Components/MealList";
import {MEALS} from "../data/dummyData";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderBtn from "../Components/HeaderButton";

const FavouriteScreen = ({navigation}) => {

    const FavMeal= MEALS.filter((item)=>{
        return item.id==='m1'||item.id==='m2'
    });

    return (
       <MealList data={FavMeal} navigation={navigation} fromFav={true}/>
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


