import { VitamindwebPage } from './app.po';

describe('vitamindweb App', () => {
  let page: VitamindwebPage;

  beforeEach(() => {
    page = new VitamindwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
