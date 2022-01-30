import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import TextInput from '../../components/TextInput';
import {MODAL_ROUTES} from '../../constants/routes';
import styles from './styles';

import ProfileIcon from '../../assets/avatars/Profile.svg';
import {
  PROFILE_IMAGE,
  PROFILE_IMAGE_HEIGHT,
  PROFILE_IMAGE_WIDTH,
  WHITE,
} from '../../constants';

type Profile = {
  name?: string;
  phone?: string;
  city?: string;
  street?: string;
  flat?: string;
};

type Error = {
  name?: string;
};

const Profile: FC = () => {
  const [initialProfileData, setInitialProfileData] = useState<Profile>({});
  const [profileData, setProfileData] = useState<Profile>({});
  const [image, setImage] = useState<string | null | undefined>(null);
  const [errors, setErrors] = useState<Error>({});
  const navigation = useNavigation();

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const profileImage = await AsyncStorage.getItem(PROFILE_IMAGE);
        setImage(profileImage);
      } catch (error) {
        console.error(error);
      }
    };

    bootstrapAsync();
  }, []);

  const onChangeName = (name: string) => {
    setProfileData({...profileData, name});
  };

  const onChangePhone = (phone: string) => {
    setProfileData({...profileData, phone});
  };

  const onChangeCity = (city: string) => {
    setProfileData({...profileData, city});
  };

  const onChangeStreet = (street: string) => {
    setProfileData({...profileData, street});
  };

  const onChangeFlat = (flat: string) => {
    setProfileData({...profileData, flat});
  };

  const handleImageUpdate = async () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
    };

    try {
      const {assets} = await launchImageLibrary(options);
      const photoUri = assets?.[0].uri;

      if (photoUri) {
        setImage(photoUri);
        await AsyncStorage.setItem(PROFILE_IMAGE, photoUri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = () => {
    const formErrors = {
      ...(!profileData.name && {name: 'Name is required'}),
    };

    if (!Object.keys(formErrors).length) {
      // ToDd: send request
    } else {
      setErrors(formErrors);
    }
  };

  const handleLogOut = () => {
    navigation.navigate(MODAL_ROUTES.LOGOUT);
  };

  const imageRender = () =>
    image ? (
      <Image
        resizeMode="cover"
        resizeMethod="scale"
        style={{width: PROFILE_IMAGE_WIDTH, height: PROFILE_IMAGE_HEIGHT}}
        source={{uri: image}}
      />
    ) : (
      <Pressable onPress={handleImageUpdate}>
        <ProfileIcon fill={WHITE} />
      </Pressable>
    );

  return (
    <View style={[commonStyles.generalWrapper, styles.generalWrapper]}>
      <View style={commonStyles.inputWrapper}>
        <TextInput
          label="Full Name"
          onChange={onChangeName}
          error={errors?.name}
        />
      </View>

      <View style={styles.imageWrapper}>{imageRender()}</View>

      <View>
        <TextInput label="Phone Number" onChange={onChangePhone} />
        <TextInput label="City" onChange={onChangeCity} />
        <TextInput label="Locality, area or street" onChange={onChangeStreet} />
        <TextInput label="Flat no., Building name" onChange={onChangeFlat} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          text="Update"
          buttonColor={ButtonColor.Submit}
          onPressHandler={handleUpdate}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text="Logout"
          buttonColor={ButtonColor.Submit}
          onPressHandler={handleLogOut}
        />
      </View>
    </View>
  );
};

export default Profile;
