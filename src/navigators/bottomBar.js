import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {Fragment} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import Other from '../screens/other';
import {isIOS} from '../utils/helper';
import styles from './styles';
import {useSelector} from 'react-redux';
import IntroScreen from '../components/intro';
import {COLORS} from '../utils/constants';

const BottomBarNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  const {introComplete} = useSelector(state => state);

  const BOTTOM_SCREENS = [
    {name: 'Gift', component: Other, headerShown: false, icon: 'gift-outline'},
    {
      name: 'Chat',
      component: Other,
      headerShown: false,
      icon: 'chatbox-ellipses-outline',
    },
    {name: 'Home', component: Home, headerShown: false},
    {
      name: 'Profile',
      component: Other,
      headerShown: false,
      icon: 'person-circle-outline',
    },
    {
      name: 'Settings',
      component: Other,
      headerShown: false,
      icon: 'settings-outline',
    },
  ];

  const CustomTabBar = props => {
    return <BottomTabBar {...props} />;
  };

  const tabBarOptions = () => {
    if (!isIOS()) {
      return {
        tabBarStyle: {height: 70},
      };
    }
    return {};
  };

  const TabView = ({focused, icon}) => {
    return (
      <View style={styles.imgContainer(focused)}>
        <Icon name={icon} size={focused ? 27 : 25} color={COLORS.BLACK} />
      </View>
    );
  };

  const TabBarCustomButton = props => {
    const {accessibilityState, children, onPress, tabBarOption, index, icon} =
      props || {};
    const {tabBarLabel} = tabBarOption || {};
    const isSelected = accessibilityState.selected;
    if (isSelected) {
      return (
        <Fragment>
          {!introComplete && <IntroScreen />}
          <View style={styles.customBarParent}>
            <View style={isSelected ? styles.tabBarContainer : {}}>
              <View style={styles.tabImageView(isSelected)}>
                <TouchableOpacity activeOpacity={1} onPress={onPress}>
                  {icon ? (
                    children
                  ) : (
                    <Image
                      source={require('../assets/images/home.png')}
                      style={styles.selectedTabIcon}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <Text style={styles.tabBarLabel}>{tabBarLabel}</Text>
            </View>
          </View>
        </Fragment>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={1}
          onPress={() => {
            onPress();
          }}>
          {icon ? (
            children
          ) : (
            <Image
              source={require('../assets/images/home.png')}
              style={styles.notSelectedTabIcon}
            />
          )}
        </TouchableOpacity>
      );
    }
  };

  const renderBottomBarView = () => {
    return BOTTOM_SCREENS?.map((tabBar, index) => {
      return (
        <BottomTab.Screen
          key={tabBar?.name}
          name={tabBar?.name}
          component={tabBar?.component}
          options={{
            tabBarVisible: true,
            tabBarLabel: tabBar?.tabBarLabel,
            tabBarIcon: ({focused, color}, props) => (
              <TabView
                focused={focused}
                color={color}
                icon={tabBar.icon}
                {...props}
              />
            ),
            headerShown: tabBar?.headerShown,
            tabBarButton: props => (
              <TabBarCustomButton
                tabBarOption={tabBar}
                index={index}
                icon={tabBar?.icon}
                {...props}
              />
            ),
          }}
        />
      );
    });
  };

  return (
    <BottomTab.Navigator
      initialRouteName={'Home'}
      tabBar={props => (
        //for custom tab bar
        <View
          style={[
            styles.navigatorContainer,
            isIOS() && styles.iosBottomBarHeight,
          ]}>
          <CustomTabBar {...props} />
        </View>
      )}
      screenOptions={tabBarOptions()}>
      {renderBottomBarView()}
    </BottomTab.Navigator>
  );
};

export default BottomBarNavigator;
