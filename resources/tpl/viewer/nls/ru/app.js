/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Сохранить",
      "close": "Закрыть"
    },
    "errors": {
      "noConfigName": "Не указана конфигурация в index.html > configOptions.story",
      "configFormatError": "Указанная конфигурация не может быть загружена из-за ошибки в синтаксисе JSON.",
      "configNotFound": "Указанная конфигурация не найдена или не может быть загружена из-за ошибки в синтаксисе JSON.",
      "boxTitle": "Произошла ошибка",
      "servedFromFile": "Доступ к приложению возможен только через веб-сервер. Подробнее см. ${USER_GUIDE}.",
      "userGuide": "руководство пользователя",
      "invalidConfig": "Некорректная настройка",
      "invalidConfigNoApp": "Идентификатор картографического веб-приложения не указан в index.html.",
      "invalidConfigNoAppDev": "Нет идентификатора Web Mapping Application, указанного в параметрах URL (?appid= или ?webmap=). В режиме разработки конфигурация appid в index.html игнорируются.",
      "unspecifiedConfigOwner": "Авторизованный владелец не настроен.",
      "invalidConfigOwner": "Владелец истории не авторизован.",
      "invalidConfignoOAuth": "Для этой истории требуется аутентификация, настройте ArcGIS OAuth ID в index.html или сделайте историю публичной.",
      "invalidApp": "Не удается загрузить эту историю.",
      "appLoadingFail": "Произошла ошибка, {TPL_NAME} загружено некорректно.",
      "notConfiguredDesktop": "История пока не настроена.",
      "notConfiguredMobile": "Конструктор {TPL_NAME} не поддерживается на экранах такого размера. Если можете, измените размер браузера, чтобы получить доступ к конструктору, либо создайте свою историю на другом устройстве с большим монитором.",
      "notConfiguredMobile2": "Чтобы использовать конструктор {TPL_NAME}, поверните своё устройство в альбомную ориентацию.",
      "notAuthorized": "Вы не авторизованы для доступа к истории.",
      "notAuthorizedBuilder": "Вы не авторизованы для использования конструктора {TPL_NAME}.",
      "noViewerIE": "Эта история не поддерживается в Internet Explorer версии до ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Вы пытаетесь просмотреть эту историю, используя устаревший, неподдерживаемый браузер. Некоторые элементы могут не работать, также возможны неожиданные ошибки. Воспользуйтесь Internet Explorer 11 или другим браузером, таким как Chrome.",
      "noViewerIE3": "В течение 2017 эта история более не будет загружаться данным браузером. С этого момента для просмотра данной истории следует воспользоваться поддерживающимся браузером.",
      "upgradeBrowser": "Пожалуйста, обновите ваш браузер",
      "mapLoadingFail": "Произошла ошибка, карта загрузилась некорректно.",
      "signOut": "Выйти",
      "builderSupport1": "Конструктор Story Map Cascade поддерживается только в ${CHROME} и ${SAFARI}. Однако истории Cascade, созданные с помощью конструктора, могут просматриваться браузерами Internet Explorer 11+ и Firefox.",
      "builderSupport2": "Конструктор Story Map Cascade не поддерживается на iPad. Опубликованные истории Cascade могут просматриваться на iPad.",
      "builderSupport3": "Истории Cascade можно просматривать браузерами Chrome, Safari, Firefox и Internet Explorer 11+, но конструктор Story Map Cascade поддерживается только в ${CHROME} и ${SAFARI}.",
      "builderSupport4": "Истории Cascade можно просматривать браузерами Chrome, Safari, Firefox и Internet Explorer 11+, но конструктор Story Map Cascade поддерживается только в ${CHROME} и ${SAFARI}.<br><br>Если вы хотите поддержку конструктора Cascade на другом браузере, свяжитесь с ${ESRI-SUPPORT} или щелкните, чтобы проголосовать: ${FIREFOX-BUILDER} | ${IE-BUILDER}.",
      "sorry": "Внимание:"
    },
    "mobileWarning": {
      "message1": "Вы прочитали мобильную версию этой истории. Полную версию, более насыщенную элементами медиа-ресурсов, прочитайте на настольном компьютере.",
      "email": "Отправить ссылку на эту историю"
    },
    "media": {
      "captionPlaceholder": "Ваш заголовок здесь...",
      "loadingError": "Извините, этот ресурс недоступен",
      "explore": "Изучить",
      "exploreMap": "Изучение карты",
      "exploreStop": "Остановить изучение",
      "sceneNotSupported": "Извините, 3D карта не поддерживается на вашем устройстве.",
      "loading1": "Загрузка...",
      "loading2": "Загрузка карты...",
      "videoPlayPause": "воспроизведение/пауза",
      "videoMuteUnmute": "выключить звук/включить звук"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Опубликовать",
      "tooltipAutoplayDisabled": "Недоступно в режиме автовоспроизведения"
    },
    "shareFromCommon": {
      "copy": "Копировать",
      "copied": "Скопировано",
      "open": "Открыть",
      "embed": "Встроить в веб-страницу",
      "embedExplain": "Используйте следующий HTML-код для встраивания истории на веб-страницу.",
      "size": "Размер (ширина/высота):",
      "autoplayLabel": "Режим автовоспроизведения",
      "autoplayExplain1": "Режим автовоспроизведения будет проходить в вашей истории через равные промежутки времени. Это идеально подходит для информационных киосков или мониторов для публичного обозрения, но имейте в виду, что в некоторых случаях вашу историю будет тяжело читать. Эта возможность не поддерживается на маленьких мониторах.",
      "autoplayExplain2": "Когда активен данный режим, там есть элементы управления для включения/остановки воспроизведения истории и установки скорости перемещения.",
      "linksupdated": "Ссылки обновлены!"
    }
  }
});