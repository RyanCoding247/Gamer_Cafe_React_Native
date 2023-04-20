import { View, StyleSheet, ImageBackground, Text } from "react-native";
import CarouselCards from "../features/events/CarouselCards";
import { baseImageUrl } from "../shared/baseUrl";

const EventsScreen = ({navigation}) => {
    return (
        <ImageBackground source={{ uri: baseImageUrl + 'backgrounds/eventsbg.jpg' }} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>Upcoming Events</Text>
                <CarouselCards navigation={navigation} />
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    image: {
        height: '100%'
    },
    title: {
        width: '100%',
        height: '12%',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 40,
        color: '#39FF14',
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginTop: 30,
        marginBottom: 20,
        textShadow: 2,
        backgroundColor: 'black',
        textShadowColor: 'green',
        textShadowOffset: {
            width: -2,
            height: 1
        },
        textShadowRadius: 10,
        fontFamily: 'BubblegumSans_400Regular'
    }
});

export default EventsScreen;