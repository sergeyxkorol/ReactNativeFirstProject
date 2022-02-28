import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import style from './style';

export default function CenterView({children}) {
  return (
    <View style={style.main}>
      <View style={style.wrapper}>{children}</View>
    </View>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
