import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerItem} from '@react-navigation/drawer';
import {DRAWER_ROUTES} from '../../constants/routes';
import {BLUE} from '../../constants';
import styles from './styles';

import ProfileIcon from '../../assets/icons/profile.svg';
import HeartFilledIcon from '../../assets/icons/heart-filled.svg';
import CartIcon from '../../assets/icons/cart.svg';
import CartDoneIcon from '../../assets/icons/cart-done.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import ShareIcon from '../../assets/icons/share.svg';

const CustomDrawerContent: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.sectionWrapper}>
        <Text style={styles.mainTitle}>Ecommerse Store</Text>
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.label}>My Account</Text>
        <DrawerItem
          label="My Profile"
          icon={() => <ProfileIcon fill={BLUE} />}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          onPress={() => navigation.navigate(DRAWER_ROUTES.PROFILE)}
        />
        <DrawerItem
          label="My Wish List"
          icon={() => <HeartFilledIcon fill={BLUE} />}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          onPress={() => navigation.navigate(DRAWER_ROUTES.WISH_LIST)}
        />
        <DrawerItem
          label="My Cart"
          icon={() => <CartIcon fill={BLUE} />}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          onPress={() => navigation.navigate(DRAWER_ROUTES.CART)}
        />
        <DrawerItem
          label="My Orders"
          icon={() => <CartDoneIcon fill={BLUE} />}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          onPress={() => navigation.navigate(DRAWER_ROUTES.ORDERS)}
        />
      </View>

      <View style={[styles.blockWrapper, styles.sectionWrapper]}>
        <Text style={styles.label}>Support</Text>
        <DrawerItem
          label="Email"
          icon={() => <EmailIcon fill={BLUE} />}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {}}
        />
        <DrawerItem
          label="Call"
          icon={() => <PhoneIcon fill={BLUE} />}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {}}
        />
      </View>

      <View style={[styles.blockWrapper, styles.sectionWrapper]}>
        <DrawerItem
          label="Share"
          icon={() => <ShareIcon fill={BLUE} />}
          style={styles.drawerItem}
          labelStyle={styles.drawerItemLabel}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CustomDrawerContent;
