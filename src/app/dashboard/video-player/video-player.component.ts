import {Component, Input} from '@angular/core';
import {Video} from "../../types/video";

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  @Input({ required: true}) video: Video | undefined

}
