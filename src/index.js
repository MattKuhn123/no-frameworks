import $ from 'jquery';
import { init as appInit } from './app/app.component';
import appHtml from './app/app.component.html';

const app = $('#app-container');
app.html(appHtml);
appInit();