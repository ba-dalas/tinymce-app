import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  content: any
   file! :File


  config: EditorComponent['init'] = {
    height: 500,

    plugins: [
      'a11ychecker',
      'advlist',
      'advcode',
      'advtable',
      'autolink',
      'checklist',
      'export',
      'lists',
      'link',
      'image',
      'charmap',
      'preview',
      'anchor',
      'searchreplace',
      'visualblocks',
      'powerpaste',
      'fullscreen',
      'formatpainter',
      'insertdatetime',
      'media',
      'table',
      'help',
      'wordcount',
      'code'

    ],
    toolbar:
      'export|undo redo | casechange blocks | bold italic backcolor | \
  alignleft aligncenter alignright alignjustify | \
  bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',

    image_title: true,

    automatic_uploads: true,

    file_picker_types: 'image',
    file_picker_callback: function (cb, value, meta) {
      let input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      //

      input.onchange = () => {
        const file = input.files?.[0];

        if (file) {
          console.log('file', file)
          const reader = new FileReader();
          reader.onload = () => {
            const id = 'blobid' + new Date().getTime();
            console.log('id', id)
            // const blobCache = tinymce.activeEditor.editorUpload.blobCache;
            const base64 = reader.result?.toString().split(',')[1];
            console.log('base64', base64)

            // if (base64) {
            //   const blobInfo = blobCache.create(id, file, base64);
            //   blobCache.add(blobInfo);

            //   cb(blobInfo.blobUri(), { title: file.name });
            // }
          };

          reader.readAsDataURL(file);
        }
      };


      //
      input.click();
    },
  };



  ngAfterViewInit() {

  }

  downloadPdf() {
    console.log('called')
  }


  handleEvent(event: any) {
    console.log('clicked', event)

  }


}
