import React, { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const AudioDownloader = () => {
  const [status, setStatus] = useState('');
  const [filePath, setFilePath] = useState('');

  const fetchAudio = async () => {
    setStatus('Fetching...');
    try {
        const response = await RNFetchBlob.config({
            path: RNFetchBlob.fs.dirs.DownloadDir + '/audio.mp3' // Saves in Downloads folder (Android only)
          }).fetch('POST', 'http://10.0.2.2:5000/execute', {
            'Content-Type': 'application/json',
          }, JSON.stringify({ input: ['got', 's1'] }));

      const filePath = response.path();
      setFilePath(filePath);
      setStatus(`Downloaded: ${filePath}`);
      console.log('File saved to:', filePath);
      Alert.alert('Success', `File saved to: ${filePath}`);
    } catch (error) {
      console.error('Error fetching audio:', error);
      setStatus('Error fetching audio');
    }
  };

  return (
    <View style={{ padding: 88 }}>
      <Button title="Download Audio" onPress={fetchAudio} />
      <Text>{status}</Text>
      <Text>{filePath}</Text>
    </View>
  );
};

export default AudioDownloader;