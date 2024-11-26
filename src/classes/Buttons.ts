import {ButtonType} from "../interfaces";

export default class Buttons {

  buttonsContainer: HTMLDivElement;

  constructor(buttons: ButtonType[]) {
    this.buttonsContainer = document.createElement('div');
    this.buttonsContainer.className = 'buttons-container';

    buttons.forEach(button => {
      const newButton = document.createElement('button');
      newButton.className = 'button buttons-container__button';
      newButton.textContent = button.name;
      newButton.addEventListener('click',button.handler);
      this.buttonsContainer.append(newButton);
    })
  }

  getHtml() {
    return this.buttonsContainer;
  }
}