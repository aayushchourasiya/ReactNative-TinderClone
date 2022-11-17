import {Animated, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Card from '../card';
import HobbySection from '../hobbySection';
import {COLORS} from '../../utils/constants';
import ActionButton from '../actionButton';

const Profile = ({
  name,
  age,
  image,
  distance,
  item,
  isFirst,
  swipeRef,
  handleButtonPress,
  setScrollViewHeight,
  scrollViewHeight,
  ...rest
}) => {
  const [hobbySection, setHobbySection] = useState([]);
  const [hobbySection1, setHobbySection1] = useState([]);
  const [hobbySection2, setHobbySection2] = useState([]);

  useEffect(() => {
    // if (item?.interests) {
    //   const interests = item?.interests?.length;
    //   const media = item?.media?.length;
    //   if (media) {
    //     let number = interests / (media + 1);
    //     const isRem = interests % (media + 1);
    //     if (isRem) {
    //       number += 1;
    //     }
    //     if (media === 1) {
    //       setHobbySection(item?.interests?.slice(0, number));
    //       setHobbySection1(item.interests?.slice(number, interests));
    //     }
    //     if (media === 2) {
    //       setHobbySection(item?.interests?.slice(0, number));
    //       setHobbySection1(item.interests?.slice(number, number + number));
    //       setHobbySection2(item.interests?.slice(number + number, interests));
    //     }
    //     if (media === 3) {
    //       setHobbySection(item?.interests?.slice(0, 2));
    //       setHobbySection1(item.interests?.slice(2, 4));
    //       setHobbySection2(item.interests?.slice(4, 6));
    //     }
    //   }
    // }
    if (item?.interests) {
      if (item?.interests?.length === 2) {
        setHobbySection(item?.interests?.slice(0, 1));
        setHobbySection1(item?.interests?.slice(1, 2));
        return;
      }
      if (item?.interests?.length === 6 && item?.media?.length === 1) {
        setHobbySection(item?.interests?.slice(0, 3));
        setHobbySection1(item?.interests?.slice(3, 6));
        return;
      }
      setHobbySection(item?.interests?.slice(0, 2));
      setHobbySection1(item?.interests?.slice(2, 4));
      setHobbySection2(item?.interests?.slice(4, 6));
    }
  }, [item]);

  const rotate = swipeRef.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-8deg', '0deg', '8deg'],
  });

  const animatedProfileStyle = {
    transform: [...swipeRef.getTranslateTransform(), {rotate}],
  };

  return (
    <Animated.View
      style={[styles.mainContainer, isFirst && animatedProfileStyle]}
      {...rest}
      onLayout={({nativeEvent}) => {
        if (scrollViewHeight === 0 && isFirst) {
          setScrollViewHeight(nativeEvent.layout.height);
        }
      }}>
      <Card name={name} age={age} image={image} distance={distance} />
      <HobbySection
        hobbySection={hobbySection}
        condition={item?.media?.length > 0}
        media={item?.media[0]}
      />

      <HobbySection
        hobbySection={hobbySection1}
        condition={item?.media?.length >= 2}
        media={item?.media[1]}
      />

      <HobbySection
        hobbySection={hobbySection2}
        condition={item?.media?.length > 2}
        media={item?.media[2]}
      />

      <View style={styles.actionButtonsContainer}>
        <ActionButton
          condition={true}
          onPressIn={() => {
            handleButtonPress(-1);
          }}
          icon={'close'}
          color={COLORS.RED}
        />
        <ActionButton
          condition2={true}
          onPressIn={() => {
            handleButtonPress(1);
          }}
          icon={'heart-outline'}
          color={COLORS.LIGHT_BLUE}
        />
      </View>
    </Animated.View>
  );
};

export default Profile;
