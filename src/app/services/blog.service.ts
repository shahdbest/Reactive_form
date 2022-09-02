import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  // Implement addBlog method using HttpClient for a saving a Blog details
  addBlog(blog): Observable<any> {
  }

}
