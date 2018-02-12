//edit guard

import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable()
export class SaveAlertGuard 
        implements CanDeactivate<ProductEditComponent> {

    //angular passes the component instance
    canDeactivate(target: ProductEditComponent) {
        //return true/false
        //true, you can leave the component
        //false, stay at component

        if (target.form.pristine) { //no changes
            return true;
        }

        //alert warning, form is changed
        let result: boolean;

        result = window.confirm('unsaved data, proceed?');

        return result;
    }
}