// App.tsx
import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native'

import NativeOTel from './specs/NativeOTel'

function App(): React.JSX.Element {
  const [result, setResult] = useState<string>('')

  const testNativeModule = () => {
    try {
      const sum = NativeOTel.addNumbers(42, 122)

      const testResults = `
🔢 Math Test: 42 + 122 = ${sum}
🎉 Native module is working!
      `.trim()

      setResult(testResults)

    } catch (error) {
      Alert.alert('Error', `Failed to call native module: ${error}`)
      setResult('❌ Native module failed')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🦀 React Native + Rust OTel</Text>
        <Text style={styles.subtitle}>C++ Hello World Test</Text>

        <Button
          title="Test Native Module"
          onPress={testNativeModule}
        />

        {result ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        ) : (
          <Text style={styles.placeholder}>
            Tap the button to test your C++ module!
          </Text>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#e8f5e8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  resultText: {
    fontSize: 16,
    fontFamily: 'monospace',
    lineHeight: 24,
  },
  placeholder: {
    marginTop: 30,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
})

export default App
