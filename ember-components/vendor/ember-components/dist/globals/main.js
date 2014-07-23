!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.Em||(f.Em={})).Pc=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("<!--panel-heading-->\n<!--panel-title-->\n<!--accordion-toggle-->\n\n<!--panel-collapse collapse-->\n<!--panel-body-->\n<div {{bind-attr class=panelHeaderClasses}}>\n    <h4 {{bind-attr class=panelTitleClasses}} style=\"cursor: pointer;\">\n        <a {{bind-attr class=panelTogglerClasses}}>\n            {{view.title}}\n        </a>\n    </h4>\n</div>\n<div {{bind-attr class=panelBodyContainerClasses}}>\n    <div {{bind-attr class=panelBodyClasses}}>{{yield}}</div>\n</div>");
},{}],2:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var computed = window.Ember.computed;
var ArrayProxy = window.Ember.ArrayProxy;

var AccordionItem, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * AccordionItem component
 *
 * @class AccordionItem
 */

AccordionItem = Component.extend(WithConfigMixin, {
  layoutName: 'em-accordion-item-tmpl',
  classNameBindings: ['styleClasses', 'selectedClass'],
  accordion: computed.alias('parentView'),
  content: Ember.computed.alias('accordion.content'),

  /**
   * Bind the specified attributes to the DOM element
   *
   * @property attributeBindings
   * @type Array
   */
  attributeBindings: ['active'],
  selectedClass: (function() {
    var _ref;
    if (this.get('selected')) {
      return (_ref = this.get('config.accordion.itemSelectedClasses')) != null ? _ref.join(" ") : void 0;
    } else {
      return null;
    }
  }).property('selected'),
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.itemClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelHeaderClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelHeaderClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelTitleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelTitleClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelTogglerClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelTogglerClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelBodyContainerClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelBodyContainerClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  panelBodyClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.panelBodyClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  index: (function() {
    return this.get('accordion.items').indexOf(this);
  }).property('accordion.items.@each'),
  register: (function() {
    return this.get('accordion').addItem(this);
  }).on('init'),
  unregister: (function() {
    return this.get('accordion').removeItem(this);
  }).on('willDestroyElement'),

  /**
   * true if this item is currently selected.
   *
   * @property selected
   * @type Boolean
   */
  selected: (function() {
    return this.get('accordion.selected') === this;
  }).property('accordion.selected'),
  active: (function() {
    if (this.get('selected')) {
      return "true";
    } else {
      return null;
    }
  }).property('selected'),

  /**
   * Select this item.
   *
   * Bound to `click` event.
   *
   * @method select
   */
  select: (function() {
    return this.get('accordion').select(this);
  }).on('click'),

  /**
   * Select this item if it matches the {{#crossLink "Accordiong/select:method"}}selected-idx{{/crossLink}} property set by the Accordion component.
   *
   * @method selectByAccordionParam
   * @private
   */
  selectByParam: (function() {
    var idx;
    if ((this.get('accordion.selected') != null) === this) {
      return;
    }
    idx = parseInt(this.get('accordion.selected-idx', 10));
    if (idx === this.get('index')) {
      return this.select();
    }
  }).observes('accordion.selected-idx').on('didInsertElement'),

  /**
   * Listen to `active` property changes and show / hide the item's content according to its state
   *
   * We use observes instead of properties as we need to invoke a method instead of calculating classes only
   * so in the future we can support a transition animation.
   */
  activeDidChange: (function() {
    if (this.get('active')) {
      return this.show();
    } else {
      return this.hide();
    }
  }).observes('active'),
  hide: function() {
    var $accordionBody;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.removeClass('in');
    return $accordionBody.height($accordionBody.height())[0].offsetHeight;
  },
  show: function() {
    var $accordionBody;
    $accordionBody = this.$('.panel-collapse');
    $accordionBody.addClass('in');
    return $accordionBody.height($accordionBody[0]['scrollHeight']);
  }
});

exports["default"] = AccordionItem;;
},{}],3:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;

var Accordion, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * Accordion component
 *
 * @class Accordion
 */

Accordion = Component.extend(WithConfigMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.accordion.classes')) != null ? _ref.join(" ") : void 0;
  }).property(),
  'selected-idx': 0,

  /**
   * A list of {{#crossLink "AccordionItem"}}accordion-item{{/crossLink}} instances.
   */
  items: void 0,
  selected: void 0,
  initItems: (function() {
    return this.set('items', ArrayProxy.create({
      content: []
    }));
  }).on('init'),

  /**
   * Add the given `AccordionItem` instance.
   */
  addItem: function(item) {
    return this.get('items').addObject(item);
  },

  /**
   * Remove the given `AccordionItem` instance.
   */
  removeItem: function(item) {
    return this.get('items').removeObject(item);
  },

  /**
   * Select the given item.
   *
   * @method select
   * @param {Object} an item instance to select.
   */
  select: function(item) {
    if (!item) {
      return;
    }
    Em.debug("Selecting item: " + (item.get('index')));
    this.set('selected', item);
    return this.set('selected-idx', item.get('index'));
  }
});

exports["default"] = Accordion;;
},{}],4:[function(_dereq_,module,exports){
"use strict";
var TabsComponent = _dereq_("./tabs/tabs")["default"] || _dereq_("./tabs/tabs");

var TabListComponent = _dereq_("./tabs/tab-list")["default"] || _dereq_("./tabs/tab-list");

var TabComponent = _dereq_("./tabs/tab")["default"] || _dereq_("./tabs/tab");

var TabPanelComponent = _dereq_("./tabs/tab-panel")["default"] || _dereq_("./tabs/tab-panel");

var WysiwygComponent = _dereq_("./wysiwyg/wysiwyg")["default"] || _dereq_("./wysiwyg/wysiwyg");

var WysiwygToolbarComponent = _dereq_("./wysiwyg/toolbar")["default"] || _dereq_("./wysiwyg/toolbar");

var WysiwygActionGroupComponent = _dereq_("./wysiwyg/action-group")["default"] || _dereq_("./wysiwyg/action-group");

var WysiwygActionComponent = _dereq_("./wysiwyg/action")["default"] || _dereq_("./wysiwyg/action");

var WysiwygActionTmpl = _dereq_("./wysiwyg/actiontmpl")["default"] || _dereq_("./wysiwyg/actiontmpl");

var WysiwygEditorComponent = _dereq_("./wysiwyg/editor")["default"] || _dereq_("./wysiwyg/editor");

var AccordionComponent = _dereq_("./accordion/accordion")["default"] || _dereq_("./accordion/accordion");

var AccordionItemComponent = _dereq_("./accordion/accordion-item")["default"] || _dereq_("./accordion/accordion-item");

var AccordionItemTmpl = _dereq_("./accordion/accordion-item-tmpl")["default"] || _dereq_("./accordion/accordion-item-tmpl");

var TreeNode = _dereq_("./tree/node")["default"] || _dereq_("./tree/node");
var TreeNodeComponent = _dereq_("./tree/tree-node")["default"] || _dereq_("./tree/tree-node");
var TreeNodeTmpl = _dereq_("./tree/tree-node-tmpl")["default"] || _dereq_("./tree/tree-node-tmpl");
var TreeBranchComponent = _dereq_("./tree/tree-branch")["default"] || _dereq_("./tree/tree-branch");
var TreeBranchTmpl = _dereq_("./tree/tree-branch-tmpl")["default"] || _dereq_("./tree/tree-branch-tmpl");
var TreeBranchStyle = _dereq_("./tree/tree-branch-css")["default"] || _dereq_("./tree/tree-branch-css");
var Application = window.Ember.Application;
var Namespace = window.Ember.Namespace;

Application.initializer({
  name: 'em-components',
  initialize: function(c) {
    var Config;
    Em.EmberComponents = Namespace.create({
      VERSION: '0.0.1'
    });
    Em.Config = Config = Em.Eu.Config.create();
    Config.addConfig('default', {
      tabs: {
        tabsTag: ['div'],
        tabTag: ['li'],
        tabListTag: ['ul']
      },
      tree: {
        branchClasses: ['em-tree-branch', 'fa-ul'],
        nodeClasses: ['em-tree-node'],
        nodeOpenClasses: [],
        nodeCloseClasses: [],
        nodeOpenIconClasses: ['fa-li', 'fa', 'fa-minus-square-o'],
        nodeCloseIconClasses: ['fa-li', 'fa', 'fa-plus-square-o'],
        nodeLeafClasses: ['leaf'],
        nodeLeafIconClasses: ['fa-li', 'fa', 'fa-square-o'],
        nodeLoadingIconClasses: ['fa-li', 'fa', 'fa-spinner', 'fa-spin']
      }
    });
    Config.addConfig('classic', {
      tabs: {
        tabsClasses: ['em-tabs'],
        tabClasses: ['em-tab'],
        tabListClasses: ['em-tab-list'],
        tabPanelClasses: ['em-tab-panel']
      }
    });
    Config.addConfig('bs', {
      tabs: {
        tabListClasses: ['nav', 'nav-tabs'],
        tabSelectedClasses: ['active']
      },
      wysiwyg: {
        classes: ['well'],
        toolbarClasses: ['btn-toolbar'],
        actionGroupClasses: ['btn-group'],
        actionClasses: ['btn btn-default'],
        actionActiveClasses: ['active']
      },
      accordion: {
        classes: ['panel-group'],
        itemClasses: ['panel', 'panel-default'],
        itemSelectedClasses: ['active'],
        panelHeaderClasses: ['panel-heading'],
        panelTitleClasses: ['panel-title'],
        panelTogglerClasses: ['accordion-toggle'],
        panelBodyContainerClasses: ['panel-collapse', 'collapse'],
        panelBodyClasses: ['panel-body']
      }
    });
    Config.addConfig('foundation', {
      tabs: {
        tabListClasses: ['tabs'],
        tabSelectedClasses: ['active'],
        tabClasses: ['tab-title'],
        tabPanelClasses: ['content']
      }
    });
    Em.EmberComponents.Config = Em.Config = Config;
    c.register('component:em-tabs', TabsComponent);
    c.register('component:em-tab-list', TabListComponent);
    c.register('component:em-tab', TabComponent);
    c.register('component:em-tab-panel', TabPanelComponent);
    c.register('component:em-wysiwyg', WysiwygComponent);
    c.register('component:em-wysiwyg-toolbar', WysiwygToolbarComponent);
    c.register('component:em-wysiwyg-action-group', WysiwygActionGroupComponent);
    c.register('component:em-wysiwyg-action', WysiwygActionComponent);
    c.register('template:em-wysiwyg-action', WysiwygActionTmpl);
    c.register('component:em-wysiwyg-editor', WysiwygEditorComponent);
    c.register('component:em-accordion', AccordionComponent);
    c.register('component:em-accordion-item', AccordionItemComponent);
    c.register('template:em-accordion-item-tmpl', AccordionItemTmpl);
    c.register('component:em-tree-node', TreeNodeComponent);
    c.register('template:em-tree-node', TreeNodeTmpl);
    c.register('component:em-tree-branch', TreeBranchComponent);
    c.register('template:em-tree-branch', TreeBranchTmpl);
    return c.register('template:components/em-tree-branch-css', TreeBranchStyle);
  }
});

exports.TabsComponent = TabsComponent;
exports.TabListComponent = TabListComponent;
exports.TabComponent = TabComponent;
exports.TabPanelComponent = TabPanelComponent;
exports.WysiwygComponent = WysiwygComponent;
exports.WysiwygToolbarComponent = WysiwygToolbarComponent;
exports.WysiwygActionGroupComponent = WysiwygActionGroupComponent;
exports.WysiwygActionComponent = WysiwygActionComponent;
exports.WysiwygEditorComponent = WysiwygEditorComponent;
exports.AccordionComponent = AccordionComponent;
exports.AccordionItemComponent = AccordionItemComponent;
exports.TreeNodeComponent = TreeNodeComponent;
exports.TreeBranchComponent = TreeBranchComponent;
exports.TreeNode = TreeNode;
},{"./accordion/accordion":3,"./accordion/accordion-item":2,"./accordion/accordion-item-tmpl":1,"./tabs/tab":7,"./tabs/tab-list":5,"./tabs/tab-panel":6,"./tabs/tabs":8,"./tree/node":9,"./tree/tree-branch":12,"./tree/tree-branch-css":10,"./tree/tree-branch-tmpl":11,"./tree/tree-node":14,"./tree/tree-node-tmpl":13,"./wysiwyg/action":16,"./wysiwyg/action-group":15,"./wysiwyg/actiontmpl":17,"./wysiwyg/editor":18,"./wysiwyg/toolbar":19,"./wysiwyg/wysiwyg":20}],5:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;
var computed = window.Ember.computed;

var TabList, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * `{{em-tab-list}}` component.
 *
 * Holds a list of `{{em-tab}}` components.
 * *Must be a direct descendent of the `{{em-tabs}` component.*

 * @class TabList
 */

TabList = Component.extend(WithConfigMixin, {
  setTagName: (function() {
    return this.set('tagName', this.get('config.tabs.tabListTag') || 'div');
  }).on('init'),
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabListClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),

  /**
   * The ancestor `Tabs` component
   * @property tabs
   * @type Tabs
   */
  tabs: computed.alias('parentView'),

  /**
   * The tab instances of this list.
   *
   * @property tab_instances
   * @type ArrayProxy
   */
  tab_instances: void 0,

  /**
   * The current selected tab
   *
   * @property selected
   * @type Tab
   */
  selected: computed.alias('parentView.selectedTab'),

  /**
   * The selected tab index
   *
   * @property selectedIdx
   * @type Number
   */
  selectedIdx: (function() {
    return this.get('tab_instances').indexOf(this.get('selected'));
  }).property('selected'),

  /**
   * Auto register this `TabList` in the ancestor tabs component.
   *
   * @method register
   * @private
   */
  register: (function() {
    return this.get('tabs').setTabList(this);
  }).on('didInsertElement'),

  /**
   * Initialize an empty tabs array
   *
   * @method initTabs
   * @private
   */
  initTabs: (function() {
    return this.set('tab_instances', ArrayProxy.create({
      content: []
    }));
  }).on('init'),

  /**
   * Add a tab to the tab list
   *
   * @method addTab
   * @param tab {Tab} the tab to add.
   * @private
   */
  addTab: function(tab) {
    return this.get('tab_instances').addObject(tab);
  },

  /**
   * Remove a tab from the tab list
   *
   * @method removeTab
   * @param tab {Tab} the tab to remove.
   * @private
   */
  removeTab: function(tab) {
    var nextIdx, tabIdx, _ref;
    this.get('tab_instances').removeObject(tab);
    if (this.get('tabs.selected') === tab) {
      tabIdx = tab.get('index');
      nextIdx = (_ref = tabIdx === 0) != null ? _ref : {
        tabIdx: tabIdx - 1
      };
      return this.get('tabs').select(this.get('tab_instances').objectAt(nextIdx));
    }
  }
});

exports["default"] = TabList;;
},{}],6:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var computed = window.Ember.computed;

var StyleBindingsMixin, TabPanel, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;

StyleBindingsMixin = Em.Eu.StyleBindingsMixin;

TabPanel = Component.extend(WithConfigMixin, StyleBindingsMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabPanelClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  styleBindings: ['height'],
  attributeBindings: ['selected'],

  /**
   * The ancestor `Tabs` component
   * @property tabs
   * @type Tabs
   */
  tabs: computed.alias('parentView'),

  /**
   * A reference to the {{#crossLink "TabList}}TabList{{/crossLink}} instance.
   *
   * @property tabList
   * @type TabList
   */
  tabList: computed.alias('parentView.tabList'),

  /**
   * A reference to the {{#crossLink "Tabs}}{{/crossLink}}'s panels property.
   *
   * @property panels 
   * @type Array
   */
  panels: computed.alias('parentView.panels'),

  /**
   * The tab that refer to this tab pane
   *
   * @property tab
   * @type Tab
   */
  tab: (function() {
    var index, tabs;
    index = this.get('panels').indexOf(this);
    tabs = this.get('tabList.tab_instances');
    return tabs && tabs.objectAt(index);
  }).property('tabList.tab_instances.@each'),
  selected: (function() {
    return this.get('tab.selected');
  }).property('tab.selected'),
  changeVisibility: (function() {
    return this.$().css('display', this.get('selected') ? "" : 'none');
  }).observes('selected'),
  register: (function() {
    return this.get('tabs').addTabPanel(this);
  }).on('didInsertElement'),
  unregister: (function() {
    return this.get('tabs').removeTabPanel(this);
  }).on('willDestroyElement')
});

exports["default"] = TabPanel;;
},{}],7:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var computed = window.Ember.computed;
var Handlebars = window.Ember.Handlebars;

var Tab, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * `{{tab}}` component
 * Add a new tab
 *
 * @class Tab
 */

Tab = Component.extend(WithConfigMixin, {
  setTagName: (function() {
    return this.set('tagName', this.get('config.tabs.tabTag') || 'div');
  }).on('init'),

  /**
   * Bind the specified attributes to the DOM element
   *
   * @property attributeBindings
   * @type Array
   */
  attributeBindings: ['active'],
  classNameBindings: ['styleClasses', 'selectedClass'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  selectedClass: (function() {
    var _ref;
    if (this.get('selected')) {
      return (_ref = this.get('config.tabs.tabSelectedClasses')) != null ? _ref.join(" ") : void 0;
    } else {
      return null;
    }
  }).property('selected'),

  /**
   * A reference to the {{#crossLink "Tabs"}}Tabs{{/crossLink}} instance.
   * 
   * @property tabs
   * @type Tabs
   */
  tabs: computed.alias('parentView.parentView'),

  /**
   * A reference to the {{#crossLink "TabList}}TabList{{/crossLink}} instance.
   *
   * @property tabList
   * @type TabList
   */
  tabList: computed.alias('parentView'),

  /**
   * true if this tab is currently selected.
   *
   * @property selected
   * @type Boolean
   */
  selected: (function() {
    return this.get('tabs.selected') === this;
  }).property('tabs.selected'),
  active: (function() {
    if (this.get('selected')) {
      return "true";
    } else {
      return null;
    }
  }).property('selected'),
  index: (function() {
    return this.get('tabList.tab_instances').indexOf(this);
  }).property('tabList.tab_instances.@each'),

  /**
   * Select this tab.
   *
   * Bound to `click` event.
   *
   * @method select
   */
  select: (function() {
    return this.get('tabs').select(this);
  }).on('click'),

  /**
   * Select this tab if it matches the {{#crossLink "Tabs/select:method"}}selected-idx{{/crossLink}} property set by the Tabs component.
   *
   * @method selectByTabsParam
   * @private
   */
  selectByTabsParam: (function() {
    var idx;
    if ((this.get('tabs.selected') != null) === this) {
      return;
    }
    idx = parseInt(this.get('tabs.selected-idx', 10));
    if (idx === this.get('index')) {
      return this.select();
    }
  }).observes('tabs.selected-idx').on('didInsertElement'),

  /**
   * Register this tab in the {{#crossLink "TabList"}}{{/crossLink}} component instance.
   *
   * @method register
   * @private
   */
  register: (function() {
    return this.get('tabList').addTab(this);
  }).on('didInsertElement'),

  /**
   * Unregister this tab from the {{#crossLink "TabList"}}{{/crossLink}} component instance.
   *
   * @method unregister
   * @private
   */
  unregister: (function() {
    return this.get('tabList').removeTab(this);
  }).on('willDestroyElement')
});

exports["default"] = Tab;;
},{}],8:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;

var StyleBindingsMixin, Tabs, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;

StyleBindingsMixin = Em.Eu.StyleBindingsMixin;


/**
 * `{{em-tabs}}` component.
 *
 * The top level component for rendering tabs and their panes.
 *
 * Simplest usage:
 *
 * ```handlebars
 * {{#em-tabs}}
 *    {{#em-tab-list}}
 *       {{#em-tab}}ral{{/em-tab}}
 *       {{#em-tab}}Security{{/em-tab}}
 *       {{#em-tab}}Advanced{{/em=tab}}
 *    {{em-tab-list}}
 * {{/em-tabs}}
 * ```
 *
 * @class Tabs
 * @public
 */

Tabs = Component.extend(WithConfigMixin, StyleBindingsMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabsClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  styleBindings: ['height'],

  /**
   * A list of tab panels
   *
   * @property panels
   * @private
   * @type Array
   */
  panels: void 0,

  /**
   * A {{#crossLink "TabList"}}{{/crossLink}} component instance.
   *
   * @property tabList
   * @type TabList
   */
  tabList: void 0,

  /**
   * The selected tab instance.
   *
   * @property selectedTab
   * @type Tab
   * @private
   * @see Tab
   *
   */
  selected: void 0,

  /**
   * The index of the selected tab
   *
   * @property 'selected-idx'
   * @type Number
   */
  'selected-idx': 0,

  /**
   * Select the given tab.
   *
   * @method select
   * @param {Object} a tab instance to select.
   * @see selectedTab
   * @see selected-idx
   */
  select: function(tab) {
    if (!tab) {
      return;
    }
    Em.debug("Selecting tab: " + (tab.get('index')));
    this.set('selected', tab);
    return this.set('selected-idx', tab.get('index'));
  },

  /**
   * Initialize the tab panels array
   *
   * @method initTabPanels
   */
  initTabPanels: (function() {
    return this.set('panels', ArrayProxy.create({
      content: []
    }));
  }).on('init'),

  /**
   * Set the specified `TabList` instance.
   *
   * @method setTabList
   * @private
   */
  setTabList: function(tabList) {
    return this.set('tabList', tabList);
  },

  /**
   * Add the given `TabPanel` instance to the tabs panels.
   *
   * @method addTabPanel
   * @param panel {Object} The `TabPanel` instance to add.
   */
  addTabPanel: function(panel) {
    return this.get('panels').addObject(panel);
  },

  /**
   * Remove the given `TabPanel` instance from the tabs panels.
   *
   * @method removeTabPanel.
   * @param panel {Object} The `TabPanel` instance to remove.
   */
  removeTabPanel: function(panel) {
    return this.get('panels').removeObject('panel');
  }
});

exports["default"] = Tabs;;
},{}],9:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;
var Node;

Node = Ember.Object.extend({
  children: void 0,
  parent: void 0,
  addChild: function(node) {
    if (!this.get('children')) {
      this.emptyChildren();
    }
    node.set('parent', this);
    this.children.addObject(node(object));
    return node;
  },
  createChild: function(object) {
    var c, c1;
    if (!this.get('children')) {
      this.emptyChildren();
    }
    c = Node.create(object);
    c.set('parent', this);
    this.get('children').pushObject(c);
    c1 = Node.create();
    return c;
  },
  removeChild: function(node) {
    node.set('parent', void 0);
    children.removeObject(node);
    return node;
  },
  hasChildren: (function() {
    return this.get('children').length > 0;
  }).property('children.length'),
  emptyChildren: (function() {
    return this.set('children', Em.A());
  }),
  hasParent: (function() {
    return this.get('parent') != null;
  }).property('parent'),
  level: (function() {
    var currObj, i;
    i = 0;
    currObj = this;
    while (currObj.get('hasParent')) {
      i++;
      currObj = currObj.get('parent');
    }
    return i;
  }).property('children.length'),
  isLevel1: (function() {
    return this.get('level') === 0;
  }).property('children.length')
});

exports["default"] = Node;
},{}],10:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile(".em-tree-node {\n    cursor: pointer;\n}");
},{}],11:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#each nodes}}\n    {{em-tree-node node=this async=controller.async targetObject=controller.targetObject}}\n{{/each}}");
},{}],12:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;
var computed = window.Ember.computed;

var TreeBranch, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * A branch of a tree.
 *
 * @class TreeBranch
 */

TreeBranch = Component.extend(WithConfigMixin, {

  /**
   * The node to render its children within this branch
   * this property is expected to be defined by the user
   */
  node: void 0,

  /**
   * A list of {{#crossLink "TreeNode"}}nodes{{/crossLink}} instances.
   */
  nodes: computed.alias('node.children'),

  /**
   * A reference to the tree view
   * TODO: Implement this
   */
  tree: void 0,

  /**
   * True if node's children should be loaded asynchronously
   * This gives the opportunity to the user to invoke an async call to the server to retrieve data for the current
   * branch being opened
   */
  async: false,
  tagName: 'ul',
  layoutName: 'em-tree-branch',
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tree.branchClasses')) != null ? _ref.join(" ") : void 0;
  }).property()
});

exports["default"] = TreeBranch;;
},{}],13:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#if hasIcon}}\n    <i {{action toggle}} {{bind-attr class=\"iconClass\"}}></i>\n{{else}}\n    <a {{action toggle}} class=\"text\">{{node.title}}</a>\n{{/if}}\n\n<span {{action toggle}}>{{node.title}}</span>\n\n{{#if expanded}}\n    {{em-tree-branch node=node async=async targetObject=targetObject}}\n{{/if}}");
},{}],14:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;
var computed = window.Ember.computed;

var TreeNode, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * A node of a tree.
 *
 * @class TreeNode
 */

TreeNode = Component.extend(WithConfigMixin, {

  /**
   * The node model the tree node view is bound to
   */
  node: void 0,

  /**
   * A reference to the tree view
   * TODO: Implement this
   */
  tree: void 0,

  /**
   * True if the node is currently expanded, meaning its children are visible.
   */
  expanded: false,

  /**
   * True if this node is currently checked
   * This is only relevant if the tree configured to support selection
   */
  checked: false,

  /**
   * True if should render an icon tag for this node
   */
  hasIcon: true,

  /**
   * True if this node is currently loading,
   * Usually that means the node is defined asynchronously and its children are currently being loaded
   */
  loading: false,
  branch: computed.alias('parentView'),
  async: computed.alias('parentView.async'),
  leaf: (function() {
    return this.get('node.children.length') === 0;
  }).property('node.children.length'),
  tagName: 'li',
  layoutName: 'em-tree-node',
  classNameBindings: ['styleClasses', 'expandedClasses', 'leafClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.tree.nodeClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  expandedClasses: (function() {
    var _ref, _ref1;
    if (this.get('expanded')) {
      return (_ref = this.get('config.tree.nodeOpenClasses')) != null ? _ref.join(" ") : void 0;
    } else {
      return (_ref1 = this.get('config.tree.nodeCloseClasses')) != null ? _ref1.join(" ") : void 0;
    }
  }).property('expanded', 'leaf', 'loading'),
  iconClass: (function() {
    var icons;
    icons = [];
    if (this.get('async')) {
      if (this.get('loading')) {
        icons = icons.concat(this.get('config.tree.nodeLoadingIconClasses'));
      } else if (!this.get('node.children')) {
        icons = icons.concat(this.get('config.tree.nodeCloseIconClasses'));
      } else {
        if (this.get('node.children.length') === 0) {
          icons = icons.concat(this.get('config.tree.nodeLeafIconClasses'));
        } else {
          icons = this.get('expanded') ? icons.concat(this.get('config.tree.nodeOpenIconClasses')) : icons.concat(this.get('config.tree.nodeCloseIconClasses'));
        }
      }
    } else {
      if (this.get('leaf')) {
        icons = icons.concat(this.get('config.tree.nodeLeafIconClasses'));
      } else {
        icons = this.get('expanded') ? icons.concat(this.get('config.tree.nodeOpenIconClasses')) : icons.concat(this.get('config.tree.nodeCloseIconClasses'));
      }
    }
    return icons.join(" ");
  }).property('expanded', 'leaf', 'loading'),
  leafClasses: (function() {
    var _ref;
    if (this.get('leaf')) {
      return (_ref = this.get('config.tree.nodeLeafClasses')) != null ? _ref.join(" ") : void 0;
    }
  }).property('leaf'),
  actions: {
    toggle: function() {
      if (this.get('async') && !this.get('expanded') && !this.get('node.children')) {
        this.set('loading', true);
        return this.sendAction('children', this.get('node'), this);
      } else {
        return this.toggleProperty('expanded');
      }
    }
  },
  children: 'getChildren',
  loadingHasChanged: (function() {
    if (!this.get('loading')) {
      return this.toggleProperty('expanded');
    }
  }).observes('loading')
});

exports["default"] = TreeNode;;
},{}],15:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var computed = window.Ember.computed;
var Handlebars = window.Ember.Handlebars;

var ActionGroup, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * ActionGroup component
 *
 * @class ActionGroup
 */

ActionGroup = Component.extend(WithConfigMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.wysiwyg.actionGroupClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  toolbar: computed.alias('parentView'),
  wysiwyg: computed.alias('parentView.parentView'),
  register: (function() {
    return this.get('toolbar').addGroup(this);
  }).on('didInsertElement'),
  unregister: (function() {
    return this.get('toolbar').removeGroup(this);
  }).on('willDestroyElement')
});

exports["default"] = ActionGroup;;
},{}],16:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var computed = window.Ember.computed;
var Handlebars = window.Ember.Handlebars;

var Action, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;

Action = Component.extend(WithConfigMixin, {
  tagName: 'a',
  templateName: 'em-wysiwyg-action',
  classNameBindings: ['styleClasses', 'activeClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.wysiwyg.actionClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  activeClasses: (function() {
    var _ref;
    if (this.get('active')) {
      return (_ref = this.get('config.wysiwyg.actionActiveClasses')) != null ? _ref.join(" ") : void 0;
    }
  }).property('active'),
  click: function() {
    var args, command, commands;
    this.get('editor').restoreSelection();
    this.get('editor').$().focus();
    commands = this.get('command').split(' ');
    command = commands.shift();
    args = commands.join(' ');
    document.execCommand(command, 0, args);
    this.get('editor').saveSelection();
    return this.get('wysiwyg').trigger('update_actions');
  },
  wysiwyg: computed.alias('parentView.wysiwyg'),
  editor: computed.alias('wysiwyg.editor'),
  listenToUpdate: (function() {
    return this.get('wysiwyg').on('update_actions', (function(_this) {
      return function() {
        return _this.set('active', document.queryCommandState(_this.get('command')));
      };
    })(this));
  }).on('init')
});

exports["default"] = Action;;
},{}],17:[function(_dereq_,module,exports){
"use strict";
exports["default"] = Ember.Handlebars.compile("{{#if icon}}\n    <i {{bind-attr class=icon}}></i>\n{{/if}}\n");
},{}],18:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var computed = window.Ember.computed;

var Editor, StyleBindingsMixin;

StyleBindingsMixin = Em.Eu.StyleBindingsMixin;

Editor = Component.extend(StyleBindingsMixin, {
  styleBindings: ['marginTop:margin-top', 'background'],
  attributeBindings: ['contenteditable'],
  contenteditable: 'true',
  marginTop: 10,
  background: 'white',
  wysiwyg: computed.alias('parentView'),
  updateToolbar: function(e) {
    return this.get('wysiwyg').trigger('update_actions');
  },
  keyUp: function() {
    this.saveSelection();
    return this.updateToolbar(this);
  },
  mouseUp: function() {
    this.saveSelection();
    return this.updateToolbar(this);
  },
  mouseOut: function() {
    this.saveSelection();
    return this.updateToolbar(this);
  },
  getCurrentSelectionRange: function() {
    var sel;
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  },
  saveSelection: function() {
    return this.set('selectionRange', this.getCurrentSelectionRange());
  },
  restoreSelection: function() {
    var e, selection;
    selection = window.getSelection();
    if (this.get('selectionRange')) {
      try {
        selection.removeAllRanges();
      } catch (_error) {
        e = _error;
        document.body.createTextRange().select();
        document.selection.empty();
      }
      return selection.addRange(this.get('selectionRange'));
    }
  },
  markSelection: function(input, color) {
    this.restoreSelection();
    if (document.queryCommandSupported('hiliteColor')) {
      document.execCommand('hiliteColor', 0, color || 'transparent');
    }
    return this.saveSelection();
  },
  register: (function() {
    return this.get('wysiwyg').setEditor(this);
  }).on('didInsertElement'),
  unregister: (function() {
    return this.get('wysiwyg').setEditor(void 0);
  }).on('willDestroyElement')
});

exports["default"] = Editor;;
},{}],19:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var computed = window.Ember.computed;
var ArrayProxy = window.Ember.ArrayProxy;

var Toolbar, WithConfigMixin;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * Toolbar component
 *
 * @class Toolbar
 */

Toolbar = Component.extend(WithConfigMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.wysiwyg.toolbarClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),
  groups: void 0,
  initGroups: (function() {
    return this.set('groups', ArrayProxy.create({
      content: []
    }));
  }).on('init'),
  wysiwyg: computed.alias('parentView'),
  register: (function() {
    return this.get('wysiwyg').addToolbar(this);
  }).on('didInsertElement'),
  unregister: (function() {
    return this.get('wysiwyg').removeToolbar(this);
  }).on('willDestroyElement'),
  addGroup: function(g) {
    return this.get('groups').addObject(g);
  },
  removeGroup: function(g) {
    return this.get('groups').removeObject(g);
  }
});

exports["default"] = Toolbar;;
},{}],20:[function(_dereq_,module,exports){
"use strict";
var Component = window.Ember.Component;
var ArrayProxy = window.Ember.ArrayProxy;

var WithConfigMixin, Wysiwyg;

WithConfigMixin = Em.Eu.WithConfigMixin;


/**
 * WYSIWYG component
 *
 * @class Wysiwyg
 */

Wysiwyg = Component.extend(WithConfigMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.wysiwyg.classes')) != null ? _ref.join(" ") : void 0;
  }).property(),

  /**
   * A list of {{#crossLink "Toolbar"}}toolbar{{/crossLink}} instances.
   */
  toolbars: void 0,

  /**
   * The editor view
   */
  editor: void 0,
  initToolbars: (function() {
    return this.set('toolbars', ArrayProxy.create({
      content: []
    }));
  }).on('init'),

  /**
   * Add the given `Toolbar` instance.
   */
  addToolbar: function(toolbar) {
    return this.get('toolbars').addObject(toolbar);
  },

  /**
   * Remove the given `Toolbar` instance.
   */
  removeToolbar: function(toolbar) {
    return this.get('toolbars').removeObject(toolbar);
  },

  /**
   * Set the editor instance
   */
  setEditor: function(editor) {
    return this.set('editor', editor);
  },
  asHtmlUpdater: (function() {
    return this.set('as_html', this.get('editor').$().html().replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, ''));
  }).on('update_actions')
});

exports["default"] = Wysiwyg;;
},{}]},{},[4])
(4)
});