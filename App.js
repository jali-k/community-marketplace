import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './apps/screens/LoginScreen';

export default function App() {
  return (
    <View >
     <LoginScreen></LoginScreen>
      <StatusBar style="auto" />
    </View>
  );
}

// className="flex-1 items-center justify-center bg-white

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
