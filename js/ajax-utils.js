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
      window.alert("Ajax is not supported!");
      return null;
    }
  };

  /*
    Handle valid request (ready and not an error)
    using 'responseHandler' function
  */
  function handleResponse(request, responseHandler) {
    if ((request.readyState == 4) && (request.status == 200)) {
      responseHandler(request.responseText);
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
  };

  /*
    Makes an Ajax POST request to "requestUrl"
  */
  ajaxUtils.sendPostRequest = function (requestUrl, data, responseHandler) {
    var request = getHttpRequest();
    request.onreadystatechange = function() {
      handleResponse(request, responseHandler);
    };
    request.open("POST", requestUrl);
    request.setRequestHeader("Content-type", "multipart/form-data");
    request.send(data);
  };

  window.$ajaxUtils = ajaxUtils;

 })();