import React from 'react';
import { LOCATIONS } from '../../../constants';

export const LOCATION_NAMES = {
    [LOCATIONS.MAIN_BUILDING]: 'Главное здание',
    [LOCATIONS.TED_LECTORIUM]: 'Площадка TED-talk',
    [LOCATIONS.GALLERY]: 'Галерея',
    [LOCATIONS.MUSEYON]: 'Мусейон',
    [LOCATIONS.GAMES_IN_MAIN_BUILDING]: 'Весь день в главном здании',
    [LOCATIONS.GAMES_IN_GALLERY]: 'Весь день в галерее'
};

export const LOCATION_DESCRIPTIONS = {
    [LOCATIONS.MAIN_BUILDING]: [
        <p key="first">
            События по расписанию в Главном здании Музея.
        </p>,
        <p key="second">
            Все экскурсии стартуют на белом полу за контролем билетов. Место проведения всех остальных событий (например, презентаций проектов) указано в карточке. В карточках содержится подробная информация о событиях.
        </p>
    ],
    [LOCATIONS.TED_LECTORIUM]: [
        <p key="first">
            TED-talk — это короткая лекция. Мы выбрали такой формат для тем, которые нельзя проиллюстрировать экспонатами Музея, поэтому нельзя провести на эти темы экскурсию.
        </p>,
        <p key="second">
            Площадка TED-talk расположена в зале №31 (под греческим двориком).
        </p>
    ],
    [LOCATIONS.GALLERY]: [
        <p key="first">
            События по расписанию в Галерее искусства стран Европы и Америки XIX и XX веков.
        </p>,
        <p key="second">
            Все экскурсии стартуют возле касс, перед сувенирным магазином.
        </p>
    ],
    [LOCATIONS.MUSEYON]: [
        <p key="first">
            Мусейон находится справа от Главного здания, по адресу Колымажный переулок, дом 6, строение 2.
        </p>,
        <p key="second">
            Вход на мероприятие в Мусейоне свободный.
        </p>
    ]
};
