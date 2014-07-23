Ember.TEMPLATES['component/tree/async'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Async Tree</h1>\n\n<p>\nThis is the most sophisticated form of the tree component, it only requires the root node to be built ahead,\nExpanding a node by clicking it causes an action to be triggered on the controller, expecting the controller to build or load the expanded node's children, when data is back, it expands the node with the given children.\n<p>\n\n<p>\nThe data then is cached, that means if the user close the node after openning it and then re-open the node, the data will <i>not</i> be re-loaded asynchronously.\n</p>\n\n<h2>Demo</h2>\n");
  data.buffer.push(escapeExpression((helper = helpers['em-tree-branch'] || (depth0 && depth0['em-tree-branch']),options={hash:{
    'node': ("model"),
    'async': (true)
  },hashTypes:{'node': "ID",'async': "BOOLEAN"},hashContexts:{'node': depth0,'async': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tree-branch", options))));
  data.buffer.push("\n\n<h2>Markup</h2>\n\n<div class=\"well line-example\">\n<pre><code class=\"handlebars\">{{em-tree-branch node=model async=true}}</code></pre>\n</div>\n\n<h2>Code</h2>\n<div class=\"well line-example\">\n<pre><code class=\"coffeescript\">App.ComponentTreeAsyncController = Em.ObjectController.extend\n    words: ['Foo', 'Bar', 'Baz', 'Qux']\n\n    randomWord: ->\n        @words[Math.floor(Math.random()*@words.length)]\n\n    actions:\n        #This method is invoked by the tree, expecting the children to get back\n        getChildren: (node, tree) ->\n            Em.run.later(@, ->\n                #Let the tree know we finished loading the data\n                tree.set 'loading', false\n                #In reality the data would be loaded from a server via a direct ajax request or using ember-data\n                o = Math.floor(Math.random()*@words.length)+1\n                if node.get('level') < 4\n                    i = 0\n                    while i < o\n                        #This is the way to add new children to the expanded node\n                        node.createChild(title: @randomWord())\n                        i++\n                else\n                    #Call emptyChildren() if there's no children at all to render an appropriate icon\n                    node.emptyChildren()\n            , 500)\n</code></pre>\n</div>\n");
  return buffer;
  
});
