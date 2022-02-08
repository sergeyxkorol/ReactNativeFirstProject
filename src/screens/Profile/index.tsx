import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {isEqual} from 'lodash';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import TextInput from '../../components/TextInput';
import ScreenWithKeyboard from '../../components/ScreenWithKeyboard';
import {MODAL_ROUTES} from '../../constants/routes';
import {
  PROFILE_IMAGE,
  PROFILE_IMAGE_HEIGHT,
  PROFILE_IMAGE_WIDTH,
  WHITE,
} from '../../constants';
import {retreiveToken} from '../../helpers/access';
import styles from './styles';

import mockData from './data.json';
import ProfileIcon from '../../assets/avatars/Profile.svg';

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

        const accessToken = await retreiveToken();

        if (accessToken) {
          // ToDo: use Account API and uncomment it
          /* const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          };
          const response = await fetch(`${API_URL}/account`, options);
          const parsedResponse = await response.json();
          setProfileData(parsedResponse.data);
          */

          const profile = {
            name: mockData.attributes.firstname,
            phone: mockData.attributes.phone,
            city: mockData.attributes.city,
            street: mockData.attributes.address1,
            flat: mockData.attributes.address2,
          };
          setProfileData(profile);
          setInitialProfileData(profile);
        }
      } catch (error) {
        console.error(error);
      }
    };

    bootstrapAsync();
  }, []);

  const onChangeProfileData = (value: string, name: string) => {
    setProfileData(prevData => ({...prevData, [name]: value}));
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
      // ToDd: send a request
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
      <ProfileIcon fill={WHITE} />
    );

  return (
    <ScreenWithKeyboard>
      <View style={[commonStyles.generalWrapper, styles.generalWrapper]}>
        <View style={commonStyles.inputWrapper}>
          <TextInput
            label="Full Name"
            defaultValue={profileData.name}
            onChange={(text: string) => onChangeProfileData(text, 'name')}
            error={errors?.name}
          />
        </View>

        <View style={styles.imageWrapper}>
          <Pressable onPress={handleImageUpdate}>{imageRender()}</Pressable>
        </View>

        <View>
          <TextInput
            label="Phone Number"
            defaultValue={profileData.phone}
            onChange={(text: string) => onChangeProfileData(text, 'phone')}
          />
          <TextInput
            label="City"
            defaultValue={profileData.city}
            onChange={(text: string) => onChangeProfileData(text, 'city')}
          />
          <TextInput
            label="Locality, area or street"
            defaultValue={profileData.street}
            onChange={(text: string) => onChangeProfileData(text, 'street')}
          />
          <TextInput
            label="Flat no., Building name"
            defaultValue={profileData.flat}
            onChange={(text: string) => onChangeProfileData(text, 'flat')}
          />
        </View>

        {!isEqual(profileData, initialProfileData) && (
          <View style={styles.buttonWrapper}>
            <Button
              text="Update"
              buttonColor={ButtonColor.Submit}
              onPressHandler={handleUpdate}
            />
          </View>
        )}

        <View style={styles.buttonWrapper}>
          <Button
            text="Logout"
            buttonColor={ButtonColor.Submit}
            onPressHandler={handleLogOut}
          />
        </View>
      </View>
    </ScreenWithKeyboard>
  );
};

export default Profile;
