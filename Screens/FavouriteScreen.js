import React from 'react'
import {View,Text} from 'react-native'
import Colors from "../Constants/Colors";
import MealList from "../Components/MealList";

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderBtn from "../Components/HeaderButton";
import {useSelector} from "react-redux";




const FavouriteScreen = ({navigation}) => {

    const favMeals=useSelector(state => state.meals.favouriteMeals);
    if(favMeals.length===0 || !favMeals ){
        return <View style={{flex:1,backgroundColor:'#202020',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'bold'}}>No Favourite Meals Found.</Text>
        </View>
    }
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


