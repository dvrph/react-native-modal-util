import * as React from 'react';

import { ModalProvider } from 'react-native-modal-util';
import Content from './Content';

export default function App() {

  return (
    <ModalProvider>
      <Content />
    </ModalProvider>
  );
}
