'use strict';
(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 15;
  var HISTOGRAM_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var GAP_BETWEEN_BARS = 50;

  // Функция отрисовки облака

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  // Функция нахождения максимального элемента (времени) в массиве

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {

    // отрисовка облака
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    // стандартный неменяющийся текст
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + 2 * (GAP + FONT_GAP));

    var maxTime = getMaxElement(times); // получение максимального времени

    // гистограмма с именами
    for (var i = 0; i < names.length; i++) {
      var height = (HISTOGRAM_HEIGHT * times[i]) / maxTime; // высота колонок
      var timeRounded = Math.round(times[i]); // округление времени игроков до целых чисел
      ctx.font = '16px PT Mono';
      ctx.fillStyle = '#000';

      // выводим имена игроков
      ctx.fillText(names[i], CLOUD_X + GAP_BETWEEN_BARS + (BAR_WIDTH + GAP_BETWEEN_BARS) * i, CLOUD_HEIGHT);

      // выводим время игроков
      ctx.fillText(timeRounded.toString(), CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * i,
          CLOUD_HEIGHT - height - FONT_GAP);

      // делаем колонки цветными
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0,	0, 255,' + Math.random() + ')';
      }

      // отрисовываем колонки
      ctx.fillRect(CLOUD_X + GAP_BETWEEN_BARS + (GAP_BETWEEN_BARS + BAR_WIDTH) * i, CLOUD_HEIGHT - height,
          BAR_WIDTH, height - FONT_GAP);
    }
  };
})();
