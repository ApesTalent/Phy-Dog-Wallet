import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import LeftArrowIcon from '../../../components/icons/LeftArrowIcon';
import Nft1Image from '../../../assets/images/nft/nft1.png';

const NftIndividual = ({navigation} : any) => {
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
                paddingTop: 50
            }}>
                <Pressable
                    onPress={() => navigation.navigate('CollectionOverview')}
                >
                    <LeftArrowIcon />
                </Pressable>
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
            <Pressable
                style={{
                    backgroundColor: 'rgba(124, 102, 235, 0.1)',
                    borderRadius: 4,
                    paddingTop: 16,
                    paddingBottom: 16,
                }}
                onPress={() => navigation.navigate('NftInformation')}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: '#7C66EB',
                        textAlign: 'center'
                    }}
                >Send</Text>
            </Pressable>
            <Text
                style={{
                    paddingTop: 16,
                    fontSize: 16,
                    color: '#162534',
                    opacity: 0.8,
                }}
            >
                We collect information from you when you communicate via e-mail, or complete a web inquiry form. 
                We may ask you for your name, e-mail address, phone number or other information. 
                You may, however, visit our site anonymously.
            </Text>
        </ScrollView>
    );
}

export default NftIndividual;