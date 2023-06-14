import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import {colors, styles} from '../../utils';
import {
  IconArrow,
  IconNotverified,
  IconQrScan,
  ImgInd,
  ImgUk,
  LogoBobobox,
} from '../../assets';
import {Gap} from '../../components';
import CustomSwitch from 'react-native-custom-switch';

export default function AccountScreen() {
  return (
    <>
      <View style={styles.containerToolbar}>
        <View style={[styles.flexRow, styles.toolbarAcc, styles.centerRow]}>
          <LogoBobobox />
          <Gap width={16} />
          <View style={styles.flex1}>
            <Text style={styles.titleAcc}>Ruky Sektiawan</Text>
            <Text style={styles.titleAcc}>sektyawan33@gmail.com</Text>
          </View>
          <TouchableOpacity>
            <IconQrScan />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.pageHome}>
        <View style={styles.contentAcc}>
          <Gap height={16} />
          <Text style={styles.titleSetting}>Settings</Text>
          <TouchableOpacity style={styles.cardSetting}>
            <Text style={styles.textSetting}>Profile</Text>
            <IconArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardSetting}>
            <Text style={styles.textSetting}>Change Password</Text>
            <IconArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardSetting}>
            <Text style={styles.textSetting}>ID Verification</Text>
            <IconNotverified />
            <Gap width={8} />
            <IconArrow />
          </TouchableOpacity>
          <View style={[styles.cardSetting, {borderBottomColor: colors.white}]}>
            <Text style={styles.textSetting}>Language</Text>
            <CustomSwitch
              butonWidth={20}
              switchWidth={45}
              butonPadding={2}
              buttonText={
                <Image
                  source={ImgInd}
                  resizeMode="contain"
                  style={styles.imgLang}
                />
              }
              onSwitchButtonText={
                <Image
                  source={ImgUk}
                  resizeMode="contain"
                  style={styles.imgLang1}
                />
              }
              onSwitchBackgroundColor={colors.green}
              switchBackgroundColor={colors.grey}
              backgroundColor={colors.grey}
              buttonColor={colors.grey}
            />
          </View>
          <View style={[styles.separator, {marginHorizontal: -16}]} />
          <Gap height={16} />

          <Text style={styles.titleSetting}>About</Text>
          <TouchableOpacity style={styles.cardSetting}>
            <Text style={styles.textSetting}>About Bobobox</Text>
            <IconArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardSetting}>
            <Text style={styles.textSetting}>Help Center</Text>
            <IconArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardSetting}>
            <Text style={styles.textSetting}>Privacy Policy</Text>
            <IconArrow />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardSetting}>
            <Text style={styles.textSetting}>Terms and Condition</Text>
            <IconArrow />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cardSetting, {borderBottomColor: colors.white}]}>
            <Text style={[styles.textSetting, {color: colors.red}]}>
              Logout
            </Text>
          </TouchableOpacity>
          <Gap height={8} />
          <Text style={[styles.titleSetting, {fontSize: 11}]}>
            App Version 1.0
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
