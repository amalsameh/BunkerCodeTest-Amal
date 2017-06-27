import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import {IPeople} from '../people'
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isCreated = false;
  personCreated= false;
  person: IPeople= {firstName: '',
  lastName: '',
  favoriteColor: '',
  summary: ''} ;
  constructor(private _http: Http,
              private _router: Router,
              private  _peopleService: PeopleService) {
  }

  onSubmit(form) {
    const value = form.value;
   console.log(value)
    this.person.firstName = value.firstName;
    this.person.lastName = value.lastName;
    this.person.favoriteColor = value.favoriteColor;
    this.saveEvent();
   }
  saveEvent() {
    try {
      this._peopleService.submitPeople(this.person).subscribe
      (
        res => {
          this.isCreated = true;
          this.person = <IPeople>res.json();
          console.log('Saved Successfully' + res);
          this._router.navigate(['people']);
        }, err => console.log(err)
      );
    } catch (e) {
      console.log(e);
    }
  }

  onCancel() {
    this._router.navigate(['Home']);
  }
  ngOnInit() {
  }

}
