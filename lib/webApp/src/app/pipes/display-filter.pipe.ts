import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'displayFilter',
    pure: false
})
export class DisplayFilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (typeof value === 'string') {
            return value;
        } else {
            if(value[0] != null && value[1] == null){
                return "> " + value;
            }else if(value[0] == null && value[1] != null){
                return "< " + value;
            }else {
                return value[0] + " - " + value[1];
            }
        }
    }

}
