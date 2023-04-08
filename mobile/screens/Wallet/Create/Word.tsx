import { StyleSheet } from 'react-native';
import { View, Text, Pressable } from 'react-native';
import LeftArrowIcon from '../../../components/icons/LeftArrowIcon';

const words = [1, 2, 3, 4, 5, 6];

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        height: '100%',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 50,
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
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
});

const Word = ({ navigation }: any) => {
    let index = 0;

    const onNext = () => {
        navigation.navigate('Last')
    }

    return(
        <View style={styles.container}>
            <Pressable 
                onPress={() => navigation.navigate('BackUp')}
                style={{
                    width: '100%',
                    paddingBottom: 20,
                    justifyContent: 'flex-start'
                }}
            >
                <LeftArrowIcon />
            </Pressable>
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
        </View>
    );
}

export default Word;