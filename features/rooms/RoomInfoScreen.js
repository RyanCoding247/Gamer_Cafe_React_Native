import { ImageBackground } from "react-native";
import { Text, View, TextInput, StyleSheet, ScrollView, Modal } from "react-native";
import { Button, Card, Input, ListItem } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { validateRoomForm } from "./roomsValidation";
import DateTimePicker from '@react-native-community/datetimepicker';
// import SelectDropdown from 'react-native-select-dropdown'

const RoomInfoScreen = ({ route }) => {

    //note to self: using formik, can delete most useStates; good luck

    const { item } = route.params;
    const [showModal, setShowModal] = useState(false);
    const [mydate, setMyDate] = useState(new Date());
    const [startTime, setStartTime] = useState('10 AM');
    const [endTime, setEndTime] = useState('11');
    const [showCalendar, setShowCalendar] = useState(false);
    const [people, setPeople] = useState(1)
    // const dispatch = useDispatch();
    const formRef = useRef();


    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setShowCalendar(Platform.OS === 'ios');
        setMyDate(currentDate);
        setMyTime(currentDate);
        formRef.current.values.date = mydate;
    }

    const startTimes = [{ time: "10 AM" }, { time: "11 AM" }, { time: "12 PM" }, { time: "1 PM" }, { time: "2 PM" }, { time: "3 PM" }, { time: "4 PM" }, { time: "5 PM" }, { time: "6 PM" }, { time: "7 PM" }, { time: "8 PM" }, { time: "9 PM" }, { time: "10 PM" },]

    const endTimes = [{ time: "11 AM" }, { time: "12 PM" }, { time: "1 PM" }, { time: "2 PM" }, { time: "3 PM" }, { time: "4 PM" }, { time: "5 PM" }, { time: "6 PM" }, { time: "7 PM" }, { time: "8 PM" }, { time: "9 PM" }, { time: "10 PM" }, { time: "11 PM" }, { time: "12 AM" }]

    //currently no back-end to send user info to

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
                        <Formik
                            initialValues={{
                                firstName: '', lastName: '',
                                email: '', occupants: ''
                            }}
                            onSubmit={values => {
                                console.log(values);
                                setShowModal(!showModal)
                            }}
                            validate={validateRoomForm}
                            innerRef={formRef}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <View>
                                    <Input
                                        placeholder="First Name"
                                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                        onChangeText={handleChange('firstName')}
                                        value={values.firstName}
                                        containerStyle={styles.formInput}
                                        leftIconContainerStyle={styles.formIcon}
                                        error={errors.firstName}
                                        onBlur={handleBlur('firstName')}
                                    />
                                    {(touched.firstName && errors.firstName) ?
                                        (
                                            <Text style={styles.error}>{errors.firstName}</Text>
                                        ) : null
                                    }
                                    <Input
                                        placeholder="Last Name"
                                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                        onChangeText={handleChange('lastName')}
                                        value={values.lastName}
                                        containerStyle={styles.formInput}
                                        leftIconContainerStyle={styles.formIcon}
                                    />
                                    {(touched.lastName && errors.lastName) ?
                                        (
                                            <Text style={styles.error}>{errors.lastName}</Text>
                                        ) : null
                                    }
                                    <Input
                                        placeholder="Email"
                                        leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        containerStyle={styles.formInput}
                                        leftIconContainerStyle={styles.formIcon}
                                    />
                                    {(touched.email && errors.email) ?
                                        (
                                            <Text style={styles.error}>{errors.email}</Text>
                                        ) : null
                                    }
                                    <Input
                                        placeholder="# of Occupants"
                                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                                        onChangeText={handleChange('occupants')}
                                        value={values.occupants}
                                        containerStyle={styles.formInput}
                                        leftIconContainerStyle={styles.formIcon}
                                    />
                                    {(touched.occupants && errors.occupants) ?
                                        (
                                            <Text style={styles.error}>{errors.occupants}</Text>
                                        ) : null
                                    }
                                    <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 20 }}>
                                        <Text style={{ fontSize: 20 }}>Date:</Text>
                                        <Button
                                            onPress={() => setShowCalendar(!showCalendar)}
                                            title='Select a Date'
                                            buttonStyle={{ backgroundColor: '#5637DD', marginLeft: 10 }}
                                            accessibilityLabel="Tap me to select a reservation date"
                                        />
                                        <Input
                                            placeholder={mydate.toLocaleDateString('en-US')}
                                            disabledInputStyle={{ color: 'black', opacity: 1 }}
                                            leftIcon={{ type: 'font-awesome', name: 'calendar' }}
                                            value={values.mydate}
                                            disabled
                                            containerStyle={{
                                                width: '40%', height: 60
                                            }}
                                            leftIconContainerStyle={styles.formIcon}
                                        />
                                        {showCalendar && (
                                            <DateTimePicker
                                                style={styles.formItem}
                                                value={mydate}
                                                mode='date'
                                                display='default'
                                                onChange={onDateChange}
                                            />
                                        )}
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <ScrollView style={{ marginTop: 10, marginLeft: 50, height: 250 }}>
                                            <Text style={{ fontSize: 18 }}>Start Time:{startTime}</Text>
                                            {startTimes.map((item, idx) => (
                                                <Button
                                                    key={idx}
                                                    title={item.time}
                                                    onPress={() => {
                                                        formRef.current.values.start = item.time;
                                                        setStartTime(item.time)
                                                    }}
                                                    buttonStyle={{ width: 100, borderRadius: 10 }}
                                                    containerStyle={{ margin: 8 }}
                                                />
                                            ))}
                                        </ScrollView>
                                        <ScrollView style={{ marginTop: 10, marginLeft: 50, height: 250 }}>
                                            <Text style={{ fontSize: 18 }}>End Time:{endTime}</Text>
                                            {endTimes.map((item, idx) => (
                                                <Button
                                                    key={idx}
                                                    title={item.time}
                                                    onPress={() => {
                                                        formRef.current.values.end = item.time;
                                                        setEndTime(item.time)
                                                    }}
                                                    buttonStyle={{ width: 100, borderRadius: 10 }}
                                                    containerStyle={{ margin: 8 }}
                                                />
                                            ))}
                                        </ScrollView>
                                    </View>
                                    <View style={styles.buttons}>
                                        <Button
                                            onPress={handleSubmit} title="Submit"
                                            buttonStyle={{ backgroundColor: 'green' }}
                                        />
                                        <Button
                                            onPress={() => {
                                                setShowModal(!showModal);
                                            }}
                                            buttonStyle={{ backgroundColor: 'red' }}
                                            title='Cancel'
                                        />
                                    </View>
                                </View>
                            )}
                        </Formik>
                        <View style={{ margin: 10 }}>

                        </View>
                    </Modal>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    error: {
        color: 'red',
        textAlign: 'center'
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 8,
        height: 60,
        marginTop: 20
    }
})

export default RoomInfoScreen;