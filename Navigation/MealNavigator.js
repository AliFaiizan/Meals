import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from "react-navigation";
import {Platform, Text} from 'react-native';

import CatagoriesScreen from '../Screens/CategoriesScreen'
import CatagoryMealScreen from '../Screens/CatagoryMealScreen'
import MealDetailScreen from '../Screens/MealDetailScreen';
import FavouriteScreen from "../Screens/FavouriteScreen";

import Colors from "../Constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import FilterScreen from "../Screens/FilterScreen";

const defaultStackOptions={

    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTitleStyle:{
            fontFamily: 'open-sans'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
};

const MealNavigator = createStackNavigator(
    {
        Catagories: CatagoriesScreen,
        CatagoryMeal: CatagoryMealScreen,
        MealDetail: MealDetailScreen,
    },
    defaultStackOptions
);

const FavouriteStackNavigator= createStackNavigator({
    FavouriteScreen,
    MealDetail:MealDetailScreen

},defaultStackOptions);

const FilterStackNavigator=createStackNavigator({
    Filter:{screen:FilterScreen,navigationOptions:defaultStackOptions},
});



const Screens={
    Meals:{
        screen: MealNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) =>{
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:Colors.primaryColor,
            tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:'open-sans'}}>Meals</Text>:'Meals'
        }
    },
    Favourite:{
        screen: FavouriteStackNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor:Colors.accentColor,
            tabBarLabel:Platform.OS==='android'?<Text style={{fontFamily:'open-sans'}}>Favourite</Text>:'Favourite'
        }
    },
};



const BottomNavigator=Platform.OS==='android'
    ? createMaterialBottomTabNavigator(Screens,{
        activeTintColor:'white',
        shifting:true
    })
    : createBottomTabNavigator(Screens,{
    tabBarOptions:{
        labelStyle:{fontFamily:'open-sans'},
        activeTintColor:'white'
    }
});


const DrawerNavigator= createDrawerNavigator({
    MealsFav:{screen:BottomNavigator,navigationOptions:{
        drawerLabel: "Meals",
        }},
    Filter:{screen: FilterStackNavigator , navigationOptions:{
            drawerLabel:'Filters',
            headerTitle: "Filter Meals"
        }}
},{
    contentOptions:{
        activeTintColor:'white',
        activeBackgroundColor:Colors.primaryColor,
        itemsContainerStyle: {
            marginVertical: 65,
        },
        labelStyle:{
            fontWeight:'normal',
            fontFamily:'open-sans-bold'
        }


    }
});



export default createAppContainer(DrawerNavigator);