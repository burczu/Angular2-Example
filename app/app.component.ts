/**
 * Created by burczu on 23.01.2016.
 */

import { Component, View } from 'angular2/core';
import DirectiveComponent from './directive.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls: [ 'app/app.styles.css' ],
    directives: [ DirectiveComponent ]
})

export class AppComponent {
    public message = 'Hello from component!';
    public nameList = [
        { name: 'Bob' },
        { name: 'Tom' },
        { name: 'George' }
    ]
}