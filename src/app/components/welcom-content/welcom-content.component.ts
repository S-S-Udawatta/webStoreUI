import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcom-content',
  templateUrl: './welcom-content.component.html',
  styleUrls: ['./welcom-content.component.scss']
})
export class WelcomContentComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


}
