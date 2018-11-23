'use strict';

// Покажите блок .setup, убрав в JS-коде у него класс .hidden

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// данные
var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// поиск случайного значения в массиве;
var randomValue = function (arr) {
  var rand = arr[Math.floor(Math.random() * arr.length)];
  return rand;
};

// создание массива объектов состоящих из 3-х компонентов
var wizardsArray = [];
for (var i = 0; i < 4; i++) {
  wizardsArray.push({
    name: randomValue(WIZARD_NAME) + ' ' + randomValue(WIZARD_SURNAME),
    coatColor: randomValue(COAT_COLOR),
    eyesColor: randomValue(EYES_COLOR)
  });
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');

// создание DOM элементов соответсввующие волшебникам
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var index = 0; index < wizardsArray.length; index++) {
  fragment.appendChild(renderWizard(wizardsArray[index]));
}
similarListElement.appendChild(fragment);


userDialog.querySelector('.setup-similar').classList.remove('hidden');
