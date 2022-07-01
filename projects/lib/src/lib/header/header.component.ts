import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';

@Component({
  standalone: true,
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MdbTabsModule],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  closeResult = '';

  constructor() { }

  ngOnInit(): void {
  }

  onRegisterSubmit(form: NgForm){
    console.log(form.value);
  }

  onLoginSubmit(form:NgForm){
    console.log(form.value);
  }

}
