import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import LeftArrowIcon from '../../../components/icons/LeftArrowIcon';
import Nft1Image from '../../../assets/images/nft/nft1.png';

const infos = [
    [
        { header: 'Background', main: 'Blur', footer: '7% have this trait' },
        { header: 'Color', main: 'Light', footer: '10% have this trait' },
    ],
    [
        { header: 'Object', main: 'Tablet', footer: '5% have this trait' },
        { header: 'Color', main: 'Light', footer: '10% have this trait' },
    ]
]
const NftInformation  = ({navigation}: any) => {
    return (
        <ScrollView
            style={{
                position: 'relative',
                width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
                backgroundColor: '#FFFFFF'
            }}
        >
            <View style={{
                paddingTop: 50,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Pressable
                    style={{
                        flex: 0
                    }}
                    onPress={() => navigation.navigate('NftIndividual')}
                >
                    <LeftArrowIcon />
                </Pressable>
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            textAlign: 'center',
                            color: '#162534',
                        }}
                    >NFT Information</Text>
                </View>
            </View>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 32,
                    color: '#162534',
                    paddingTop: 8
                }}
            >NFT Name</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 16,
                    paddingBottom: 16
                }}
            >
                <Image
                    style={{
                        borderRadius: 8,
                        flex: 1
                    }}
                    source={Nft1Image} />
            </View>
            {infos.map( (e, index) => 
            <View  
                style={{
                    flexDirection: 'row',
                    marginBottom: 8
                }}
                key={index}
            >
                {e.map( (ele, i) => 
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#F2F0FD',
                        borderRadius: 12,
                        marginLeft: i % 2 ? 4: 0,
                        marginRight: i % 2 ? 0: 4,
                        padding: 16
                    }}
                    key={i}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#232323',
                        }}
                    >{ele.header}</Text>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#7C66EB',
                            paddingBottom: 8
                        }}
                    >{ele.main}</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#485068',
                        }}
                    >{ele.footer}</Text>
                </View>
                )}
            </View>
            )}
        </ScrollView>
    );
}

export default NftInformation;