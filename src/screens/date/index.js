import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../utils';
import {ImgNotfoundDate} from '../../assets';
import {Gap} from '../../components';

export default function DateScreen() {
  return (
    <>
      <View style={styles.containerToolbar}>
        <Text style={styles.textToolbar}>Stays</Text>
      </View>
      <View style={styles.pageDate}>
        <ImgNotfoundDate />
        <Gap height={16} />
        <Text style={styles.textDate}>
          You don’t have any upcoming stays. {'\n'}Time to book your next one!
        </Text>
      </View>
    </>
  );
}
