import { MpiOauthDemoPage } from './app.po';

describe('mpi-oauth-demo App', () => {
  let page: MpiOauthDemoPage;

  beforeEach(() => {
    page = new MpiOauthDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
