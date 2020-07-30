import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assignment-six';

  @ViewChild('f') form:NgForm;

  subcriptions = ['Basic', 'Advanced', 'Pro'];

  defaultSubcription = 'Advanced';

  ngOnInit(){
    console.log('Default:' + this.form);
  }

  onSubmit() {
    console.log(this.form);
  }
}
