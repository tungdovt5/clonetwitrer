import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ text, color, style }) => (
  <TextInput style={style} placeholder={text} placeholderTextColor={color} />
);

export default Input;
