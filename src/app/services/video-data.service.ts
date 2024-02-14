import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Video } from "../types/video";

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  constructor(private _httpClient: HttpClient) {

  }

  loadVideos(): Observable<Array<Video>>{
    return this._httpClient.get<Array<Video>>("https://api.angularbootcamp.com/videos");
  }
}
