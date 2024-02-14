import { Component } from '@angular/core';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { Video } from "../types/video";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [VideoPlayerComponent, VideoListComponent, StatFiltersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

  videoListData: Array<Video> = [];
  selectedVideo: Video | undefined;

  constructor(httpClient: HttpClient) {
    httpClient
      .get<Array<Video>>("https://api.angularbootcamp.com/videos")
      .subscribe((videoListFromServer)=> {
        this.videoListData = videoListFromServer;
      })
  }

  videoSelectionChanged(video: Video) {
    this.selectedVideo = video;
  }
}
