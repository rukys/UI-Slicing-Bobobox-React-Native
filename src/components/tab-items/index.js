/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils';
import {
  IconTabHome,
  IconTabDate,
  IconTabAccount,
  IconTabFillHome,
  IconTabFillDate,
  IconTabFillAccount,
} from '../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconTabFillHome /> : <IconTabHome />;
    }
    if (title === 'Stays') {
      return active ? <IconTabFillDate /> : <IconTabDate />;
    }
    if (title === 'Account') {
      return active ? <IconTabFillAccount /> : <IconTabAccount />;
    }
    return <IconTabFillHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.black : colors.grey,
    marginTop: 4,
  }),
});
