import { AlmalifePage } from './app.po';

describe('almalife App', () => {
  let page: AlmalifePage;

  beforeEach(() => {
    page = new AlmalifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
