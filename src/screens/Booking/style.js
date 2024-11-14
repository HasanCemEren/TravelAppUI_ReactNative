import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginVertical: '3%',
  },
  more: {
    width: 24,
    height: 24,
  },
  navbarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  search: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },

  filterMenu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: '10%',
  },
  filter: {
    width: 90,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#298DFF',
  },
  selectedFilter: {
    width: 90,
    height: 30,
    backgroundColor: '#298DFF',
    borderRadius: 15,
    justifyContent: 'center',
  },
  filterText: {
    fontWeight: '600',
    textAlign: 'center',
    color: '#298DFF',
  },

  contentContainer: {
    flex: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    height: '35%',
    marginTop: '5%',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#e5f0ff',
  },
  contentTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: '6%',
    left: '5%',
  },
  contentTopLeftSide: {
    width: '25%',
    height: 100,
  },
  contentTopRightSide: {
    paddingLeft: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '75%',
    height: 100,
  },
  bed: {
    width: 'auto',
    height: 90,
    borderRadius: 8,
  },
  contentButton: {
    justifyContent: 'center',
    width: 80,
    height: 24,
    borderRadius: 8,
    backgroundColor: '#D4E8FF',
    top: '3%',
  },
  contentTitleText: {
    bottom: '10%',
    fontWeight: '500',
    fontSize: 18,
    color: '#4c4c4c',
  },
  contentDescText: {
    color: '#909090',
    fontWeight: '400',
    bottom: '5%',
  },
  contentButtonText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
  line: {
    top: '16%',
    width: '85%',
    height: 1,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  contentBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    top: '13%',
  },
  bottomButton: {
    width: 130,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    marginEnd: '8%',
    borderWidth: 2,
    borderColor: '#298DFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonText: {
    fontWeight: '500',
    color: '#298DFF',
  },
  bottomButtonActiveText: {
    fontWeight: '500',
    color: '#FFFFFF',
  },
  bottomButtonActive: {
    width: 130,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#298DFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
  },
  footerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: '8%',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '6%',
  },
  footerIcons: {
    width: 28,
    height: 28,
  },
  iconText: {},
  footerIconsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
