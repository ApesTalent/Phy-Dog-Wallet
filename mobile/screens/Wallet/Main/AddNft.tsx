import { View, Text, Image, ScrollView, TextInput, Pressable } from "react-native";
import LeftArrowIcon from "../../../components/icons/LeftArrowIcon";
import MoreImage from '../../../assets/images/icons/More.png';

const AddNft = ({navigation}:any) => {
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
                    justifyContent: 'space-between',
                }}
            >
                <Pressable onPress={() => navigation.navigate('Nft')}>
                    <LeftArrowIcon />
                </Pressable>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        textAlign: 'center',
                        color: '#162534',
                    }}
                >Add NFT</Text>
                <Image source={ MoreImage }/>
            </View>
            <View>
                <TextInput 
                    placeholder="Address"
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderColor: '#E1E1FF',
                        marginTop: 16,
                        borderRadius: 4,
                    }}
                />
                <TextInput 
                    placeholder="Token ID"
                    style={{
                        padding: 8,
                        borderWidth: 1,
                        borderColor: '#E1E1FF',
                        marginTop: 12,
                        borderRadius: 4,
                    }}
                />
                <Pressable
                    style={{
                        marginTop: 24,
                        paddingTop: 12,
                        paddingBottom: 12,
                        backgroundColor: '#7C66EB',
                        borderRadius: 4,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#FFFFFF',
                            textAlign: 'center'
                        }}
                    >Add</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default AddNft;