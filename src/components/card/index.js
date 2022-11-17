import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import CircularProgress from 'react-native-circular-progress-indicator';
import {COLORS} from '../../utils/constants';

const Card = ({name, age, distance, image}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <Image
          source={require('../../assets/images/header.png')}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.detailsView}>
        <View style={styles.detailsText}>
          <Text style={styles.fontStyle()}>Age {age}</Text>
          <Text style={styles.fontStyle(true)}>{name}</Text>
          <Text style={styles.fontStyle()}>{distance}</Text>
        </View>
        <View style={styles.detailsImageView}>
          <Image
            source={image ? image : require('../../assets/images/ranveer.jpeg')}
            style={styles.detailsImage}
          />
        </View>
      </View>
      <View style={styles.circularProgress}>
        <CircularProgress
          value={75}
          radius={20}
          circleBackgroundColor={COLORS.WHITE}
          activeStrokeColor={COLORS.MEDIUM_GREY}
          progressValueColor={COLORS.BLACK}
        />
      </View>
    </View>
  );
};
export default Card;
