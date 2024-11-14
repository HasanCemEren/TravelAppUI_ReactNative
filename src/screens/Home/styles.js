import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  mainUp: {
    flex: 3.5,
  },
  mountainImage: {
    alignSelf: 'flex-start',
    position: 'absolute',
    zIndex: -1,
  },

  navbar: {
    paddingHorizontal: 30,
    height: 60,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIcon: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    padding: 20,
    backgroundColor: 'white',
  },
  navbarRightSide: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    paddingRight: 40,
    width: 24,
    height: 24,
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#378DB7',
    borderWidth: 3.5,
  },

  upTexts: {
    paddingLeft: 30,
    paddingTop: 7,
  },
  helloText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 27,
  },
  questText: {
    color: 'white',
    fontSize: 16.5,
    fontWeight: '300',
  },

  topIcons: {
    tintColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
  },
  boxeText: {
    textAlign: 'center',
    paddingBottom: 12,
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },

  boxes: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  boxe: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 30,
    height: 100,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#2D6EA8',
    marginHorizontal: 15,
  },

  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    borderRadius: 15,
    elevation: 15,
    position: 'absolute',
    top: -30,
    backgroundColor: 'white',
    width: '85%',
    height: 70,
  },
  searchBarIcon: {
    top: 22,
    left: 24,
    height: 24,
    width: 24,
  },
  searchBarText: {
    fontSize: 20,
    fontWeight: '200',
    left: 80,
    bottom: 2,
  },

  mainDown: {
    flex: 6,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  circles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 235,
    paddingTop: 50,
  },
  circle: {},
  circleImage: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: '#469AFE',
    borderRadius: 35,
  },
  circleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  threeDots: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: 180,
    top: 120,
  },

  divideBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    bottom: 215,
  },
  recommendText: {
    color: '#161616',
    fontWeight: 'bold',
    fontSize: 25,
  },
  viewAllText: {
    color: '#949494',
    fontSize: 15,
  },

  bottomBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  boxMiddleIcon: {
    position: 'absolute',
    left: 155,
    top: 14,
  },
  boxMiddleBottomIcon: {
    width: 20,
    height: 20,
  },
  boxMiddleBottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '87%',
  },
  boxMiddleBottomLeftContainer: {
    marginRight: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxMiddleBottomRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  boxIcon: {
    position: 'absolute',
    left: 60,
    top: 10,
  },
  bottomBoxeText: {
    color: 'white',
  },
  bottomBoxMiddleImage: {
    width: 200,
    height: 250,
    borderRadius: 15,
  },
  bottomBoxHorizontalImage: {
    width: 100,
    height: 175,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  bottomHorizontalBoxe: {
    bottom: 210,
    width: 100,
    height: 175,
    backgroundColor: 'pink',
  },
  bottomMiddleBoxe: {
    borderRadius: 15,
    bottom: 210,
    width: 200,
    height: 250,
    backgroundColor: 'pink',
  },
  bottomBoxe: {
    position: 'absolute',
    top: 500,
    left: 15,
    borderRadius: 15,
    width: 100,
    height: 100,
  },
  bottomBoxeImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  bottomBoxIcon: {},
  bottomText: {
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    top: 515,
    left: 125,
  },
  imagePosition: {
    position: 'absolute',
    left: '15%',
    bottom: '50%',
    width: 20,
    height: 20,
  },
  boxTextPosition: {
    position: 'absolute',
    left: '50%',
    bottom: '50%',
    color: 'white',
    width: 20,
    height: 20,
  },
});
