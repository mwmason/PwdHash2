function SPH_HashedPassword(a,b){var c=this._getHashedPassword(a,b);this.toString=function(){return c}}var SPH_kPasswordPrefix="@@";SPH_HashedPassword.prototype={_getHashedPassword:function(a,b){var c=b64_hmac_md5(a,b);var d=a.length+SPH_kPasswordPrefix.length;var e=a.match(/\W/)!=null;var f=this._applyConstraints(c,d,e);return f},_applyConstraints:function(d,e,f){var g=e-4;var h=d.substring(0,g);var i=d.substring(g).split('');function nextExtra(){return i.length?i.shift().charCodeAt(0):0}function nextExtraChar(){return String.fromCharCode(nextExtra())}function rotate(a,b){while(b--)a.push(a.shift())}function between(a,b,c){return a+c%b}function nextBetween(a,b){return String.fromCharCode(between(a.charCodeAt(0),b,nextExtra()))}function contains(a){return h.match(a)}h+=(contains(/[A-Z]/)?nextExtraChar():nextBetween('A',26));h+=(contains(/[a-z]/)?nextExtraChar():nextBetween('a',26));h+=(contains(/[0-9]/)?nextExtraChar():nextBetween('0',10));h+=(contains(/\W/)&&f?nextExtraChar():'+');while(contains(/\W/)&&!f){h=h.replace(/\W/,nextBetween('A',26))}h=h.split('');rotate(h,nextExtra());return h.join('')}}