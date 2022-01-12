import React, {FC, ReactNode} from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import styles from './DrawerItem.styles';

type Props = {
  label: string;
  icon: ReactNode;
  link: string;
};

const CustomDrawerItem: FC<Props> = ({label, icon, link}) => {
  const navigation = useNavigation();

  return (
    <DrawerItem
      label={label}
      icon={() => icon}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemLabel}
      onPress={() => navigation.navigate(link)}
    />
  );
};

export default CustomDrawerItem;
