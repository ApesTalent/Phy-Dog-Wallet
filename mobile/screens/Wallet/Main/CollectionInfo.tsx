import { useState } from "react";
import { ScrollView, View, ImageBackground, Text, Pressable, Image, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import NftBackImage from '../../../assets/images/nft/mintback.png';
import LeftArrowIcon from "../../../components/icons/LeftArrowIcon";
import TwitterIcon from "../../../components/icons/TwitterIcon";
import DiscordIcon from "../../../components/icons/DiscordIcon";
import WorldIcon from "../../../components/icons/WorldIcon";
import EtherIcon from "../../../components/icons/EtherIcon";

const links = [
    { icon: <WorldIcon /> },
    { icon: <DiscordIcon /> },
    { icon: <TwitterIcon /> }
]

const contents = [
    [{ title: '10.0k', sub: 'items' },
    { title: '5.7k', sub: 'owners' }],
    [{ icon: <EtherIcon />, title: '10.47', sub: 'floor price' },
    { icon: <EtherIcon />, title: '56.9k', sub: 'volume traded' }],
    [{ icon: <EtherIcon />, title: '1,269.4', sub: '7 day volume' },
    { icon: <EtherIcon />, title: '10.4', sub: '7 day Avg Price' }],
    [{ title: '1283', sub: '7 day sales' },
    { icon: <EtherIcon />, title: '29369', sub: 'One month volume' }],
    [{ icon: <EtherIcon />, title: '8.28', sub: 'One month Avg Price' },
    { title: '3547', sub: 'One month sales' }],
]

const CollectionInfo = ({navigation}: any) => {
    return (
        <ScrollView
            style={{
                position: 'relative',
                backgroundColor: '#FFFFFF'
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
                    >Collection Info</Text>
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
                    >Collection 1</Text>
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
                <Text
                    style={{
                        fontSize: 14,
                        lineHeight: 23,
                        color: '#162534',
                        opacity: 0.8,
                        paddingTop: 24,
                        paddingBottom: 16
                    }}
                >
                    We collect information from you when you communicate via e-mail, or complete a web inquiry form. 
                    We may ask you for your name, e-mail address, phone number or other information. 
                    You may, however, visit our site anonymously.
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingBottom: 32
                    }}
                >
                    {links.map( (e, index) => 
                    <View
                        key={index}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: index ? 4: 0,
                            marginRight: index == 2 ? 0: 4,
                            backgroundColor: '#F2F6FA',
                            borderRadius: 4,
                            paddingBottom: 10,
                            paddingTop: 10
                        }}
                    >
                        {e.icon}
                    </View>
                    )}
                </View>
                <View>
                {contents.map ((e, index) => 
                    <View 
                        key={index}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10
                        }}
                    >
                    {e.map( (ele, i) => 
                        <View
                            key={i}
                            style={{
                                flex: 1,
                                borderRadius: 12,
                                backgroundColor: '#F2F0FD',
                                flexDirection: 'row',
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 16,
                                marginLeft: i ? 5 : 0,
                                marginRight: i ? 0 : 5
                            }}
                        >
                            {ele.icon 
                            ?  ele.icon
                            : <></>}
                            <View
                                style={{
                                    paddingLeft: ele.icon ? 8 : 0
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        lineHeight: 25,
                                        color: '#7C66EB'
                                    }}
                                >{ele.title}</Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        lineHeight: 15,
                                        color: '#162534',   
                                    }}
                                >{ele.sub}</Text>
                            </View>
                        </View>
                    )}
                    </View>
                )}
                </View>
            </View>
        </ScrollView>
    );
}

export default CollectionInfo;