<template>
  <div id="app">
    <div class="container">
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1>Upload images</h1>
        <div class="dropbox">
          <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*" class="input-file">
            <p v-if="isInitial">
              Drag your file(s) here to begin<br> or click to browse
            </p>
            <p v-if="isSaving">
              Uploading {{ fileCount }} files...
            </p>
        </div>
      </form>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Uploaded failed.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Try again</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    enum Status { STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3 }
    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

    @Component
    export default class FileUpload extends Vue {
        private xuploadedFiles: any[] = [];
        private xuploadError: null | string = null;
        private xcurrentStatus: Status = STATUS_INITIAL;
        private xuploadFieldName: string = "photo"

        public get isInitial(): boolean {
            return this.currentStatus === STATUS_INITIAL;
        }
        public get isSaving(): boolean {
            return this.currentStatus === STATUS_SAVING;
        }
        public get isSuccess(): boolean {
            return this.currentStatus === STATUS_SUCCESS;
        }
        public get isFailed(): boolean {
            return this.currentStatus === STATUS_FAILED;
        }
        public get uploadFieldName(): string {
            return this.xuploadFieldName;
        }
        public get uploadError(): null | string {
            return this.xuploadError;
        }
        public get uploadedFiles(): any[] {
            return this.xuploadedFiles;
        }
        public set currentStatus(value: Status) {
            this.xcurrentStatus = value;
        }
        public get currentStatus(): Status {
            return this.xcurrentStatus;
        }
        public set uploadedFiles(value: any[]) {
            this.xuploadedFiles = value;
        }
        public set uploadError(value: null | string) {
            this.xuploadError = value;
        }

        public reset() {
            // reset form to initial state
            this.currentStatus = STATUS_INITIAL;
            this.uploadedFiles = [];
            this.uploadError = null;
        }
        public filesChange(fieldName: string, fileList: any[]) {
          const formData = new FormData();
          if (fieldName && fileList) {
            formData.append("photo", fieldName);
              for(let i =0; i < fileList.length; i++) {
                formData.append("files", fileList[i]);
            }
            this.currentStatus = STATUS_SUCCESS;
            this.$emit("imageChange", formData)
          } else {
            this.currentStatus = STATUS_FAILED;
          }
        }
        mounted() {
          this.reset();
        }
    }

</script>

<style>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>