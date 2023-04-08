import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image } from "react-native";
import { BottomModal, BottomModalRef } from "react-native-lightning-modal";

const List = ({navigation, open}:any) => {

    const bottomModalListRef = useRef<BottomModalRef>(null);

    useEffect( () => {
        if(open) {
            bottomModalListRef.current?.show()
        }
    }, [open] )  
    
    return (
        <View>
            <BottomModal height={500} ref={bottomModalListRef}>
                {/* Your Content */}
                <Text>Hello</Text>
            </BottomModal>
        </View>
    );
}

export default List