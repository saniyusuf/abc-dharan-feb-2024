import { Component, OnDestroy } from '@angular/core';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { Video } from "../types/video";
import { VideoDataService } from "../services/video-data.service";
import {Observable, Subscription} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [VideoPlayerComponent, VideoListComponent, StatFiltersComponent, AsyncPipe, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

  videoListData$: Observable<Array<Video>>;
  selectedVideo: Video | undefined;

  constructor(videoDataService: VideoDataService) {
    this.videoListData$ = videoDataService.loadVideos()

  }

  videoSelectionChanged(video: Video) {
    this.selectedVideo = video;
  }


}
