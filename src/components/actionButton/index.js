import {TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const ActionButton = ({condition, condition2, onPressIn, icon, color}) => {
  return (
    <TouchableOpacity
      style={styles.actionButtons(condition, condition2)}
      onPressIn={() => {
        onPressIn();
      }}>
      <Icon name={icon} size={30} color={color} />
    </TouchableOpacity>
  );
};

export default ActionButton;
