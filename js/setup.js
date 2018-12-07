'use strict';
(function () {
  window.setup = {
    // данные
    WIZARD_NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARD_SURNAME: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
      'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_WRAP_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],

    userDialog: document.querySelector('.setup'),

    // поиск случайного значения в массиве;
    randomValue: function (arr) {
      var rand = arr[Math.floor(Math.random() * arr.length)];
      return rand;
    }
  };

  // Покажите блок .setup, убрав в JS-коде у него класс .hidden
  // window.setup.userDialog.classList.remove('hidden');


  // создание массива объектов состоящих из 3-х компонентов
  var wizardsArray = [];
  for (var i = 0; i < 4; i++) {
    wizardsArray.push({
      name: window.setup.randomValue(window.setup.WIZARD_NAME) + ' ' + window.setup.randomValue(window.setup.WIZARD_SURNAME),
      coatColor: window.setup.randomValue(window.setup.COAT_COLOR),
      eyesColor: window.setup.randomValue(window.setup.EYES_COLOR)
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


  window.setup.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
