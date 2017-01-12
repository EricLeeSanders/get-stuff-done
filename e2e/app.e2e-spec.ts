import { GoalAppPage } from './app.po';

describe('goal-app App', function() {
  let page: GoalAppPage;

  beforeEach(() => {
    page = new GoalAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
