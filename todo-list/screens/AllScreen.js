import React, { Component } from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
//import  {TODOS}  from '../utils/data';

const TODOS = [
    {
      id: 1,
      status: 'Done',
      body: 'Read Instructions'
    },
    {
      id: 2,
      status: 'Done',
      body: 'Think a bit'
    },
    {
      id: 3,
      status: 'Done',
      body: "Google 'How to build todo app"
    },
    {
      id: 4,
      status: 'Done',
      body: 'Read results from Google'
    },
    {
      id: 5,
      status: 'Done',
      body: "Google 'How to build todo app using React Native"
    },
    {
      id: 6,
      status: 'Active',
      body: 'Read results from Google again'
    },
    {
      id: 7,
      status: 'Active',
      body: 'Spend some more time thinking'
    },
    {
      id: 8,
      status: 'Active',
      body: 'Use knowledge gained at CoderSchool to build new todo app'
    }
  ];

function addNewTodo(todobody) {
    //add new item to TODOS
}

function AllScreen () {
    return (
        <View>
            <FlatList 
                data={TODOS}
                renderItem={({item}) => (
                        <View style={{
                            margin:5,
                            flexDirection: 'row',
                            backgroundColor: item.status === "Done" ? 'yellow' : 'gray'
                        }}>
                            <Text style={{margin: 5}}>{item.id}</Text>
                            <Text style={{margin: 5}}>{item.body}</Text>
                        </View>
                    )
                }
                ListFooterComponent={
                    <View>
                    <TextInput
                        style={{margin:5}}
                        placeholder="Add todo item"
                        autoFocus={true}
                        //onChangeText={text => onChangeText(todobody)}
                    />
                    <View style={{margin:5}}>
                        <Button 
                        title="Submit" 
                        //onPress={() => addNewTodo(todobody) }
                        />
                    </View>
                    </View>
                }
                
            >

            </FlatList>
        </View>
    )
}
export default AllScreen