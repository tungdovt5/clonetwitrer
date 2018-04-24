import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import Input from '../../components/Input';

class Search extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-search" size={25} color={tintColor} />,
  };
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View>
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
          <Input
            text=" Tìm kiếm Twitter"
            color="gray"
            style={{
              width: 280,
              height: 40,
              marginLeft: 5,
              marginTop: 20,
              borderWidth: 1,
              borderRadius: 34,
              backgroundColor: '#D7D5D7',
              opacity: 0.5,
            }}
          />
          <TouchableOpacity style={{ marginTop: 20, marginRight: 10 }}>
            <Icon name="ios-person-add-outline" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Search;
