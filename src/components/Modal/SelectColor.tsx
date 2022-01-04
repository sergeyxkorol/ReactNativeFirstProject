import React, {FC} from 'react';
import Modal from './Modal';

import CancelCircleIcon from '../../assets/graphic/cancel-circle.svg';

const SelectColor: FC = () => (
  <Modal
    icon={<CancelCircleIcon />}
    title="Select color"
    description="Please select your color to add this item in your cart"
  />
);

export default SelectColor;
