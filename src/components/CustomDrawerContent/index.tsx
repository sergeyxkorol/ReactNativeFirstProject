import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {STACK_ROUTES} from '../../constants/routes';
import {BLUE} from '../../constants';
import DrawerItem from './DrawerItem';
import styles from './styles';

import ProfileIcon from '../../assets/icons/profile.svg';
import HeartFilledIcon from '../../assets/icons/heart-filled.svg';
import CartIcon from '../../assets/icons/cart.svg';
import CartDoneIcon from '../../assets/icons/cart-done.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import ShareIcon from '../../assets/icons/share.svg';

const CustomDrawerContent: FC = () => (
  <View style={styles.wrapper}>
    <View style={styles.sectionWrapper}>
      <Text style={styles.mainTitle}>Ecommerce Store</Text>
    </View>

    <View style={styles.sectionWrapper}>
      <Text style={styles.label}>My Account</Text>
      <DrawerItem
        label="My Profile"
        icon={<ProfileIcon fill={BLUE} />}
        link={STACK_ROUTES.PROFILE}
      />
      <DrawerItem
        label="My Wish List"
        icon={<HeartFilledIcon fill={BLUE} />}
        link={STACK_ROUTES.WISH_LIST}
      />
      <DrawerItem
        label="My Cart"
        icon={<CartIcon fill={BLUE} />}
        link={STACK_ROUTES.CART}
      />
      <DrawerItem
        label="My Orders"
        icon={<CartDoneIcon fill={BLUE} />}
        link={STACK_ROUTES.ORDERS}
      />
    </View>

    <View style={[styles.blockWrapper, styles.sectionWrapper]}>
      <Text style={styles.label}>Support</Text>
      <DrawerItem label="Email" icon={<EmailIcon fill={BLUE} />} link="" />
      <DrawerItem label="Call" icon={<PhoneIcon fill={BLUE} />} link="" />
    </View>

    <View style={[styles.blockWrapper, styles.sectionWrapper]}>
      <DrawerItem label="Share" icon={<ShareIcon fill={BLUE} />} link="" />
    </View>
  </View>
);

export default CustomDrawerContent;
