Ember.TEMPLATES['component/accordion/simple'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

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
  
  
  data.buffer.push("\n        Content of panel #1\n    ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n        Content of panel #2\n    ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n        Content of panel #3\n    ");
  }

  data.buffer.push("<h1>Simple Accordion</h1>\n\nThe simplest form of the accordion component is simply laying down accordion items statically where each item has a title and a block of content.\n\n\n<h2>Demo</h2>\n\n");
  stack1 = (helper = helpers['em-accordion'] || (depth0 && depth0['em-accordion']),options={hash:{
    'configName': ("bs"),
    'selected-idx': (1)
  },hashTypes:{'configName': "STRING",'selected-idx': "INTEGER"},hashContexts:{'configName': depth0,'selected-idx': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-accordion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<h2>Markup</h2>\n\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n        {{#em-accordion configName='bs' selected-idx=1}}\n            {{#em-accordion-item title=\"Panel 1\"}}\n                Content of panel #1\n            {{/em-accordion-item}}\n            {{#em-accordion-item title=\"Panel 2\"}}\n                Content of panel #2\n            {{/em-accordion-item}}\n            {{#em-accordion-item title=\"Panel 3\"}}\n                Content of panel #3\n            {{/em-accordion-item}}\n        {{/em-accordion}}\n    </code></pre>\n</div>");
  return buffer;
  
});
