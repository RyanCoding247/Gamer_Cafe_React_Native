import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { CheckBox, Input, Button, Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { baseImageUrl } from "../../shared/baseUrl";
import { userLogin, userLogout, userSignup } from "./userSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { ImageBackground } from "react-native";


export const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.username);

    const handleLogin = () => {
        dispatch(
            userLogin({
                username: username,
                password: password,
            })
        );
    };

    const handleLogout = async () => {
        const token = await AsyncStorage.getItem('token').then((res) => {
            return res;
        })
        console.log(token);
        dispatch(
            userLogout()
        )
    }

    return (
        <ImageBackground source={{ uri: baseImageUrl + 'backgrounds/loginbg.jpg' }} resizeMode="cover">
            <View style={styles.container}>
                <View>
                    <Image
                        source={{ uri: baseImageUrl + 'title.png' }}
                        resizeMethod="scale"
                        style={{ width: '60%', height: 50, alignSelf: 'center',  }}
                    />
                </View>
                <View style={{marginBottom: -150, marginTop: 180}}>
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
                    <View style={[styles.formButton, {marginTop: 40}]}>
                        <Button
                            onPress={user ? 
                                () => handleLogout() :
                                () => handleLogin()
                            }
                            title={user ? 'Logout' : 'Login'}
                            color={user ? 'red' : 'green'}
                            icon={
                                <Icon
                                    name={user ? 'sign-in' : 'user'}
                                    type='font-awesome'
                                    color='#fff'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{ backgroundColor: user ? 'red' : 'green' }}
                        />
                    </View>
                    {/* {
                        return (
                            <View style={styles.formButton}>
                                <Button
                                    onPress={() => handleLogout()}
                                    title='Logout'
                                    color='red'
                                    icon={
                                        <Icon
                                            name='right-from-bracket'
                                            type='font-awesome'
                                            color='#fff'
                                            iconStyle={{ marginRight: 10 }}
                                        />
                                    }
                                    buttonStyle={{ backgroundColor: '#5637DD' }}
                                />
                            </View>
                        )
                    } */}

                    <View style={styles.formButton}>
                        <Button
                            onPress={() => navigation.navigate('Register')}
                            title='Register'
                            icon={
                                <Icon
                                    name='user-plus'
                                    type='font-awesome'
                                    color='blue'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            titleStyle={{ color: 'blue' }}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
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
        margin: 10,
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