import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  otherSnap!: FaceSnap;
  lastSnap!: FaceSnap;
  
  ngOnInit(): void {
    this.mySnap = { 
      title :'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 8,
      location: 'Paris'
  },
   this.otherSnap = {
    title: 'Three Rock Mountain',
    description: 'Un endroit magnifique pour les rendonnées.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
    createdDate: new Date(),
    snaps: 7,
    location: 'la Montaigne'
   },
   this.lastSnap = { 
    title: 'Un bon repas',
    description: 'Mmmh que c\'est bon !',
    imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 4,

   }
  }
}
