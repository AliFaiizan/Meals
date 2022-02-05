import React from 'react'
import {CATEGORIES} from '../data/dummyData'
import MealList from "../Components/MealList";

import {useSelector} from "react-redux";
import {Text, View} from "react-native";


const CatagoryMealScreen = (props) => {

    const availableMeals= useSelector(state => state.meals.filteredMeals);

    const cId = props.navigation.getParam("categoryId", "NO-ID");

    const displayMeal= availableMeals.filter( (item  ) => {
        return item.category.indexOf(cId)>=0;
    } );

    if(displayMeal.length===0 || !displayMeal){
        return <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#3a3b3c'}}>
            <Text style={{color:'white',fontWeight:'bold'}}>No Meals Found. Try Changing Filters</Text>
        </View>
    }
    return (
      <MealList data={displayMeal} navigation={props.navigation}/>
    );
};

CatagoryMealScreen.navigationOptions = (navigationData) => {
    const cId = navigationData.navigation.getParam('categoryId', 'no id');
    const selectedCat = CATEGORIES.find((item) => {
        return item.id === cId;
    });

    return {
        headerTitle: selectedCat.title
    }
};
export default CatagoryMealScreen;



