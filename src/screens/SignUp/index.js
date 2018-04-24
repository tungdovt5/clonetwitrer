import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';

export default class SignUp extends Component {
  componentDidMount() {
    console.log('ádas');
  }
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            width,
            position: 'absolute',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderColor: 'white',
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 10 }}>Huỷ</Text>
          </TouchableOpacity>
          <Image
            source={require('../../../Image/1.png')}
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          />
          <TouchableOpacity style={{ marginTop: 20, marginRight: 10 }}>
            <Icon name="ios-more-outline" size={40} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 26,
            color: 'black',
            marginTop: 80,
            marginLeft: 20,
          }}
        >
          Xin chào.Tên của bạn là gì?
        </Text>
        <Input
          text="tên đầy đủ"
          color="gray"
          style={{
            marginLeft: 20,
            marginTop: 30,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
            borderTopWidth: 1,
            marginTop: 460,
            height: 50,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 20,
              width: 80,
              marginTop: 10,
              height: 30,
              marginLeft: 280,
              opacity: 0.5,
              backgroundColor: '#009DDB',
              borderColor: 'gray',
            }}
          >
            <Text style={{ marginLeft: 10, marginTop: 5, color: 'white' }}>tiếp theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
