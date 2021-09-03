import React from 'react';
import {StyleSheet,Text, View,TouchableOpacity,TouchableNativeFeedback,Platform,ImageBackground} from 'react-native';

const MealItem = ({title,onSelectItem,imageUrl,duration,affordability,complexity}) => {
    let SelectedComponent=TouchableOpacity;

    if(Platform.OS==='android'&& Platform.Version>=21){
        SelectedComponent=TouchableNativeFeedback;
    }

    return (
        <View style={styles.mainContainer}>
        <SelectedComponent onPress={onSelectItem}>
            <View style={styles.mealItem}>
                <View style={[styles.mealRow,styles.mealHeader]}>
                    <ImageBackground style={styles.image} source={{uri:imageUrl}} >
                        <View style={styles.titleContainer}>
                            <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={[styles.mealRow,styles.mealDetail]}>
                    <Text style={styles.textDetail} >{`${duration} minutes`}</Text>
                    <Text style={styles.textDetail} >{affordability}</Text>
                    <Text style={styles.textDetail} >{complexity.toUpperCase()}</Text>

                </View>
            </View>
        </SelectedComponent>
        </View>
    )
};

export default MealItem;

const styles = StyleSheet.create({
    mainContainer:{
        padding:5,
    },
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#d3d3d3',
        borderRadius:10,
        marginVertical:10,
        overflow:'hidden'
    },
    mealHeader:{
        height:'85%',
    },
    mealRow:{
        flexDirection:'row',
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical:5,
        paddingHorizontal: 12,
    },
    title:{
        textAlign:'center',
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'white',

    },

    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
    },
    textDetail:{
        fontFamily: 'open-sans',
        fontSize: 16,
    },
    image:{
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end',

    }
});