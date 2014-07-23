Ember.TEMPLATES['component/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <h4 class=\"list-group-item-heading\">Forms</h4>\n        <p class=\"list-group-item-text\">Smart, Intuitive forms for Ember.js styled with Bootstrap, Multi layouts and Validation support.</p>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <h4 class=\"list-group-item-heading\">Tabs</h4>\n        <p class=\"list-group-item-text\">Multi panels defined with 1 single panel active at a time rendered as panels.</p>\n    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n        <h4 class=\"list-group-item-heading\">Wysiwyg</h4>\n        <p class=\"list-group-item-text\">Wysiwyg (What you see is what you get) html editor.</p>\n    ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <h4 class=\"list-group-item-heading\">Accordion</h4>\n        <p class=\"list-group-item-text\">Multi panels defined with 1 single planel selected at a time rendered as an accordion.</p>\n    ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n        <h4 class=\"list-group-item-heading\">Tree</h4>\n        <p class=\"list-group-item-text\">Nested, hierarchial tree structure with async and cache support.</p>\n    ");
  }

  data.buffer.push("<h4>Please choose a component</h4>\n\n<div class=\"list-group\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component.forms", options) : helperMissing.call(depth0, "link-to", "component.forms", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component.tabs.simple", options) : helperMissing.call(depth0, "link-to", "component.tabs.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component.wysiwyg.simple", options) : helperMissing.call(depth0, "link-to", "component.wysiwyg.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component.accordion.simple", options) : helperMissing.call(depth0, "link-to", "component.accordion.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("list-group-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "component.tree.simple", options) : helperMissing.call(depth0, "link-to", "component.tree.simple", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});
