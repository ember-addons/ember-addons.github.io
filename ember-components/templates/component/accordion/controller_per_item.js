Ember.TEMPLATES['component/accordion/controller_per_item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['em-accordion-item'] || (depth0 && depth0['em-accordion-item']),options={hash:{
    'title': ("Panel 1")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-accordion-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['em-accordion-item'] || (depth0 && depth0['em-accordion-item']),options={hash:{
    'title': ("Panel 2")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-accordion-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['em-accordion-item'] || (depth0 && depth0['em-accordion-item']),options={hash:{
    'title': ("Panel 3")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-accordion-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component/tabs/c1", options) : helperMissing.call(depth0, "render", "component/tabs/c1", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component/tabs/c2", options) : helperMissing.call(depth0, "render", "component/tabs/c2", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component/tabs/c3", options) : helperMissing.call(depth0, "render", "component/tabs/c3", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<h1>Controller per Accordion Item</h1>\n\nIf your _accordion items_ are more advanced and contains large template & logic you can have a separated\ntemplate / controller pair per _accordion item_ by using the <i>{{render}}</i> handlebars helper.\n<br/><br/>\n<p><i><a href=\"http://emberjs.com/guides/templates/rendering-with-helpers\">Please check Ember {{render}} doc for more info.</a></i></p>\n\n<h2>Demo</h2>\n\n");
  stack1 = (helper = helpers['em-accordion'] || (depth0 && depth0['em-accordion']),options={hash:{
    'configName': ("bs"),
    'selected-idx': (1)
  },hashTypes:{'configName': "STRING",'selected-idx': "INTEGER"},hashContexts:{'configName': depth0,'selected-idx': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-accordion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<h2>Markup</h2>\n\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n        {{#em-accordion configName='bs' selected-idx=1}}\n            {{#em-accordion-item title=\"Panel 1\"}}\n                {{render 'component/tabs/c1'}}\n            {{/em-accordion-item}}\n            {{#em-accordion-item title=\"Panel 2\"}}\n                {{render 'component/tabs/c1'}}\n            {{/em-accordion-item}}\n            {{#em-accordion-item title=\"Panel 3\"}}\n                {{render 'component/tabs/c1'}}\n            {{/em-accordion-item}}\n        {{/em-accordion}}\n    </code></pre>\n</div>");
  return buffer;
  
});
