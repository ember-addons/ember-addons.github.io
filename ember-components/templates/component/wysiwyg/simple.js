Ember.TEMPLATES['component/wysiwyg/simple'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-wysiwyg-toolbar']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-wysiwyg-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-wysiwyg-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'em-wysiwyg-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "em-wysiwyg-editor", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-wysiwyg-action-group']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-wysiwyg-action-group']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-wysiwyg-action-group']) { stack1 = blockHelperMissing.call(depth0, 'em-wysiwyg-action-group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-wysiwyg-action-group']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-wysiwyg-action-group']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-wysiwyg-action-group']) { stack1 = blockHelperMissing.call(depth0, 'em-wysiwyg-action-group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-wysiwyg-action-group']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-wysiwyg-action-group']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-wysiwyg-action-group']) { stack1 = blockHelperMissing.call(depth0, 'em-wysiwyg-action-group', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("bold"),
    'title': ("Bold (Ctrl/Cmd+B)"),
    'icon': ("fa fa-bold")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("italic"),
    'title': ("Italic (Ctrl/Cmd+I)"),
    'icon': ("fa fa-italic")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("strikethrough"),
    'title': ("Strikethrough"),
    'icon': ("fa fa-strikethrough")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("underline"),
    'title': ("Underline (Ctrl/Cmd+U)"),
    'icon': ("fa fa-underline")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("justifyleft"),
    'title': ("Align Left (Ctrl/Cmd+L)"),
    'icon': ("fa fa-align-left")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("justifycenter"),
    'title': ("Align Center (Ctrl/Cmd+E)"),
    'icon': ("fa fa-align-center")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("justifyright"),
    'title': ("Align Right (Ctrl/Cmd+R)"),
    'icon': ("fa fa-align-right")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("justifyfull"),
    'title': ("Justify (Ctrl/Cmd+J)"),
    'icon': ("fa fa-align-justify")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("undo"),
    'title': ("Undo(Ctrl/Cmd+Z)"),
    'icon': ("fa fa-undo")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['em-wysiwyg-action'] || (depth0 && depth0['em-wysiwyg-action']),options={hash:{
    'command': ("redo"),
    'title': ("Redo (Ctrl/Cmd+Y)"),
    'icon': ("fa fa-repeat")
  },hashTypes:{'command': "STRING",'title': "STRING",'icon': "STRING"},hashContexts:{'command': depth0,'title': depth0,'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg-action", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<h1>Simple Wysiwyg</h1>\n\n<h2>Demo</h2>\n\n");
  stack1 = (helper = helpers['em-wysiwyg'] || (depth0 && depth0['em-wysiwyg']),options={hash:{
    'configName': ("bs"),
    'as_html': ("data")
  },hashTypes:{'configName': "STRING",'as_html': "ID"},hashContexts:{'configName': depth0,'as_html': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-wysiwyg", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<h2>Markup</h2>\n\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n{{#em-wysiwyg configName=\"bs\" as_html=wtf}}\n    {{#em-wysiwyg-toolbar}}\n        {{#em-wysiwyg-action-group}}\n            {{em-wysiwyg-action command=\"bold\" title=\"Bold (Ctrl/Cmd+B)\" icon=\"fa fa-bold\"}}\n            {{em-wysiwyg-action command=\"italic\" title=\"Italic (Ctrl/Cmd+I)\" icon=\"fa fa-italic\"}}\n        {{/em-wysiwyg-action-group}}\n        {{#em-wysiwyg-action-group}}\n            {{em-wysiwyg-action command=\"justifyleft\" title=\"Align Left (Ctrl/Cmd+L)\" icon=\"fa fa-align-left\"}}\n            {{em-wysiwyg-action command=\"justifyright\" title=\"Align Right (Ctrl/Cmd+R)\" icon=\"fa fa-align-right\"}}\n        {{/em-wysiwyg-action-group}}\n        {{#em-wysiwyg-action-group}}\n            {{em-wysiwyg-action command=\"undo\" title=\"Undo(Ctrl/Cmd+Z)\" icon=\"fa fa-undo\"}}\n            {{em-wysiwyg-action command=\"redo\" title=\"Redo (Ctrl/Cmd+Y)\" icon=\"fa fa-repeat\"}}\n        {{/em-wysiwyg-action-group}}\n    {{/em-wysiwyg-toolbar}}\n    {{em-wysiwyg-editor}}\n{{/em-wysiwyg}}\n    </code></pre>\n</div>");
  return buffer;
  
});
