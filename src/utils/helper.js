import {Dimensions, Platform} from 'react-native';

const isIOS = () => {
  return Platform.OS === 'ios' ? true : false;
};

const DEVICE_HEIGHT = Dimensions.get('screen').height;

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
export const scale = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = size =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.25) =>
  size + (scale(size) - size) * factor;

export {isIOS, DEVICE_HEIGHT};
