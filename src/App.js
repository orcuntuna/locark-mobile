import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import 'mobx-react-lite/batchingForReactNative'
import { Provider } from 'mobx-react'
import Get from './components/Get'
import Send from './components/Send'
import stores from './stores'

function App() {
  return (
    <Provider store={stores}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent={true}
        />
        <Swiper
          showsButtons={false}
          loop={false}
          dotColor={'#bbb'}
          activeDotColor={'#fff'}
        >
          <View testID="Hello" style={styles.slide}>
            <Get />
          </View>
          <View testID="Beautiful" style={styles.slide}>
            <Send />
          </View>
        </Swiper>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
})

export default App
