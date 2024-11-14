import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Style from './styles.js';
import {Icons, Images} from '../../assets';

const index = () => {
  return (
    <SafeAreaView style={Style.safeArea}>
      <View style={Style.mainUp}>
        <Image source={Images.mountain} style={Style.mountainImage} />
        <View style={Style.navbar}>
          <View style={Style.menuIcon}>
            <Image source={Icons.menu} />
          </View>
          <View style={Style.navbarRightSide}>
            <View style={Style.notificationIcon}>
              <Image source={Icons.notification} />
            </View>
            <View style={Style.profileIcon}>
              <Image source={Images.profilePhoto} style={Style.profilePhoto} />
            </View>
          </View>
        </View>

        <View style={Style.upTexts}>
          <Text style={Style.helloText}>Hello! Mehdi</Text>
          <Text style={Style.questText}>Where would you like to go?</Text>
        </View>

        <View style={Style.boxes}>
          <View style={Style.boxe}>
            <Image source={Icons.plane} style={Style.topIcons} />
            <Text style={Style.boxeText}>Flight</Text>
          </View>
          <View style={Style.boxe}>
            <Image source={Icons.hotel} style={Style.topIcons} />
            <Text style={Style.boxeText}>Hotel</Text>
          </View>
          <View style={Style.boxe}>
            <Image source={Icons.holiday} style={Style.topIcons} />
            <Text style={Style.boxeText}>Holiday</Text>
          </View>
          <View style={Style.boxe}>
            <Image source={Icons.offers} style={Style.topIcons} />
            <Text style={Style.boxeText}>Offers</Text>
          </View>
        </View>
      </View>

      <View style={Style.mainDown}>
        <View style={Style.searchBarContainer}>
          <View style={Style.searchBar}>
            <Image source={Icons.search} style={Style.searchBarIcon} />
            <Text style={Style.searchBarText}>Where to go</Text>
          </View>
        </View>

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
            <Image
              source={Images.maldives}
              style={Style.bottomBoxMiddleImage}
            />
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
            <Image
              source={Images.rome}
              style={Style.bottomBoxHorizontalImage}
            />

            <View style={Style.boxMiddleBottomRightContainer}>
              <Image
                source={Icons.locationWhite}
                style={[Style.imagePosition, {tintColor: 'white'}]}
              />
              <Text style={Style.boxTextPosition}>Rome, Italy</Text>
            </View>
          </View>
        </View>

        <View style={[Style.divideBar, {marginTop: 15}]}>
          <Text style={Style.recommendText}>Popular Destination</Text>
          <Text style={Style.viewAllText}>View All</Text>
        </View>

        <View style={Style.bottomBoxe}>
          <Image source={Images.plants} style={Style.bottomBoxeImage} />
          <Image source={Icons.star} />
          <Text>4.7</Text>
        </View>
        <Text style={Style.bottomText}>Mersin</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
/*

React Native'deki bottomBoxe ve rome bölümlerindeki yıldız ve yazıların görünmemesi, muhtemelen düzenleme ve pozisyonlamadan kaynaklanıyor. Çözüm için aşağıdaki adımları gözden geçirebiliriz:

1. bottomBoxe ve Yıldız + Yazı Konumlandırması:
bottomBoxe içinde yıldız ve yazının görünmemesi, genellikle absolute pozisyonlaması veya zIndex ile ilgili olabilir. Bu elemanların doğru şekilde konumlandırılmasını sağlamak için position ve zIndex değerlerini gözden geçirebiliriz.

Örneğin:

javascript
Kodu kopyala
bottomBoxe: {
  position: 'absolute',
  top: 500,
  left: 15,
  borderRadius: 15,
  width: 100,
  height: 100,
  justifyContent: 'center', // Yıldız ve yazıyı ortalar
  alignItems: 'center',
  zIndex: 1, // Diğer öğelerin üstünde görünmesi için
},
bottomBoxeImage: {
  width: 100,
  height: 100,
  borderRadius: 15,
},
bottomText: {
  fontSize: 15,
  fontWeight: 'bold',
  position: 'absolute',
  top: 10,  // Yazıyı üst kısma yakınlaştır
  left: 15,
  zIndex: 2, // Yazıyı diğer öğelerin önünde göstermek için
},
2. rome Container'ındaki Yıldız ve Yazı:
rome resminin olduğu container içinde yıldız ve yazının gözükmemesinin nedeni de benzer şekilde konumlandırmadan kaynaklanıyor olabilir. position: 'absolute' kullandığınızda, öğeler yerleşimden bağımsız şekilde konumlanır, bu nedenle altındaki diğer öğeler gizleniyor olabilir.

Bu durumu düzeltmek için, yıldız ve yazının konumunu belirleyen container'ı relative yapabilirsiniz. Ayrıca, zIndex ile ön planda olmasını sağlayabilirsiniz.

Örnek:

javascript
Kodu kopyala
bottomHorizontalBoxe: {
  bottom: 210,
  width: 100,
  height: 175,
  backgroundColor: 'pink',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative', // İçeriklerin üst üste binmemesi için
},
boxMiddleBottomLeftContainer: {
  marginRight: 25,
  flexDirection: 'row',
  alignItems: 'center',
  zIndex: 2, // Yıldız ve yazının diğer öğelerden üstte olmasını sağlar
},
boxMiddleBottomRightContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  zIndex: 2, // Yıldız ve yazının üstte olmasını sağlar
},
3. bottomText'in Konumlandırılması:
bottomText'i daha iyi konumlandırmak için position: 'absolute' yerine flexbox özelliklerini kullanabilirsiniz. Flexbox ile öğeleri daha kolay ortalayabilirsiniz.

Örnek:

javascript
Kodu kopyala
bottomText: {
  fontSize: 15,
  fontWeight: 'bold',
  color: 'white', // Yazının görünmesi için renk ekleyin
  position: 'absolute',
  bottom: 10, // Alt kısıma yerleştirin
  left: 10, // Sol tarafa yerleştirin
  zIndex: 1, 
},
Bu adımları takip ederek, bottomBoxe ve rome bölümlerindeki yıldız ve yazıların görünmesini sağlayabilirsiniz.
*/
