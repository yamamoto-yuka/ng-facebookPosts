import { Component, OnInit } from '@angular/core';
import { Post } from './post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postJSON: Post[] = [
    {
      icon: 'https://content.fortune.com/wp-content/uploads/2021/08/GettyImages-1269496215.jpg',
      profileUserame: 'Jade Travel',
      profileDescribe:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      mainPost:
        'https://imageio.forbes.com/specials-images/imageserve/5f709d82fa4f131fa2114a74/0x0.jpg?format=jpg&width=1200&fit=bounds',
    },
    {
      icon: 'https://content.fortune.com/wp-content/uploads/2021/08/GettyImages-1269496215.jpg',
      profileUserame: 'Jade Travel',
      profileDescribe:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      mainPost:
        'https://images.ctfassets.net/itrs3p223g0s/2RbOacx6d1RYNCLOtDmvg/f71f77059110c404db7874ad0d5d6fb6/canadians-travel_1920x1280.jpg',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
