import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import SendCircleIcon from "../../../components/icons/SendCircleIcon";
import BuyCircleIcon from "../../../components/icons/BuyCircleIcon";
import SwapCircleIcon from "../../../components/icons/SwapCircleIcon";
import Main from "./Main";

const histories = [
    {
        image: <SendCircleIcon />,
        title: 'Bitcoin',
        action: 'Sold',
        unit: '– 3.9587448 BTC',
        money: ' – $32.434,34',
    },
    {
        image: <BuyCircleIcon />,
        title: 'Ethereum',
        action: 'Buy',
        unit: '– 3.9587448 BTC',
        money: ' – $32.434,34',
    },
    {
        image: <SendCircleIcon />,
        title: 'Bitcoin',
        action: 'Sold',
        unit: '– 3.9587448 BTC',
        money: ' – $32.434,34',
    },
    {
        image: <SwapCircleIcon />,
        title: 'Bitcoin',
        action: 'Swap',
        unit: '– 3.9587448 BTC',
        money: ' – $32.434,34',
    }
]

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    tabItem: {
        flex: 1,
        backgroundColor: 'rgba(242, 240, 253, 0.37)',
        // backgroundColor: '#FFFFFF',
        paddingTop: 12,
        paddingBottom: 12
    },
    tabItemText: {
        textAlign: 'center',
        color: '#98A1AA',
        fontWeight: "500",
        fontSize: 18
    },
    date: {
        padding: 12,
        width: '100%',
        backgroundColor: 'rgba(68, 189, 255, 0.1)',
        borderRadius: 4,
        marginBottom: 16,
        marginTop: 16
    },
    dateText: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        color: '#485068',
        textAlign: 'center',
    },
    histories: {
        backgroundColor: '#F2F6FA',
        borderRadius: 12,
        paddingTop: 23,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 23
    },
    history: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8
    },
    historyInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    historyAvatar: {

    },
    historyContent: {
        paddingLeft: 12,
    },
    historyTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#162534',
    },
    historyAction: {
        fontWeight: 'bold',
        fontSize: 11,
        color: 'rgba(22, 37, 52, 0.5)'
    },
    historyPrice: {
    },
    historyCoin: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#162534',
        textAlign: 'right'
    },
    historyMoney: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#98A1AA',
        textAlign: 'right'
    },
    viewMore: {
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        paddingTop: 12,
        paddingBottom: 12,
    },
    viewMoreText: {
        fontSize: 12,
        color: '#3F3D56',
        textAlign: 'center'
    }
})

const History = ({navigation} : any) => {

    let index = 0

    const onTokens = () => {
        navigation.navigate('Tokens');
    }

    const onNft = () => {
        navigation.navigate('Nft');
    }

    const onHistory = () => {
        navigation.navigate('History');
    }

    return (
        <Main>
            <View style={styles.tabs}>
                <View style={styles.tabItem}>
                    <Pressable onPress={onTokens}>
                        <Text style={styles.tabItemText}>Tokens</Text>
                    </Pressable>
                </View>
                <View style={styles.tabItem}>
                    <Pressable onPress={onNft}>
                        <Text style={styles.tabItemText}>NFT</Text>
                    </Pressable>
                </View>
                <View style={[styles.tabItem, {backgroundColor: 'rgba(124, 102, 235, 0.1)'}]}>
                    <Pressable onPress={onHistory}>
                        <Text style={[styles.tabItemText, {color: '#7C66EB'}]}>History</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.date}>
                <Text style={styles.dateText}>Today, 29.10.2021</Text>
            </View>
            <View style={styles.histories}>
            {histories.map( e => 
                <View style={
                    (index % 2) 
                    ?   [styles.history, {backgroundColor: 'transparent'}]
                    :   [styles.history, {backgroundColor: '#FFFFFF'}]
                } key={index ++}>
                    <View style={styles.historyInfo}>
                        <View style={styles.historyAvatar}>
                            {e.image}
                        </View>
                        <View style={styles.historyContent}>
                            <Text style={styles.historyTitle}>{e.title}</Text>
                            <Text style={styles.historyAction}>{e.action}</Text>
                        </View>
                    </View>
                    <View style={styles.historyPrice}>
                        <Text style={styles.historyCoin}>{e.unit}</Text>
                        <Text style={styles.historyMoney}>{e.money}</Text>
                    </View>
                </View>
            )}  
            <View style={styles.viewMore}>
                <Text style={styles.viewMoreText}>View more</Text>
            </View>
            </View>
        </Main>
    )
}

export default History;