import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

function ToDoList({items}) {
  // const {items} = props;

  const renderItem = [];
  for (const item of items) {
    const rendered = (
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>{item}</Text>
        </View>
      </Pressable>
    );

    renderedItems.push(rendered)

  return (
    <ScrollView>
        {renderedItems}
      </ScrollView>
     
  );
}
      const styles = StyleSheet.create({
        task: {
          padding: 10,
          borderBottomWidth: 1,
          borderColor: '#ccc',
        },
        completed: {
          backgroundColor: '#e0e0e0',
        },
        taskText: {
          fontSize: 16,
        },
        form: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 20,
        },
        input: {
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginRight: 10,
        },
      });
export default ToDoList;