import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WorkoutList from './src/components/WorkoutList';
import AddWorkout from './src/components/AddWorkout';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>List of my workouts</Text>
      <WorkoutList />
      <View style={styles.divider} />
      <AddWorkout />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
  },
});
