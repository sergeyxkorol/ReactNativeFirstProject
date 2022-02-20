describe('Main Screen', () => {
  it('should have Main screen', async () => {
    await device.launchApp();
    await expect(element(by.id('mainScreen'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });
});
