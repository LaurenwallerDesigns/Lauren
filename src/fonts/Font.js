import { createGlobalStyle } from 'styled-components';
import SunsetBeach from './sunset-beach.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'SunsetBeach';
        src: local('SunsetBeach'), local('SunsetBeach'),
        url(${SunsetBeach}) format('ttf');
    }
`;