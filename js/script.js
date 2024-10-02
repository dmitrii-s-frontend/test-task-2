                           /* VACANCIES PAGE */
(function () {
/* departments-section */
  var CLOSE_ICON_CLASS = "js-departments-section-vacancies-icon-close";
  var MORE_ICON_CLASS = "js-departments-section-vacancies-icon-more";
  var VACANCIES_CLASS = "js-departments-section-vacancies";
  var UPPERCASE_CLASS = "text-uppercase";
  var HIDE_ELEMENT_CLASS = "d-none";

  var VACANCY_CARD_HTML = "snippets/vacancy-card.html";
  var VACANCY_CARD_LIST_ITEM_HTML = "snippets/vacancy-card-list-item.html";
  var TOGGLE_PATTERN = "dt-";
  var LOVER_CASE_VALUE = "Обсуждается на собеседовании";

  // vacancies data, temporary solution
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

  // add listeners to descriptions
  function addListenersToDescriptions (length) {
    for (var i = 1; i <= length; i++) {
      toggleDescriptionVisibility(TOGGLE_PATTERN + i);
    }
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
      var toggleClass = TOGGLE_PATTERN + (i + 1);
      var caseClass = price !== LOVER_CASE_VALUE ? UPPERCASE_CLASS : "";

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
      card = changePlaceholder(card, "toggle-class", toggleClass);
      card = changePlaceholder(card, "case-class", caseClass);

      result += card;
    }

    $("." + VACANCIES_CLASS).html(result);
    addListenersToDescriptions(data.length);
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
/* departments-section end */

})();
                           /* VACANCIES PAGE END */