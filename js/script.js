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
/* departments-section */
  var VACANCIES_CLASS = "js-departments-section-vacancies";
  var UPPERCASE_CLASS = "text-uppercase";
  var HIDE_ELEMENT_CLASS = "d-none";

  var VACANCY_CARD_HTML = "snippets/vacancy-card.html";
  var VACANCY_CARD_LIST_ITEM_HTML = "snippets/vacancy-card-list-item.html";
  var TOGGLE_PATTERN_DEPARTMENTS = "dt-";
  var LOWER_CASE_VALUE = "Обсуждается на собеседовании";
  var VACANCY_DESCRIPTION_CLASS = "js-departments-section-vacancies-description";

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
/* departments-section end */
/* advantages-section */
  var TOGGLE_PATTERN_ADVANTAGES = "at-";
  var ADVANTAGE_DESCRIPTION_CLASS = "js-advantages-section-card-body-description";

  $(document).ready(function() {
    addTogglers(".advantages-section .card", TOGGLE_PATTERN_ADVANTAGES,
      MORE_ICON_CLASS, ADVANTAGE_DESCRIPTION_CLASS);
  });
/* advantages-section end */
/* products-section */
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
      scale: 0.86, // number to create top / bottom empty space for next / prev slides
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

/* products-section end */
})();
                           /* VACANCIES PAGE END */