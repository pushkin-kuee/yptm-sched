export const FOR_CHILDREN_TAG = 'для_детей';

export const LOCATIONS = {
    MAIN_BUILDING: 'gz',
    TED_LECTORIUM: 'ted',
    GALLERY: 'gal',
    MUSEYON: 'mus',
    GAMES_IN_MAIN_BUILDING: 'alldaygz',
    GAMES_IN_GALLERY: 'alldaygal'
};

export const LOCATION_LABELS = Object
    .keys(LOCATIONS)
    .map(key => LOCATIONS[key]);

export const START_HOUR = 11;
export const END_HOUR = 18.75;

export const MINUTES_IN_SLOT = 5;

const DURATION_IN_HOURS = END_HOUR - START_HOUR;
const DURATION_IN_MINUTES = DURATION_IN_HOURS * 60;
const SLOTS_NUMBER = DURATION_IN_MINUTES / MINUTES_IN_SLOT;

const FIVE_MINUTE_SLOTS = Array.from(
    new Array(SLOTS_NUMBER), (x, i) => i * MINUTES_IN_SLOT
);

export const HUMAN_TIME_SLOTS = FIVE_MINUTE_SLOTS.map(fiveMinuteSlot => {
    const hour = Math.floor(fiveMinuteSlot / 60) + START_HOUR;
    const minute = fiveMinuteSlot % 60;

    return {hour, minute};
});

export const VISIBLE_EACH_MINUTE = 15;
