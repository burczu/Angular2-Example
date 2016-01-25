import {Component} from 'angular2/core';
@Component({
    selector: 'custom-directive',
    templateUrl: 'app/directive.template.html'
})
export class DirectiveComponent {
    public message: 'Hello from directive!';
}