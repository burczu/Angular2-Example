import { Injectable } from 'angular2/core'

@Injectable()
export class AppService {
    getNames() {
        return [
            { name: 'Bob' },
            { name: 'Tom' },
            { name: 'George' }
        ]
    }
}