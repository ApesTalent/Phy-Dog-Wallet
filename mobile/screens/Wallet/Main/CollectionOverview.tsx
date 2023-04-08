import { useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import MoreImage from '../../../assets/images/icons/More.png';
import Nft1 from '../../../assets/images/nft/nft1.png';
import Nft2 from '../../../assets/images/nft/nft2.png';

const nfts = [
    [
        { image: Nft1 },
        { image: Nft2 }
    ],
    [
        { image: Nft1 },
        { image: Nft2 }
    ],
    [
        { image: Nft1 },
        { image: Nft2 }
    ],
]

const CollectionOverview = ({navigation} : any) => {

    const [collapse, setCollapse] = useState(true);

    const onInfo = () => {
        setCollapse(!collapse)
    }

    return (
        <ScrollView
            style={{
                padding:20,
                paddingTop: 50,
                backgroundColor: '#FFFFFF'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    position: 'relative'
                }}
            >
                <Pressable
                    onPress={onInfo}
                >
                    <Image source={MoreImage} />
                </Pressable>
                {collapse 
                ?
                    <></>
                :
                    <View
                        style={{
                            borderRadius: 12,
                            backgroundColor: 'rgba(249, 249, 249, 1)',
                            top: 24,
                            position: 'absolute',
                            right: 0,
                            zIndex: 1,
                            width: 200
                        }}
                    >
                        <Pressable
                            style={{
                                paddingTop: 8,
                                paddingBottom: 6,
                                borderBottomColor: 'rgba(22, 37, 52, 0.5)',
                                borderBottomWidth: 1,
                            }}
                            onPress={() => {
                                    onInfo()
                                    navigation.navigate('MintNft')
                                }
                            }
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#162534',
                                    textAlign: 'center'
                                }}
                            >Mint NFT</Text>
                        </Pressable>
                        <Pressable
                            style={{
                                paddingTop: 6,
                                paddingBottom: 8
                            }}
                            onPress={() => {
                                onInfo()
                                navigation.navigate('CollectionInfo')
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#162534',
                                    textAlign: 'center'
                                }}
                            >Collection information</Text>
                        </Pressable>
                    </View>
                }
            </View>
            <Text 
                style={{
                    fontWeight: 'bold',
                    fontSize: 32,
                    color: '#162534',
                    paddingBottom: 16
                }}
            >Collection 1</Text>
            {nfts.map((e, index) => 
                <View 
                    style={{
                        flexDirection: 'row',
                        marginBottom: 8
                    }}
                    key={index}
                >
                {e.map( (ele, i) => 
                    <Pressable
                        style={{
                            flex: 1,
                            borderRadius: 8,
                            marginRight: i ? 0: 4,
                            marginLeft: i ? 4 : 0,
                        }}
                        key={i}
                        onPress={() => navigation.navigate('NftIndividual')}>
                        <Image 
                            style={{
                                width: '100%',
                                borderRadius: 8,
                            }}
                            source={ele.image} 
                        />
                    </Pressable>
                )}
                </View>
            )}
        </ScrollView>
    );
}

export default CollectionOverview;