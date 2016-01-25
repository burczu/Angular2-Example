/**
 * Created by burczu on 23.01.2016.
 */

import { Component } from 'angular2/core';
import { DirectiveComponent } from './directive.component';
import { AppService } from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    styleUrls: [ 'app/app.styles.css' ],
    directives: [ DirectiveComponent ],
    providers: [ AppService ]
})

export class AppComponent {

    constructor(private appService: AppService) {
    }

    public message = 'Hello from component!';
    public nameList = this.appService.getNames();
}