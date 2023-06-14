import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../utils';
import {Gap} from '../../components';
import {
  IconBobopoint,
  IconCheck,
  IconClose,
  IconFire,
  IconGift,
  IconMenuBobobox,
  IconMenuBobocabin,
  IconMenuBoboliving,
  IconTagNew,
  ImgBackgroundHome,
  ImgPromotion1,
  ImgPromotion2,
  ImgPromotion3,
  ImgPromotion4,
  LogoBobobox,
  LogoTextBobobox,
} from '../../assets';
import Modal from 'react-native-modal';

export default function HomeScreen() {
  const [isCheckin, setIsCheckin] = useState(false);
  const [modal, setModal] = useState(false);
  const [numbers, setNumbers] = useState(2300);

  const promotions = [
    {image: ImgPromotion1},
    {image: ImgPromotion2},
    {image: ImgPromotion3},
    {image: ImgPromotion4},
  ];

  const dailyCheckin = [
    {image: IconCheck, label: 'Day 1'},
    {image: IconBobopoint, label: 'Day 2'},
    {image: IconBobopoint, label: 'Day 3'},
    {image: IconBobopoint, label: 'Day 4'},
    {image: IconBobopoint, label: 'Day 5'},
    {image: IconBobopoint, label: 'Day 6'},
    {image: IconGift, label: 'Day 7'},
  ];

  const onChangeSetNumber = () => {
    if (isCheckin) {
      setModal(!modal);
    } else {
      setIsCheckin(!isCheckin);
      setNumbers(numbers + 10);
    }
  };

  return (
    <>
      <ScrollView style={styles.pageHome} showsVerticalScrollIndicator={false}>
        <View style={styles.containerHeader}>
          <Gap height={52} />
          <View style={[styles.flexRow, styles.centerRow]}>
            <LogoBobobox />
            <Gap width={16} />
            <LogoTextBobobox />
          </View>
          <Gap height={32} />
          <Text style={styles.name}>Good Morning, Ruky</Text>
          <Gap height={12} />
          <Text style={styles.subName}>Looking for something amazing ?</Text>
          <Image
            source={ImgBackgroundHome}
            resizeMode="stretch"
            style={styles.imageBg}
          />
        </View>

        <View style={styles.content}>
          <Gap height={8} />
          <View style={styles.containerBobopoint}>
            <IconBobopoint />
            <Gap width={12} />
            <View style={styles.flex1}>
              <Text style={styles.titleBobopoint}>bobopoints</Text>
              <Gap height={8} />
              <Text style={styles.textBobopoint}>{numbers}</Text>
            </View>
            <Pressable
              style={styles.checkin(isCheckin)}
              onPress={onChangeSetNumber}>
              <Text style={styles.textCheckin}>Daily Check-in</Text>
            </Pressable>
          </View>
        </View>
        <Gap height={8} />

        <View style={styles.separator} />
        <Gap height={32} />

        <View style={styles.containerMenu}>
          <TouchableOpacity style={styles.itemMenu}>
            <IconMenuBobobox />
            <Gap height={12} />
            <Text>Bobobox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemMenu}>
            <View>
              <IconMenuBobocabin />
              <View style={styles.tagNew}>
                <IconTagNew />
              </View>
            </View>
            <Gap height={12} />
            <Text>Bobocabin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemMenu}>
            <View>
              <IconMenuBoboliving />
              <View style={styles.tagNew}>
                <IconTagNew />
              </View>
            </View>
            <Gap height={12} />
            <Text>Boboliving</Text>
          </TouchableOpacity>
        </View>
        <Gap height={32} />

        <View style={styles.containerCovid}>
          <Text style={styles.textCovid}>
            Your health and safety are our priority. See our response to
            Covid-19. <Text style={styles.textCovidU}>Learn More</Text>
          </Text>
        </View>
        <Gap height={32} />

        <View style={styles.containerTitleP}>
          <IconFire />
          <Gap width={8} />
          <Text style={styles.textTitleP}>Promotions</Text>
        </View>
        <Gap height={12} />
        <ScrollView
          style={styles.flexRow}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Gap width={16} />
          {promotions.map(item => (
            <TouchableOpacity style={styles.promotion}>
              <Image source={item.image} style={styles.imageP} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Gap height={24} />
      </ScrollView>

      <Modal
        isVisible={modal}
        onBackdropPress={() => setModal(!modal)}
        style={styles.modal}>
        <View>
          <View style={styles.dotModal} />
          <View style={styles.contentModal}>
            <View style={[styles.flexRow, styles.centerRow]}>
              <TouchableOpacity onPress={() => setModal(!modal)}>
                <IconClose />
              </TouchableOpacity>
              <Gap width={8} />
              <Text style={styles.textTitleP}>Daily Check-In</Text>
            </View>
            <Gap height={24} />
            <View
              style={[styles.flexRow, styles.centerRow, styles.spaceBetwen]}>
              {dailyCheckin.map(item => (
                <View style={styles.centerRow}>
                  <TouchableOpacity
                    style={
                      item.label === 'Day 1'
                        ? styles.roundedCheck
                        : styles.roundedCheck1
                    }>
                    <item.image />
                  </TouchableOpacity>
                  <View style={styles.dash(item.label)} />
                  <Gap height={8} />
                  <Text>{item.label}</Text>
                </View>
              ))}
            </View>
            <Gap height={24} />
            <View>
              <Text style={styles.textBobopoint}>Information</Text>
              <Gap height={8} />
              <Text>- You will get random bobopoints.</Text>
              <Text>- You will get a voucher on the 7th day.</Text>
              <Text>- Terms and Conditions apply.</Text>
            </View>
            <Gap height={32} />
            <Pressable style={styles.btnModal} onPress={() => setModal(!modal)}>
              <Text style={styles.textBtnModal}>OK</Text>
            </Pressable>
            <Gap height={24} />
          </View>
        </View>
      </Modal>
    </>
  );
}
