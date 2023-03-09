import { View, Text, StyleSheet } from "react-native";
import { useFonts, BubblegumSans_400Regular } from "@expo-google-fonts/bubblegum-sans";

const GamerTitle = () => {
    let [fontsLoaded] = useFonts({
        BubblegumSans_400Regular,
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text style={{ width: '100%', fontSize: 24, backgroundColor: 'green', textAlign: 'center' }}>Gamer Cafe</Text>
            </View>
        );
    } else {
        return (
            <View>
                <Text style={styles.title}>Gamer Cafe</Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    title: {
        width: '80%',
        backgroundColor: 'tan',
        borderRadius: 50,
        fontSize: 48,
        color: 'green',
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginTop: 15,
        borderWidth: 3, 
        borderColor: 'black',
        textShadow: 2,
        textShadowColor: 'black',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 10,
        fontFamily: 'BubblegumSans_400Regular'
    }
})

export default GamerTitle;
