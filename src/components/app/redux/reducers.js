import * as constants from './constants';

import { LOCATION_LABELS, HUMAN_TIME_SLOTS } from '../../../constants';
import { formatTime, reformatData } from '../../../utils';

const FORMATTED_SLOTS = HUMAN_TIME_SLOTS.map(
    ({hour, minute}) => formatTime(hour, minute)
);

const initialState = {
    activeEvent: null,
    activeTag: null,
    eventsByLocationBySlots: null,
    formattedSlots: FORMATTED_SLOTS,
    now: null
};

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.SET_EVENT_DATA:
            const eventsByLocationBySlots = reformatData(action.data, FORMATTED_SLOTS);

            if (Object
                .keys(eventsByLocationBySlots)
                .some(location => !LOCATION_LABELS.includes(location))
            ) {
                throw new Error(`unknown location, locations: ${
                    Object.keys(eventsByLocationBySlots)
                }`);
            }

            return {...state, eventsByLocationBySlots};

        case constants.SET_ACTIVE_EVENT:
            return {...state, activeEvent: action.event};

        case constants.SET_ACTIVE_TAG:
            return {...state, activeTag: action.tag, activeEvent: null};

        case constants.UPDATE_NOW:
            return {...state, now: new Date()};

        default:
            return {...state};
    }
};

export default appReducer;
