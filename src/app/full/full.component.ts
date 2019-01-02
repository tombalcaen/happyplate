import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  subForm: FormGroup;


  constructor(private fb: FormBuilder,
              private _mail: MailService) { }

  ngOnInit() {
    this.createSubForm();
  }

  createSubForm(){
    this.subForm = this.fb.group({
      name: '',
      email: ''
    })
  }

  onSubmit(form){
    console.log(form); 
    this._mail.sendToMailchimp(form).toPromise()
    .then(res=>{
      
    })
  }
}



