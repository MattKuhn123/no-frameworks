import $ from 'jquery';
import { init as appInit } from './app/app.component';

const app = $('#app-container');
app.load("./assets/app.component.html", function() {
    appInit();
});