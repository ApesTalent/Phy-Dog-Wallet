import { View, Text, Pressable } from 'react-native';
import Main from './Main';
import BitcoinIcon from "../../../components/icons/BitcoinIcon";
import XPRIcon from "../../../components/icons/XPRIcon";
import EtherIcon from "../../../components/icons/EtherIcon";

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

const styles = {
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
}

const Tokens = ({navigation}:any) => {

    let index = 0

    const onHistory = () => {
        navigation.navigate('History');
    }

    const onTokens = () => {
        navigation.navigate('Tokens');
    }

    const onNft = () => {
        navigation.navigate('Nft');
    }

    return (
        <>
            <Main>
                <View style={styles.tabs}>
                    <View style={[styles.tabItem, {backgroundColor: 'rgba(124, 102, 235, 0.1)'}]}>
                        <Pressable onPress={onTokens}>
                            <Text style={[styles.tabItemText, {color: '#7C66EB'}]}>Tokens</Text>
                        </Pressable>
                    </View>
                    <View style={styles.tabItem}>
                        <Pressable onPress={onNft}>
                            <Text style={styles.tabItemText}>NFT</Text>
                        </Pressable>
                    </View>
                    <View style={styles.tabItem}>
                        <Pressable onPress={onHistory}>
                            <Text style={styles.tabItemText}>History</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.tokens}>
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
                </View>
            </Main>

        </>
    );
}

export default Tokens;