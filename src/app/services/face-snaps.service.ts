import { Injectable } from '@angular/core';
import { FaceSnap } from './../models/face-snap.model';
@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 100,
          location: 'Paris'
        },
        {
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les rendonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 180,
          location: 'la Montaigne'
        },
        {
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 200,
        },
        {
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 266,
          location: 'Paris'
        },
        {
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les rendonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 75,
          location: 'la Montaigne'
        },
        {
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 35,
        }
      ];
}