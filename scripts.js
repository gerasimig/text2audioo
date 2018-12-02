const myRequest = new Request('http://localhost/api', {method: 'POST', body: '{"text":"bar"}'});

var convertButton = document.getElementById("convert-button");
convertButton.onclick = converButtonClick;

function converButtonClick() {
    var inputText = document.getElementById("text-input").value;
    if(!inputText) return;

    fetch(myRequest)
        .then(response => {
            if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
        })
}
 