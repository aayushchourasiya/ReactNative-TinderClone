/**
 * StyleSheet
 */
import {StyleSheet} from 'react-native';
import {COLORS} from '../utils/constants';
import {isIOS} from '../utils/helper';

const styles = StyleSheet.create({
  navigatorContainer: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: COLORS.WHITE,
  },
  iosBottomBarHeight: {height: 80},
  tabImageView: () => ({
    backgroundColor: COLORS.WHITE,
    borderRadius: 58,
    height: 55,
    width: 55,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  tabImage: (focused, color) => ({
    height: focused ? 26 : 22,
    width: focused ? 26 : 22,
    tintColor: color,
    transform: [{scaleX: 1}],
    marginTop: 5,
  }),
  selectedTabIcon: {width: 70, height: 70, marginTop: 30},
  notSelectedTabIcon: {width: 50, height: 50},
  tabBarContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 70,
    width: 70,
    height: 70,
    marginTop: -25,
    alignItems: 'center',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: isIOS() ? 0 : 10,
  },
  customBarParent: {
    flex: 1,
    alignItems: 'center',
  },
  imgContainer: focused => ({
    marginBottom: focused ? 0 : 10,
  }),
});

export default styles;
