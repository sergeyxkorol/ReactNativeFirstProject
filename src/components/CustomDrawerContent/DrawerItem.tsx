import React, {FC, ReactNode} from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import styles from './DrawerItem.styles';

type Props = {
  label: string;
  icon: ReactNode;
  link?: string;
  onPress?: () => void;
};

const CustomDrawerItem: FC<Props> = ({label, icon, link, onPress}) => {
  const navigation = useNavigation();
  const onPressHandler = link ? () => navigation.navigate(link) : onPress;

  return (
    <DrawerItem
      label={label}
      icon={() => icon}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemLabel}
      onPress={onPressHandler}
    />
  );
};

export default CustomDrawerItem;
