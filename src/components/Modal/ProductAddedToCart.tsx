import React, {FC} from 'react';
import Modal from './Modal';

import DoneCircleIcon from '../../assets/graphic/done-circle.svg';

const ProductAddedToCart: FC = () => (
  <Modal icon={<DoneCircleIcon />} title="Product added to your cart" />
);

export default ProductAddedToCart;
