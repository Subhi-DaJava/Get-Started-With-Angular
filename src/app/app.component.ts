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
    this.mySnap = new FaceSnap (
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
   ),
   this.otherSnap = new FaceSnap (
    'Three Rock Mountain',
    'Un endroit magnifique pour les rendonnées.',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
    new Date(),
    0
   ),
   this.lastSnap = new FaceSnap (
    'Un bon repas',
    'Mmmh que c\'est bon !',
    'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    new Date(),
    0
 )
  }
}
