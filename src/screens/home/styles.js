import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: COLORS.WHITE},
  scrollViewStyle: scrollViewHeight => ({
    flexGrow: 1,
    height: scrollViewHeight,
  }),
});
export default styles;
