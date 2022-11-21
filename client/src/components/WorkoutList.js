import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DeleteWorkout from './DeleteWorkout';
import UpdateWorkout from './UpdateWorkout';

const WorkoutList = () => {
  const [data, setData] = useState([]);
  let baseUrl = 'http://172.29.103.223:3000';

  useEffect(() => {
    getWorkouts();
  }, []);

  const getWorkouts = async () => {
    try {
      const {data} = await axios.get(`${baseUrl}/workouts`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (data.length === 0) {
    return (
      <View>
        <Text>No workouts yet</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>WorkoutList</Text>
      {data.map((workout, index) => {
        return (
          <View key={index}>
            <Text>{workout.title}</Text>
            <Text>{workout.reps} reps</Text>
            <Text>{workout.load}kg</Text>
            {/* <UpdateWorkout id={workout._id} getWorkouts={getWorkouts} /> */}
            <DeleteWorkout id={workout._id} getWorkouts={getWorkouts} />
          </View>
        );
      })}
    </View>
  );
};

export default WorkoutList;

const styles = StyleSheet.create({});
