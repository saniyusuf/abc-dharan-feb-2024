import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../../types/video';
import { VideoThumbnailComponent } from "../video-thumbnail/video-thumbnail.component";

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [NgFor, VideoThumbnailComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  @Input({required: true}) videoList: Array<Video> | null = []
  selectedVideo: any;
  @Output() onVideoSelected = new EventEmitter<Video>()

      setSelectedVideo(video: any){
        this.selectedVideo = video;
        this.onVideoSelected.emit(video);
      }
}
