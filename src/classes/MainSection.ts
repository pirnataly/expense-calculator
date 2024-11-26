import Buttons from "./Buttons.js";
import {AddHandler, RemoveHandler, UpdateHandler} from "../handlers.js";
import {List} from "./List.js";

export class MainSection {
  mainSection: HTMLElement;
  mainList: List;
  mainButtons: Buttons;

  constructor() {
    this.mainSection = document.createElement('main');
    this.mainSection.className = 'main-section expense-calculator__block';
    this.mainList = new List();
    this.mainButtons = new Buttons([{name:'Add',handler:AddHandler},{name:'Update',handler:UpdateHandler},{name:'Remove',handler:RemoveHandler}])
    this.mainSection.append(this.mainList.getHtml(),this.mainButtons.getHtml());
  }

  getHtml() {
    return this.mainSection;
  }
}