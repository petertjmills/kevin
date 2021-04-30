import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { useFonts } from 'expo-font';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    JaldiBold: require('./assets/fonts/Jaldi-Bold.ttf'),
    JaldiReg: require('./assets/fonts/Jaldi-Regular.ttf'),
    OpenSansSemiBoldItalic: require('./assets/fonts/OpenSans-SemiBoldItalic.ttf'),
    OpenSansReg: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansItalic: require('./assets/fonts/OpenSans-Italic.ttf'),
  });

  if (!isLoadingComplete && !loaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
