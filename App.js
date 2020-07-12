import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpeg') },
  { id: 2, imgSource: require('./assets/2.jpeg') },
  { id: 3, imgSource: require('./assets/3.jpeg') },
  { id: 4, imgSource: require('./assets/4.jpeg') },
  { id: 5, imgSource: require('./assets/5.jpeg') },
  { id: 6, imgSource: require('./assets/6.jpeg') }
];

const centerImgData = Math.floor(imgData.length / 2);

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headGroup}>
        <View style={styles.avatarWrap}>
          <Image style={styles.avatarImage} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>Sieu Thai</Text>
          <Text style={styles.jobText}>Developer</Text>
          <View style={styles.buttonWrap}>
            <TouchableOpacity style={styles.buttonFollow}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSendMessage}>
              <Feather name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.countGroup}>
        <View style={styles.countItem}>
          <View style={styles.countNumber}></View>
          <View style={styles.countText}></View>
        </View>
        <View style={styles.countItem}>
          <View style={styles.countNumber}></View>
          <View style={styles.countText}></View>
        </View>
        <View style={styles.countItem}>
          <View style={styles.countNumber}></View>
          <View style={styles.countText}></View>
        </View>
      </View>

      <ScrollView 
      contentContainerStyle={{
        flex:0.6,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <View style={{flexDirection:'column'}}>
          {imgData.slice(0, centerImgData).map(item => {
            return (
              <Image 
                source={item.imgSource}
                style={{
                  width:150,
                  height:150
                }}              
              />
            );
          })}
        </View>
        <View style={{flexDirection:'column'}}>
          {imgData.slice(centerImgData).map(item => {
            return (
              <Image 
                source={item.imgSource}
                style={{
                  width:150,
                  height:150
                }}              
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headGroup:{
    flex:0.25,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  countGroup:{
    flex:0.15
  },
  avatarWrap:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  avatarImage:{
    width:120,
    height:120
  },
  userInfo:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center'
  },
  nameText:{
    fontSize:20,
    fontWeight:'bold',
    color:'gray'
  },
  jobText:{
    fontSize:20,
    fontWeight:'400',
    color:'gray'
  },
  buttonFollow:{
    backgroundColor: FOLLOW_COLOR,
    width:120,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30
  },
  buttonSendMessage:{
    backgroundColor: SEND_MESSAGE_COLOR,
    width:70,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },
  followText:{
    fontWeight:'700',
    color: 'white',
    fontSize:20
  },
  countGroup:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  countItem:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  countNumber:{
    fontSize: 25,
    fontWeight: 'bold',
    color:'gray'
  },
  countText:{
    fontSize: 20,
    fontWeight: '400',
    color:'gray'
  },
});
