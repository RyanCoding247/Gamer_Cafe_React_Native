import { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
// import { Image } from 'react-native-elements';
import { Table, Row, Rows } from "react-native-table-component";
import { baseUrl } from '../shared/baseUrl';
import imageThing from '../assets/img/injustice.jpg'


const tableData = {
    tableHead: ['Crypto Name', 'Value', 'Mkt Cap'],
    tableData: [
        ['Bitcoin', '$44,331', '$839,702,328,904'],
        ['Ethereum', '$3000.9', '$359,080,563,225'],
        ['Tether', '$1', '$79,470,820,738'],
        ['BNB', '$413.44', '$69,446,144,361'],
        ['USD Coin', '$1', '$53,633,260,549'],
    ],
};

const GamesScreen = () => {
    const [data, setData] = useState(tableData);


    return (
        <View>
            <ImageBackground source={{ uri: baseUrl + 'images/matrixbg1.png' }} resizeMode="cover" style={styles.image}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80, top: 80 }}
                    />
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80, top: 80 }}
                    />
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80, top: 80 }}
                    />
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80, top: 80 }}
                    />
                </View>
                <View style={[styles.container, {marginBottom: -90}]}>
                    <Table borderStyle={{ borderWidth: 4, borderColor: 'teal' }}>
                        <Row
                            data={data.tableHead}
                            style={styles.head}
                            textStyle={styles.headText} />
                        <Rows data={data.tableData} textStyle={styles.text} style={styles.head} />
                    </Table>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 100 }}>
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80 }}
                    />
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80 }}
                    />
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80 }}
                    />
                    <Image
                        source={{ uri: baseUrl + 'images/injustice.jpg' }}
                        style={{ width: 80, height: 80}}
                    />
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
    }
});

export default GamesScreen;