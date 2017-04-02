var randomButtonElement = document.getElementById('randomize');
var randomUserElement = document.getElementById('user');
var errorElement = document.getElementById('error');

randomButtonElement.onclick = function () {
    httpGet('https://api.github.com/users')
  .then(response => {
    var data = JSON.parse(response)
    return data;
  })
  .then(data => {
       var user = data[Math.floor(Math.random() * data.length)];
                loadImage(user.avatar_url, function() {
                    hideError();
                    drawUser(user);
                }, showError);
 
  });
};

function httpGet(url) {
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}

function showError(err) {
    errorElement.textContent = err;
    errorElement.classList.remove('hidden');
    randomUserElement.classList.add('hidden');
}

function hideError() {
    errorElement.classList.add('hidden');
    randomUserElement.classList.remove('hidden');
}


function loadImage(imageUrl, successCallback, errorCallback) {
    var img = new Image();

    img.onload = function () {
        successCallback(img);
    };

    img.onerror = function () {
        errorCallback(new Error('wrong'));
    };
    img.src = imageUrl;
}

function drawUser(data) {
    var img = randomUserElement.querySelector('img');
    var link = randomUserElement.querySelector('a');
    img.src = data.avatar_url;
    img.alt = data.login;
    link.href = data.html_url;
    link.textContent = data.login;
}
