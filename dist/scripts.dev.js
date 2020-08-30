"use strict";

barba.init({
  debug: true,
  transitions: [{
    name: "next",
    leave: function leave(_ref) {
      var current = _ref.current,
          next = _ref.next,
          trigger = _ref.trigger;
      return new Promise(function (resolve) {
        var timeline = gsap.timeline({
          onComplete: function onComplete() {
            current.container.remove();
            resolve();
          }
        });
        var navigation = current.container.querySelectorAll("header, a.next, a.previous");
        var photos = current.container.querySelectorAll("div.phots");
        timeline.to(navigation, {
          opacity: 0
        }, 0).to(photos, {
          opacity: 0.25,
          x: 500
        }, 0);
      });
    },
    enter: function enter(_ref2) {
      var current = _ref2.current,
          next = _ref2.next,
          trigger = _ref2.trigger;
      return new Promise(function (resolve) {
        var timeline = gsap.timeline({
          onComplete: function onComplete() {
            resolve();
          }
        });
        var navigation = next.container.querySelectorAll("header, a.next, a.previous");
        var photos = next.container.querySelectorAll("div.photos");
        timeline.set(navigation, {
          opacity: 0
        }).set(photos, {
          opacity: 0.25,
          x: -500
        }, 0).to(navigation, {
          opacity: 1
        }).to(phots, {
          opacity: 1,
          x: 0
        }, 0);
      });
    }
  }],
  views: []
});