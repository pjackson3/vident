import mustache from 'mustache';
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
    var prerender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (props) {
      return props;
    };

    _classCallCheck(this, Page);

    this.template = template;
    this.prerender = prerender;
    mustache.parse(this.template);
  }

  _createClass(Page, [{
    key: "render",
    value: function render(props, $element) {
      props = this.prerender(props);
      var text = mustache.render(this.template, props);
      $element.html(text);
    }
  }]);

  return Page;
}();

var setup = function setup($) {
  $.fn.createPage = function (options) {
    var defaults = {
      template: "<h1>{{data}}</h1>",
      prerender: function prerender(props) {
      } //eslint-disable-line no-unused-labels

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
      element: "div",
      page: new Page(),
      data: {}
    };
    options = $.extend(defaults, options);
    options.page.render(options.data, $(options.element));
  };

  return $;
};

export { setup };
