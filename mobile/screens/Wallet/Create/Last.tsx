import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { View, Text, Pressable, Image, Modal, Alert } from 'react-native';
import LeftArrowIcon from '../../../components/icons/LeftArrowIcon';
// const words = [1, 2, 3, 4, 5, 6];
const words = [1, 2, 3]

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        height: '100%',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
        textAlign: 'center',
    },
    description: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        lineHeight: 21,
        textAlign: 'center',
        color: '#3F3D56',
    },
    word: {
        width: '100%'
    },
    wordRow: {
        flexDirection: 'row',
    },
    wordItemContainer: {
        width: '50%',
        padding: 5,
    },
    wordItem: {
        paddingTop: 4,
        paddingLeft: 8,
        // flex: , 
        width: '100%',
        backgroundColor: '#e3e5fd',
        borderRadius: 8,
        paddingBottom: 20
    },
    wordItemTitle: {
        fontSize: 12,
        lineHeight: 23,
        color: 'rgba(22, 37, 52, 0.5)',
    },
    bottom: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingRight: 5,
        paddingLeft: 5
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

const Last = ({ navigation }: any) => {
    let index = 0;
    const [modalVisible, setModalVisible] = useState(false);

    const onNext = () => {
        navigation.navigate('Tokens')
    }

    return(
        <View style={styles.container}>
            <Pressable
                style={{
                    justifyContent: 'flex-start',
                    width: '100%',
                    paddingTop: 20,
                    paddingBottom: 20
                }}

                onPress={() => navigation.navigate('Word')}
            >
                <LeftArrowIcon />
            </Pressable>
            <Text style={styles.title}>The last step before using the wallet</Text>
            <Text style={styles.description}>Please enter the recovery words</Text>
            <View style={styles.word}>
            { words.map( e => 
                <View style={styles.wordRow} key={index ++}>
                    <View style={styles.wordItemContainer}>
                        <View style={styles.wordItem}>
                            <Text style={styles.wordItemTitle}>{e * 2 - 1}</Text>
                        </View>
                    </View>
                    <View style={styles.wordItemContainer}>
                        <View style={styles.wordItem}>
                            <Text style={styles.wordItemTitle}>{e * 2}</Text>
                        </View>
                    </View>
                </View>
            )}
            </View>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={onNext}>
                    <Text style={styles.buttonTitle}>Next</Text>
                </Pressable>
                {/* <Button
                    style={styles.button}
                    disabled={disabled}
                    title="Continue"
                    color={disabled ? "#F3F3F5" : "#7C66EB"}
                    onPress={onContinue}
                /> */}
            </View>
                    
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                        style={[styles.buttonModal, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
        </View>
    );
}

export default Last;