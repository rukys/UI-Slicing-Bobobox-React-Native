import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../utils';
import TabItem from '../tab-items';
import {styles as CustomStyles} from '../../utils';

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={[styles.container, CustomStyles.shadowPropNavbar]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <SafeAreaView>
            <TabItem
              key={index}
              title={label}
              active={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          </SafeAreaView>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 45,
    paddingVertical: 12,
    elevation: 20,
    justifyContent: 'space-between',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
});
