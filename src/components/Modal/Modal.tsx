import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {Text, View} from 'react-native';
import Button from '../Button/Button';
import {ButtonColor} from '../Button/Button.types';
import styles from './styles';

type Props = {
  icon: ReactNode;
  title: string;
  description?: string;
  buttons?: ReactNode;
};

const Modal: FC<Props> = ({icon, title, description, buttons}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
        {description?.length && (
          <Text style={styles.description}>{description}</Text>
        )}
        <View style={styles.buttons}>
          {buttons ? (
            buttons
          ) : (
            <Button
              text="OK"
              buttonColor={ButtonColor.Submit}
              onPressHandler={navigation.goBack}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Modal;
