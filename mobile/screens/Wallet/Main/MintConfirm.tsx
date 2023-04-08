import { ScrollView, View, Text, Image, Pressable } from "react-native";
import LeftArrowIcon from "../../../components/icons/LeftArrowIcon";
import Nft1SmallImage from '../../../assets/images/nft/nft1-small.png';
import Navigation from "../../../navigation";

const MintConfirm = ({navigation}: any) => {
    return (
        <ScrollView
            style={{
                padding: 20,
                paddingTop: 50,
                position: 'relative',
                width: '100%',
                backgroundColor: '#FFFFFF'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    paddingBottom: 40
                }}
            >
                <Pressable style={{ flex: 0 }} onPress={() => navigation.navigate('MintNft')}>
                    <LeftArrowIcon />
                </Pressable>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            textAlign: 'center',
                            color: '#162534'
                        }}
                    >Confirm send</Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    borderWidth: 2,
                    borderColor: '#F2F6FA',
                    borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    marginBottom: 8
                }}
            >
                <View>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 12,
                            color: 'rgba(22, 37, 52, 0.5)',
                        }}
                    >NFT</Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: '#000000'
                        }}
                    >NFT Name</Text>
                </View>
                <View
                    style={{
                        borderRadius: 8,
                    }}
                >
                    <Image 
                        style={{
                            borderRadius: 8
                        }}
                        source={Nft1SmallImage} 
                    />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    borderWidth: 2,
                    borderColor: '#F2F6FA',
                    borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 12,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    marginBottom: 8
                }}
            >
                <View>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 12,
                            color: 'rgba(22, 37, 52, 0.5)',
                        }}
                    >HASH ADDRESS</Text>
                    <Text 
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: '#000000'
                        }}
                    >2sdfjh3buyfg3u7f3i4f8</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#F2F6FA',
                    borderRadius: 9,
                    paddingBottom: 24,
                    paddingTop: 24,
                    paddingRight: 16,
                    paddingLeft: 16,
                    marginBottom: 16
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#485068',
                    }}
                >Network Fee</Text>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#162534'
                    }}
                >$0.0224</Text>
            </View>
            <View   
                style={{
                    backgroundColor: 'rgba(124, 102, 235, 0.1)',
                    borderRadius: 4,
                    paddingTop: 24,
                    paddingBottom: 24,
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: '#7C66EB',
                        textAlign: 'center'
                    }}
                >Confirm & Send</Text>
            </View>

        </ScrollView>
    );
}

export default MintConfirm;