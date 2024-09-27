(function() {
  /*
    Set up a namespace
  */
  var ajaxUtils = {};

  /*
    Returns an Http request object
  */
  function getHttpRequest() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      global.alert("Ajax is not supported!");
      return null;
    }
  };

  /*
    Makes an Ajax GET request to "requestUrl"
  */
  ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
    var request = getHttpRequest();
    request.onreadystatechange = function() {
      handleResponse(request, responseHandler);
    };
    request.open("GET", requestUrl);
    request.send(null);
  }

  /*
    Handle valid request (ready and not an error)
    using 'responseHandler' function
  */
  function handleResponse(request, responseHandler) {
    if ((request.readyState == 4) && (request.status == 200)) {
      responseHandler(request.responseText);
    }
  };

  window.$ajaxUtils = ajaxUtils;

})(window);