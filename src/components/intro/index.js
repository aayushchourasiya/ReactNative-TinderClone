import {
  View,
  Text,
  Image,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import React, {Fragment, useRef} from 'react';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {introCompleteAction} from '../../redux/slices/basicSlice';
import {DEVICE_HEIGHT} from '../../utils/helper';

const IntroScreen = () => {
  const swipeRef = useRef(new Animated.ValueXY()).current;

  const dispatch = useDispatch();

  //To handle Swipe Up functionality of intro screen
  const onSwipeUp = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: (_, {dy}) => {
      const direction = Math.sign(dy); //To get swipe direction
      if (direction === -1) {
        Animated.timing(swipeRef, {
          duration: 300,
          toValue: {
            x: 0,
            y: direction * DEVICE_HEIGHT * 2,
          },
          useNativeDriver: true,
        }).start(() => dispatch(introCompleteAction())); //For not getting intro screen again
      }
    },
  });

  //To show transformation
  const animatedProfileStyle = {
    transform: [...swipeRef.getTranslateTransform()],
  };

  return (
    <Fragment>
      <Animated.View
        style={[styles.introMainContainer, animatedProfileStyle]}
        {...onSwipeUp.panHandlers}
      />
      <Animated.View
        style={[styles.introSecondaryContainer, animatedProfileStyle]}
        {...onSwipeUp.panHandlers}>
        <Text style={styles.introMainText}>If you don't like someone</Text>
        <Text style={styles.introSecondaryText}>
          Swipe up to <Text style={styles.introPassColor}>PASS</Text>
        </Text>

        <View>
          <Image
            source={require('../../assets/images/frame.png')}
            style={styles.deviceFrameImage}
          />
          <Image
            source={require('../../assets/images/scrollup.png')}
            style={styles.scrollUpImage}
          />
        </View>
        <Text style={styles.footerText}>Swipe-up to</Text>
        <Text style={styles.footerText2}>continue</Text>
      </Animated.View>
    </Fragment>
  );
};

export default IntroScreen;
