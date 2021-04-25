import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as ClassicEditor from '../ckCustomEditor/ckeditor5/build/ckeditor';
import { saveAs } from 'file-saver';
import * as Doc from '../DocumentData/doc.js';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public Editor = ClassicEditor;
  // public docText = 'Sudarshan';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    Doc.getData();
  }

  ngOnChange() {
    Doc.getData();
  }

  docText = this.fb.group({
    text: [Doc.getData()]
  });

  blob;

  submitHandler() {
    Doc.putData(this.docText.value.text);
  }

  revertVersion() {
    Doc.revert();
    this.docText.controls['text'].setValue(Doc.getData());
  }

  public config = {
    toolbar: ['heading', '|', 'bulletedList', 'numberedList', 'alignment', 'undo', 'redo', 'subscript', 'superscript', 'fontsize', 'fontcolor', 'insertTable', 'image', 'removeFormat'],
    language: 'en'
  }

}
