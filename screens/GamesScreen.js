import { useState } from 'react';
import { StyleSheet, View, ImageBackground, Button, Text, ScrollView } from 'react-native';
// import { Image } from 'react-native-elements';
import { baseImageUrl } from '../shared/baseUrl';
import imageThing from '../assets/img/injustice.jpg'
import { Card, ListItem, Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';


const GamesScreen = () => {

    const [page, setPage] = useState(1);
    const [gameImage, setGameImage] = useState({uri: baseImageUrl + 'gamerlogo.jpeg'});
    const [gameName, setGameName] = useState("Pick A Game Below")

    const games = useSelector((state) => state.games.gamesArray);
    const page1 = games.filter(e => e.page === '1');
    const page2 = games.filter(e => e.page === '2');
    const page3 = games.filter(e => e.page === '3');

    const gamesPage = page === '2' ? page2 : page === '3' ? page3 : page1;


    return (
        <View>
            <ImageBackground source={{ uri: baseImageUrl + 'backgrounds/matrixbg.jpeg' }} resizeMode="stretch" style={styles.image}>
                <Text style={styles.title}>Games</Text>
                <Text style={{color: 'red', fontSize: 30, marginBottom: -25, paddingTop: 10, textAlign: 'center', backgroundColor: 'black', width: '80%', alignSelf: 'center', borderRadius: 10 }}>{gameName}</Text>
                <Card
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, alignSelf: 'center' }}
                    wrapperStyle={{ backgroundColor: 'transparent' }}
                >
                    <Card.Image
                        source={ gameImage }
                        style={{ borderWidth: 2, borderColor: 'green', width: 250, height: 250 }} 
                    />
                </Card>
                <View style={[styles.container, { marginBottom: 10 }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                        <Button title='Page 1' color="red" onPress={() => setPage('1')} />
                        <Button title='Page 2' color="red" onPress={() => setPage('2')} />
                        <Button title='Page 2' color="red" onPress={() => setPage('3')} />
                    </View>
                    <View style={{ height: '80%' }}>
                        <Text style={{ color: 'red', textAlign: 'center', fontSize: 24, paddingBottom: 5, backgroundColor: 'black', width: '80%', alignSelf: 'center', borderRadius: 10 }}>List of Games Page {page}</Text>
                        <ScrollView
                            style={{
                                borderWidth: 1, borderColor: 'rgba(57, 255, 20, 0.5)',
                                borderRadius: 5
                            }}
                        >
                            {gamesPage.map(
                                (item, idx) => (
                                    <ListItem
                                        key={idx}
                                        onPress={() => {
                                            setGameImage({ uri:baseImageUrl + item.image });
                                            setGameName(item.name);
                                        }}
                                        containerStyle={{ borderRadius: 2, borderBottomWidth: 2, backgroundColor: 'transparent' }}
                                    >
                                        <Avatar source={{ uri: baseImageUrl + `${item.image}` }} size={50} containerStyle={{borderWidth: 1, borderColor: 'rgba(57, 255, 20, 0.5)'}} />
                                        <ListItem.Content>
                                            <Text style={{ color: 'red', alignSelf: 'center', backgroundColor: 'black', width: '80%', textAlign: 'center', borderRadius: 10 }}>{item.name}</Text>
                                        </ListItem.Content>
                                    </ListItem>
                                ))}
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        position: 'relative'
    },
    head: {
        height: 44,
        backgroundColor: 'darkblue'
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red'
    },
    text: {
        margin: 6,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        height: '100%'
    },
    title: {
        width: '40%',
        height: '8%',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'rgba(57, 255, 20, 0.5)',
        fontSize: 40,
        color: '#39FF14',
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginTop: 20,
        textShadow: 2,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        textShadowColor: 'green',
        textShadowOffset: {
            width: -2,
            height: 1
        },
        textShadowRadius: 10,
        fontFamily: 'BubblegumSans_400Regular'
    }

});

export default GamesScreen;