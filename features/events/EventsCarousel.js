import { View, Text, StyleSheet, Dimensions, Image, Button } from "react-native";
import { baseImageUrl } from "../../shared/baseUrl";

//Note: carousel code utilized comes from "https://blog.logrocket.com/implement-react-native-snap-carousel/"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const EventsCarousel = ({ item, index, navigation }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: baseImageUrl + item.image }}
                style={styles.image}
            />
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.body}>{item.headline}</Text>
            <Text style={{
                textAlign: 'center', justifyContent: 'center', color: "white",
                paddingTop: 15
            }}>{item.date}</Text>
            <View style={{ width: 100, alignSelf: 'center', justifyContent: 'center',
        top: 10 }}>
                <Button
                    title='More Info'
                    onPress={() => navigation.navigate(`${item.name}`, { item })}
                    color='red'
                    
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 8,
        width: ITEM_WIDTH,
        height: 500,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: 300,
        borderRadius: 8
    },
    header: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "white",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default EventsCarousel;