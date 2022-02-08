import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Share from 'react-native-share';
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

const CustomDrawerContent: FC = () => {
  const onShare = async () => {
    try {
      const shareOptions = {
        title: 'MyAwesomeApp',
        message: 'Please find a link to MyAwesomeApp',
        url: 'https://play.google.com/store/apps/details?id=org.telegram.messenger&hl=en',
      };

      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  return (
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
        <DrawerItem
          label="Share"
          icon={<ShareIcon fill={BLUE} />}
          onPress={onShare}
        />
      </View>
    </View>
  );
};

export default CustomDrawerContent;
