import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  likeImage: string =
    'https://cdn.freebiesupply.com/logos/large/2x/thumbs-up-facebook-logo-png-transparent.png';
  constructor() {}

  ngOnInit(): void {}
}
