import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from '../src/app/services/blog.service';
import { Blog } from 'src/app/models/Blog';

const blogs: Blog[] = [
  {
    title: 'Angular9',
    authorName: 'Jaswanth',
    email: 'jaswanth@gmail.com',
    content: 'This blog is about the new features of angular9.'
  },
  {
    title: 'Kubernetes',
    authorName: 'Jaswanth',
    email: 'jaswanth@gmail.com',
    content: 'This blog will explain concepts of k8s like pods, deployment, services and many more.'
  }
];
describe('BlogService', () => {
  let httpMock: HttpTestingController;
  let service: BlogService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(BlogService);
  });

  it('should be created', () => {
    // const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });

  // testing service for add Blog method
  it('addBlog() method should add Blog', () => {
      const blog: Blog = {
        title: 'Docker',
        authorName: 'Jaswanth',
        email: 'jaswanth@gmail.com',
        content: 'This blog will explain concepts of Docker'
      };
      // We call the service
      service.addBlog(blog).subscribe(data => {
        expect(data.data.length).toBe(2);
        expect(data.data).toEqual(blogs);
      });

      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/blog');
      expect(req.request.method).toEqual('POST');
      expect(req.request.headers.get('Content-Type')).toEqual('application/json');
      // Then we set the fake data to be returned by the mock
      req.flush({data: blogs});
      // httpMock.verify();
      });

  afterEach( () => {
       httpMock.verify();
    });
});
