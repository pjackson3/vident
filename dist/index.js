import page from 'page';
import { parse, render } from 'mustache';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Component =
/*#__PURE__*/
function () {
  function Component(template) {
    var prerender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Component);

    this.template = template;

    if (prerender) {
      this.prerender = prerender;
    }

    parse(this.template);
  }

  _createClass(Component, [{
    key: "render",
    value: function render$1(data) {
      if (this.prerender) {
        data = this.prerender(data);
      }

      return render(this.template, data);
    }
  }]);

  return Component;
}();

var _this = undefined;
var setup = function setup($) {
  // Sets up the plugins and returns the modified jQuery object. This is 
  $.fn.createRoute = function (options) {
    var defaults = {
      route: "/",
      component: new Component("<h1>{{data}}</h1>")
    };
    options = $.extend(defaults, options);
    page(options.route, options.component.render({}, $(_this)));
  };

  $.fn.route = function (options) {
    var defaults = {
      route: "/"
    };
    options = $.extend(defaults, options);
    page(options.route);
  };

  $.fn.loadRoutes = function () {
    page();
  };

  $.fn.createComponent = function (options) {
    var defaults = {
      template: "<h1>{{data}}</h1>",
      prerender: false
    };
    options = $.extend(defaults, options);
    return new Component(options.template, options.prerender);
  }, $.fn.renderComponent = function (options) {
    var defaults = {
      component: new Component(),
      data: {}
    };
    options = $.extend(defaults, options);
    options.component.render(options.data, $(_this));
  };
  return $;
};

export { setup };
