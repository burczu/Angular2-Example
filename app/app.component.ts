/**
 * Created by burczu on 23.01.2016.
 */

import { Component, View } from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html'
})

export class AppComponent {
    public message = 'Hello from component!';
}