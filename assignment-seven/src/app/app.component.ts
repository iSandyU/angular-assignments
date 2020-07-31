import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assignment-seven';

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectname: new FormControl(null, [
        Validators.required,
        CustomerValidators.invalidProjectName],
        CustomerValidators.asyncInvalidProjectName
      ),
      mailaddress: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      projectstatus: new FormControl('critical'),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
