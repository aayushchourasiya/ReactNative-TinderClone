import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  actionButtons: (left, right) => ({
    width: 60,
    height: 60,
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: left ? 20 : 0,
    marginRight: right ? 20 : 0,
  }),
});
export default styles;
