var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { humanizeBytes, UploadStatus } from "ngx-uploader/src/ngx-uploader/classes/ngx-uploader.class";
var FileUpload = (function () {
    function FileUpload() {
        this.UploadFilesChanges = new EventEmitter();
        this.sample = new EventEmitter();
        this.fileUrls = [];
        this.formData = {
            concurrency: 0,
            autoUpload: true,
            verbose: false
        };
        this.files = [];
        this.uploadInput = new EventEmitter();
        this.humanizeBytes = humanizeBytes;
    }
    FileUpload.prototype.ngAfterViewInit = function () {
        this.mutliple = this.input.nativeElement.hasAttribute("multiple");
    };
    FileUpload.prototype.ngOnInit = function () {
        if (this.file) {
            this.fileUrls[0] = this.file;
            this.UploadFilesChanges.emit(this.fileUrls);
        }
    };
    FileUpload.prototype.onUploadOutput = function (output) {
        if (output.type === "addedToQueue") {
            if (this.formData.autoUpload) {
                var event_1 = {
                    type: "uploadFile",
                    file: output.file,
                    url: this.url,
                    method: "POST",
                    concurrency: this.formData.concurrency
                };
                if (!this.mutliple) {
                    this.uploadInput.emit({ type: "cancelAll" });
                }
                var reader_1 = new FileReader();
                reader_1.addEventListener("load", function () {
                    output.file.fileContent = reader_1.result;
                }, false);
                reader_1.readAsDataURL(output.nativeFile);
                this.uploadInput.emit(event_1);
            }
            this.files.push(output.file);
        }
        else if (output.type === "uploading") {
        }
        else if (output.type === "done") {
            this.emitChanges();
        }
        else if (output.type === "cancelled") {
            this.files = this.files.filter(function (file) { return file !== output.file; });
            this.emitChanges();
        }
    };
    FileUpload.prototype.startUpload = function () {
        var event = {
            type: "uploadAll",
            url: this.url,
            method: "POST",
            concurrency: this.formData.concurrency
        };
        this.uploadInput.emit(event);
    };
    FileUpload.prototype.cancelUpload = function (id) {
        this.uploadInput.emit({ type: "cancel", id: id });
    };
    FileUpload.prototype.emitChanges = function () {
        var _this = this;
        this.UploadFilesChanges.emit(this.files
            .filter(function (val) {
            return val.progress.status == UploadStatus.Done;
        })
            .map(function (val) {
            var fileUploaded = val.response.result.files.file[0];
            var file = {
                container: fileUploaded.container,
                fileName: fileUploaded.originalFilename,
                name: fileUploaded.name,
                mime: fileUploaded.type,
                size: fileUploaded.size
            };
            _this.fileUrls[0] = 'http://localhost:3000/api/uploads/photos/download/' + file.name;
            return _this.fileUrls[0];
        }));
    };
    return FileUpload;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "url", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FileUpload.prototype, "file", void 0);
__decorate([
    ViewChild("input"),
    __metadata("design:type", Object)
], FileUpload.prototype, "input", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FileUpload.prototype, "UploadFilesChanges", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FileUpload.prototype, "sample", void 0);
FileUpload = __decorate([
    Component({
        selector: "fileupload",
        templateUrl: "./fileupload.html",
        styleUrls: ["./fileupload.scss"]
    }),
    __metadata("design:paramtypes", [])
], FileUpload);
export { FileUpload };
//# sourceMappingURL=fileupload.js.map