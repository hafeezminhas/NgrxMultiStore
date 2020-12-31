import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  error: string;

  categories: any[] = [
    { key: 'PART', value: 'Part(s)' },
    { key: 'DIAGNOSIS', value: 'Diagnosis' },
    { key: 'REPAIR', value: 'Repairs' }
  ];

  types: any[] = [];

  quoteModel: any;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateQuoteComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.form = this.fb.group({
          category: ['', Validators.required],
          type:     ['', Validators.required],
          make:     ['', Validators.required],
          model:    ['', Validators.required],
          description: ''
      });
  }

  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.submitted = true;
  }

  onCatSelect(e) {
    console.log(e);
  }

  onTypeSelect(e) {
    console.log(e);
  }
}
