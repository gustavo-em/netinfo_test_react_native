import React from 'react';
import {
  SafeAreaView,Text
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
const App = () => {
  const [statusConnection, setStatusConnection] = React.useState(false)

  React.useEffect(()=>{
    NetInfo.addEventListener(state => {
      console.log(state)
      setStatusConnection(state)
    });
  }, [])

  return (
    <SafeAreaView>
      <Text>Connected: {statusConnection && statusConnection.isConnected ? 'Yes' : 'No'}</Text>
      <Text>is Wifi: {statusConnection && statusConnection.isWifiEnabled ? 'Yes' : 'No'}</Text>      
    </SafeAreaView>
  );
};

export default App;
