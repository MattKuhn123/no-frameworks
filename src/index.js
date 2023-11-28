import $ from 'jquery';
import { html as appHtml, init as appInit } from './app/app.component';

const app = $('#app');
app.html(appHtml());
appInit();