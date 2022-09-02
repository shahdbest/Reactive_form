import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogComponent } from '../src/app/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { ReactiveFormsModule} from '@angular/forms';


describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService: BlogService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, ReactiveFormsModule],
      declarations: [ BlogComponent ],
      providers: [BlogService]
    })
    .compileComponents();
    blogService = TestBed.get(BlogService);
    spyOn(blogService, 'addBlog').and.returnValue(of(''));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check onSubmit method existence
  it('onSubmit() should exists', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  // test to check clearForm method existence
  it('clearForm() should exists', () => {
    expect(component.clearForm).toBeTruthy();
  });

  // test to check onSubmit is verifying form is valid or not
  it('onSubmit() should verify form is valid or not ', () => {
    component.form.title = 'test';
    component.form.authorName = 'author1';
    component.onSubmit();
    expect(component.message).toEqual('Please verify entered details!!!');
  });

  it('testing email field validity', () => {
    const email = component.form.controls.email;
    email.setValue('test');
    expect(email.valid).toBeFalsy();
    email.setValue('test@gmail.com');
    expect(email.valid).toBeTruthy();
  });

    // test to check onSubmit is calling BlogService or not
  it('onSubmit() should call BlogService to add a Blog', () => {
      const blog: Blog = {
        title: 'Docker',
        authorName: 'Jaswanth',
        email: 'jaswanth@gmail.com',
        content: 'This blog will explain concepts of Docker'
      };
      const email = component.form.controls.email;
      email.setValue(blog.email);
      const name = component.form.controls.authorName;
      name.setValue(blog.authorName);
      const title = component.form.controls.title;
      title.setValue(blog.title);
      const content = component.form.controls.content;
      content.setValue(blog.content);
      component.onSubmit();
      expect(blogService.addBlog).toHaveBeenCalled();
      expect(component.message).toEqual('Blog added');
    });
});
