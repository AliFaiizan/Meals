import React from 'react'
import {CATEGORIES} from '../data/dummyData'
import MealList from "../Components/MealList";

import {useSelector} from "react-redux";


const CatagoryMealScreen = (props) => {

    const availableMeals= useSelector(state => state.meals.filteredMeals);

    const cId = props.navigation.getParam("categoryId", "NO-ID");

    const displayMeal= availableMeals.filter( (item  ) => {
        return item.category.indexOf(cId)>=0;
    } );


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



