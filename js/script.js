                           /* VACANCIES PAGE */
(function () {
/* common */
  var CLOSE_ICON_CLASS = "js-vacancies-page-icon-close";
  var MORE_ICON_CLASS = "js-vacancies-page-icon-more";

  // toggle vacancy description
  function toggleDescriptionVisibility (iconId) {
    $("#" + iconId).click(function(){
      var toggle = document.getElementById(iconId);
      var description = document.getElementsByClassName(iconId);
      toggle.className = toggle.classList.contains(CLOSE_ICON_CLASS)
                        ? MORE_ICON_CLASS
                        : CLOSE_ICON_CLASS;
      description[0].classList.toggle(HIDE_ELEMENT_CLASS);
    });
  };

  // create icon id and description class
  // to link icon's click event with description's visibility
  function addTogglers(cardSelector, togglePattern, iconClass, descClass) {
    $(cardSelector).each(function(index, element) {
      var toggleId = togglePattern + (index + 1);
      var prev = $(element).find("." + descClass).attr("class");
      $(element).find("." + iconClass).attr("id", toggleId);
      $(element).find("." + descClass).attr("class", prev + " " + toggleId);
      toggleDescriptionVisibility(toggleId);
    });
  };

/* common end */
/* departments section */
  var VACANCIES_CLASS = "js-departments-section-vacancies";
  var UPPERCASE_CLASS = "text-uppercase";
  var HIDE_ELEMENT_CLASS = "d-none";

  var VACANCY_CARD_HTML = "snippets/vacancy-card.html";
  var VACANCY_CARD_LIST_ITEM_HTML = "snippets/vacancy-card-list-item.html";
  var TOGGLE_PATTERN_DEPARTMENTS = "dt-";
  var LOWER_CASE_VALUE = "Обсуждается на собеседовании";
  var VACANCY_DESCRIPTION_CLASS = "js-departments-section-vacancies-description";

  // vacancies data, temporary solution
  // TODO: get corect data here from server!
  var vacancies = {
    "department-1": [{
                    "info": {
                            "name": "Прораб",
                            "price": "от 00 000 руб"
                          },
                    "description": {
                                  "tasks": ["описание", "описание", "описание"],
                                  "expectations": ["описание", "описание"],
                                  "offers": ["график 5/2 с гибким началом рабочего дня;",
                                            "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;",
                                            "ежеквартальную премию по итогам работы;"]
                                }
                  },
                  {
                    "info": {
                            "name": "Специалист службы снабжения",
                            "price": "от 00 000 руб"
                          },
                    "description": {
                                  "tasks": ["описание", "описание", "описание"],
                                  "expectations": ["описание", "описание"],
                                  "offers": ["график 5/2 с гибким началом рабочего дня;",
                                            "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;",
                                            "ежеквартальную премию по итогам работы;"]
                                }
                  },
                  {
                    "info": {
                            "name": "Логист",
                            "price": "Обсуждается на собеседовании"
                          },
                    "description": {
                                  "tasks": ["описание", "описание", "описание"],
                                  "expectations": ["описание", "описание"],
                                  "offers": ["график 5/2 с гибким началом рабочего дня;",
                                            "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;",
                                            "ежеквартальную премию по итогам работы;"]
                                }
                  },
                  {
                    "info": {
                            "name": "Проектировщик",
                            "price": "от 00 000 руб"
                          },
                    "description": {
                                  "tasks": ["описание", "описание", "описание"],
                                  "expectations": ["описание", "описание"],
                                  "offers": ["график 5/2 с гибким началом рабочего дня;",
                                            "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;",
                                            "ежеквартальную премию по итогам работы;"]
                                }
                  }],
    "department-2": [{
                    "info": {
                            "name": "Специалист службы снабжения",
                            "price": "Обсуждается на собеседовании"
                          },
                    "description": {
                                  "tasks": ["описание", "описание", "описание"],
                                  "expectations": ["описание", "описание"],
                                  "offers": ["график 5/2 с гибким началом рабочего дня;",
                                            "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;",
                                            "ежеквартальную премию по итогам работы;"]
                                }
                  }],
    "department-3":[],
    "department-4":[{
                    "info": {
                            "name": "Специалист службы снабжения",
                            "price": "Обсуждается на собеседовании"
                          },
                    "description": {
                                  "tasks": ["описание", "описание", "описание"],
                                  "expectations": ["описание", "описание"],
                                  "offers": ["график 5/2 с гибким началом рабочего дня;",
                                            "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;",
                                            "ежеквартальную премию по итогам работы;"]
                                }
                  }],
    "department-5": [{
                    "info": {
                            "name": "Специалист службы снабжения",
                            "price": "Обсуждается на собеседовании"
                          },
                    "description": {
                                  "tasks": ["описание", "описание", "описание"],
                                  "expectations": ["описание", "описание"],
                                  "offers": ["график 5/2 с гибким началом рабочего дня;",
                                            "оформление по ТК РФ с первого рабочего дня, полностью белую заработную плату;",
                                            "ежеквартальную премию по итогам работы;"]
                                }
                  }]
  };

  // build vacancy cards
  function buildVacancyCards(vacancyCardSnippet, listItemSnippet, data) {
    var result = "";
    for (var i = 0; i < data.length; i++) {
      var card = vacancyCardSnippet;
      var name, price, tasks, expectations, offers;
      var cardData = data[i];
      var name = cardData.info.name;
      var price = cardData.info.price;
      var tasks = cardData.description.tasks;
      var expectations = cardData.description.expectations;
      var offers = cardData.description.offers;
      var caseClass = price !== LOWER_CASE_VALUE ? UPPERCASE_CLASS : "";

      var tasksItems =
        createVacancyCardListItems (listItemSnippet, tasks);
      var expectationsItems =
        createVacancyCardListItems (listItemSnippet, expectations);
      var offersItems =
        createVacancyCardListItems (listItemSnippet, offers);

      card = changePlaceholder(card, "name", name);
      card = changePlaceholder(card, "price", price);
      card = changePlaceholder(card, "tasks", tasksItems);
      card = changePlaceholder(card, "expectations", expectationsItems);
      card = changePlaceholder(card, "offers", offersItems);
      card = changePlaceholder(card, "case-class", caseClass);

      result += card;
    }

    $("." + VACANCIES_CLASS).html(result);
    addTogglers(".departments-section .card", TOGGLE_PATTERN_DEPARTMENTS,
      MORE_ICON_CLASS, VACANCY_DESCRIPTION_CLASS);
  };

  // change placeholder '{{placeholder}}' in a text using 'value'
  function changePlaceholder (text, placeholder, value) {
    var placeHolderToChange = "{{" + placeholder + "}}";
    text = text.replace(new RegExp(placeHolderToChange,"g"), value);
    return text;
  };

  // create a li element for description section in vacancy card
  function createVacancyCardListItems (listItemSnippet, array) {
    var items = "";
    for (var i = 0; i < array.length; i++) {
      items += changePlaceholder(listItemSnippet, "value", array[i]);
    }
    return items;
  };

  // get snippets and build vacancy cards using vacancy data
  function addVacancyCards (data) {
    // get vacancy card snippet
    $ajaxUtils.sendGetRequest(
      VACANCY_CARD_HTML,
      function (vacancyCardSnippet) {
        // get list item snippet
        $ajaxUtils.sendGetRequest(
          VACANCY_CARD_LIST_ITEM_HTML,
          function (listItemSnippet) {
            buildVacancyCards(vacancyCardSnippet, listItemSnippet, data);
          }
        );
      }
    );
  };

  // handle pill click
  $(".nav-pills a").on("click", function(event){
    var departmentId = $(event.target).attr("id");
    var data = vacancies[departmentId];
    addVacancyCards(data);
  });

  $(document).ready(function() {
    // Fire event after page is loaded to load vacancies
    $(".nav-pills a:first").click();
  });
/* departments section end */
/* advantages section */
  var TOGGLE_PATTERN_ADVANTAGES = "at-";
  var ADVANTAGE_DESCRIPTION_CLASS = "js-advantages-section-card-body-description";

  $(document).ready(function() {
    addTogglers(".advantages-section .card", TOGGLE_PATTERN_ADVANTAGES,
      MORE_ICON_CLASS, ADVANTAGE_DESCRIPTION_CLASS);
  });
/* advantages section end */
/* products section */
  $(function() {
      $("#tabs__portfolio").tabs();
  });
  var swiper = new Swiper('.products-section-swiper-container', {
    loop: true,
    speed: 0,
    slidesPerView: 'auto',
    spaceBetween: 12, // property is used in combination with coverflowEffect's scale property
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      depth: 50,
      scale: 0.86 // number to create top / bottom empty space for next / prev slides
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
/* products section end */
/* career section */
  var swiper = new Swiper('.career-section-swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
/* career section end */
/* modal window send resume */
  var PHP_FILE = "ajax/resume-handler.php"; // TODO: add corect handler here!
  var MODAL_WINDOW_SEND_RESUME_FORM_ID = "modal-window-send-resume-vacancy-form";
  var MODAL_WINDOW_SEND_RESUME_ID = "modal-window-send-resume";
  var MODAL_WINDOW_SUCCESS_ID = "modal-window-success";
  var SEND_RESUME_FORM_SELECT_DEFAULT_OPTION_ID = "modal-window-send-resume-vacancy-form-default-option";

  var SEND_RESUME_ATTACH_BUTTON_ID = "modal-window-send-resume-attach-button-real";
  var SEND_RESUME_ATTACH_FILE_NAME_CLASS = "modal-window-send-resume-attach-button-file-name";
  var SEND_RESUME_ATTACH_BUTTON_WRAPPER_CLASS = "modal-window-send-resume-attach-button-wrapper";
  var SEND_RESUME_ATTACH_BUTTON_LABEL_WRAPPER_CLASS = "modal-window-send-resume-attach-button-label-wrapper";
  var SEND_RESUME_ATTACH_ERROR_CLASS = "modal-window-send-resume-attach-button-error";
  var SEND_RESUME_ATTACH_FILE_ERROR_MESSAGE_1 = "*Прикрепите резюме в формате .pdf или .doc";
  var SEND_RESUME_ATTACH_FILE_ERROR_MESSAGE_2 = "*Прикрепите резюме";


  $("#" + MODAL_WINDOW_SEND_RESUME_FORM_ID).on("submit", function(event) {
    event.preventDefault();
    if (isValidFormElements()) {
      var formData = new FormData(this);
      handleModal(MODAL_WINDOW_SEND_RESUME_ID, "hide");
      $ajaxUtils.sendPostRequest (PHP_FILE, formData, function(response){
        handleModal(MODAL_WINDOW_SUCCESS_ID, "show");
      });
    }
  });

  // handle modal window using bootstrap modal function
  function handleModal(modalId, modalOperation) {
    $("#" + modalId).modal(modalOperation);
  };


  $("#" + MODAL_WINDOW_SEND_RESUME_ID).on("hide.bs.modal", function(event) {
    // clean send resume modal form's inputs
    $("#" + MODAL_WINDOW_SEND_RESUME_FORM_ID)[0].reset();
    clearData();
    // hide error messages
    $("." + "error").each(function() {
        $(this).addClass(HIDE_ELEMENT_CLASS);
    });
  });

  // hide default option from the list
  $(document).ready(function() {
    $("#" + SEND_RESUME_FORM_SELECT_DEFAULT_OPTION_ID)
    .toggleClass(HIDE_ELEMENT_CLASS);
  });

  $("#" + SEND_RESUME_ATTACH_BUTTON_ID)
  .on("change", updateResumeChange);

  function updateResumeChange() {
    clearData();
    var attach = $("#" + "modal-window-send-resume-attach-button-real")[0];
    var file = getFile();
    if (file == null) return;
    $("." + SEND_RESUME_ATTACH_FILE_NAME_CLASS).text(file.name);
    truncateFileName(file.name);
    if (validFileType(file)) {
      attach.setCustomValidity("");
    } else {
      attach.setCustomValidity(SEND_RESUME_ATTACH_FILE_ERROR_MESSAGE_1);
    }
  };

  function clearData() {
    $("." + SEND_RESUME_ATTACH_ERROR_CLASS).text("");
    $("." + SEND_RESUME_ATTACH_FILE_NAME_CLASS).text("");
  };

  function validFileType(file) {
    var fileTypes = [
      "application/msword",
      "application/pdf"
    ];
    return fileTypes.includes(file.type);
  };

  function truncateFileName(fileName) {
    var el = $("." + SEND_RESUME_ATTACH_FILE_NAME_CLASS)[0];
    var cont = $("." + SEND_RESUME_ATTACH_BUTTON_LABEL_WRAPPER_CLASS)[0];
    var b = $("." + SEND_RESUME_ATTACH_BUTTON_WRAPPER_CLASS)[0];
    el.textContent = fileName;

    var originalText = fileName;
    var textLength = originalText.length;
    var part1 = originalText.substring(0, Math.floor(textLength / 2));
    var part2 = originalText.substring(Math.floor(textLength / 2));
    var trimFlag = true;
    if ((cont.clientWidth - b.clientWidth) > 0) { /* prevent infinite loop */
      while (el.clientWidth > (cont.clientWidth - b.clientWidth)) {
        if (trimFlag) {
          part1 = part1.substring(0, part1.length - 1);
        } else {
          part2 = part2.substring(1);
        }
        el.textContent = part1 + "..." + part2;
        trimFlag = !trimFlag;
        if (part1.length == 1 || part2.length == 1) break; /* prevent infinite loop */
      }
    } else {
      el.textContent = originalText;
    }
  };

  function getFile() {
    return $("#" + SEND_RESUME_ATTACH_BUTTON_ID)[0].files[0];
  }

  $(window).resize(function(event) {
    var file = getFile();
    if (file) {
      truncateFileName(file.name);
    }
  });

  function isValidFormElements() {
    var name = $("." + "modal-window-send-resume-vacancy-form-text-input")[0];
    var nameError = $("." + "modal-window-send-resume-vacancy-form-text-input-error")[0];
    var tel = $("." + "modal-window-send-resume-vacancy-form-tel-input")[0];
    var telError = $("." + "modal-window-send-resume-vacancy-form-tel-input-error")[0];
    var vacancy = $("." + "modal-window-send-resume-vacancy-form-list-select")[0];
    var vacancyError = $("." + "modal-window-send-resume-vacancy-form-list-select-error")[0];
    var attach = $("#" + "modal-window-send-resume-attach-button-real")[0];
    var attachError = $("." + "modal-window-send-resume-attach-button-error")[0];
    var checkbox = $("." + "modal-window-send-resume-agreement-checkbox-real")[0];

    if (name.validity.valueMissing) {
      name.focus();
      if (nameError.classList.contains(HIDE_ELEMENT_CLASS)) {
        nameError.classList.toggle(HIDE_ELEMENT_CLASS);
        nameError.classList.toggle("error");
      }
      return false;
    }
    if (tel.validity.valueMissing) {
      tel.focus();
      if (telError.classList.contains(HIDE_ELEMENT_CLASS)) {
        telError.classList.toggle(HIDE_ELEMENT_CLASS);
        telError.classList.toggle("error");
      }
      return false;
    } else if (tel.validity.customError) {
      tel.focus();
      if (telError.classList.contains(HIDE_ELEMENT_CLASS)) {
        telError.classList.toggle(HIDE_ELEMENT_CLASS);
        telError.classList.toggle("error");
      }
      return false;
    }
    if (vacancy.validity.customError) {
      vacancy.focus();
      if (vacancyError.classList.contains(HIDE_ELEMENT_CLASS)) {
        vacancyError.classList.toggle(HIDE_ELEMENT_CLASS);
        vacancyError.classList.toggle("error");
      }
      return false;
    }
    if (attach.validity.valueMissing) {
      $("." + SEND_RESUME_ATTACH_ERROR_CLASS)
        .text(SEND_RESUME_ATTACH_FILE_ERROR_MESSAGE_2);
      attach.focus();
      if (attachError.classList.contains(HIDE_ELEMENT_CLASS)) {
        attachError.classList.toggle(HIDE_ELEMENT_CLASS);
        attachError.classList.toggle("error");
      }
      return false;
    } else if (attach.validity.customError) {
      $("." + SEND_RESUME_ATTACH_ERROR_CLASS)
        .text(SEND_RESUME_ATTACH_FILE_ERROR_MESSAGE_1);
      attach.focus();
      if (attachError.classList.contains(HIDE_ELEMENT_CLASS)) {
        attachError.classList.toggle(HIDE_ELEMENT_CLASS);
        attachError.classList.toggle("error");
      }
      return false;
    }
    if (checkbox.validity.valueMissing) {
      checkbox.focus();
      return false;
    }

    return true;
  }

  $("." + "modal-window-send-resume-vacancy-form-text-input").on("input", function(event) {
    var nameError = $("." + "modal-window-send-resume-vacancy-form-text-input-error")[0];
    if (!nameError.classList.contains(HIDE_ELEMENT_CLASS)) {
      nameError.classList.toggle(HIDE_ELEMENT_CLASS);
      nameError.classList.toggle("error");
    }
  });

  $("#" + MODAL_WINDOW_SEND_RESUME_ID).on("shown.bs.modal", function(event) {
    var telInput = $("." + "modal-window-send-resume-vacancy-form-tel-input");
    var telError = $("." + "modal-window-send-resume-vacancy-form-tel-input-error")[0];
    var vacancy = $("." + "modal-window-send-resume-vacancy-form-list-select");
    var vacancyError = $("." + "modal-window-send-resume-vacancy-form-list-select-error")[0];

    var pattern = new RegExp("\\+7 \\([0-9]{3}\\) [0-9]{3} - [0-9]{2} - [0-9]{2}");
    telInput.on("blur", function(event) {
      if (!pattern.test(telInput[0].value)) {
        telInput[0].setCustomValidity("Заполните это поле");
      } else {
        telInput[0].setCustomValidity("");
      }
    });
    var im = new Inputmask({
      "mask": "+7 (999) 999 - 99 - 99",
      "oncomplete": function() {
        if (!telError.classList.contains(HIDE_ELEMENT_CLASS)) {
          telError.classList.toggle(HIDE_ELEMENT_CLASS);
          telError.classList.toggle("error");
        }
      }
    });
    im.mask(telInput);

    vacancy[0].setCustomValidity("Выберите вакансию");
    vacancy.on("change", function(event) {
      var option = vacancy.find(":selected");
      if (option[0].value != "default") {
        vacancy[0].setCustomValidity("");
        if (!vacancyError.classList.contains(HIDE_ELEMENT_CLASS)) {
          vacancyError.classList.toggle(HIDE_ELEMENT_CLASS);
          vacancyError.classList.toggle("error");
        }
      } else {
        vacancy[0].setCustomValidity("Выберите вакансию");
      }
    });
  });



/* modal window send resume end */
/* modal window success */
  var MODAL_WINDOW_BUTTON_ID = "modal-success-button";
  var LOCATION = "https://dmitrii-s-frontend.github.io/test-task-2/"; // TODO: add corect location here!

  $("#" + MODAL_WINDOW_BUTTON_ID).on("click", function(event) {
    window.location.href = LOCATION;
  });
/* modal window success end */
})();
                           /* VACANCIES PAGE END */