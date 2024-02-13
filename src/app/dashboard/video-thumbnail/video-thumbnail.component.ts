import {Component, Input} from '@angular/core';
import {Video} from "../../types/video";

@Component({
  selector: 'app-video-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './video-thumbnail.component.html',
  styleUrl: './video-thumbnail.component.scss'
})
export class VideoThumbnailComponent {
  @Input({required: true}) videoThumbnail: Video | undefined
}
