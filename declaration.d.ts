import React from 'react';
declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<
    SvgProps & {
      fillSecondary?: string;
    }
  >;
  export default content;
}

declare module '*.png' {
  import {ImageSourcePropType} from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}
