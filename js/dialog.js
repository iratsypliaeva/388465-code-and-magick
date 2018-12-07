'use strict';

/** Диалог должен начинать двигаться за курсором мыши при нажатии (mousedown) на блок .setup-user-pic;
 Диалог должен переставать двигаться за курсором мыши при отпускании (mouseup) кнопки мыши и оставаться на новом месте;
 При повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное;
 **/
(function () {
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.setup-user-pic');

  // на опускание мыши
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;


    // на движение мыши
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: moveEvt.clientX - startCoords.x,
        y: moveEvt.clientY - startCoords.y
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setupDialogElement.style.top = (setupDialogElement.offsetTop + shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft + shift.x) + 'px';
    };

    // на отпускание кнопки мыши
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
