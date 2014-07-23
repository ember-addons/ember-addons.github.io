window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Tag = DS.Model.extend({
  title: DS.attr('string'),
  children: DS.hasMany('tag', {
    async: true
  }),
  parent: DS.belongsTo('tag', {
    async: true
  })
});

App.Tag.FIXTURES = [
  {
    id: 0,
    title: 'Root',
    parent: void 0,
    children: [1]
  }, {
    id: 1,
    title: 'Family',
    parent: 0,
    children: [10, 11]
  }, {
    id: 10,
    title: 'Susan',
    parent: [1],
    children: [100, 101]
  }, {
    id: 11,
    title: 'Luda',
    parent: [1],
    children: [102, 103]
  }, {
    id: 100,
    title: 'Josh',
    parent: [10],
    children: []
  }, {
    id: 101,
    title: 'Moses',
    parent: [10],
    children: []
  }, {
    id: 102,
    title: 'Verdi',
    parent: [11],
    children: []
  }, {
    id: 103,
    title: 'Gaya',
    parent: [11],
    children: []
  }
];

App.TreeGenerator = Em.Object.create({
  words: ["Foo", "Bar", "Baz", "Qux"],
  maxChildrenPerParent: 5,
  items: 0,
  setParentOnTree: function(node, parent) {
    Ember.set(node, 'parent', parent);
    node.children.forEach((function(_this) {
      return function(child) {
        return _this.setParentOnTree(child, node);
      };
    })(this));
    return node;
  },
  getRandomWord: function() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  },
  getRandomNumber: function(min, max) {
    return Math.floor((Math.random() * max) + min);
  },
  createRecursiveTree: function(depth, maxChildrenPerParent) {
    var children, i, newChild;
    children = [];
    if (depth > 0) {
      i = 0;
      while (i < maxChildrenPerParent) {
        newChild = this.createRecursiveTree(depth - 1, this.maxChildrenPerParent);
        children.push(newChild);
        i++;
      }
    }
    this.items++;
    return {
      id: this.items,
      title: this.getRandomWord(),
      children: children
    };
  },
  generateTree: function(depth) {
    return this.setParentOnTree(this.createRecursiveTree(depth, 3));
  }
});

Em.Route.reopen({
  renderTemplate: function() {
    this._super();
    return Em.run.next(this, function() {
      return $('pre code').each(function(i, e) {
        return hljs.highlightBlock(e);
      });
    });
  }
});

App.Router.map(function() {
  this.route('overview');
  this.route('getstarted');
  return this.resource('component', function() {
    this.resource('component.forms', function() {});
    this.resource('component.tabs', function() {
      return this.route('simple', this.route('query_params', this.route('controller_per_tab')));
    });
    this.resource('component.wysiwyg', function() {
      return this.route('simple');
    });
    this.resource('component.accordion', function() {
      this.route('simple');
      this.route('query_params');
      return this.route('controller_per_item');
    });
    return this.resource('component.tree', function() {
      this.route('simple');
      this.route('emberdata');
      return this.route('async');
    });
  });
});

App.IndexRoute = Em.Route.extend({
  beforeModel: function() {
    return this.transitionTo('overview');
  }
});

App.SidebarController = Em.ArrayController.extend({
  model: [
    {
      route: 'overview',
      text: 'Overview',
      items: []
    }, {
      route: 'getstarted',
      text: 'Getting started',
      items: []
    }, {
      route: 'component',
      text: 'Components',
      items: [
        {
          route: 'component.forms',
          text: 'Forms',
          items: []
        }, {
          route: 'component.tabs',
          text: 'Tabs',
          items: [
            {
              route: 'component.tabs.simple',
              text: 'Simple'
            }, {
              route: 'component.tabs.query_params',
              text: 'Query Params'
            }, {
              route: 'component.tabs.controller_per_tab',
              text: 'Controller per Tab'
            }
          ]
        }, {
          route: 'component.wysiwyg',
          text: 'Wysiwyg Html5',
          items: [
            {
              route: 'component.wysiwyg.simple',
              text: 'Simple'
            }
          ]
        }, {
          route: 'component.accordion',
          text: 'Accordion',
          items: [
            {
              route: 'component.accordion.simple',
              text: 'Simple'
            }, {
              route: 'component.accordion.query_params',
              text: 'Query Params'
            }, {
              route: 'component.accordion.controller_per_item',
              text: 'Controller per Item'
            }
          ]
        }, {
          route: 'component.tree',
          text: 'Tree',
          items: [
            {
              route: 'component.tree.simple',
              text: 'Simple'
            }, {
              route: 'component.tree.emberdata',
              text: 'Ember Data'
            }, {
              route: 'component.tree.async',
              text: 'Async'
            }
          ]
        }
      ]
    }
  ]
});

App.ComponentTabsQueryParamsController = Em.Controller.extend({
  queryParams: ['tab_idx'],
  tab_idx: 0
});

App.ComponentTabsC1Controller = Em.Controller.extend({
  label: "I'm controller 1"
});

App.ComponentTabsC2Controller = Em.Controller.extend({
  label: "I'm controller 2"
});

App.ComponentTabsC3Controller = Em.Controller.extend({
  label: "I'm controller 3"
});

App.ComponentAccordionQueryParamsController = Em.Controller.extend({
  queryParams: ['item_idx'],
  item_idx: 0
});

App.ComponentTreeSimpleController = Em.ObjectController.extend({
  init: function() {
    var family, gaya, josh, lud, moses, root, suz, verdi;
    root = Em.Pc.TreeNode.create();
    family = root.createChild({
      title: 'Family'
    });
    suz = family.createChild({
      title: 'Susan'
    });
    lud = family.createChild({
      title: 'Luda'
    });
    josh = suz.createChild({
      title: 'Josh'
    });
    moses = suz.createChild({
      title: 'Moses'
    });
    verdi = lud.createChild({
      title: 'Verdi'
    });
    gaya = lud.createChild({
      title: 'Gaya'
    });
    return this.set('model', root);
  }
});

App.ComponentTreeEmberdataRoute = Em.Route.extend({
  model: function() {
    return this.store.find('tag', 0);
  }
});

App.ComponentTreeAsyncRoute = Em.Route.extend({
  model: function() {
    var family, root;
    root = Em.Pc.TreeNode.create();
    family = root.createChild({
      title: 'Family'
    });
    return root;
  }
});

App.ComponentTreeAsyncController = Em.ObjectController.extend({
  words: ['Foo', 'Bar', 'Baz', 'Qux'],
  randomWord: function() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  },
  actions: {
    getChildren: function(node, c) {
      return Em.run.later(this, function() {
        var i, o, _results;
        c.set('loading', false);
        o = Math.floor(Math.random() * this.words.length) + 1;
        if (node.get('level') < 4) {
          i = 0;
          _results = [];
          while (i < o) {
            node.createChild({
              title: this.randomWord()
            });
            _results.push(i++);
          }
          return _results;
        } else {
          return node.emptyChildren();
        }
      }, 500);
    }
  }
});
