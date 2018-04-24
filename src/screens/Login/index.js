import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Input from '../../components/Input';

export default class Login extends Component {
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
          Đăng nhập vào Twitter
        </Text>
        <Input
          text="Email,Số Điện Thoại hoặc tên người dùng"
          color="gray"
          style={{
            marginLeft: 20,
            marginTop: 30,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          }}
        />
        <Input
          text="Mật khẩu"
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
            width,
            height: 40,
            marginTop: 410,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderColor: 'gray',
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                marginTop: 15,
                fontSize: 15,
                color: '#009DDB',
                marginLeft: 10,
              }}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 13,
              height: 30,
              marginTop: 10,
              opacity: 0.5,
              backgroundColor: '#009DDB',
              borderColor: 'gray',
              marginRight: 5,
            }}
            onPress={() => {
              this.props.navigation.navigate('TabMenu');
            }}
          >
            <Text style={{ marginLeft: 5, marginTop: 5, color: 'white' }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
