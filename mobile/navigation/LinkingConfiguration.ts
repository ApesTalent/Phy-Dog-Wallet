/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            screens: {
              Dashboard: 'dashboard',
            },
          },
          Storage: {
            screens: {
              Storage: 'storage',
            },
          },
          Cloud: {
            screens: {
              Cloud: 'cloud',
            },
          },
          // Wallet: {
          //   screens: {
          //     Wallet: 'wallet',
          //   },
          // },
          Support: {
            screens: {
              Support: 'support',
            },
          },
        },
      },
      // WalletCreate: {
      //   screens: {
      //     Terms: {
      //       screens: {
      //         Terms: 'terms',
      //       }
      //     },
      //     BackUp: {
      //       screens: {
      //         BackUp: 'backup',
      //       }
      //     }
      //   }
      // },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
