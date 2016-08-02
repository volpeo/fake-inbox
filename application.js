"use strict"; // Do not remove

function hasNewMessage() {
  return (Math.floor(Math.random() * 100) <= 20);
}

function newMessage() {
  var messages = [
    {
      subject: "You won 45 000 USD",
      sender: "MegaPrize"
    },
    {
      subject: "Enlarge your penis",
      sender: "Ex girlfriend"
    },
    {
      subject: "Hot ladies next to you",
      sender: "CharlyDev"
    }
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function appendMessageToDom(message) {
  var $sender = $('<div>').addClass('col-xs-3').text(message.sender);
  var $subject = $('<div>').addClass('col-xs-9').text(message.subject);
  var $row = $('<div>').addClass('row message unread new-message').append($sender).append($subject);
  $('#inbox').prepend($row);
  setTimeout(function() {
    $row.removeClass('new-message');
  }, 500);
}

function updateCount() {
  var count = parseInt($('#count').text());
  $('#count').text(count + 1);
}

function playSound() {
  var audio = new Audio('win31.mp3');
  audio.play();
}

function refresh() {
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
    updateCount();
    playSound();
  }
}

$(document).ready(function () {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});






// Do not mind this below. Used for `rake` only.
try {
  if (module) {
    module.exports = {
      hasNewMessage: hasNewMessage,
      newMessage: newMessage
    };
  }
} catch(ReferenceError) {
  // In-browser
}
