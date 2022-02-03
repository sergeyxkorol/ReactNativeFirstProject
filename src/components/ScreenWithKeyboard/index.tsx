import React, {FC} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import commonStyles from '../../commonStyles';
import {
  KEYBOARD_VERTICAL_OFFSET_ANDROID,
  KEYBOARD_VERTICAL_OFFSET_IOS,
} from '../../constants';

const ScreenWithKeyboard: FC = ({children}) => {
  const {height} = useWindowDimensions();
  const isIOS = Platform.OS === 'ios';
  const keyboardVerticalOffset = isIOS
    ? KEYBOARD_VERTICAL_OFFSET_IOS
    : KEYBOARD_VERTICAL_OFFSET_ANDROID;

  return (
    <SafeAreaView style={{height}}>
      <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={commonStyles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>{children}</ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenWithKeyboard;
