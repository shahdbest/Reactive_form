import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load blog component view on clicking add blog and verify the url', () => {
    browser.get('/addblog');
    element(by.linkText('Add Blog')).click();
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'addblog');
  });

  it('should contain <router-outlet>', () => {
    page.navigateTo();
    expect(page.getRouterOutlet).toBeTruthy('<router-outlet> should exist in app.component.html');
  });

  // given empty input to form
  it('should check form if email is empty', async () => {
    page.navigateToAddBlog();
    element(by.css('input[type="email"]')).sendKeys('');
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Please verify entered details!!!');
  });

  // given invalid email to form
  it('should check form if email is invalid', async () => {
    page.navigateToAddBlog();
    element(by.css('input[type="email"]')).sendKeys('test');
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Please verify entered details!!!');
  });

  // given valid email to form
  it('should check form if email is valid', async () => {
    page.navigateToAddBlog();
    element(by.css('input[type="email"]')).sendKeys('test@gmail.com');
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Please verify entered details!!!');
  });

  // given invalid input to form
  it('should check form is valid or not', async () => {
  page.navigateToAddBlog();
  element(by.css('input[type="text"]')).sendKeys('test');
  element(by.css('input[type="email"]')).sendKeys('test');
  element(by.css('.btn')).click();
  expect(element(by.css('.alert')).getText()).toBe('Please verify entered details!!!');
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
