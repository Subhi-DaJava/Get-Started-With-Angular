import { Injectable } from '@angular/core';
import { FaceSnap } from './../models/face-snap.model';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 100,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les rendonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 180,
      location: 'la Montaigne'
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 200,
    },
    {
      id: 4,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 266,
      location: 'Paris'
    },
    {
      id: 5,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les rendonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 75,
      location: 'la Montaigne'
    },
    {
      id: 6,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 35,
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  // snapFaceSnapById(faceSnapId: number): void {
  //   // this.getAllFaceSnaps().filter(faceSnap => faceSnap.id === id).map(faceSnapById => faceSnapById.snaps++);
  //   const faceSnap = this.getAllFaceSnaps().find(faceSnap => faceSnap.id === faceSnapId);
  //   if(faceSnap) { // if existe 
  //     faceSnap.snaps++;
  //   } else {
  //     throw new Error('FaceSnap not found!');
  //   }
  // }
  // oneFaceSnapById(faceSnapId: number): void {
  //   // this.getAllFaceSnaps().filter(faceSnap => faceSnap.id === id).map(faceSnapById => faceSnapById.snaps++);
  //   const faceSnap = this.getAllFaceSnaps().find(faceSnap => faceSnap.id === faceSnapId);
  //   if(faceSnap) { // if existe 
  //     faceSnap.snaps--;
  //   } else {
  //     throw new Error('FaceSnap not found!');
  //   }
  // }

  // Optimize this two methods above, littral types 

  snapFaceSnapById(faceSnapId: number, snapType: 'Oh Snap!' | 'OneSnap!'): void {
    const faceSanpById = this.getFaceSnapById(faceSnapId);

    // if (faceSanpById && snap === 'Oh Snap!') {
    //   faceSanpById.snaps++;
    // } else {
    //   faceSanpById.snaps--;
    // }

    snapType === 'Oh Snap!' ? faceSanpById.snaps++ : faceSanpById.snaps--;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!')
    } else {
      return faceSnap;
    }
  }
}