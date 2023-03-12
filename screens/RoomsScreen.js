import { View, Text, ImageBackground, ScrollView } from "react-native";
import { baseUrl } from "../shared/baseUrl";
import { useSelector } from "react-redux";
import { Button, Card } from "react-native-elements";


const RoomsScreen = ({ navigation }) => {
    const rooms = useSelector((state) => state.rooms.roomsArray)

    return (
        <View>
            <ImageBackground source={{ uri: baseUrl + 'images/roomsbg.JPEG' }} resizeMode="stretch" style={{ height: "100%" }}>
                <Text>Rooms</Text>
                <ScrollView>
                    {rooms.map((item, idx) => (
                        <Card
                            key={idx}
                            containerStyle={{backgroundColor: 'rgba(132, 140, 207, .85)'}}
                        >
                            <Card.Title style={{color: 'black', fontSize: 24}}>{item.name}</Card.Title>
                            <Card.Image
                                source={{ uri: baseUrl + item.image }}
                            />
                            <Button title='Reserve' containerStyle={{marginTop: 10 }} buttonStyle={{backgroundColor: 'red'}}
                            onPress={() => navigation.navigate(`${item.name}`, { item })}
                            />
                        </Card>
                    ))}
                </ScrollView>
            </ImageBackground>
        </View>
    )
};

export default RoomsScreen;