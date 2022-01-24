import React, {FC} from 'react';
import {Modal, View} from 'react-native';
import CustomModal from '../Modal/Modal';
import Button from '../Button/Button';
import {ButtonColor} from '../Button/Button.types';

import ClaimCircleIcon from '../../assets/graphic/claim-circle.svg';
import styles from './styles';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  onRetry: () => void;
};

const OfflineModal: FC<Props> = ({isVisible, onClose, onRetry}) => {
  const cancel = () => {
    onClose();
  };

  const retry = () => {
    onRetry();
    onClose();
  };

  const buttons = (
    <View style={styles.buttonsWrapper}>
      <View style={styles.button}>
        <Button
          text="Cancel"
          buttonColor={ButtonColor.Cancel}
          onPressHandler={cancel}
        />
      </View>
      <View style={styles.button}>
        <Button
          text="Retry"
          buttonColor={ButtonColor.Submit}
          onPressHandler={retry}
        />
      </View>
    </View>
  );

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <CustomModal
        icon={<ClaimCircleIcon />}
        title="Connection Error"
        description="Looks like your device is not connected to the  Internet"
        buttons={buttons}
        showOverlay={true}
      />
    </Modal>
  );
};

export default OfflineModal;
