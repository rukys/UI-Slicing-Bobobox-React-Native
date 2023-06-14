import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {colors, styles} from '../../utils';
import {LogoBobobox, LogoTextBobobox} from '../../assets';
import {Gap} from '../../components';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 4000);
  }, [navigation]);
  return (
    <View style={styles.pageSplash}>
      <LogoBobobox height={65} width={65} />
      <Gap height={16} />
      <LogoTextBobobox height={30} width={250} />
      <ActivityIndicator
        size="large"
        color={colors.white}
        style={styles.loadingSplash}
      />
    </View>
  );
}
