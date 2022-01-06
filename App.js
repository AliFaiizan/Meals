import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealNavigator from './Navigation/MealNavigator';

import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import mealsReducer from "./store/reducer/meals";

const fetchFonts = () => {

    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

const rootReducer=combineReducers({
    meals:mealsReducer,
});
const store= createStore(rootReducer);



export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
                onError={(err) => {
                    console.log(err)
                }}
            />
        );
    }
    return (<Provider store={store}>
                <MealNavigator/>
            </Provider>)

}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#3a3b3c',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
