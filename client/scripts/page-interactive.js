function postRequest (url, params, success, error) {  
  var request = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); 
  
  request.open("POST", url, true); 
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  request.onload = function () {
    if (request.status === 200) success(request.responseText);
  };

  request.onerror = function () { 
    error(request, request.status); 
  }; 

  request.send(params);
}

window.onload = function () {
	var btn = document.getElementsByClassName('new-term-submit')[0];
	var input = document.getElementsByClassName('new-term-input')[0];

	btn.onclick = function (event) {
		var answer;
		event.preventDefault();

		answer = {
			term: input.value,
			value: "",
			hasValue: false
		};

		return postRequest('/jedi', JSON.stringify(answer),
      function (response) { document.location.reload(true); },
      function (request, status) {
        if (status === 404) console.error('File not found');
        if (status === 500) console.error('Server error');
        if (status === 0) console.error('Request aborted');
        else console.error('Unknown error ' + status);
      });
	};
};