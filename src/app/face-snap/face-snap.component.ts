import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  constructor(private faceSnapService: FaceSnapsService) { }

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.buttonText = "Oh Snap!";
  }

  // onSnap(): void {

  //   if (this.buttonText === 'Oh Snap!') {
  //     this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
  //     this.buttonText = 'Oops, OneSnap!';
  //   } else {
  //     this.faceSnapService.oneFaceSnapById(this.faceSnap.id);
  //     this.buttonText = 'Oh Snap!';
  //   }

  // }

  // optimize this method above
  onSnap(): void {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'Oh Snap!');
      this.buttonText = 'Oops, OneSnap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'OneSnap!');
      this.buttonText = 'Oh Snap!';
    }
  }
}
