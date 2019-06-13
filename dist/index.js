import mustache, { parse, render } from 'mustache';
import page from 'page';

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

var Page =
/*#__PURE__*/
function () {
  function Page(template, $element) {
    var prerender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Page);

    this.template = template;

    if (prerender) {
      this.prerender = prerender;
    }

    mustache.parse(this.template);
  }

  _createClass(Page, [{
    key: "render",
    value: function render(props, $element) {
      if (this.prerender) {
        props = this.prerender(props);
      }

      var text = mustache.render(this.template, props);
      $element.html(text);
    }
  }]);

  return Page;
}();

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
  $.fn.createPage = function (options) {
    // This extension creates a new page instance. This can be accessed by $().createPage
    var defaults = {
      template: "<h1>{{data}}</h1>",
      prerender: function prerender(props) {
        return {
          data: props
        };
      }
    };
    options = $.extend(defaults, options);
    return new Page(options.template, options.prerender);
  };

  $.fn.route = function (options) {
    var defaults = {
      route: "/",
      page: new Page("<h1>{{data}}</h1>")
    };
    options = $.extend(defaults, options);
    return page(options.route, options.page);
  };

  $.fn.renderPage = function (options) {
    var defaults = {
      page: new Page(),
      data: {}
    };
    options = $.extend(defaults, options);
    options.page.render(options.data, $(_this));
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
