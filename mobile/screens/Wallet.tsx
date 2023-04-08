import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Init from './Wallet/Create/Init';
import Terms from './Wallet/Create/Terms';
import BackUp from './Wallet/Create/BackUp';
import Word from './Wallet/Create/Word';
import Last from './Wallet/Create/Last';
import Tokens from './Wallet/Main/Tokens';
import History from './Wallet/Main/History';
import Nft from './Wallet/Main/Nft';
import AddNft from './Wallet/Main/AddNft';
import CollectionOverview from './Wallet/Main/CollectionOverview';
import CollectionInfo from './Wallet/Main/CollectionInfo';
import NftIndividual from './Wallet/Main/NftIndividual';
import NftInformation from './Wallet/Main/NftInformation';
import MintNft from './Wallet/Main/MintNft';
import MintConfirm from './Wallet/Main/MintConfirm';

const CreatePages = createNativeStackNavigator();

const Wallet = () => {
    return (
        <CreatePages.Navigator initialRouteName="Init">
            <CreatePages.Screen name="Init" component={Init} options={{ headerShown: false }} /> 
            <CreatePages.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
            <CreatePages.Screen name="BackUp" component={BackUp} options={{ headerShown: false }} />
            <CreatePages.Screen name="Word" component={Word} options={{ headerShown: false }} />
            <CreatePages.Screen name="Last" component={Last} options={{ headerShown: false }} />
            <CreatePages.Screen name="Tokens" component={Tokens} options={{ headerShown: false }} />
            <CreatePages.Screen name="History" component={History} options={{ headerShown: false }} />
            <CreatePages.Screen name="Nft" component={Nft} options={{ headerShown: false }} />
            <CreatePages.Screen name="AddNft" component={AddNft} options={{ headerShown: false }} />
            <CreatePages.Screen name="CollectionOverview" component={CollectionOverview} options={{ headerShown: false }} />
            <CreatePages.Screen name="CollectionInfo" component={CollectionInfo} options={{ headerShown: false }} />
            <CreatePages.Screen name="NftIndividual" component={NftIndividual} options={{ headerShown: false }} />
            <CreatePages.Screen name="NftInformation" component={NftInformation} options={{ headerShown: false }} />
            <CreatePages.Screen name="MintNft" component={MintNft} options={{ headerShown: false }} />
            <CreatePages.Screen name="MintConfirm" component={MintConfirm} options={{ headerShown: false }} />
        </CreatePages.Navigator>
    )
}

export default Wallet;