/* eslint-disable no-undef */
describe('Main Screen', () => {
  it('should have Main screen', async () => {
    await device.launchApp();
    await expect(element(by.id('mainScreen'))).toBeVisible();
  });

  it('should have Catalog', async () => {
    await expect(element(by.id('catalog'))).toBeVisible();
  });

  it('should show Product screen after tap on the first product in the list', async () => {
    await element(by.id('catalogItem')).atIndex(0).tap();
    await expect(element(by.id('productDetails'))).toBeVisible();
  });
});
