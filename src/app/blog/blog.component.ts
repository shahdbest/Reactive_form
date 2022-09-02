import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  form;

  // message to be display if blog added or not
  message = '';

  // Form is created in html file and write code to make it functional using FormBuilder
  // Write logic to make all fields as mandatory for form and check email is valid or not
  constructor() {
  }

  ngOnInit() {
  }

  // Implement onSubmit method to save a Blog, verify form is valid or not
  // Display message 'Please verify entered details!!!' if form is invalid
  // Display message 'Blog added' if Blog is added
  // Display message 'Failed to add Blog!!' while error handling
  onSubmit() {
  }
  // clearForm method is to reset the form after submitting
  clearForm() {
  }
}
