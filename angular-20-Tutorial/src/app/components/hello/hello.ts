import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
  title:string= "components in Angular"

  constructor(private router:Router){}

  gotoRouting(){
    this.router.navigate(['/component-with-routing'])
  }
}
