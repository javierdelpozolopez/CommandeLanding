import {saludo, despedida} from "./modules/example"
import {activeMenu} from './modules/active-menu'


import {MDCRipple} from '@material/ripple';
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

//import {MDCTabBar} from '@material/tab-bar';
//const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));



//import {MDCFormField} from '@material/form-field';

//const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
//formField.input = checkbox;

import {MDCTextField} from '@material/textfield';

//const textField = new MDCTextField(document.querySelector('.js-registro-nombre'));
//const textField2 = new MDCTextField(document.querySelector('.js-form-correo'));
//const textField3 = new MDCTextField(document.querySelector('.js-form-pass'));
//const textField4 = new MDCTextField(document.querySelector('.js-form-confirm-pass'));
//const textField5 = new MDCTextField(document.querySelector('.js-form-local'));
//const textField6 = new MDCTextField(document.querySelector('.js-form-mesas'));
const textField7 = new MDCTextField(document.querySelector('.js-contact-nombre'));
const textField8 = new MDCTextField(document.querySelector('.js-contact-telefono'));
const textField9 = new MDCTextField(document.querySelector('.js-contact-correo'));
const textField10 = new MDCTextField(document.querySelector('.js-contact-mensaje'));


import {MDCTextFieldHelperText} from '@material/textfield/helper-text';

const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));

import {MDCCheckbox} from '@material/checkbox';

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));