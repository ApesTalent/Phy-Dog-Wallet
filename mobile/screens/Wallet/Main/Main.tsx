import { View, StyleSheet, Text, Pressable, ScrollView, Image, TextInput, Switch } from "react-native";
import { BottomModal, BottomModalRef } from "react-native-lightning-modal";
import { FontAwesome } from '@expo/vector-icons';
import SendIcon from "../../../components/icons/SendIcon";
import ReceiveIcon from "../../../components/icons/ReceiveIcon";
import SwapIcon from "../../../components/icons/SwapIcon";
import BuyIcon from "../../../components/icons/BuyIcon";
import SettingIcon from "../../../components/icons/SettingIcon";
import ListIcon from "../../../components/icons/ListIcon";
import LeftArrowIcon from "../../../components/icons/LeftArrowIcon";
import BitcoinImage from "../../../assets/images/users/Bitcoin.png";
import EtherImage from "../../../assets/images/users/EtherCircle.png";
import XPRImage from "../../../assets/images/users/XPRCircle.png";
// import IdentifyImage from '../../../assets/images/background/identify.png';
import { useRef, useState } from "react";
import List from "./List";
import DiagramIcon from "../../../components/icons/DiagramIcon";
import UpArrowIcon from "../../../components/icons/UpArrowIcon";
import CopyIcon from "../../../components/icons/CopyIcon";
import UpArrowCircleIcon from "../../../components/icons/UpArrowCircleIcon";
import RightArrowIcon from "../../../components/icons/RightArrowIcon";
import IdentifyImage from "../../../components/icons/IdentifyIcon";

const styles = StyleSheet.create({
    container: {
        padding:20,
        paddingTop: 30,
        backgroundColor: '#FFFFFF'
    },
    back1: {
        position: 'absolute',
        left: 44.84,
        top: -0,
        // filter: 'blur(114.479px)',
        transform: [{
            rotate:'14.38deg'
        }],
    },
    back2: {
        position: 'absolute',
        left: -10,
        top: 0,
        borderRadius: 50,
        transform: [{
            rotate: '180deg'
        }],
    },
    back3: {
        position: 'absolute',
        left: 381.6,
        top: -79,
        transform: [{
            rotate: '90deg'}],
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        // font-weight: 600,
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 39,
        color: '#162534',
        paddingBottom: 10
    },
    balance: {
        backgroundColor: '#bac6f5',
        borderRadius: 12,
        padding: 16
    },
    balanceTitle: {
        fontSize: 14,
        color: '#485068',
        opacity: 0.8
    },
    balancePrice: {
        // fontWeight: 600,
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 33,
        color: '#162534'
    },
    buttons: {
        paddingTop: 8,
        flexDirection: 'row',
        marginLeft: -3,
        marginRight: -3
    },
    buttonItem: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 12,
        alignItems: 'center',
        marginLeft: 3, 
        marginRight: 3
    },
    buttonItemText: {
        paddingTop: 3,
        fontSize: 14,
        textAlign: 'center',
        color: '#485068'
    },
})

const coins = [
    { image: BitcoinImage, title: 'Bitcoin'},
    { image: EtherImage, title: 'Ethereum'},
    { image: XPRImage, title: 'XPR'},
    { image: BitcoinImage, title: 'Bitcoin'},
    { image: EtherImage, title: 'Ethereum'},
    { image: XPRImage, title: 'XPR'},
    { image: BitcoinImage, title: 'Bitcoin'},
    { image: XPRImage, title: 'XPR'},
    { image: BitcoinImage, title: 'Bitcoin'},
    { image: EtherImage, title: 'Ethereum'},
    { image: XPRImage, title: 'XPR'},
    { image: BitcoinImage, title: 'Bitcoin'},
]

const prices = [
    { title: 'Market Cap', price: '$473,599,584.99'},
    { title: 'Volume', price: '$473,599,584.99'},
    { title: 'Total supply', price: '$473,599,584.99'},
    { title: 'Circulating Supply', price: '$473,599,584.99'},
]

const Main = (props: any) => {
    
    const bottomModalRef = useRef<BottomModalRef>(null);
    const bottomListModalRef = useRef<BottomModalRef>(null);
    const bottomReceiveRef = useRef<BottomModalRef>(null);
    const bottomSearchRef = useRef<BottomModalRef>(null);
    const bottomBuyModalRef = useRef<BottomModalRef>(null);

    const [openList, setOpenList] = useState(false);
  
    const onBuy = () => {
        bottomModalRef.current?.show()
    }

    const onClose = () => {
        bottomModalRef.current?.dismiss()
    }

    const onList = () => {
        bottomListModalRef.current?.show();
    }

    const onListClose = () => {
        bottomListModalRef.current?.dismiss();
    }

    const onReceive = () => {
        bottomReceiveRef.current?.show()
    }

    const onReceiveClose = () => {
        bottomReceiveRef.current?.dismiss();
    }

    const onSearch = () => {
        bottomSearchRef.current?.show();
    }

    const onSearchClose = () => {
        bottomSearchRef.current?.dismiss()
    }
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.back1} source={ require('../../../assets/images/filter1.png') } />
                    {/* <Image style={styles.back2} source={ require('../../../assets/images/filter2.png') } />
                    <Image style={styles.back3} source={ require('../../../assets/images/filter3.png') } /> */}
                    <View style={styles.header}>
                        <Pressable onPress={onSearch}>
                            <ListIcon />
                        </Pressable>
                        <SettingIcon style={{ marginLeft: 10 }}/>
                    </View>
                    <Text style={styles.title}>My Wallet</Text>
                    <View style={styles.balance}>
                        <Text style={styles.balanceTitle}>Current Balance</Text>
                        <Text style={styles.balancePrice}>$17,679.31</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable style={styles.buttonItem}>
                            <SendIcon />
                            <Text style={styles.buttonItemText}>Send</Text>
                        </Pressable>
                        <Pressable style={styles.buttonItem} onPress={onBuy}>
                            <BuyIcon />
                            <Text style={styles.buttonItemText}>Buy</Text>
                        </Pressable>
                        <Pressable style={styles.buttonItem} onPress={onSearch}>
                            <ReceiveIcon />
                            <Text style={styles.buttonItemText}>Receive</Text>
                        </Pressable>
                        <Pressable style={styles.buttonItem} onPress={onList}>
                            <SwapIcon />
                            <Text style={styles.buttonItemText}>Swap</Text>
                        </Pressable>
                    </View>
                    {props.children}
                </View>
            </ScrollView>
            
            <BottomModal height={500} ref={bottomModalRef}
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    zIndex: 100000000,
                }}
            >
                {/* Your Content */}
                <View style={{ flexDirection: 'column', width: '100%' }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingTop: 40,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 22
                    }}>
                        <Pressable style={{
                            backgroundColor: 'rgba(124, 102, 235, 0.1)',
                            borderTopLeftRadius: 6,
                            borderBottomLeftRadius: 6,
                            paddingTop: 12,
                            paddingBottom: 12,
                            paddingLeft: 40,
                            paddingRight: 40
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                                color: '#7C66EB',
                            }}>Buy</Text>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: '#F2F6FA',
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            paddingTop: 12,
                            paddingBottom: 12,
                            paddingLeft: 40,
                            paddingRight: 40
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                                color: '#485068',
                                opacity: 0.5,
                            }}>Sell</Text>
                        </Pressable>
                    </View>
                    <View style={{
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 2,
                        borderColor: '#F2F6FA',
                        borderRadius: 12,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            paddingLeft: 16,
                            paddingTop: 12,
                            paddingBottom: 12,
                            flex: 3,
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: 'rgba(22, 37, 52, 0.5)',
                            }}>YOU PAY</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>400|</Text>
                        </View>
                        <View style={{
                            flex: 2,
                            backgroundColor: 'rgba(68, 189, 255, 0.1)',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 12,
                            paddingRight: 12,
                            justifyContent: 'space-around'
                            // border-radius: 0px 10px 10px 0px;
                        }}>
                            <Image source={ require('../../../assets/images/users/avatar.png') } />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>Ann</Text>
                            <Image source={ require('../../../assets/images/users/bottomArrow.png') } />
                        </View>
                    </View>
                    <View style={{
                        marginTop: 8,
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 2,
                        borderColor: '#F2F6FA',
                        borderRadius: 12,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            paddingLeft: 16,
                            paddingTop: 12,
                            paddingBottom: 12,
                            flex: 3,
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: 'rgba(22, 37, 52, 0.5)',
                            }}>RECEIVE</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>~0.3468</Text>
                        </View>
                        <View style={{
                            flex: 2,
                            backgroundColor: 'rgba(68, 189, 255, 0.1)',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 12,
                            paddingRight: 12,
                            justifyContent: 'space-around'
                            // border-radius: 0px 10px 10px 0px;
                        }}>
                            <Image source={ require('../../../assets/images/users/Bitcoin.png') } />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>BTC</Text>
                            <Image source={ require('../../../assets/images/users/bottomArrow.png') } />
                        </View>
                    </View>
                    <View style={{
                        paddingTop: 22,
                        paddingBottom: 28,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 12,
                            textAlign: "center",
                            color: '#162534',
                        }}>1 BTC = ~143.23 ETH</Text>
                    </View>
                    <View style={{ paddingBottom: 40 }}>
                        <Pressable 
                            style={{
                                paddingTop: 16,
                                paddingBottom: 16,
                                backgroundColor: '#7C66EB',
                                borderRadius: 4,
                                marginLeft: 20,
                                marginRight: 20,
                                position: 'relative',
                            }}
                            onPress={onClose}
                        >
                            <Text
                                style={{
                                    width: '100%',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                }}
                            >Buy Now</Text>
                        </Pressable>
                    </View>
                </View>
            </BottomModal>
            <BottomModal height={600} ref={bottomSearchRef}
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#F8FAFC',
                    paddingBottom: 100
                }}
            >
                <View 
                    style={{
                        position: 'relative',
                        paddingRight: 20,
                        paddingLeft: 20,
                        width: '100%',
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 20,
                            paddingBottom: 15
                        }}
                    >
                        <Pressable
                            onPress={onSearchClose}
                        >
                            <LeftArrowIcon />
                        </Pressable>
                        <Pressable onPress={() => { 
                            onSearchClose()
                            onReceive()
                        }}>
                            <Text>Done</Text>
                        </Pressable>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#EAEBF2',
                            borderRadius: 8,
                            padding: 8,
                            paddingLeft: 12,
                            marginBottom: 30,
                        }}
                    >
                        <View>
                            <FontAwesome name="search" size={24} color="#98A1AA" />
                        </View>
                        <View>
                            <TextInput 
                                placeholder="Search"
                                style={{ 
                                    position: 'relative',
                                    // width: 'auto',
                                    width: '100%'
                                }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        style={{
                            flexDirection: 'column',
                        }}
                    >
                        {coins.map((ele, index) => 
                            <View 
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    paddingLeft: 20,
                                    paddingRight: 12,
                                    backgroundColor: '#FFFFFF',
                                    // backgroundColor: '#124921',
                                    borderRadius: 8,
                                    marginBottom: 6
                                }}
                            >
                                <View 
                                    style={{ 
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image source={ ele.image } />
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                            color: '#162534',
                                            paddingLeft: 8
                                        }}
                                    >{ele.title}</Text>
                                </View>
                                <View>
                                    
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        // onValueChange={toggleSwitch}
                                        // value={isEnabled}
                                    />
                                </View>
                            </View>
                        )}
                    </ScrollView>
                    <Pressable onPress={onListClose}>
                        <Text>Hello</Text>
                    </Pressable>
                </View>
            </BottomModal>
            <BottomModal height={550}
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                }}
            >
                <View 
                    style={{
                        position: 'relative',
                        width: '100%',
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 20
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Pressable onPress={onListClose}>
                            <LeftArrowIcon />
                        </Pressable>
                        <DiagramIcon />
                    </View>
                    <View style={{
                    }}>
                        <View style={{
                            paddingTop: 10, 
                        }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    color: '#485068',
                                    opacity: 0.8,
                                }}
                            >Ethereum</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                paddingTop: 8
                            }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 26,
                                        color: '#162534',
                                        lineHeight: 26
                                    }}
                                >$17,679.31</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                    <UpArrowIcon />
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#60BA62',
                                    }}>$12.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 50 }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 52,
                                        color: '#162534',
                                        lineHeight: 52,
                                    }}
                                >0</Text>
                                <View style={{
                                    borderRightWidth: 2,
                                    borderRightColor: '#162534',
                                    opacity: 0.7,
                                    height: '100%',
                                    marginLeft: 5,
                                    marginRight: 5
                                }}></View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 52,
                                        color: '#162534',
                                        opacity: 0.7,
                                        lineHeight: 52
                                    }}
                                >ETH</Text>
                            </View>
                            <View style={{
                                paddingTop: 10
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 12,
                                    color: '#162534',
                                    opacity: 0.7,
                                    textAlign: 'center'
                                }}>Accounts require a minimum balance of 0.1 Algos</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 50 }}>
                            <View style={{
                                flexDirection: 'row',
                                paddingBottom: 30
                            }}>
                                <View style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    borderRadius: 6,
                                    alignItems: 'center',
                                    flex: 1,
                                    marginRight: 4,
                                    paddingTop: 16,
                                    paddingBottom: 12
                                }}>
                                    <SendIcon />
                                    <Text>Send</Text>
                                </View>
                                <View style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    borderRadius: 6,
                                    alignItems: 'center',
                                    flex: 1,
                                    marginRight: 4,
                                    marginLeft: 4,
                                    paddingTop: 16,
                                    paddingBottom: 12
                                }}>
                                    <ReceiveIcon />
                                    <Text>Receive</Text>
                                </View>
                                <View style={{
                                    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    borderRadius: 6,
                                    alignItems: 'center',
                                    flex: 1,
                                    marginLeft: 4,
                                    paddingTop: 16,
                                    paddingBottom: 12
                                }}>
                                    <CopyIcon />
                                    <Text>Copy</Text>
                                </View>
                            </View>
                            <View style={{
                            }}>
                                <Pressable style={{
                                    backgroundColor: '#7C66EB',
                                    borderRadius: 4,
                                    paddingTop: 16,
                                    paddingBottom: 16
                                }}>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                        color: '#FFFFFF',
                                        textAlign: 'center'
                                    }}>Buy Ethereum</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </BottomModal>
            <BottomModal height={600}
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#F8FAFC',
                }}
            >
                <ScrollView 
                    style={{
                        position: 'relative',
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: '100%',
                        paddingTop: 20,
                    }}
                >
                    <View style={{
                        paddingBottom: 20,
                    }}>
                        <Pressable onPress={onListClose}>
                            <LeftArrowIcon />
                        </Pressable>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 12,
                            marginBottom: 12,
                            padding: 20
                        }}
                    >
                        <View 
                            style={{
                                flexDirection: 'row',
                                paddingBottom: 16,
                            }}
                        >
                            <Text 
                                style={{
                                    flex: 1,
                                    paddingTop: 13,
                                    paddingBottom: 13,
                                    color: '#A2A4A8',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}
                            >Day</Text>
                            <Text
                                style={{
                                    flex: 1,
                                    paddingTop: 13,
                                    paddingBottom: 13,
                                    color: '#7C66EB',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    backgroundColor: 'rgba(124, 102, 235, 0.1)',
                                    borderRadius: 8,
                                }}
                            >Week</Text>
                            <Text
                                style={{
                                    flex: 1,
                                    paddingTop: 13,
                                    paddingBottom: 13,
                                    color: '#A2A4A8',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}
                            >Month</Text>
                            <Text
                                style={{
                                    flex: 1,
                                    paddingTop: 13,
                                    paddingBottom: 13,
                                    color: '#A2A4A8',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}
                            >Year</Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    color: '#162534',
                                }}
                            >$17,679.31</Text>
                            <View style={{
                                paddingTop: 8,
                                flexDirection: 'row'
                            }}>
                                <UpArrowCircleIcon />
                                <Text
                                    style={{
                                        color: '#60BA62',
                                        fontWeight: 'bold',
                                        fontSize: 16
                                    }}
                                >12.34% (+$13.66)</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 12,
                            padding: 20,
                            marginBottom: 12
                        }}
                    >
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: '#162534',
                        }}>Description</Text>
                        <Text
                            style={{
                                fontSize: 14,
                                lineHeight: 20,
                                paddingTop: 4,
                                color: '#162534',
                            }}
                        >
                            Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.
                        </Text>
                        <View
                            style={{
                                borderColor: '#98A1AA',
                                borderBottomWidth: 1,
                                paddingTop: 16,
                            }}
                        ></View>
                        <View 
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 16,
                            }}
                        >
                            <Text>www.ethereum.org</Text>
                            <RightArrowIcon />
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 12,
                            padding: 20,
                            paddingTop: 12,
                            paddingBottom: 30,
                            marginBottom: 120
                            // paddingBottom: 100,
                        }}
                    >
                        <View style={{
                            paddingBottom: 20
                        }}>
                            {prices.map( (e, index) => 
                                <View style={{
                                    borderBottomColor: '#98A1AA',
                                    borderBottomWidth: index == 3 ? 0 : 1,
                                    paddingTop: 12,
                                    paddingBottom: 12
                                }} key={index}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            color: '#98A1AA',
                                        }}
                                    >{e.title}</Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                            color: '#162534',
                                        }}
                                    >{e.price}</Text>
                                </View>
                            )}
                        </View>
                        <Pressable
                            style={{
                                paddingTop: 12,
                                paddingBottom: 12,
                                backgroundColor: 'rgba(124, 102, 235, 0.1)',
                                borderRadius: 4,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    color: '#7C66EB',
                                    textAlign: 'center'
                                }}
                            >View on CoinMarketCap</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </BottomModal>
            <BottomModal height={500} ref={bottomReceiveRef}
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#F8FAFC',
                }}
            >
                <ScrollView
                    style={{
                        position: 'relative',
                        padding: 20,
                        width: '100%',
                    }}
                >
                    <Pressable 
                        onPress={() => {
                            onReceiveClose()
                            onSearch()
                        }} 
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <LeftArrowIcon />
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#162534'
                            }}
                        >Receive BTC</Text>
                    </Pressable>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingTop: 16,
                        }}
                    >
                        <IdentifyImage />
                    </View>
                    <View 
                        style={{
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 16,
                            marginBottom: 16,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 10,
                            padding: 10
                        }}
                    >
                        <Text   
                            numberOfLines={1}
                        >1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</Text>
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: '#162534',
                        }}
                    >Send only BTC to this address otherwise your funds will be completely lost</Text>
                    <View  
                        style={{
                            paddingTop: 24
                        }}
                    >
                        <Pressable
                            style={{
                                paddingTop: 16,
                                paddingBottom: 16,
                                backgroundColor: 'rgba(124, 102, 235, 0.1)',
                                borderRadius: 4,
                                marginBottom: 150,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#7C66EB',
                                    textAlign: "center"
                                }}
                            >Copy</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </BottomModal>
            <BottomModal height={500} ref={bottomBuyModalRef}
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#F8FAFC',
                }}
            >
                <ScrollView
                    style={{
                        position: 'relative',
                        padding: 20,
                        width: '100%',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <Pressable onPress={onListClose}>
                            <LeftArrowIcon />
                        </Pressable>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#162534',
                                paddingLeft: 4
                            }}
                        >Buy Bitcoin</Text>
                    </View>
                    <View style={{
                        paddingTop: 60,
                        paddingBottom: 60
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 52,
                                    color: 'rgba(22, 37, 52, 0.41)',
                                }}
                            >$</Text>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 52,
                                    color: '#162534',
                                }}
                            >150</Text>
                            <View
                                style={{
                                    borderRightWidth: 2,
                                    paddingLeft: 8,
                                    borderColor: 'rgba(22, 37, 52, 0.41)'
                                }}
                            ></View>
                        </View>
                        <Text
                            style={{
                                paddingTop: 4,
                                fontWeight: 'bold',
                                fontSize: 16,
                                textAlign: 'center',
                                color: '#162534'
                            }}
                        >~0.00324 BTC</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'rgba(124, 102, 235, 0.1)',
                            borderRadius: 4,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: 18,
                            paddingRight: 18,
                            paddingTop: 12,
                            paddingBottom: 12,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#162534',
                                }}
                            >MoonPay</Text>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    color: '#485068',
                                }}
                            >Third Party Provider</Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#162534',
                                }}
                            >Available</Text>
                        </View>
                    </View>
                    <View style={{
                        paddingTop: 12
                    }}>
                        <Pressable
                            style={{
                                backgroundColor: '#7C66EB',
                                borderRadius: 4,
                                paddingBottom: 16,
                                paddingTop: 16
                            }}
                        >
                            <Text   
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#FFFFFF',
                                    textAlign: 'center'
                                }}
                            >Next</Text>
                        </Pressable>
                    </View>
                </ScrollView>

            </BottomModal>
            <BottomModal height={420} ref={bottomListModalRef}
                style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#F8FAFC',
                }}
            >
                <ScrollView
                    style={{
                        position: 'relative',
                        padding: 20,
                        paddingTop: 50,
                        width: '100%',
                    }}
                >
                    <View style={{
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 2,
                        borderColor: '#F2F6FA',
                        borderRadius: 12,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            paddingLeft: 16,
                            paddingTop: 12,
                            paddingBottom: 12,
                            flex: 3,
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: 'rgba(22, 37, 52, 0.5)',
                            }}>EXCHANGE</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>400|</Text>
                        </View>
                        <View style={{
                            flex: 2,
                            backgroundColor: 'rgba(68, 189, 255, 0.1)',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 12,
                            paddingRight: 12,
                            justifyContent: 'space-around'
                            // border-radius: 0px 10px 10px 0px;
                        }}>
                            <View>
                                <Image 
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                source={ require('../../../assets/images/icons/eth.png') } />
                            </View>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>ETH</Text>
                            <Image source={ require('../../../assets/images/users/bottomArrow.png') } />
                        </View>
                    </View>
                    <View style={{
                        marginTop: 8,
                        marginLeft: 20,
                        marginRight: 20,
                        backgroundColor: '#FFFFFF',
                        borderWidth: 2,
                        borderColor: '#F2F6FA',
                        borderRadius: 12,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            paddingLeft: 16,
                            paddingTop: 12,
                            paddingBottom: 12,
                            flex: 3,
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: 'rgba(22, 37, 52, 0.5)',
                            }}>RECEIVE</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>~0.3468</Text>
                        </View>
                        <View style={{
                            flex: 2,
                            backgroundColor: 'rgba(68, 189, 255, 0.1)',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 12,
                            paddingRight: 12,
                            justifyContent: 'space-around'
                            // border-radius: 0px 10px 10px 0px;
                        }}>
                            <Image source={ require('../../../assets/images/users/Bitcoin.png') } />
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#162534',
                            }}>BTC</Text>
                            <Image source={ require('../../../assets/images/users/bottomArrow.png') } />
                        </View>
                    </View>
                    <View style={{
                        paddingTop: 22,
                        paddingBottom: 28,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 12,
                            textAlign: "center",
                            color: '#162534',
                        }}>1 BTC = ~143.23 ETH</Text>
                    </View>
                    <View style={{ paddingBottom: 40 }}>
                        <Pressable 
                            style={{
                                paddingTop: 16,
                                paddingBottom: 16,
                                backgroundColor: '#7C66EB',
                                borderRadius: 4,
                                marginLeft: 20,
                                marginRight: 20,
                                position: 'relative',
                            }}
                            onPress={onListClose}
                        >
                            <Text
                                style={{
                                    width: '100%',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                }}
                            >Swap</Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </BottomModal>
        </>
    )
}

export default Main;