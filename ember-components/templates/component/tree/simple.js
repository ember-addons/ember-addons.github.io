Ember.TEMPLATES['component/tree/simple'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Simple Tree</h1>\n\nThe simplest form of the tree component is to build a tree of nodes ahead and assign the root node to the <i>{{em-tree-branch}}</i> tag.\n\n<h2>Demo</h2>\n");
  data.buffer.push(escapeExpression((helper = helpers['em-tree-branch'] || (depth0 && depth0['em-tree-branch']),options={hash:{
    'node': ("model")
  },hashTypes:{'node': "ID"},hashContexts:{'node': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tree-branch", options))));
  data.buffer.push("\n\n<h2>Markup</h2>\n\n<div class=\"well line-example\">\n<pre><code class=\"handlebars\">{{em-tree-branch node=model}}</code></pre>\n</div>\n\n<h2>Code</h2>\n<div class=\"well line-example\">\n<pre><code class=\"coffeescript\">App.ComponentTreeSimpleController = Em.ObjectController.extend\n    init: ->\n        #Root\n        root = Em.Pc.TreeNode.create()\n        family = root.createChild {title: 'Family'}\n        #1st level\n        suz = family.createChild {title: 'Susan'}\n        lud = family.createChild {title: 'Luda'}\n\n        #2nd level\n        josh = suz.createChild({title: 'Josh'})\n        moses = suz.createChild({title: 'Moses'})\n        verdi = lud.createChild({title: 'Verdi'})\n        gaya = lud.createChild({title: 'Gaya'})\n\n        @set 'model', root\n</code></pre>\n</div>");
  return buffer;
  
});
