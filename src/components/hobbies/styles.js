import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: reverse => ({
    padding: 10,
    flexDirection: reverse ? 'row-reverse' : 'row',
    alignItems: 'center',
  }),
  imageView: reverse => ({
    width: '50%',
    alignItems: reverse ? 'flex-end' : 'flex-start',
  }),
  imageContainer: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 50, height: 50},
  textContainer: {width: '50%', alignItems: 'center'},
  heading: {fontSize: 25, fontWeight: 'bold', color: COLORS.BLACK},
  description: {fontSize: 15, color: COLORS.BLACK},
});

export default styles;
