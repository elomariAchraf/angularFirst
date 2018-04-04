import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info = {
    nom: 'achraf',
    email: 'elomari@gmail.com',
    tel: 62031589
  };
  comments = [
    {date: new Date(), message: 'a1'},
    {date: new Date(), message: 'a2'},
    {date: new Date(), message: 'a3'},
  ];
  commentaire = {date: null, message: '' };
  constructor() { }

  onAddCommentaire(c) {
    console.log(c);
    c.date = new Date();
    this.comments.push(c);
  }

  ngOnInit() {
  }


}
