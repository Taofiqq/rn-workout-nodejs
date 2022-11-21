import {StyleSheet, Text, TextInput, Button, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UpdateWorkout = ({id, getWorkouts}) => {
  const [newTitle, setNewTitle] = useState('');

  let baseUrl = 'http://172.29.103.223:3000';

  const updateWorkout = async () => {
    try {
      const {data} = await axios.patch(`${baseUrl}/update/${id}`, {
        newTitle: newTitle,
      });
      console.log(data, id);
      getWorkouts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Workout Title"
        value={newTitle}
        onChangeText={text => setNewTitle(text)}
      />
      <Button title="Update Workout" onPress={updateWorkout} />
    </View>
  );
};

export default UpdateWorkout;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
