(function(global) {
  'use strict';

  var DeviceManager = function(el, data) {
    this.el = el;
    this.data = data;
  };

  var p = DeviceManager.prototype;

  p.render = function() {
    var li, el = this.el;

    this.data.forEach(function(obj) {
      li = document.createElement('li');
      li.innerHTML = '<p><strong>' + obj.name + '</strong></p>';

      el.appendChild(li);
    });
  };

  global.DeviceManager = DeviceManager;
}(window));

var dm = new DeviceManager(document.getElementById('devices'), devices);
    dm.render();