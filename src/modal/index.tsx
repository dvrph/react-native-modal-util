import React, { useReducer } from 'react'
import { Platform, Modal, View, ActivityIndicator, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import ModalContext from '../context';
import { actions, reducer, initialState } from './../reducer';
import styles from './styles';

type Props = {
    animation?: 'slide' | 'none' | 'fade';
    activityIndicatorSize?: 'small' | 'large';
    activityIndicatorColor?: string;
    style?: any;
    children?: any;
};

const ModalProvider: React.FunctionComponent<Props> = (props) => {
    const { animation, style, activityIndicatorSize = 'large', activityIndicatorColor = '#61849B', children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    const { preloader, dialog } = state;

    const determineHeader = (): JSX.Element => {
        if (React.isValidElement(dialog.header)) {
            return dialog.header;
        } else {
            return <Text style={[styles.headerText, style?.dialogHeader]}>{dialog.header}</Text>;
        }
    };

    const determineBody = (): JSX.Element => {
        if (React.isValidElement(dialog.body)) {
            return dialog.body;
        } else {
            return <Text style={[styles.bodyText, style?.dialogBody]}>{dialog.body}</Text>;
        }
    };

    const actionButton = (text?: string, style?: any, action?: any): JSX.Element => {
        if (Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback onPress={action}>
                    <View style={style}>
                        <Text style={[styles.buttonText, style?.dialogAction]}>{text}</Text>
                    </View>
                </TouchableNativeFeedback>
            );
        } else {
            return (
                <TouchableOpacity style={style} onPress={action}>
                    <Text style={[styles.buttonText, style?.dialogAction]}>{text}</Text>
                </TouchableOpacity>
            );
        }
    }

    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            <Modal
                transparent={true}
                animationType={animation ? animation : 'fade'}
                visible={preloader.show || dialog.show}>
                <View style={[styles.modalBackground, style?.modalContainer]}>
                    {preloader.show &&
                        <View style={[styles.activityIndicatorWrapper, style?.activityIndicatorContainer]}>
                            <ActivityIndicator size={activityIndicatorSize} color={activityIndicatorColor} />
                            {preloader.message && <Text style={[styles.message, style?.text]}>{preloader.message}</Text>}
                        </View>
                    }
                    {dialog.show &&
                        <View style={[styles.dialogWrapper, style?.dialogContainer]}>
                            {dialog.header && <View style={styles.headerRow}>{determineHeader()}</View>}

                            <View style={styles.bodyRow}>{determineBody()}</View>

                            <View style={styles.footerRow}>
                                {dialog.negativeText &&
                                    actionButton(
                                        dialog.negativeText,
                                        styles.footerButton,
                                        () => dispatch({ type: actions.dialog.CLOSE, payload: 'NEGATIVE' })
                                    )
                                }
                                {
                                    actionButton(
                                        dialog.positiveText,
                                        [styles.footerButton, dialog.negativeText ? styles.buttonBorder : null],
                                        () => dispatch({ type: actions.dialog.CLOSE, payload: 'POSITIVE' })
                                    )
                                }
                            </View>
                        </View>
                    }
                </View>
            </Modal>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;

