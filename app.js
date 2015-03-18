var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'PJoke',
  icon: 'images/menu_icon.png',
  body: 'Loading...'
});

function upd_joke() {
  main.body('Loading...');
  ajax(
  {
    url: 'http://api.icndb.com/jokes/random',
    type: 'json'
  },
  function(data) {
    main.body(data.value.joke);
  },
  function(error) {}
);
}

main.on('click', 'select', function(e) {
  upd_joke();
});

main.show();
upd_joke();
