Ember.TEMPLATES['component/tabs/query_params'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-list']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-list']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("Foo");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Bar");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Baz");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <p>Foo Content</p>\n        ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n            <p>Bar Content</p>\n        ");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n            <p>Baz Content</p>\n        ");
  }

  data.buffer.push("<h1>Tabs with Query Params</h1>\n\nIt is possible to bound the current selected tab to a controller parameter (usually a query param)\nby bindingthe <i>selected-idx</i> property on the <i>{{em-tabs}}</i> tag.\n\n<h2>Demo</h2>\n<div class=\"line-example\">\n    ");
  stack1 = (helper = helpers['em-tabs'] || (depth0 && depth0['em-tabs']),options={hash:{
    'selected-idx': ("tab_idx"),
    'configName': ("classic")
  },hashTypes:{'selected-idx': "ID",'configName': "STRING"},hashContexts:{'selected-idx': depth0,'configName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tabs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<hr/>\n<h2>Template</h2>\n<div class=\"well line-example\">\n    <pre><code class=\"handlebars\">\n                {{#em-tabs selected-idx=tab_idx}}\n                    {{#em-tab-list}}\n                        {{#em-tab}}Foo{{/em-tab}}\n                        {{#em-tab}}Bar{{/em-tab}}\n                        {{#em-tab}}Baz{{/em-tab}}\n                    {{/em-tab-list}}\n                    {{#em-tab-panel}}\n                        &lt;p>Foo Content&lt;/p>\n                    {{/em-tab-panel}}\n                    {{#em-tab-panel}}\n                    &lt;p>Bar Content&lt;/p>\n                        {{/em-tab-panel}}\n                    {{#em-tab-panel}}\n                    &lt;p>Baz Content&lt;/p>\n                    {{/em-tab-panel}}\n                {{/em-tabs}}\n    </code></pre>\n</div>\n\n<h2>Controller</h2>\n<div class=\"well line-example\">\n    <pre><code class=\"coffee\">\n       App.ComponentTabsQueryParamsController = Em.Controller.extend\n            queryParams: ['tab_idx']\n            tab_idx: 0\n    </code></pre>\n</div>\n\n\n");
  return buffer;
  
});
