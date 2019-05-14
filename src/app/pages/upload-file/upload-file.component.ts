import { Component } from '@angular/core';
import { HttpClient , HttpEventType} from '@angular/common/http';


@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
    
    fileData: File = null;
    constructor(private http: HttpClient) { }
     
    fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
    }
     
    onSubmit() {
        const formData = new FormData();
        formData.append('file', this.fileData);
        this.http.post('url/to/your/api', formData, {
            reportProgress: true,
            observe: 'events'   
        }).subscribe(events => {
            if(events.type == HttpEventType.UploadProgress) {
                console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
            } else if(events.type === HttpEventType.Response) {
                console.log(events);
            }
        })
    }



}
