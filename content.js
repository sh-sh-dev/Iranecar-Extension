// var excludes = ["issuance_place_city", "birth_place_city", "address_city"]
var excludes = []

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function print(data) {
  for (var key of Object.keys(data)) {
    if (excludes.includes(key))
      continue;

    var element = document.getElementsByName(key)[0];

    var event = new Event('click');
    element.dispatchEvent(event);

    var mystring = data[key];

    for (var i = 0; i < mystring.length; i++) {
      element.value += mystring.charAt(i);
      element.dispatchEvent(new Event('input'));
    }

    if (element.nodeName === "SELECT") {
      console.log(element.options)
      console.log(element.options[0])
      console.log(Object.keys(element.options))

      var optIndex = Object.keys(element.options).filter((optKey) => {
        return element.options[optKey].innerHTML === data[key]
      })
      element.value = element.options[optIndex[0]].value;
      // console.log(data[key], optIndex)
    }

    var event = new Event('change');
    element.dispatchEvent(event);

    console.log(`passed ${key}`)

    await sleep(80);
  }

  var inputs = document.querySelectorAll("input[type='checkbox']");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }
}

function focusOnCaptcha() {
  let captchaInput = document.getElementsByName('captcha');
  if (captchaInput)
    captchaInput[0].focus()
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      console.log([
        request,
        sender,
        sendResponse
      ])

      switch (request.type) {
        case "print":
          print(request.data).then(() => {
            focusOnCaptcha();
          })
          break;
      }
    }
);
