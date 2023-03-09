import HomeScreen from "./HomeScreen"
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MenuScreen from "./MenuScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from 'react-native-elements';
import GamesScreen from "./GamesScreen";
import EventsScreen from "./EventsScreen";
import RoomsScreen from "./RoomsScreen";
import StoreScreen from "./StoreScreen";


const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const MenuNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}>
            <Stack.Screen
                name='Menu'
                component={MenuScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='cutlery'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}
const GamesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}>
            <Stack.Screen
                name='Games'
                component={GamesScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='gamepad'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const RoomsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}>
            <Stack.Screen
                name='Rooms'
                component={RoomsScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='cubes'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const StoreNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}>
            <Stack.Screen
                name='Store'
                component={StoreScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='shopping-basket'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const EventsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}>
            <Stack.Screen
                name='Events'
                component={EventsScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='calendar'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}




const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 30 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Menu'
                    component={MenuNavigator}
                    options={{
                        title: 'Menu',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='cutlery'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 30 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Events'
                    component={EventsNavigator}
                    options={{
                        title: 'Events',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='calendar'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 30 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Games'
                    component={GamesNavigator}
                    options={{
                        title: 'Games List',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='gamepad'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 30 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Rooms'
                    component={RoomsNavigator}
                    options={{
                        title: 'Reserve Rooms',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='cubes'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 30 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Store'
                    component={StoreNavigator}
                    options={{
                        title: 'Store',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='shopping-basket'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 30 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>

    )
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
})

export default Main;