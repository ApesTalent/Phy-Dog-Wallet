import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ViewMore from '../../../components/icons/ViewMore';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LeftArrowIcon from '../../../components/icons/LeftArrowIcon';

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        height: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
    },
    previous: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    row : {
        width: '100%',
        backgroundColor: '#F2F6FA',
        color: '#162534',
        flexDirection: 'row',
        borderRadius: 12,
        padding: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
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
        marginBottom: 16
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

const Terms = ({ navigation }: any) => {
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
        navigation.navigate('BackUp')
    }

    return(
        <View style={styles.container}>
            <View style={styles.previous}>
                <LeftArrowIcon />
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Privacy Policy</Text>
                <View style={styles.more}>
                    <ViewMore style={styles.moreIcon} />
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Terms of Service</Text>
                <View style={styles.more}>
                    <ViewMore style={styles.moreIcon} />
                </View>
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
                    <Text style={styles.confirmLabel}>I've read and accept the Terms of Service and Privacy Policy</Text>
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

export default Terms;