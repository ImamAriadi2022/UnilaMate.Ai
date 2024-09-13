import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';

const WebViewComponent = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://your-web-app-url.com' }} 
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});

export default WebViewComponent;
