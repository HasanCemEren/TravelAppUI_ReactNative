import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from './style.js';
import {Icons, Images} from '../../assets/index.js';

const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.navbar}>
        <Image source={Icons.more} style={Styles.more} />
        <Text style={Styles.navbarText}>Booking</Text>
        <Image source={Icons.search} style={Styles.search} />
      </View>

      <View style={Styles.filterMenu}>
        <View style={Styles.filter}>
          <Text style={Styles.filterText}>Ongoing</Text>
        </View>
        <View style={Styles.selectedFilter}>
          <Text style={[Styles.filterText, {color: 'white'}]}>Completed</Text>
        </View>
        <View style={Styles.filter}>
          <Text style={Styles.filterText}>Cancelled</Text>
        </View>
      </View>

      <View style={Styles.contentContainer}>
        <View style={Styles.content}>
          <View style={Styles.contentTop}>
            <View style={Styles.contentTopLeftSide}>
              <Image source={Images.bed} style={Styles.bed} />
            </View>

            <View style={Styles.contentTopRightSide}>
              <Text style={Styles.contentTitleText}>
                Intercontinental Hotel
              </Text>
              <Text style={Styles.contentDescText}>Lagos, Nigeria</Text>
              <View style={Styles.contentButton}>
                <Text style={Styles.contentButtonText}>Paid</Text>
              </View>
            </View>
          </View>

          <View style={Styles.line}></View>

          <View style={Styles.contentBottom}>
            <View style={Styles.bottomButton}>
              <Text style={Styles.bottomButtonText}>Cancel Booking</Text>
            </View>
            <View style={Styles.bottomButtonActive}>
              <Text style={Styles.bottomButtonActiveText}>View Ticket</Text>
            </View>
          </View>
        </View>

        <View style={Styles.content}>
          <View style={Styles.contentTop}>
            <View style={Styles.contentTopLeftSide}>
              <Image source={Images.bed} style={Styles.bed} />
            </View>

            <View style={Styles.contentTopRightSide}>
              <Text style={Styles.contentTitleText}>
                Intercontinental Hotel
              </Text>
              <Text style={Styles.contentDescText}>Lagos, Nigeria</Text>
              <View style={Styles.contentButton}>
                <Text style={Styles.contentButtonText}>Paid</Text>
              </View>
            </View>
          </View>

          <View style={Styles.line}></View>

          <View style={Styles.contentBottom}>
            <View style={Styles.bottomButton}>
              <Text style={Styles.bottomButtonText}>Cancel Booking</Text>
            </View>
            <View style={Styles.bottomButtonActive}>
              <Text style={Styles.bottomButtonActiveText}>View Ticket</Text>
            </View>
          </View>
        </View>

        <View style={Styles.content}>
          <View style={Styles.contentTop}>
            <View style={Styles.contentTopLeftSide}>
              <Image source={Images.bed} style={Styles.bed} />
            </View>

            <View style={Styles.contentTopRightSide}>
              <Text style={Styles.contentTitleText}>
                Intercontinental Hotel
              </Text>
              <Text style={Styles.contentDescText}>Lagos, Nigeria</Text>
              <View style={Styles.contentButton}>
                <Text style={Styles.contentButtonText}>Paid</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          Styles.line,
          {
            position: 'absolute',
            zIndex: 1,
            top: '93%',
            width: '95%',
            alignSelf: 'center',
          },
        ]}
      />
      <View style={Styles.footer}>
        <View style={Styles.footerContainer}>
          <View style={Styles.footerIconsContainer}>
            <Image source={Icons.home} style={Styles.footerIcons} />
            <Text style={Styles.iconText}>Home</Text>
          </View>
          <View style={Styles.footerIconsContainer}>
            <Image source={Icons.booking} style={Styles.footerIcons} />
            <Text style={Styles.iconText}>Booking</Text>
          </View>
          <View style={Styles.footerIconsContainer}>
            <Image
              source={Icons.locationWhite}
              style={[Styles.footerIcons, {tintColor: 'black'}]}
            />
            <Text style={Styles.iconText}>Location</Text>
          </View>
          <View style={Styles.footerIconsContainer}>
            <Image source={Icons.profile} style={Styles.footerIcons} />
            <Text style={Styles.iconText}>Profile</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
