import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
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

  popularDestination: {
    bottom: '28%',
    right: '2%',
    left: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: '6%',
    left: '5%',
    borderWidth: 0.5,
    borderColor: '#d6e8fe',
    borderRadius: 7,
    marginVertical: '2%',
  },
  contentTopLeftSide: {
    left: '45%',
    width: '25%',
    height: 100,
  },
  contentTopRightSide: {
    left: '50%',
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
  locateIcon: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: '8%',
  },
  end: {
    alignItems: 'flex-end',
    right: '50%',
  },
  endTopText: {
    fontSize: 12,
    color: 'black',
  },
  endMiddleText: {
    top: '12%',
    color: '#ff7f7f',
    fontWeight: 'bold',
  },
  endBottomText: {
    top: '12%',

    color: 'black',
  },

  starPositioning: {
    position: 'absolute',
    left: '50%',
    width: 20,
    height: 20,
  },
  textPositioning: {
    position: 'absolute',
    left: '75%',
    fontWeight: 'bold',
    color: 'white',
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
