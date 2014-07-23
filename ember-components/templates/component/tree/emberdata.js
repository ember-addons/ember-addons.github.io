Ember.TEMPLATES['component/tree/emberdata'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Async Tree");
  }

  data.buffer.push("<h1>Tree with Ember Data</h1>\n\nIt is possible to render a tree from ember data models as long as your model has:\n<p>\n<ul>\n<li><i>children</i> property defined as an <i>hasMany</i> relationship to be rendered as the children of the tree node</li>\n<li><i>title</i> property defined a string to be the node's title</li>\n</ul>\n</p>\n\n<p>\nPlease note that this is not the best approach for loading big trees as the component invokes <i>node.get('children')</i> for every node in order to determine whether or not the the node has children beneath it as this is required to render a proper icon,\nThis behavior will cause all data to be loaded a head during render time. if you want a more sophisiticated solution with async support then look at the ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component.tree.async", options) : helperMissing.call(depth0, "link-to", "component.tree.async", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" approach.\n</p>\n\n<h2>Demo</h2>\n");
  data.buffer.push(escapeExpression((helper = helpers['em-tree-branch'] || (depth0 && depth0['em-tree-branch']),options={hash:{
    'node': ("model")
  },hashTypes:{'node': "ID"},hashContexts:{'node': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tree-branch", options))));
  data.buffer.push("\n\n<h2>Markup</h2>\n\n<div class=\"well line-example\">\n<pre><code class=\"handlebars\">{{em-tree-branch node=model}}</code></pre>\n</div>\n\n<h2>Code</h2>\n<div class=\"well line-example\">\n<pre><code class=\"coffeescript\">#in reality replaced with a real adapter \nApp.Tag.FIXTURES = [\n    {id: 0, title: 'Root', parent: undefined, children: [1]}\n    {id: 1, title: 'Family', parent: 0, children: [10, 11]}\n    {id: 10, title: 'Susan', parent: [1], children: [100, 101]}\n    {id: 11, title: 'Luda', parent: [1], children: [102, 103]}\n    {id: 100, title: 'Josh', parent: [10], children: []}\n    {id: 101, title: 'Moses', parent: [10], children: []}\n    {id: 102, title: 'Verdi', parent: [11], children: []}\n    {id: 103, title: 'Gaya', parent: [11], children: []}\n]\n\nApp.Tag = DS.Model.extend\n    title: DS.attr 'string'\n    children: DS.hasMany('tag', {async: true})\n    parent: DS.belongsTo('tag', {async: true})\n\nApp.ComponentTreeEmberdataRoute = Em.Route.extend\n    model: ->\n        @store.find('tag', 0)\n</code></pre>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers['em-tree-branch'] || (depth0 && depth0['em-tree-branch']),options={hash:{
    'node': ("model")
  },hashTypes:{'node': "ID"},hashContexts:{'node': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tree-branch", options))));
  return buffer;
  
});
