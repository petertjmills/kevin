import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: '*',
      Root: {
        screens: {
          Calendar: {
            screens: {
              CalendarScreen: 'two',
            },
          },
          Medifriends: {
            screens: {
              MedFriendsScreen: 'one',
            },
          },
          Games: {
            screens: {
              GamesScreen: 'three',
            },
          },
          Blog: {
            screens: {
              BlogScreen: 'four',
            },
          },
          Settings: {
            screens: {
              BlogScreen: 'five',
            },
          }
        },
      },
      NotFound: '*',
      Register: '*',
    },
  },
};
