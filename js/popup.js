'use strict';
(function () {
  /**
   * В файле setup.js опишите следующие сценарии взаимодействия пользователя с сайтом:

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

})();
