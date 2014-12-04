(function(global) {
  'use strict';

  var DeviceManager = function(el, data) {
    this.el = el;
    this.data = data;

    this.el.addEventListener('click', function (e) {
      if(e.target.className === 'device') {
        this._onDeviceSelected(e.target.getAttribute('data-id'));
      }
    }.bind(this));
  };

  var p = DeviceManager.prototype;

  p._onDeviceSelected = function (id) {
    console.log(this.data[id]);
  };

  p.render = function() {
    var li, el = this.el;

    this.el.innerHTML = null;

    this.data.forEach(function(obj, index) {
      li = document.createElement('li');
      li.innerHTML = '<p class="device" data-id="' + index + '">' + obj.name + '</p>';

      el.appendChild(li);
    });
  };

  global.DeviceManager = DeviceManager;
}(window));

var dm = new DeviceManager(document.getElementById('devices'), devices);
    dm.render();