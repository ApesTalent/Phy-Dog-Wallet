import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import ViewMore from '../../../components/icons/ViewMore';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ConfirmImage from '../../../assets/images/confirm.png';
import LeftArrowIcon from '../../../components/icons/LeftArrowIcon';

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        height: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
    },
    backUp: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 36,
    },
    backUpTitle: {
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 33,
        textAlign: 'center',
        color: '#162534',
    },
    backUpDescription: {
        paddingTop: 15,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        color: '#3F3D56'
    },
    title: {
        fontWeight: "500",
        fontSize: 16,
    },
    more: {
        width: 30,
        height: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 15
    },
    moreIcon: {
        position: 'absolute',
        top: 8,
        left: 12
    },
    bottom: {
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
        paddingRight: 20
    },
    confirmLabel: {
        fontSize: 14, 
        lineHeight: 20,
        color: '#3F3D56'
    },
    button: {
        backgroundColor: '#7C66EB',
        borderRadius: 4,
        padding: 16,
        marginBottom: 45
    },
    buttonTitle: {
        fontWeight: "500",
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

const BackUp = ({ navigation }: any) => {
    const [disabled, setDisabled]  = useState(false);

    const onContinue = () => {
        // if(disabled) {
        //     styles.button.backgroundColor = '#F3F3F5';
        //     styles.buttonTitle.color = 'rgba(152, 161, 170, 0.5)';
        // } else {
        //     styles.button.backgroundColor = '#7C66EB';
        //     styles.buttonTitle.color = '#FFFFFF';
        // }

        setDisabled(!disabled)
    }

    const onNext = () => {
        navigation.navigate('Word')
    }

    return(
        <View style={styles.container}>
            <Pressable 
                onPress={() => navigation.navigate('Terms')}
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}
            >
                <LeftArrowIcon 
                    style={{
                        flex: 1,
                    }}
                />
            </Pressable>
            <View style={styles.backUp}>
                <Image source={ ConfirmImage }/>
                <Text style={styles.backUpTitle}>Back up your wallet now</Text>
                <Text style={styles.backUpDescription}>In the next step you will see 12 words that allow you to recover a wallet</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.confirm}>
                    <BouncyCheckbox
                        size={18}
                        fillColor="#60BA62"
                        unfillColor="rgba(152, 161, 170, 0.5)"
                        // text="I've read and accept the Terms of Service and Privacy Policy"
                        iconStyle={{ borderColor: "#60BA62" }}
                        // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        onPress={onContinue}
                    />
                    <Text style={styles.confirmLabel}>I understand that if I lose my recovery words, will not be able to access my wallet</Text>
                </View>
                <Pressable style={styles.button} disabled={disabled} onPress={onNext}>
                    <Text style={styles.buttonTitle}>Continue</Text>
                </Pressable>
                {/* <Button
                    style={styles.button}
                    disabled={disabled}
                    title="Continue"
                    color={disabled ? "#F3F3F5" : "#7C66EB"}
                    onPress={onContinue}
                /> */}
            </View>
        </View>
    );
}

export default BackUp;