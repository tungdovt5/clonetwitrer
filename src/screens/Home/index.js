import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

export default class Home extends Component {
  onPress = () => {};
  render() {
    const { width, height } = Dimensions.get('window');
    console.log(this.props.navigation);
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Image
          style={{
            width: 40,
            height: 40,
            marginLeft: 50,
            marginTop: 50,
          }}
          source={require('../../../Image/1.png')}
        />
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            position: 'absolute',
            marginTop: 260,
            width: 230,
            height: 120,
            marginLeft: 65,
          }}
        >
          Xem chuyện gì đang xảy ra trên thế giới ngay lúc này.
        </Text>
        <TouchableOpacity
          style={{
            width: 250,
            height: 50,
            borderRadius: 42,
            borderWidth: 3,
            marginTop: 280,
            marginLeft: 60,
            backgroundColor: '#00A3E3',
            borderColor: '#00A3E3',
          }}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        >
          <Text
            style={{
              color: 'white',
              marginTop: 10,
              marginLeft: 85,
              fontSize: 20,
            }}
          >
            bắt đầu
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 180, flex: 1, flexDirection: 'row' }}>
          <Text style={{ color: 'grey', marginLeft: 60 }}>Bạn đã có một tài khoản?</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}
          >
            <Text style={{ color: '#00A3E3' }}>đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
