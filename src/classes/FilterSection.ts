export class FilterSection {
  filterSection: HTMLElement;

  constructor() {
    this.filterSection = document.createElement('footer');
    this.filterSection.className = 'footer expense-calculator__block';
  }

  getHtml() {
    return this.filterSection;
  }
}