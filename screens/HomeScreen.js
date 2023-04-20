import { View, Text, StyleSheet, TouchableHighlight, FlatList, ImageBackground } from "react-native"
import { Image } from "react-native-elements";
import GamerTitle from "../components/Header";
import { baseImageUrl } from "../shared/baseUrl";


const data = [
    {
        id: 1,
        text: 'More games than you can possibly count',
        image: baseImageUrl + 'homegame.jpg',
        site: `Games`
    },
    {
        id: 2,
        text: 'A classic dining experience well worth the trip',
        image: baseImageUrl + 'restaurant.jpg',
        site: 'Menu'
    },
    {
        id: 3,
        text: "Events and tournaments hosted every month. You won't want to miss it",
        image: baseImageUrl + 'dnd.jpg',
        site: 'Events'
    }
]

const HomeScreen = ({ navigation }) => {

    return (
        <ImageBackground source={{ uri: baseImageUrl + 'backgrounds/background.jpg' }} resizeMode="cover" style={styles.image}>
            <View>
                <GamerTitle />
                <FlatList
                    data={data}
                    style={{ paddingTop: 40 }}
                    renderItem={({ item }) => (
                        <View
                            style={{ flexDirection: 'row' }}
                            onPress={() => navigation.navigate(`${item.site}`)}
                        >
                            <Image
                                source={{ uri: item.image}}
                                style={{
                                    width: 150,
                                    height: 150,
                                    resizeMode: 'cover'
                                }}
                                onPress={() => navigation.navigate(`${item.site}`)}
                            />
                            <Text
                                onPress={() => navigation.navigate(`${item.site}`)}
                                style={styles.text}>
                                {item.text}
                            </Text>
                        </View>
                    )}
                    contentContainerStyle={{ marginTop: 50 }}
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
    },
    press: {
        opacity: .80
    }
})

export default HomeScreen;