import { MEALS } from "../../data/dummyData";

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
};

const mealsReducer = (state=initialState,action) =>{
    return state;

};
export default mealsReducer;