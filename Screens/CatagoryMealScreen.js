import React from 'react'
import {CATEGORIES,MEALS} from '../data/dummyData'
import MealList from "../Components/MealList";


const CatagoryMealScreen = (props) => {

    const cId = props.navigation.getParam("categoryId", "NO-ID");

    const displayMeal= MEALS.filter( (item  ) => {
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



