import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {DEVICE_HEIGHT} from '../../utils/helper';

const styles = StyleSheet.create({
  introMainContainer: {
    width: '100%',
    height: DEVICE_HEIGHT * 2,
    position: 'absolute',
    backgroundColor: COLORS.BLACK,
    zIndex: 100,
    opacity: 0.85,
    top: -800,
    left: -0,
  },
  introSecondaryContainer: {
    height: DEVICE_HEIGHT * 2,
    position: 'absolute',
    width: '100%',
    top: -600,
    opacity: 1,
    alignItems: 'center',
    zIndex: 101,
  },
  introMainText: {color: COLORS.WHITE, fontSize: 20},
  introSecondaryText: {
    fontSize: 30,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  introPassColor: {color: COLORS.PINK},
  deviceFrameImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 60,
  },
  scrollUpImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    tintColor: 'white',
    position: 'absolute',
    left: 60,
    top: 150,
  },
  footerText: {fontSize: 20, color: COLORS.LIGHT_GREY, marginTop: 250},
  footerText2: {fontSize: 20, color: COLORS.LIGHT_GREY},
});
export default styles;
