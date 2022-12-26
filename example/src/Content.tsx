import React, { useEffect } from 'react';
import { View } from 'react-native';


import { useModalUtil } from 'react-native-modal-util';

interface Props { }

const Content: React.FunctionComponent<Props> = () => {
  const { displayPreloader } = useModalUtil();

  useEffect(() => {
    displayPreloader();
  }, []);

  return (
    <View />
  );
};

export default Content;
