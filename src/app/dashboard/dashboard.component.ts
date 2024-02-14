import { Component, OnDestroy } from '@angular/core';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { Video } from "../types/video";
import { VideoDataService } from "../services/video-data.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [VideoPlayerComponent, VideoListComponent, StatFiltersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent implements OnDestroy{

  videoListData: Array<Video> = [];
  selectedVideo: Video | undefined;
  videoDataSubscription: Subscription;

  constructor(videoDataService: VideoDataService) {
    this.videoDataSubscription = videoDataService.loadVideos()
      .subscribe((videoListFromServer)=> {
        this.videoListData = videoListFromServer;
      })
  }

  videoSelectionChanged(video: Video) {
    this.selectedVideo = video;
  }

  ngOnDestroy() {
    this.videoDataSubscription.unsubscribe();
  }
}
