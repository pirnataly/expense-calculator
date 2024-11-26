export class List {
  list: HTMLUListElement;
  constructor() {
    this.list = document.createElement('ul');
    this.list.className = 'list main-section__block';
  }

  getHtml(){
    return this.list;
  }
}