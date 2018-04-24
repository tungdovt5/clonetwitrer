import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

class Notification extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-notifications-outline" size={25} color={tintColor} />
    ),
  };
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: 'white',
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
            <TouchableOpacity style={{ marginTop: 20, marginLeft: 10 }}>
              <Icon name="ios-contact" size={40} />
            </TouchableOpacity>
            <Text style={{ marginTop: 30, fontSize: 20 }}>Thông báo</Text>
            <TouchableOpacity style={{ marginTop: 20, marginRight: 10 }}>
              <Icon name="ios-settings" size={40} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity>
              <Text>Tất cả</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Đề cập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Notification;
