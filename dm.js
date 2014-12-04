(function(global) {
  'use strict';

  var DeviceList = function(el, data) {
    this.el = el;
    this.data = data;
  };

  var p = DeviceList.prototype;

  p.list = function(tmpl) {
    this.data.forEach(function(obj) {
      this.el.appendChild(tmpl(obj));
    }.bind(this));
  };

  global.DeviceList = DeviceList;
}(window));

var dm = new DeviceList(document.getElementById('devices'), devices);

// Pass in data with a decorator.
dm.list(function(obj) {
  var li = document.createElement('li');
      li.textContent = obj.name;

  return li;
});