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
  var SEND_RESUME_NAME_CLASS = "modal-window-send-resume-vacancy-form-text-input";
  var SEND_RESUME_NAME_ERROR_CLASS = "modal-window-send-resume-vacancy-form-text-input-error";
  var SEND_RESUME_TEL_CLASS = "modal-window-send-resume-vacancy-form-tel-input";
  var SEND_RESUME_TEL_ERROR_CLASS = "modal-window-send-resume-vacancy-form-tel-input-error";
  var SEND_RESUME_TEL_PATTERN = "\\+7 \\([0-9]{3}\\) [0-9]{3} - [0-9]{2} - [0-9]{2}";
  var SEND_RESUME_TEL_MASK = "+7 (999) 999 - 99 - 99";
  var SEND_RESUME_SELECT_CLASS = "modal-window-send-resume-vacancy-form-list-select";
  var SEND_RESUME_SELECT_ERROR_CLASS = "modal-window-send-resume-vacancy-form-list-select-error";
  var SEND_RESUME_SELECT_DEFAULT_OPTION = "default";
  var CUSTOM_SELECT_WRAPPER_CLASS = "modal-window-custom-select-wrapper";
  var CUSTOM_SELECT_SELECTED_ID = "selected-div";
  var CUSTOM_SELECT_SELECTED_CLASS = "modal-window-custom-select-selected";
  var CUSTOM_SELECT_HIDE = "modal-window-custom-select-hide";
  var CUSTOM_SELECT_ACTIVE = "modal-window-custom-select-active";
  var CUSTOM_SELECT_ITEMS = "modal-window-custom-select-items";
  var CUSTOM_SELECT_OPTION = "modal-window-custom-select-option";
  var SEND_RESUME_CHECKBOX_CLASS = "modal-window-send-resume-agreement-checkbox-real";
  var SEND_RESUME_ERROR_MESSAGE_1 = "*Прикрепите резюме в формате .pdf или .doc";
  var SEND_RESUME_ERROR_MESSAGE_2 = "*Прикрепите резюме";
  var SEND_RESUME_ERROR_MESSAGE_3 = "*Заполните это поле";
  var SEND_RESUME_ERROR_MESSAGE_4 = "*Выберите вакансию";
  var SEND_RESUME_ERROR_MARKER = "error";

  $("#" + MODAL_WINDOW_SEND_RESUME_ID).on("shown.bs.modal", function(event) {
    var telInput = $("." + SEND_RESUME_TEL_CLASS);
    var telError = $("." + SEND_RESUME_TEL_ERROR_CLASS);
    var vacancy = $("." + SEND_RESUME_SELECT_CLASS);
    var vacancyError = $("." + SEND_RESUME_SELECT_ERROR_CLASS);

    var pattern = new RegExp(SEND_RESUME_TEL_PATTERN);
    telInput.on("blur", function(event) {
      if (!pattern.test(telInput[0].value)) {
        telInput[0].setCustomValidity(SEND_RESUME_ERROR_MESSAGE_3);
      } else {
        telInput[0].setCustomValidity("");
      }
    });
    var im = new Inputmask({
      "mask": SEND_RESUME_TEL_MASK,
      "oncomplete": function() {
        hideError(telError);
      }
    });
    im.mask(telInput);

    vacancy[0].setCustomValidity(SEND_RESUME_ERROR_MESSAGE_4);
    vacancy.on("change", function(event) {
      var option = vacancy.find(":selected");
      if (option.val() != SEND_RESUME_SELECT_DEFAULT_OPTION) {
        vacancy[0].setCustomValidity("");
        hideError(vacancyError);
      } else {
        vacancy[0].setCustomValidity(SEND_RESUME_ERROR_MESSAGE_4);
      }
    });
  });

  $("#" + MODAL_WINDOW_SEND_RESUME_ID).on("hide.bs.modal", function(event) {
    // clean send resume modal form's inputs
    $("#" + MODAL_WINDOW_SEND_RESUME_FORM_ID)[0].reset();
    clearData();
    $("." + SEND_RESUME_ERROR_MARKER).each(function() {
      hideError($(this));
    });
    clearCustomSelect();
  });

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

  function createCustomSelect() {
    var customSelect = document.getElementsByClassName(CUSTOM_SELECT_WRAPPER_CLASS)[0];
    var select = document.getElementsByClassName(SEND_RESUME_SELECT_CLASS)[0];
    // add selected option
    var selOpt = document.createElement("DIV");
    selOpt.setAttribute("id", CUSTOM_SELECT_SELECTED_ID);
    selOpt.setAttribute("class", CUSTOM_SELECT_SELECTED_CLASS);
    selOpt.innerText = select.options[select.selectedIndex].innerText;
    selOpt.addEventListener("click", function(e) {
      e.stopPropagation();
      this.nextSibling.classList.toggle(CUSTOM_SELECT_HIDE);
      this.classList.toggle(CUSTOM_SELECT_ACTIVE);
    });
    customSelect.appendChild(selOpt);
    // add box with options
    var box = document.createElement("DIV");
    box.setAttribute("class", CUSTOM_SELECT_ITEMS + " " + CUSTOM_SELECT_HIDE);
    for (var i = 1; i < select.options.length; i++) {
      var opt = document.createElement("DIV");
      opt.setAttribute("class", CUSTOM_SELECT_OPTION);
      opt.innerText = select.options[i].innerText;
      opt.addEventListener("click", function(e) {
        e.stopPropagation();
        var selOpt = this.parentNode.previousSibling;
        for (var j = 0; j < select.options.length; j++) {
          if (select.options[j].innerText == this.innerText) {
            // update hidden select and selected option element
            select.selectedIndex = j;
            select.dispatchEvent(new Event("change"));
            selOpt.innerText = this.innerText;
            break;
          }
        };
        selOpt.click();
      });
      box.appendChild(opt);
    }
    customSelect.appendChild(box);
  };

  function clearCustomSelect() {
    var select = document.getElementsByClassName(SEND_RESUME_SELECT_CLASS)[0];
    var selectedDiv = document.getElementById(CUSTOM_SELECT_SELECTED_ID);
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value == SEND_RESUME_SELECT_DEFAULT_OPTION) {
        selectedDiv.innerText = select.options[i].innerText;
        break;
      }
    };
  };

  $(document).ready(function() {
    // hide default option from the list
    $("#" + SEND_RESUME_FORM_SELECT_DEFAULT_OPTION_ID)
    .toggleClass(HIDE_ELEMENT_CLASS);

    createCustomSelect();
  });

  $(document).click(function() {
    // hide select's options if click outside the options box
    var selectOptions = document.getElementsByClassName(CUSTOM_SELECT_ITEMS)[0];
    var selectedOption = document.getElementsByClassName(CUSTOM_SELECT_SELECTED_CLASS)[0];
    if (selectOptions && selectedOption
      && selectedOption.classList.contains(CUSTOM_SELECT_ACTIVE)) {
      selectOptions.classList.toggle(CUSTOM_SELECT_HIDE);
      selectedOption.classList.toggle(CUSTOM_SELECT_ACTIVE);
    }
  });

  $("#" + SEND_RESUME_ATTACH_BUTTON_ID)
  .on("change", updateResumeChange);

  $(window).resize(function(event) {
    var file = getFile();
    if (file) {
      truncateFileName(file.name);
    }
  });

  $("." + SEND_RESUME_NAME_CLASS).on("input", function(event) {
    var nameError = $("." + SEND_RESUME_NAME_ERROR_CLASS);
    hideError(nameError);
  });

  // handle modal window using bootstrap modal function
  function handleModal(modalId, modalOperation) {
    $("#" + modalId).modal(modalOperation);
  };

  function updateResumeChange() {
    clearData();
    var attach = $("#" + SEND_RESUME_ATTACH_BUTTON_ID)[0];
    var file = getFile();
    if (file == null) return;
    $("." + SEND_RESUME_ATTACH_FILE_NAME_CLASS).text(file.name);
    truncateFileName(file.name);
    if (validFileType(file)) {
      attach.setCustomValidity("");
    } else {
      attach.setCustomValidity(SEND_RESUME_ERROR_MESSAGE_1);
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

  function isValidFormElements() {
    var name = $("." + SEND_RESUME_NAME_CLASS)[0];
    var nameError = $("." + SEND_RESUME_NAME_ERROR_CLASS);
    var tel = $("." + SEND_RESUME_TEL_CLASS)[0];
    var telError = $("." + SEND_RESUME_TEL_ERROR_CLASS);
    var vacancy = $("." + SEND_RESUME_SELECT_CLASS)[0];
    var vacancyError = $("." + SEND_RESUME_SELECT_ERROR_CLASS);
    var attach = $("#" + SEND_RESUME_ATTACH_BUTTON_ID)[0];
    var attachError = $("." + SEND_RESUME_ATTACH_ERROR_CLASS);
    var checkbox = $("." + SEND_RESUME_CHECKBOX_CLASS)[0];

    if (name.validity.valueMissing) {
      handleError(name, nameError, SEND_RESUME_ERROR_MESSAGE_3);
      return false;
    }
    if (tel.validity.valueMissing) {
      handleError(tel, telError, SEND_RESUME_ERROR_MESSAGE_3);
      return false;
    } else if (tel.validity.customError) {
      handleError(tel, telError, SEND_RESUME_ERROR_MESSAGE_3);
      return false;
    }
    if (vacancy.validity.customError) {
      handleError(vacancy, vacancyError, SEND_RESUME_ERROR_MESSAGE_4);
      return false;
    }
    if (attach.validity.valueMissing) {
      handleError(attach, attachError, SEND_RESUME_ERROR_MESSAGE_2);
      return false;
    } else if (attach.validity.customError) {
      handleError(attach, attachError, SEND_RESUME_ERROR_MESSAGE_1);
      return false;
    }
    if (checkbox.validity.valueMissing) {
      handleError(checkbox, null, null);
      return false;
    }

    return true;
  }

  function handleError(element, error, errorMessage) {
    element.focus();
    if (error) {
      error.text(errorMessage);
      showError(error);
    }
  }

  function showError(error) {
    if (error.hasClass(HIDE_ELEMENT_CLASS)) {
      error.removeClass(HIDE_ELEMENT_CLASS);
      error.addClass(SEND_RESUME_ERROR_MARKER);
    }
  };

  function hideError(error) {
    if (!error.hasClass(HIDE_ELEMENT_CLASS)) {
      error.addClass(HIDE_ELEMENT_CLASS);
      error.removeClass(SEND_RESUME_ERROR_MARKER);
    }
  }

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