import { useRef } from "react";
import { BottomModal, BottomModalRef } from "react-native-lightning-modal";

const Fails = () => {
    const bottomModalRef = useRef<BottomModalRef>(null)

    return (
        <BottomModal height={600} ref={bottomModalRef}>
            {/* < */}
        </BottomModal>
    )
}

export default Fails;