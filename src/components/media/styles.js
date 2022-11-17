import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    width: '90%',
    height: 350,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
  },
  headingView: {height: 30, alignItems: 'center', justifyContent: 'center'},
  heading: {color: COLORS.BLACK},
  image: {height: 320, width: '100%', borderRadius: 10},
});

export default styles;
