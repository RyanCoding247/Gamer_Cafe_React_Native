import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Avatar, Button, ListItem } from "react-native-elements";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useFonts, BubblegumSans_400Regular } from "@expo-google-fonts/bubblegum-sans";
import { baseUrl } from "../../shared/baseUrl";

const MenuDisplay = () => {

    const [menuItems, setMenuItems] = useState(false);
    const menu = useSelector((state) => state.menu)
    const currentItem = menu.menuArray.filter(x => x.type === `${menuItems}`)


    const MenuButtons = () => {


        return (
            <View>
                <Text style={styles.title}>Menu Selection</Text>
                <View style={{ borderWidth: 2, borderColor: 'white', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Button
                            title='Drinks'
                            onPress={() => {
                                if (menuItems !== 'drink') {
                                    setMenuItems('drink')
                                } else {
                                    setMenuItems(false)
                                }
                            }
                            }
                            containerStyle={styles.button}
                            buttonStyle={{
                                backgroundColor: 'red'
                            }}
                        />
                        <Button
                            title='Classics'
                            onPress={() => {
                                if (menuItems !== 'classic') {
                                    setMenuItems('classic')
                                } else {
                                    setMenuItems(false)
                                }
                            }
                            }
                            containerStyle={styles.button}
                            buttonStyle={{
                                backgroundColor: 'red'
                            }}
                        />
                        <Button
                            title='TexMex'
                            onPress={() => {
                                if (menuItems !== 'texmex') {
                                    setMenuItems('texmex')
                                } else {
                                    setMenuItems(false)
                                }
                            }
                            }
                            containerStyle={styles.button}
                            buttonStyle={{
                                backgroundColor: 'red'
                            }}
                        />
                        <Button
                            title='Pizza'
                            onPress={() => {
                                if (menuItems !== 'pizza') {
                                    setMenuItems('pizza')
                                } else {
                                    setMenuItems(false)
                                }
                            }
                            }
                            containerStyle={styles.button}
                            buttonStyle={{
                                backgroundColor: 'red',
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Button
                            title='Sides'
                            onPress={() => {
                                if (menuItems !== 'side') {
                                    setMenuItems('side')
                                } else {
                                    setMenuItems(false)
                                }
                            }
                            }
                            containerStyle={styles.button}
                            buttonStyle={{
                                backgroundColor: 'red',
                            }}
                        />
                        <Button
                            title='Salads'
                            onPress={() => {
                                if (menuItems !== 'salad') {
                                    setMenuItems('salad')
                                } else {
                                    setMenuItems(false)
                                }
                            }
                            }
                            containerStyle={styles.button}
                            buttonStyle={{
                                backgroundColor: 'red',
                            }}
                        />
                        <Button
                            title='Desserts'
                            onPress={() => {
                                if (menuItems !== 'dessert') {
                                    setMenuItems('dessert')
                                } else {
                                    setMenuItems(false)
                                }
                            }
                            }
                            containerStyle={styles.button}
                            buttonStyle={{
                                backgroundColor: 'red',
                            }}
                        />
                    </View>
                </View>
            </View>
        )

    }

    if (!menuItems) {
        return (
            <MenuButtons />
        )
    }
    if (menuItems) {
        return (
            <View style={{ height: '100%' }}>
                <MenuButtons />
                <ScrollView
                    style={{ marginBottom: 39, marginTop: 15 }}
                >
                    {currentItem.map(
                        (item, idx) => (
                            <ListItem
                                key={idx}
                                containerStyle={{ backgroundColor: 'tan', marginTop: 10, borderWidth: 3, borderColor: 'black' }}
                                onPress={() => {
                                    if (item.ingredients !== "") {
                                        Alert.alert(
                                            `${item.name}`,
                                            `Ingredients: \n${item.ingredients}`,
                                            [
                                                {text: 'Food Allergies?', onPress: () => Alert.alert(
                                                    'Dietary Information:',
                                                    `${item.glutenFree}\n${item.dairyFree}\n${item.soyFree}`,
                                                    [{text: 'Okay', style: 'cancel'}]
                                                    )},
                                                {text: 'Close', style: 'cancel'}
                                            ]
                                        );
                                    };
                                }}

                            >
                                <Avatar
                                    source={{ uri: baseUrl + item.image }} size={50}
                                />
                                <ListItem.Content style={styles.itemContent}>
                                    <ListItem.Title style={styles.itemName}>{item.name}</ListItem.Title>
                                    <Text style={styles.itemPrice}>{item.price}</Text>
                                </ListItem.Content>
                            </ListItem>
                        )
                    )}
                </ScrollView>
            </View>
        )
    } else if (menuItems === 'food') {
        return (
            <View>
                <MenuButtons />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 85,
        color: 'red',
        marginBottom: 10,
        marginTop: 10
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 24,
        color: 'red',
        fontFamily: 'BubblegumSans_400Regular'
    },
    itemName: {
        left: 8,
        position: 'absolute'
    },
    itemPrice: {
        left: 250,
        position: 'absolute'
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default MenuDisplay;