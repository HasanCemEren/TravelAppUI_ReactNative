import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Style from './style.js';
import {Icons, Images} from '../../assets/index.js';

const index = () => {
  return (
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.circles}>
        <View style={Style.circle}>
          <Image source={Images.burj} style={Style.circleImage} />
          <Text style={Style.circleText}>Dubai</Text>
        </View>
        <View style={Style.circle}>
          <Image source={Images.maldivesExplore} style={Style.circleImage} />
          <Text style={Style.circleText}>Moldives</Text>
        </View>
        <View style={Style.circle}>
          <Image source={Images.bali} style={Style.circleImage} />
          <Text style={Style.circleText}>Dori</Text>
        </View>
        <View style={Style.circle}>
          <Image source={Images.venice} style={Style.circleImage} />
          <Text style={Style.circleText}>Venice</Text>
        </View>
        <View style={Style.circle}>
          <Image source={Images.london} style={Style.circleImage} />
          <Text style={Style.circleText}>London</Text>
        </View>
        <Image source={Icons.threeDots} style={Style.threeDots} />
      </View>

      <View style={Style.divideBar}>
        <Text style={Style.recommendText}>Recommended</Text>
        <Text style={Style.viewAllText}>View All</Text>
      </View>

      <View style={Style.bottomBoxes}>
        <View
          style={[
            Style.bottomHorizontalBoxe,
            {borderTopRightRadius: 15, borderBottomRightRadius: 15},
          ]}>
          <Image
            source={Images.cami}
            style={[
              Style.bottomBoxHorizontalImage,
              {
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
            ]}
          />
          <Image source={Icons.heart} style={Style.boxIcon} />

          <View style={Style.boxMiddleBottomContainer}>
            <View style={Style.boxMiddleBottomLeftContainer}>
              <Text style={[Style.bottomBoxeText, {right: 25}]}>Turkey</Text>
            </View>
            <View style={Style.boxMiddleBottomRightContainer}>
              <Image
                source={Icons.star}
                style={[Style.boxMiddleBottomIcon, {right: 26}]}
              />
              <Text style={[Style.bottomBoxeText, {right: 25}]}>4.5</Text>
            </View>
          </View>
        </View>

        <View style={Style.bottomMiddleBoxe}>
          <Image source={Images.maldives} style={Style.bottomBoxMiddleImage} />
          <Image source={Icons.heart} style={Style.boxMiddleIcon} />
          <View style={Style.boxMiddleBottomContainer}>
            <View style={Style.boxMiddleBottomLeftContainer}>
              <Image
                source={Icons.locationWhite}
                style={[Style.boxMiddleBottomIcon, {tintColor: 'white'}]}
              />
              <Text style={Style.bottomBoxeText}>Male Maldives</Text>
            </View>
            <View style={Style.boxMiddleBottomRightContainer}>
              <Image source={Icons.star} style={Style.boxMiddleBottomIcon} />
              <Text style={Style.bottomBoxeText}>4.5</Text>
            </View>
          </View>
        </View>

        <View
          style={[
            Style.bottomHorizontalBoxe,
            {
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            },
          ]}>
          <Image source={Images.rome} style={Style.bottomBoxHorizontalImage} />

          <View style={Style.boxMiddleBottomRightContainer}>
            <Image
              source={Icons.locationWhite}
              style={[Style.imagePosition, {tintColor: 'white'}]}
            />
            <Text style={Style.boxTextPosition}>Rome, Italy</Text>
          </View>
        </View>
      </View>

      <View style={[Style.divideBar, {marginTop: '3%'}]}>
        <Text style={Style.recommendText}>Recommended</Text>
        <Text style={Style.viewAllText}>View All</Text>
      </View>

      <View style={Style.popularDestination}>
        <View style={Style.contentTop}>
          <View style={Style.contentTopLeftSide}>
            <Image source={Images.rafting} style={Style.bed} />
            <Image source={Icons.star} style={Style.starPositioning} />
            <Text style={Style.textPositioning}>4.8</Text>
          </View>

          <View style={Style.contentTopRightSide}>
            <Text style={Style.contentTitleText}>Enjoy Your</Text>
            <Text style={Style.contentTitleText}>Summer Vacation</Text>
            <View style={Style.container}>
              <Image
                source={Icons.locationWhite}
                style={[Style.locateIcon, {tintColor: 'red'}]}
              />
              <Text
                style={[Style.contentDescText, {bottom: 0, marginStart: 7}]}>
                Mossiley, UK England
              </Text>
            </View>
          </View>

          <View style={Style.end}>
            <Text style={Style.endTopText}>From</Text>
            <Text style={Style.endMiddleText}>200$ /</Text>
            <Text style={Style.endBottomText}>Per Person</Text>
          </View>
        </View>

        <View style={Style.contentTop}>
          <View style={Style.contentTopLeftSide}>
            <Image source={Images.couple} style={Style.bed} />
            <Image source={Icons.star} style={Style.starPositioning} />
            <Text style={Style.textPositioning}>4.8</Text>
          </View>

          <View style={Style.contentTopRightSide}>
            <Text style={Style.contentTitleText}>Enjoy Your</Text>
            <Text style={Style.contentTitleText}>Summer Vacation</Text>
            <View style={Style.container}>
              <Image
                source={Icons.locationWhite}
                style={[Style.locateIcon, {tintColor: 'red'}]}
              />
              <Text
                style={[Style.contentDescText, {bottom: 0, marginStart: 7}]}>
                Mossiley, UK England
              </Text>
            </View>
          </View>

          <View style={Style.end}>
            <Text style={Style.endTopText}>From</Text>
            <Text style={Style.endMiddleText}>200$ /</Text>
            <Text style={Style.endBottomText}>Per Person</Text>
          </View>
        </View>

        <View style={Style.contentTop}>
          <View style={Style.contentTopLeftSide}>
            <Image source={Images.topView} style={Style.bed} />
            <Image source={Icons.star} style={Style.starPositioning} />
            <Text style={Style.textPositioning}>4.8</Text>
          </View>

          <View style={Style.contentTopRightSide}>
            <Text style={Style.contentTitleText}>Enjoy Your</Text>
            <Text style={Style.contentTitleText}>Summer Vacation</Text>
            <View style={Style.container}>
              <Image
                source={Icons.locationWhite}
                style={[Style.locateIcon, {tintColor: 'red'}]}
              />
              <Text
                style={[Style.contentDescText, {bottom: 0, marginStart: 7}]}>
                Mossiley, UK England
              </Text>
            </View>
          </View>

          <View style={Style.end}>
            <Text style={Style.endTopText}>From</Text>
            <Text style={Style.endMiddleText}>200$ /</Text>
            <Text style={Style.endBottomText}>Per Person</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
