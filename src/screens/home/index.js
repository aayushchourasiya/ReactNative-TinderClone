import {Animated, PanResponder, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import Profile from '../../components/profile';
import {dataArray} from '../../utils/data';
import {useSelector} from 'react-redux';
import {WINDOW_WIDTH} from '../../utils/helper';
const Home = () => {
  const swipeRef = useRef(new Animated.ValueXY()).current;

  const [profilesArray, setProfilesArray] = useState([]);

  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const [enableSwipe, setEnableSwipe] = useState(false);

  const {introComplete} = useSelector(state => state);

  useEffect(() => {
    //Calling dummy api
    (async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      data.json().then(res => console.log('Fake API console=>', res));
    })();
  }, []);

  useEffect(() => {
    if (!profilesArray?.length) {
      setProfilesArray([...dataArray]?.reverse());
    }
  }, [profilesArray]);

  //For handling swiping gestures
  const onSwipe = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, {dx, dy}) => {
      swipeRef.setValue({x: dx, y: dy});
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);

      //For checking if swipe is completed or not
      const isActionActive = Math.abs(dx) > 100;

      if (isActionActive) {
        Animated.timing(swipeRef, {
          duration: 200,
          toValue: {
            x: direction * WINDOW_WIDTH * 2,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeFirstProfile);
      } else {
        Animated.spring(swipeRef, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeFirstProfile = () => {
    const array = [...profilesArray];
    array.pop();
    setProfilesArray(array);
    swipeRef.setValue({x: 0, y: 0});
    setScrollViewHeight(0);
    setTimeout(() => {
      setEnableSwipe(false);
    }, 500);
  };

  const handleButtonPress = direction => {
    Animated.timing(swipeRef.x, {
      toValue: direction * 500,
      duration: 400,
      useNativeDriver: true,
    }).start(removeFirstProfile);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle(
          introComplete ? scrollViewHeight : 0,
        )}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={500}
        bounces={false}
        alwaysBounceVertical={false}
        onScroll={({nativeEvent}) => {
          //For getting scroll position
          const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;
          const paddingToBottom = 20;
          if (
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom
          ) {
            setEnableSwipe(true);
          } else {
            setEnableSwipe(false);
          }
        }}>
        {profilesArray?.map((item, index) => {
          const isFirst = index === profilesArray?.length - 1;
          const dragHandlers =
            isFirst && enableSwipe ? onSwipe.panHandlers : {};
          return (
            <Profile
              key={[...profilesArray, index]}
              name={item.name}
              age={item.age}
              image={item.image}
              distance={item.distance}
              item={item}
              swipeRef={swipeRef}
              isFirst={isFirst}
              handleButtonPress={handleButtonPress}
              setScrollViewHeight={setScrollViewHeight}
              scrollViewHeight={scrollViewHeight}
              {...dragHandlers}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
