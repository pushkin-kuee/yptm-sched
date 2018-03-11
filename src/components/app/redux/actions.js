import * as constants from './constants';

export const setActiveEvent = (event) => {
    return {type: constants.SET_ACTIVE_EVENT, event};
};

export const setActiveTag = (tag) => {
    return {type: constants.SET_ACTIVE_TAG, tag};
}

export const setEventData = (data) => {
    return {type: constants.SET_EVENT_DATA, data};
};

export const updateNow = () => {
    return {type: constants.UPDATE_NOW};
}
