import { View, Text, StyleSheet, Image, TouchableHighlight, FlatList, ImageBackground } from "react-native"
import { Card, ListItem } from "react-native-elements";
import HomeGame from '../assets/img/homegame.jpg'
import Background from '../assets/img/background.jpg'
import DnD from '../assets/img/dnd.jpg'
import Dining from '../assets/img/restaurant.jpg'
import GamerTitle from "../components/Header";
import { useState } from "react";


const data = [
    {
        id: 1,
        text: 'More games than you can possibly count',
        image: `${HomeGame}`,
        site: `Games`
    },
    {
        id: 2,
        text: 'A classic dining experience well worth the trip',
        image: `${Dining}`,
        site: 'Menu'
    },
    {
        id: 3,
        text: "Events and tournaments hosted every month. You won't want to miss it",
        image: `${DnD}`,
        site: 'Events'
    }
]

const HomeScreen = ({ navigation }) => {
    
    return (
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
            <View>
                <GamerTitle />
                <FlatList
                    data={data}
                    style={{ paddingTop: 40 }}
                    renderItem={({ item }) => (
                        <View 
                        style={{ flexDirection: 'row'}}
                        >
                            <Image
                                source={item.image}
                                style={{
                                    width: 150,
                                    height: 150,
                                    resizeMode: 'contain'
                                }}
                                onPress={() => navigation.navigate(item.site)}
                            />
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    )}
                />

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    },
    text: {
        flex: 1,
        marginBottom: 35, 
        backgroundColor: 'tan', 
        width: 245, 
        height: 150, 
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 24,
        justifyContent: 'center'
    },
    image: {
        height: '100%'
    }
})

export default HomeScreen;