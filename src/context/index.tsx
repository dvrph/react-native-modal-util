import React from 'react';
import { initialState, ModalState } from './../reducer';

const ModalContext = React.createContext<{
    state: ModalState,
    dispatch: (A: any) => void
}>({
    state: initialState,
    dispatch: () => { }
})

export default ModalContext;