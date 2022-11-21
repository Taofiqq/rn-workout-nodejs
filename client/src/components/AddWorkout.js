import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddWorkout = () => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');

  let baseUrl = 'http://172.29.103.223:3000';

  const addWorkout = async () => {
    try {
      const {data} = await axios.post(`${baseUrl}/create`, {
        title,
        reps,
        load,
      });
      console.log(data);
      setTitle('');
      setReps('');
      setLoad('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Workout Title"
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Reps"
        value={reps}
        onChangeText={text => setReps(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Load"
        value={load}
        onChangeText={text => setLoad(text)}
        style={styles.input}
      />
      <Button title="Create New Workout" onPress={addWorkout} />
    </View>
  );
};

export default AddWorkout;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
