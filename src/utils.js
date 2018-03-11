export function zeroPad(...numbers) {
    if (numbers.length === 1) {
        return `0${numbers[0]}`.slice(-2);
    }

    return numbers.map(number => `0${number}`.slice(-2));
};

export function formatTime(hours, minutes) {
    return zeroPad(hours, minutes).join(':');
};

function groupBy(values, func) {
    return values.reduce((groups, x) => {
        (groups[func(x)] = groups[func(x)] || []).push(x);
        return groups;
    }, {});
};

function eventDataToSlots(eventData, timeSlots) {
    return timeSlots.reduce((eventsBySlots, timeSlot) => {
        const eventsInSlot = eventData.filter(
            event => event.times.includes(timeSlot));

        eventsBySlots[timeSlot] = eventsInSlot;

        return eventsBySlots;
    }, {});
};

export function reformatData(eventData, timeSlots) {
    const eventsByLocations = groupBy(eventData, event => event.location);

    return Object.keys(eventsByLocations)
        .reduce((eventsByLocationsSlotted, location) => {
            const eventsInLocation = eventsByLocations[location];

            eventsByLocationsSlotted[location] = eventDataToSlots(
                eventsInLocation,
                timeSlots
            );

            return eventsByLocationsSlotted;
        }, {});
}

const MS_IN_MINUTE = 60 * 1000;

export function slotsFromStart(time, startHour, minutesInSlot) {
    const timeStart = new Date();
    timeStart.setHours(startHour, 0, 0, 0);

    const delta = (time - timeStart) / MS_IN_MINUTE;

    return delta / minutesInSlot;
}
