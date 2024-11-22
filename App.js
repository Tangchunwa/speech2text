import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, Button, View } from 'react-native'; 
import { useEffect, useState } from 'react'; 
import Voice from '@react-native-voice/voice'; // Import the voice recognition library

export default function App() {
  //State to track if speech recognition has started
  let [started, setStarted] = useState(false);
  //Store theresults of the speech recognition
  let [results, setResults] = useState([]);

  useEffect(() => {
    // Set up event listeners for speech recognition
    Voice.onSpeechError = onSpeechError; 
    Voice.onSpeechResults = onSpeechResults; // Handle speech recognition results

    return () => {
      // Cleanup listeners
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []); 

  
  const startSpeechToText = async () => {
    await Voice.start("zh-HK"); // Start recognizing speech in Cantonese
    setStarted(true); // Update state to indicate recognition has started
    setResults([]);
  };

  // Function to stop speech recognition
  const stopSpeechToText = async () => {
    await Voice.stop(); // Stop the speech recognition
    setStarted(false); // Update state to indicate recognition has stopped
    
  };

  // Function to handle successful speech recognition results
  const onSpeechResults = (result) => {
    setResults(result.value); 
  };

  // Function to handle errors during speech recognition
  const onSpeechError = (error) => {
    console.log(error); 
  };
  // Render the UI
  return (
    <View style={styles.container}>
      {/* Conditional rendering of buttons based on recognition state */}
      {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
      {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
      {/* Display recognized results */}
      {results.map((result, index) => <Text key={index}>{result}</Text>)}
      <StatusBar style="auto" /> {/* Control the status bar style */}
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow the container to grow and fill the available space
    backgroundColor: '#fff', // Set background color to white
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
});