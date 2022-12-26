export interface ModalState {
    preloader: {
        show: boolean;
        message?: string;
    };
    dialog: {
        show: boolean;
        header?: string | JSX.Element;
        body?: string | JSX.Element;
        positiveText?: string;
        negativeText?: string;
        response?: 'POSITIVE' | 'NEGATIVE';
    };
}

export const initialState: ModalState = {
    preloader: {
        show: false
    },
    dialog: {
        show: false
    }
};

export const actions = {
    preloader: {
        OPEN: 'PRELOADER_OPEN',
        CLOSE: 'PRELOADER_CLOSE'
    },
    dialog: {
        OPEN: 'DIALOG_OPEN',
        CLOSE: 'DIALOG_CLOSE'
    },
}

export const reducer = (state: ModalState, action: any): ModalState => {
    switch (action.type) {
        case actions.preloader.OPEN: {
            return {
                ...state,
                preloader: {
                    show: true,
                    message: action.payload
                }
            };
        }
        case actions.preloader.CLOSE: {
            return {
                ...state,
                preloader: {
                    show: false,
                    message: undefined
                }
            };
        }
        case actions.dialog.OPEN: {
            const { header, body, positiveText, negativeText } = action.payload;

            return {
                ...state,
                dialog: {
                    show: true,
                    header: header,
                    body: body,
                    positiveText: positiveText,
                    negativeText: negativeText,
                    response: undefined
                }
            };
        }
        case actions.dialog.CLOSE: {
            return {
                ...state,
                dialog: {
                    show: false,
                    header: undefined,
                    body: undefined,
                    positiveText: undefined,
                    negativeText: undefined,
                    response: action.payload
                }
            };
        }
    }

    return state;
};
