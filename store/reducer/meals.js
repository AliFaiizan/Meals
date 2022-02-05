import { MEALS } from "../../data/dummyData";
import {SET_FILTER, TOGGLE_FAVOURITE} from "../action/meals";

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
};

const mealsReducer = (state=initialState,action) =>{
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex= state.favouriteMeals.findIndex(meal => {
                    return meal.id===action.mealId
            });
            if(existingIndex>=0){
                const updatedFavMeals=[...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex,1);

                return {...state , favouriteMeals:updatedFavMeals}
            }else{

                const meal=state.meals.find(meal=>meal.id===action.mealId);
                return {...state,favouriteMeals: state.favouriteMeals.concat(meal)}
            }
        case SET_FILTER:
            const appliedFilter=action.filter;
            const filterMeals=state.meals.filter((meal)=>{
                if(appliedFilter.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilter.lactoseFree && !meal.isLactoseFree){
                    return false;
                }
                if(appliedFilter.vegetarian && !meal.isVegetarian){
                    return false;
                }
                return !(appliedFilter.vegan && !meal.isVegan);

            });
            return {...state,filteredMeals:filterMeals};
        default:
            return state;
    }


};


export default mealsReducer;