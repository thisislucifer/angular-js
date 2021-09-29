import { Component, OnInit, Input } from '@angular/core';

// importing icons--
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase
} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  user; //this has all the info we need

  faEnvelope = faEnvelope
  faMapMarkedAlt = faMapMarkedAlt
  faPhone = faPhone
  faDatabase = faDatabase
  
  constructor() { }

  ngOnInit(): void {
  }
}
