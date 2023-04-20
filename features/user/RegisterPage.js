import { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { baseImageUrl, baseUrl } from '../../shared/baseUrl';
import { userSignup } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

export const RegisterPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const user = useSelector((state) => state.currentUser);

    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(
            userSignup({
                username: username,
                password: password,
                firstname: firstName,
                lastName: lastName,
                email: email,
            })
        );
    };

    return (
        <ImageBackground source={{ uri: baseImageUrl + 'backgrounds/loginbg.jpg' }} resizeMode="cover">
            <View style={styles.container}>
                <View>
                    <Image
                        source={{ uri: baseImageUrl + 'title.png' }}
                        resizeMethod="scale"
                        style={{ width: '60%', height: 50, alignSelf: 'center', }}
                    />
                </View>
                <View style={{marginBottom: -100, marginTop: 80}}>
                    <Input
                        placeholder="Username"
                        leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'green' }}
                        style={{color: 'green'}}
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder="Password"
                        leftIcon={{ type: 'font-awesome', name: 'key', color: 'green' }}
                        style={{color: 'green'}}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder="First Name"
                        leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'green' }}
                        style={{color: 'green'}}
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder="Last Name"
                        leftIcon={{ type: 'font-awesome', name: 'user-o', color: 'green' }}
                        style={{color: 'green'}}
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <Input
                        placeholder="Email"
                        leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: 'green' }}
                        style={{color: 'green'}}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => handleSignup()}
                            title='Register'
                            color='#5637DD'
                            icon={
                                <Icon
                                    name='user-plus'
                                    type='font-awesome'
                                    color='#fff'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{ backgroundColor: '#5637DD' }}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'transparent', height: '100%', width: '100%'
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
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    }
});