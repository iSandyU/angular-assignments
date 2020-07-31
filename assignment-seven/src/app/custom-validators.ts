import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomerValidators{

    static invalidProjectName(control: FormControl): {[str:string]: boolean} {
            if(control.value === 'Test'){
                return {'InvalidProjectName':true};
            }
            else{
                return null;
            }
    }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(control.value === 'TestProject'){
                    resolve({'InvalidProjectName':true});
                }
                else{
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
}
}