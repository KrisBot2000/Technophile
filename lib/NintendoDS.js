const extend = require('./extend');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');

function NintendoDS(){
  GameConsole.call(this, "Nintendo DS");
}

NintendoDS.prototype = extend(NintendoDS.prototype, GameConsole.prototype);

NintendoDS.prototype = extend(NintendoDS.prototype, WebBrowser.prototype);


module.exports = NintendoDS;