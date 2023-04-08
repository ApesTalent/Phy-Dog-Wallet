import { View, StyleSheet, Text, Pressable, ScrollView, Image } from "react-native";
import SendIcon from "../../../components/icons/SendIcon";
import ReceiveIcon from "../../../components/icons/ReceiveIcon";
import SwapIcon from "../../../components/icons/SwapIcon";
import BuyIcon from "../../../components/icons/BuyIcon";
import SettingIcon from "../../../components/icons/SettingIcon";
import ListIcon from "../../../components/icons/ListIcon";
import BitcoinIcon from "../../../components/icons/BitcoinIcon";
import XPRIcon from "../../../components/icons/XPRIcon";
import EtherIcon from "../../../components/icons/EtherIcon";
import Main from "./Main";
import Substract from "../../../components/icons/Substract";

const tokens = [
    {
        image: BitcoinIcon,
        title: 'Bitcoin',
        subTitle: '$43,678.54',
        change: '12.00',
        price: '0 BTS',
        back: 'rgba(255, 210, 51, 0.15)'
    },
    {
        image: EtherIcon,
        title: 'Ethereum',
        subTitle: '$43,678.54',
        change: '12.00',
        price: '0 ETH',
        back: '#7F6EE9'
    },
    {
        image: XPRIcon,
        title: 'XPR',
        subTitle: '$43,678.54',
        change: '12.00',
        price: '0 BNB',
        back: '#25292C'
    },
    {
        image: BitcoinIcon,
        title: 'Bitcoin',
        subTitle: '$43,678.54',
        change: '12.00',
        price: '0 BTS',
        back: 'rgba(255, 210, 51, 0.15)'
    },
    {
        image: EtherIcon,
        title: 'Ethereum',
        subTitle: '$43,678.54',
        change: '12.00',
        price: '0 ETH',
        back: '#7F6EE9'
    }
]

const nfts = [
    [
        { image: require('../../../assets/images/nft/collection1.png') },
        { image: require('../../../assets/images/nft/collection2.png') }
    ], [   
        { image: require('../../../assets/images/nft/collection3.png') },
        { image: require('../../../assets/images/nft/collection4.png') }
    ],
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
    tokens: {
        backgroundColor: '#F2F6FA',
        borderRadius: 12,
        marginTop: 10,
        padding: 12
    },
    tokenRow: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginBottom: 5
    },
    tokenInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tokenPrice: {
        fontWeight: '500',
        fontSize: 14,
        color: '#162534'
    },
    tokenContent: {
        paddingLeft: 10
    },
    tokenTitle: {
        fontWeight: "500",
        fontSize: 14,
        color: '#162534'
    },
    tokenSubTitle: {
        fontWeight: "500",
        fontSize: 11,
        color: 'rgba(22, 37, 52, 0.5)'
    },
    tokenAvatar: {
        width: 40,
        height: 40,
        flexDirection: 'row',
        // backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: 20
    },
    tokenImage: {
        flex: 1,
        alignSelf: 'center'
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

    const onAdd = () => {
        navigation.navigate('AddNft');
    }

    const onCollection = () => {
        navigation.navigate('CollectionOverview');
    }

    return (
        <Main>
            <View style={styles.tabs}>
                <View style={styles.tabItem}>
                    <Pressable onPress={onTokens}>
                        <Text style={styles.tabItemText}>Tokens</Text>
                    </Pressable>
                </View>
                <View style={[styles.tabItem, {backgroundColor: 'rgba(124, 102, 235, 0.1)'}]}>
                    <Pressable onPress={onNft}>
                        <Text style={[styles.tabItemText, {color: '#7C66EB'}]}>NFT</Text>
                    </Pressable>
                </View>
                <View style={styles.tabItem}>
                    <Pressable onPress={onHistory}>
                        <Text style={styles.tabItemText}>History</Text>
                    </Pressable>
                </View>
            </View>
            {/* <View style={styles.tokens}>
            {tokens.map( e => 
                <View style={styles.tokenRow} key={index ++}>
                    <View style={styles.tokenInfo}>
                        <View style={[styles.tokenAvatar, {backgroundColor: e.back}]}>
                            <e.image style={styles.tokenImage} />
                        </View>
                        <View style={styles.tokenContent}>
                            <Text style={styles.tokenTitle}>{e.title}</Text>
                            <Text style={styles.tokenSubTitle}>{e.subTitle}</Text>
                        </View>
                    </View>
                    <Text style={styles.tokenPrice}>{e.price}</Text>
                </View>
            )}
            </View> */}
            {/* <Pressable 
                onPress={onAdd}
                style={{
                    marginTop: 16,
                    borderRadius: 12,
                    height: 200,
                    backgroundColor: '#7C66EB10',
                    paddingTop: 65
                }}  
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 'auto'
                    }}
                >
                <Substract /></View>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        color: '#162534',
                        paddingTop: 5
                    }}
                >Add NFT</Text>
            </Pressable> */}
            <View 
                style={{
                    backgroundColor: '#F2F6FA',
                    paddingTop: 24,
                    paddingBottom: 30
                }}
            >
            { nfts.map((e, index) => 
                <View 
                    key={index}
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    {e.map( (ele, i) => 
                        <Pressable
                            onPress={onCollection}
                            key={i}
                            style={{ 
                                backgroundColor: '#FFFFFF',
                                marginRight: 8,
                                flex: 1,
                                borderRadius: 4,
                                marginBottom: 12
                            }}
                        >
                            <View
                                style={{ borderRadius: 8 }}
                            >
                                <Image 
                                    style={{
                                        width: '100%',
                                        borderRadius: 8
                                    }}
                                    source={ ele.image } />
                            </View>
                            <View
                                style={{
                                    paddingLeft: 8
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 14,
                                        color: '#162534',
                                        paddingTop: 4
                                    }}
                                >Collection 1</Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#98A1AA',
                                        paddingBottom: 4
                                    }}
                                >131</Text>
                            </View>
                        </Pressable>
                    )}
                </View>
            )}
                <View>
                    <Pressable
                        onPress={onAdd}
                        style={{
                            backgroundColor: 'rgba(124, 102, 235, 0.1)',
                            borderRadius: 4,
                            paddingTop: 16,
                            paddingBottom: 16
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#7C66EB',
                                textAlign: 'center'
                            }}
                        >+ Add NFT</Text>
                    </Pressable>
                </View>
            </View>
        </Main>
    )
}

export default History;