import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignSelf: 'center',
    height: 400,
    backgroundColor: COLORS.WHITE_200,
    borderRadius: 10,
    padding: 10,
  },
  topView: {
    width: '100%',
    height: '80%',
    backgroundColor: COLORS.WHITE_300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 270,
    height: 270,
  },
  detailsView: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
  },
  detailsText: {width: '60%', padding: 5},
  fontStyle: bold => ({
    color: 'black',
    fontSize: bold ? 30 : 15,
    fontWeight: bold ? 'bold' : 'normal',
  }),
  detailsImageView: {width: '25%'},
  detailsImage: {width: 70, height: 70, borderRadius: 10},
  circularProgress: {position: 'absolute', bottom: -20, left: '45%'},
});

export default styles;
