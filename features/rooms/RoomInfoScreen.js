import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, ScrollView, Modal } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";


const RoomInfoScreen = ({ route }) => {

    //note to self: using formik, can delete most useStates; good luck

    const { item } = route.params;
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [occupants, setOccupants] = useState(1);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    // const dispatch = useDispatch();


    //currently no back-end to send user info to
    const handleSubmit = () => {
        const reservationInfo = {
            firstName,
            lastName,
            email,
            address,
            occupants,
            date
        };
    };

    return (
        <View>
            <ImageBackground
                source={{ uri: baseUrl + 'images/roomsbg.JPEG' }}
                resizeMode="cover"
                style={{ height: '100%' }}
            >
                <ScrollView style={{ marginBottom: 20 }}>
                    <Card
                        containerStyle={styles.container}
                    >
                        <Card.Title
                            style={{ fontSize: 24 }}
                        >{item.name}</Card.Title>
                        <Card.Image
                            source={{ uri: baseUrl + item.image }}
                            style={styles.image}
                        />
                        <Text style={styles.text} >{item.content}</Text>
                        <Text style={styles.text} >{item.price}</Text>
                        <Text style={styles.text} >{item.maxSize} people max</Text>
                    </Card>
                    <Button
                        onPress={() => setShowModal(true)}
                        title='Make a Reservation'
                        containerStyle={{ width: '45%', alignSelf: 'center' }}
                        buttonStyle={{ backgroundColor: 'green' }}
                    />
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={showModal}
                        onRequestClose={() => setShowModal(!showModal)}
                    >
                    <Card>
                            <View>
                                <Input
                                    placeholder="First Name"
                                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                    onChangeText={(text) => setFirstName(text)}
                                    value={firstName}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                                />
                                <Input
                                    placeholder="Last Name"
                                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                    onChangeText={(text) => setLastName(text)}
                                    value={lastName}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                                />
                                <Input
                                    placeholder="Email"
                                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                                />
                            </View>
                    </Card></Modal>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
        marginTop: 10
    },
    container: {
        marginTop: 50,
        width: '98%',
        alignSelf: 'center',
        backgroundColor: 'rgba(132, 140, 207, .85)'
    },
    text: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center'
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 8,
        height: 60
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    },
    formButton: {
        margin: 20,
        marginRight: 40,
        marginLeft: 40
    },

})

export default RoomInfoScreen;