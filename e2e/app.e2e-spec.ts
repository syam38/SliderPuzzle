import { SliderPuzzlePage } from './app.po';

describe('slider-puzzle App', () => {
  let page: SliderPuzzlePage;

  beforeEach(() => {
    page = new SliderPuzzlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
