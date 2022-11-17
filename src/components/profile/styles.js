import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.WHITE_100,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    position: 'absolute',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
});

export default styles;
