import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit
} from "@angular/core";

import {
  UploadOutput,
  UploadInput,
  UploadFile,
  humanizeBytes,
  UploadStatus
} from "ngx-uploader/src/ngx-uploader/classes/ngx-uploader.class";

export interface FormData {
  concurrency: number;
  autoUpload: boolean;
  verbose: boolean;
}

@Component({
  selector: "fileupload",
  templateUrl: "./fileupload.html",
  styleUrls: ["./fileupload.scss"]
})
export class FileUpload implements OnInit, AfterViewInit {
  
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  @Input() url: "string";
  @Input() file: "string";
  @ViewChild("input") input;
  @Output() UploadFilesChanges = new EventEmitter<any[]>();
  @Output() sample = new EventEmitter<any>();
  id: string;
  mutliple: boolean;
  fileUrls:any[]=[];
  constructor() {
    this.formData = {
      concurrency: 0,
      autoUpload: true,
      verbose: false
    };
    
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  
  }

  ngAfterViewInit(): void {
    this.mutliple = this.input.nativeElement.hasAttribute("multiple");
  }

  ngOnInit(): void {
    if(this.file){
      this.fileUrls[0]= this.file;
      this.UploadFilesChanges.emit(this.fileUrls)
    }
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === "addedToQueue") {
      if (this.formData.autoUpload) {
        const event: UploadInput = {
          type: "uploadFile",
          file: output.file,
          url: this.url,
          method: "POST",
          concurrency: this.formData.concurrency
        };
        if (!this.mutliple) {
          this.uploadInput.emit({ type: "cancelAll" });
        }

        const reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            (<any>output).file.fileContent = reader.result;
          },
          false
        );

        reader.readAsDataURL(output.nativeFile);
        this.uploadInput.emit(event);
      }
      this.files.push(output.file);
    } else if (output.type === "uploading") {
    } else if (output.type === "done") {
      this.emitChanges();
    } else if (output.type === "cancelled") {
      this.files = this.files.filter(
        (file: UploadFile) => file !== output.file
      );
      this.emitChanges();
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: "uploadAll",
      url: this.url,
      method: "POST",
      concurrency: this.formData.concurrency
    };

    this.uploadInput.emit(event);
  }
  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: "cancel", id: id });
  }

  emitChanges() {
    this.UploadFilesChanges.emit(
      this.files
        .filter(val => {
          return val.progress.status == UploadStatus.Done;
        })
        .map(val => {
          let fileUploaded = val.response.result.files.file[0];
          let file = {
            container: fileUploaded.container,
            fileName: fileUploaded.originalFilename,
            name: fileUploaded.name,
            mime: fileUploaded.type,
            size: fileUploaded.size
          };

          this.fileUrls[0]='http://localhost:3000/api/uploads/photos/download/'+file.name;

          return this.fileUrls[0]
        })
    );
  }
}
