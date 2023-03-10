import { View, Text, Button, ImageBackground, FlatList, StyleSheet } from "react-native";
import { MENUITEMS } from "../shared/MENUITEMS";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import MenuDisplay from "../features/menu/RenderMenu";
import MenuBackground from "../assets/img/menu-background.jpg"




const MenuScreen = () => {

    return (
        <ImageBackground source={MenuBackground} resizeMode="cover" style={styles.image}>
            <MenuDisplay />

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    image: {
        height: '100%'
    }
})

export default MenuScreen;