let inputHrn = document.getElementById('hrn'),
    inputUsd = document.getElementById('usd');

inputHrn.addEventListener('input', function() {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('readystatechange', function () {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputHrn.value / data.usd;
        } else {
            inputUsd.value = 'Щось пішло не так!';
        }
    });
});