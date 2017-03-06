import { CcoumaranePage } from './app.po';

describe('ccoumarane App', function() {
  let page: CcoumaranePage;

  beforeEach(() => {
    page = new CcoumaranePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
