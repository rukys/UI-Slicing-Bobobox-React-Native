import {StyleSheet} from 'react-native';
import {colors} from '../colors';
// import {fonts} from '../fonts';

export const styles = StyleSheet.create({
  pageSplash: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingSplash: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 125,
  },
  flexRow: {
    flexDirection: 'row',
  },
  centerRow: {
    alignItems: 'center',
  },
  spaceBetwen: {justifyContent: 'space-between'},
  flex1: {
    flex: 1,
  },
  pageHome: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerHeader: {
    paddingHorizontal: 16,
    backgroundColor: colors.green,
  },
  name: {
    fontSize: 18,
    color: colors.white,
  },
  subName: {
    color: colors.white,
    fontWeight: '600',
  },
  imageBg: {
    marginTop: -48,
    height: 125,
    width: 400,
    marginLeft: -8,
  },
  content: {
    marginTop: -27,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: colors.white,
  },
  containerBobopoint: {
    marginHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBobopoint: {
    fontSize: 12,
    color: colors.grey,
  },
  textBobopoint: {
    fontWeight: '600',
    color: colors.black,
  },
  checkin: val => ({
    height: 35,
    width: 105,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: val ? colors.grey : colors.orange,
  }),
  textCheckin: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '600',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  dotModal: {
    width: 40,
    height: 8,
    borderRadius: 16,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginBottom: 8,
  },
  contentModal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
  },
  btnModal: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  textBtnModal: {
    fontWeight: '500',
    color: colors.orange,
  },
  separator: {
    height: 10,
    backgroundColor: colors.grey1,
  },
  containerMenu: {
    marginHorizontal: 16,
    padding: 24,
    paddingHorizontal: 0,
    borderRadius: 16,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemMenu: {
    alignItems: 'center',
  },
  tagNew: {
    position: 'absolute',
    bottom: 0,
    marginBottom: -7,
    alignSelf: 'center',
  },
  containerCovid: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.yellow1,
  },
  textCovid: {
    color: colors.black,
    fontWeight: '500',
  },
  textCovidU: {
    textDecorationLine: 'underline',
  },
  containerTitleP: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitleP: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
  },
  promotion: {
    marginRight: 16,
  },
  imageP: {
    height: 180,
    width: 300,
    borderRadius: 16,
  },
  pageDate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  containerToolbar: {
    height: 90,
    backgroundColor: colors.green,
  },
  textToolbar: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    position: 'absolute',
    bottom: 0,
    marginBottom: 16,
    marginLeft: 16,
  },
  textDate: {
    marginHorizontal: 32,
    textAlign: 'center',
  },
  toolbarAcc: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  titleAcc: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.white,
  },
  contentAcc: {
    marginHorizontal: 16,
  },
  titleSetting: {
    color: colors.grey,
  },
  cardSetting: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: colors.grey,
  },
  textSetting: {
    flex: 1,
    fontWeight: '500',
  },
  languageSetting: {
    width: 45,
    borderRadius: 20,
    backgroundColor: colors.grey,
  },
  imgLang: {
    height: 25,
    width: 25,
  },
  languageSetting1: {
    width: 45,
    borderRadius: 20,
    backgroundColor: colors.green,
  },
  imgLang1: {
    alignSelf: 'flex-end',
    height: 25,
    width: 25,
  },
  dash: val => ({
    position: 'absolute',
    right: 0,
    marginTop: 20,
    marginRight: -10.5,
    width: val === 'Day 7' ? 0 : 11,
    height: 2,
    backgroundColor: val === 'Day 1' ? colors.black : colors.grey,
  }),
  roundedCheck: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.black,
    borderWidth: 1,
  },
  roundedCheck1: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
});
