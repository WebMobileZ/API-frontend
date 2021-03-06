import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('uploadfile', file);
    formdata.append('keyname', "venky.png");

    const req = new HttpRequest('POST', 'http://localhost:5000/api/auth/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:5000/api/file/all');
  }
}
