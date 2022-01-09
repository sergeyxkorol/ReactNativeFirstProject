import React, {FC, ReactNode} from 'react';
import {View, Text} from 'react-native';
import commonStyles from '../../commonStyles';
import Button from '../../components/Button/Button';
import {ButtonColor} from '../../components/Button/Button.types';
import Link from '../../components/Link';
import styles from './styles';

type Props = {
  headerText?: string;
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  handleButtonPress: () => void;
  linkText?: string;
  handleLinkPress?: () => void;
};

const GeneralInfo: FC<Props> = ({
  headerText,
  icon,
  title,
  description,
  buttonText,
  handleButtonPress,
  linkText,
  handleLinkPress,
}) => (
  <View style={[commonStyles.generalWrapper, styles.wrapper]}>
    {headerText && (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    )}

    {icon && <View style={styles.icon}>{icon}</View>}

    <Text style={[commonStyles.text, commonStyles.textHeader, styles.title]}>
      {title}
    </Text>
    <Text
      style={[commonStyles.text, commonStyles.textRegular, styles.description]}>
      {description}
    </Text>

    <View style={styles.buttonWrapper}>
      <Button
        text={buttonText}
        buttonColor={ButtonColor.Submit}
        onPressHandler={handleButtonPress}
      />
    </View>

    {linkText && (
      <View style={commonStyles.linkWrapper}>
        <Link text={linkText} onPressHandler={handleLinkPress} />
      </View>
    )}
  </View>
);

export default GeneralInfo;
