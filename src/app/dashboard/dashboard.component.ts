import { Component } from '@angular/core';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [VideoPlayerComponent, VideoListComponent, StatFiltersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

}
