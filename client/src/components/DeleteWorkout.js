import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import axios from 'axios';

const DeleteWorkout = ({id, getWorkouts}) => {
  let baseUrl = 'http://172.29.103.223:3000';

  const deleteWorkout = async () => {
    try {
      const {data} = await axios.delete(`${baseUrl}/delete/${id}`);
      console.log(data);
      getWorkouts();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Button title="Delete Workout" onPress={deleteWorkout} />
    </View>
  );
};

export default DeleteWorkout;

const styles = StyleSheet.create({});
