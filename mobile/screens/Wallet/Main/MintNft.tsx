import { useState } from "react";
import { ScrollView, View, ImageBackground, Text, Pressable, Image, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import NftBackImage from '../../../assets/images/nft/mintback.png';
import LeftArrowIcon from "../../../components/icons/LeftArrowIcon";

const MintNft = ({navigation}: any) => {
    return (
        <ScrollView
            style={{
                position: 'relative',
            }}
        >
            <ImageBackground
                source={ require('../../../assets/images/nft/mintback.png') }
                style={{
                    flex: 1, 
                    position: 'relative',
                    height: 350
                }}
            >
                <View
                    style={{
                        paddingTop: 50,
                        paddingRight: 20,
                        paddingLeft: 20,
                        paddingBottom: 100,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start'
                    }}
                >
                    <Pressable
                        style={{
                            flex: 0
                        }}
                        onPress={ () => navigation.navigate('CollectionOverview') }
                    >
                        <LeftArrowIcon color="#FFFFFF" />
                    </Pressable>
                    <Text
                        style={{
                            flex: 1,
                            fontWeight: 'bold',
                            fontSize: 16,
                            textAlign: 'center',
                            color: '#FFFFFF',
                        }}
                    >Send NFT</Text>
                </View> 
                <View style={{
                    position: 'absolute',
                    bottom: 12
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 32,
                            color: '#FFFFFF',
                            padding: 20,
                        }}
                    >NFT Name</Text>
                </View>
            </ImageBackground>
            <View
                style={{
                    width: '100%',
                    paddingLeft: 20,
                    paddingRight: 20,
                    position: 'relative',
                }}
            >
                <TextInput 
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#E1E1FF',
                        borderWidth: 1,
                        borderRadius: 4,
                        paddingBottom: 12,
                        paddingTop:12,
                        paddingLeft: 16,
                        marginTop: 16
                    }}
                    placeholder="Recipient's SOL address" />
                <Pressable
                    onPress={() => navigation.navigate('MintConfirm')}
                    style={{
                        backgroundColor: 'rgba(124, 102, 235, 0.1)',
                        borderRadius: 4,
                        paddingTop: 16,
                        paddingBottom: 16,
                        marginTop: 16
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#7C66EB',
                            textAlign: 'center'
                        }}
                    >Next</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default MintNft;