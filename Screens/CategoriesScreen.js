import React from "react";
import {
    StyleSheet,
    FlatList,
    View
} from "react-native";

import CategoryItemTile from "../Components/CategoryItemTile";
import {CATEGORIES} from "../data/dummyData";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderBtn from "../Components/HeaderButton";


const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {

        return (
            <CategoryItemTile title={itemData.item.title} color={itemData.item.color} onPress={() => {
                props.navigation.navigate('CatagoryMeal', {
                    categoryId: itemData.item.id
                });

            }}/>
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
        </View>

    );
};

CategoriesScreen.navigationOptions=(navigationData)=>{

   return {
       headerTitle:'Meal Categories',
       headerLeft:()=>{
           return <HeaderButtons HeaderButtonComponent={HeaderBtn} >
               <Item title='Drawer' iconName='ios-menu' onPress={()=>{
                    navigationData.navigation.toggleDrawer()
               }}/>
           </HeaderButtons>
       }
   }
};


export default CategoriesScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:'#202020',
    },

});
