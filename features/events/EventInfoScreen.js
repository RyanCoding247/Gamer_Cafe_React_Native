import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';
import { useFonts, BubblegumSans_400Regular } from "@expo-google-fonts/bubblegum-sans";




const EventInfoScreen = ({ route }) => {
    const { item } = route.params;
    let [fontsLoaded] = useFonts({
        BubblegumSans_400Regular,
    });


    return (
        <ImageBackground source={{ uri: baseUrl + 'images/eventsbg.jpg' }} resizeMode="cover" style={{ height: '100%' }}>
            <View>
                <Text style={styles.title}
                    >{item.name}</Text>
                <Card
                    containerStyle={{ backgroundColor: 'black', borderColor: 'transparent', borderRadius: 10, marginTop: 50}}
                >
                    <Card.Image
                        style={{ padding: 0, height: 300, width: '100%', borderRadius: 10 }}
                        source={{
                            uri: baseUrl + item.image
                        }}
                    />
                    <Text style={{ marginBottom: 10, marginTop: 10, backgroundColor: 'black', color: 'white', fontSize: 16 }}>
                        {item.summary}
                    </Text>
                    <Text style={{color: 'white', fontSize: 14}}>Event Date:          {item.date}</Text>
                </Card>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    title: {
        width: 'auto',
        height: '12%',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'black',
        fontSize: 40,
        color: '#39FF14',
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
        textShadow: 2,
        padding: 15,
        backgroundColor: 'black',
        textShadowColor: 'green',
        textShadowOffset: {
            width: -2,
            height: 1
        },
        textShadowRadius: 10,
        fontFamily: 'BubblegumSans_400Regular'
    }

})

export default EventInfoScreen;