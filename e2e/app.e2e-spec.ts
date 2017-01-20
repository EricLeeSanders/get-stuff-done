import { taskAppPage } from './app.po';

describe('task-app App', function() {
  let page: taskAppPage;

  beforeEach(() => {
    page = new taskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
