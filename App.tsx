import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './store';
import Home from './screen/Home/Home';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Home />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default App;
