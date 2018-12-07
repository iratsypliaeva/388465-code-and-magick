'use strict';
(function () {
  // Покажите блок .setup, убрав в JS-коде у него класс .hidden

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  // данные
  var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
    'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_WRAP_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

  /**
   * В файлеsetup.js опишите следующие сценарии взаимодействия пользователя с сайтом:

   Открытие/закрытие окна настройки персонажа:

   Окно.setup должно открываться по нажатию на блок.setup-open. Открытие окна производится удалением класса hidden у блока

   Окно.setup должно закрываться по нажатию на элемент.setup-close, расположенный внутри окна

   Добавить обработчики для альтернативного ввода с клавиатуры keydown для кнопок открытия/закрытия диалога настройки персонажа:

   Когда иконка пользователя в фокусе .setup-open-icon, то окно настройки персонажа должно открываться по нажатию кнопки ENTER
   Не забудьте добавить tabindex="0" для иконки пользователя, чтобы она фокусировалась.
   Когда окно настройки персонажа открыто, нажатие на клавишу ESC должно закрывать диалог
   Если фокус находится на форме ввода имени, то окно закрываться не должно.
   Если окно открыто и фокус находится на кнопке закрытия окна, то нажатие клавиши ENTER должно приводить к закрытию диалога
   Если диалог открыт, нажатие на кнопку «Сохранить» приводит к отправке формы
   Если диалог открыт и фокус находится на кнопке «Сохранить», нажатие на ENTER приводит к отправке формы

   **/

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup());
  };

  var startCoords = {
    x: setup.offsetTop,
    y: setup.offsetLeft
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    startCoords = {
      x: setup.offsetTop,
      y: setup.offsetLeft
    };
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = startCoords.x;
    setup.style.left = startCoords.y;
    document.removeEventListener('keydown', onPopupEscPress);
  };


  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup());
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup());
  });

  var userNameInput = setup.querySelector('.setup-user-name');
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');


  /**
   * Изменение цвета мантии персонажа по нажатию.
   * Цвет мантии .setup-wizard .wizard-coat должен обновляться по нажатию на неё.
   * Цвет мантии задаётся через изменение инлайнового CSS-свойства fill для элемента.
   * Цвет должен сменяться произвольным образом на один из следующих цветов:
   **/
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = randomValue(COAT_COLOR);
  });


  /**
   * Цвет глаз волшебника меняется по нажатию на блок .setup-wizard .wizard-eyes.
   **/

  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = randomValue(EYES_COLOR);
  });


  /**
   * Изменение цвета фаерболов по нажатию.
   * Цвет задаётся через изменение фона у блока .setup-fireball-wrap.
   **/
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = randomValue(FIREBALL_WRAP_COLOR);
  });
})();

