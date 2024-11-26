import {CategoriesButtonHandler, ExpensesButtonHandler} from "../handlers.js";
import Buttons from "./Buttons.js";
import {MainSection} from "./MainSection.js";
import {FilterSection} from "./FilterSection.js";


export class ExpenseCalculator {

  container: HTMLDivElement;
  buttonsContainer: Buttons;
  mainSection: MainSection;
  filterSection: FilterSection;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'expense-calculator';
    this.buttonsContainer = new Buttons([{name: 'Categories', handler: CategoriesButtonHandler}, {
      name: 'Expenses',
      handler: ExpensesButtonHandler
    }]);
    this.buttonsContainer.getHtml().classList.add('expense-calculator__block')
    this.mainSection = new MainSection();
    this.filterSection = new FilterSection();
    this.container.append(this.buttonsContainer.getHtml(), this.mainSection.getHtml(),this.filterSection.getHtml());
  }

  getHtml() {
    return this.container;
  }
}

