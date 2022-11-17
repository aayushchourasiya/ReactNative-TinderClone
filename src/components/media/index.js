import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Media = ({heading, image}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <View>
        <Image
          source={
            image ? image : require('../../assets/images/ranveer_media.jpeg')
          }
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Media;
