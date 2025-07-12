class HomePage {
  constructor(page) {
    this.page = page;
    this.listGroupPhones = page.getByRole('link', { name: 'Phones' });
    this.listGroupLaptops = page.getByRole('link', { name: 'Laptops' });
    this.listGroupMonitors = page.getByRole('link', { name: 'Monitors' });

  }

  async clickPhones() {
    await this.listGroupPhones.click();
  }

    async clickLaptops() {
        await this.listGroupLaptops.click();
    }
    async clickMonitors() {
        await this.listGroupMonitors.click();
    }

    async logout() {
        const logoutButton = this.page.getByRole('link', { name: 'Log out' });
        await logoutButton.click();
    }
}

module.exports = {HomePage};