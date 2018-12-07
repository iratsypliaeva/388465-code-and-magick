'use strict';
(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');


  /**
   * Изменение цвета мантии персонажа по нажатию.
   * Цвет мантии .setup-wizard .wizard-coat должен обновляться по нажатию на неё.
   * Цвет мантии задаётся через изменение инлайнового CSS-свойства fill для элемента.
   * Цвет должен сменяться произвольным образом на один из следующих цветов:
   **/
  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.setup.randomValue(window.setup.COAT_COLOR);
  });


  /**
   * Цвет глаз волшебника меняется по нажатию на блок .setup-wizard .wizard-eyes.
   **/

  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.setup.randomValue(window.setup.EYES_COLOR);
  });


  /**
   * Изменение цвета фаерболов по нажатию.
   * Цвет задаётся через изменение фона у блока .setup-fireball-wrap.
   **/
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = window.setup.randomValue(window.setup.FIREBALL_WRAP_COLOR);
  });
})();
