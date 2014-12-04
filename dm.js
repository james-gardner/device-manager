(function(global) {
  'use strict';

  var DeviceManager = function(el, data) {
    this.el = el;
    this.data = data;
  };

  var p = DeviceManager.prototype;

  p.render = function(tmpl) {
    this.data.forEach(function(obj) {
      this.el.appendChild(tmpl(obj));
    }.bind(this));
  };

  global.DeviceManager = DeviceManager;
}(window));

var dm = new DeviceManager(document.getElementById('devices'), devices);

dm.render(function(obj) {
  var el = document.createElement('li');
      el.innerHTML = '<p><strong>' + obj.name + '</strong> '+ obj.status +'</p>';

  return el;
});