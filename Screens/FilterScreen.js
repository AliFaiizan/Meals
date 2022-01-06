import React, {useState,useEffect,useCallback} from 'react'
import { StyleSheet, Text, View, Switch,Platform } from 'react-native'
import Colors from "../Constants/Colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderBtn from "../Components/HeaderButton";

const FilterSwitch=({isGlutenFree,onChange,label, }) =>{
    return (
        <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch
            value={isGlutenFree}
            onValueChange={onChange}
            trackColor={{true:Colors.primaryColor}}
            thumbColor={Platform.OS==='android'?Colors.primaryColor:''}
        />
        </View>
    )
};

const FilterScreen = ({navigation}) => {

    const [isGlutenFree,setIsGlutenFree]=useState(false);
    const [isLactoseFree,setIsLactoseFree]=useState(false);
    const [isVegan,setIsVegan]=useState(false);
    const [isVegetarian,setIsVegetarian]=useState(false);

    const saveFilters= useCallback(()=>{
        const appliedFilters={
            glutenFree:isGlutenFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            vegetarian:isVegetarian
        }
        console.log(appliedFilters)
    },[isGlutenFree,isLactoseFree,isVegan,isVegetarian]);

    useEffect(()=>{

        navigation.setParams({
            save:saveFilters,
        })
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>

            <FilterSwitch label='Gluten Free' isGlutenFree={isGlutenFree} onChange={newVal=>{
                setIsGlutenFree(newVal)
            }} />
            <FilterSwitch label='Lactose Free' isGlutenFree={isLactoseFree} onChange={newVal=>{
                setIsLactoseFree(newVal)
            }} />
            <FilterSwitch label='Vegan' isGlutenFree={isVegan} onChange={newVal=>{
                setIsVegan(newVal)
            }} />
            <FilterSwitch label='Vegetarian' isGlutenFree={isVegetarian} onChange={newVal=>{
                setIsVegetarian(newVal)
            }} />

        </View>
    )
};

FilterScreen.navigationOptions=navData => {
    return{
        headerTitle:"Filter Meals",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
        headerLeft:()=>{
            return <HeaderButtons HeaderButtonComponent={HeaderBtn} >
                <Item title='Drawer' iconName='ios-menu' onPress={()=>{
                    navData.navigation.toggleDrawer()
                }}/>
            </HeaderButtons>
        },
        headerRight:()=>{
        return <HeaderButtons HeaderButtonComponent={HeaderBtn} >
            <Item title='Save' iconName='ios-save' onPress={
                navData.navigation.getParam('save','save obj not found')
            }
            />
        </HeaderButtons>
    }
    }
};

export default FilterScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center',
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        margin:15,
    }
});
