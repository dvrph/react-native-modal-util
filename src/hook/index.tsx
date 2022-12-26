import React, { useEffect, useRef } from 'react'
import ModalContext from '../context';
import { actions } from '../reducer';

export interface DialogOptions {
    body: string | JSX.Element,
    header?: string | JSX.Element,
    positiveText?: string,
    negativeText?: string,
    positiveAction?: () => void,
    negativeAction?: () => void
}

const useModalUtil = () => {
    const { state, dispatch } = React.useContext(ModalContext);
    let positiveHandler: any = useRef(null);
    let negativeHandler: any = useRef(null);

    useEffect(() => {
        if (state.dialog.response === 'POSITIVE' && positiveHandler.current) positiveHandler.current();
        if (state.dialog.response === 'NEGATIVE' && negativeHandler.current) negativeHandler.current();
    }, [state.dialog.response]);

    const displayPreloader = (message?: string) => {
        dispatch({ type: actions.preloader.OPEN, payload: message });
    }

    const closePreloader = () => {
        dispatch({ type: actions.preloader.CLOSE });
    }

    const displayDialog = (dialogOptions: DialogOptions): void => {

        positiveHandler.current = dialogOptions.positiveAction;
        negativeHandler.current = dialogOptions.negativeAction;

        dispatch({
            type: actions.dialog.OPEN,
            payload: {
                body: dialogOptions.body,
                header: dialogOptions?.header,
                positiveText: dialogOptions?.positiveText ? dialogOptions.positiveText : 'OK',
                negativeText: dialogOptions?.negativeText
            }
        });

    };

    return {
        displayPreloader,
        closePreloader,
        displayDialog
    }
}

export default useModalUtil;