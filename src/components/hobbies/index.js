import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Hobbies = ({index, image, heading, description}) => {
  return (
    <View style={styles.mainContainer((index + 1) % 2 === 0)}>
      <View style={styles.imageView((index + 1) % 2 === 0)}>
        <View style={styles.imageContainer}>
          <Image
            source={
              image ? image : require('../../assets/images/basketball.png')
            }
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Hobbies;
