import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { }

  //@Input() faceSnap!: FaceSnap;
  faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = "Oh Snap!";
    const faceSnapId = +this.route.snapshot.params['id']; // param (id)string type case --> number
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

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
