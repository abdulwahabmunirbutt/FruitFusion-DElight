document
  .getElementById("whatsappButton1")
  .addEventListener("click", function () {
    // Phone number to chat with (include the country code but exclude any + or - signs)
    var phoneNumber = "+923138572445";

    // Message to send
    var message = "I want to buy Fruit Chaat";

    // Open the WhatsApp application with the chat window open
    window.open(
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message),
      "_blank"
    );
  });
// document
//   .getElementById("whatsappButton2")
//   .addEventListener("click", function () {
//     // Phone number to chat with (include the country code but exclude any + or - signs)
//     var phoneNumber = "+923067524517";

//     // Message to send
//     var message = "I want to buy Lemonade";

//     // Open the WhatsApp application with the chat window open
//     window.open(
//       "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message),
//       "_blank"
//     );
//   });
