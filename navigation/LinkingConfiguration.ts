import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: '*',
      Root: {
        screens: {
          Medifriends: {
            screens: {
              MedFriendsScreen: 'one',
            },
          },
          Calendar: {
            screens: {
              CalendarScreen: 'two',
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
          }
        },
      },
      NotFound: '*',
      Register: '*',
    },
  },
};
