Ember.TEMPLATES['component/tabs/simple'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-list']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-list']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(31, program31, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("Classic");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Bootstrap");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <p>\n        <div class=\"line-example\">\n            ");
  stack1 = (helper = helpers['em-tabs'] || (depth0 && depth0['em-tabs']),options={hash:{
    'configName': ("classic")
  },hashTypes:{'configName': "STRING"},hashContexts:{'configName': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tabs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        </p>\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-list']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-list']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("Foo");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Bar");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("Baz");
  }

function program16(depth0,data) {
  
  
  data.buffer.push("\n                    <p>Foo Content</p>\n                ");
  }

function program18(depth0,data) {
  
  
  data.buffer.push("\n                    <p>Bar Content</p>\n                ");
  }

function program20(depth0,data) {
  
  
  data.buffer.push("\n                    <p>Baz Content</p>\n                ");
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <p>\n        <div class=\"line-example\">\n            ");
  stack1 = (helper = helpers['em-tabs'] || (depth0 && depth0['em-tabs']),options={hash:{
    'configName': ("bs")
  },hashTypes:{'configName': "STRING"},hashContexts:{'configName': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tabs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        </p>\n    ");
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-list']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-list']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program25(depth0,data) {
  
  
  data.buffer.push("<a href=\"javascript:void(0)\">Foo</a>");
  }

function program27(depth0,data) {
  
  
  data.buffer.push("<a href=\"javascript:void(0)\">Bar</a>");
  }

function program29(depth0,data) {
  
  
  data.buffer.push("<a href=\"javascript:void(0)\">Baz</a>");
  }

function program31(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['em-tabs'] || (depth0 && depth0['em-tabs']),options={hash:{
    'configName': ("foundation")
  },hashTypes:{'configName': "STRING"},hashContexts:{'configName': depth0},inverse:self.noop,fn:self.program(32, program32, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tabs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-list']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-list']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(33, program33, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(35, program35, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(35, program35, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(37, program37, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab-panel']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab-panel']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab-panel']) { stack1 = blockHelperMissing.call(depth0, 'em-tab-panel', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(39, program39, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data}
  if (helper = helpers['em-tab']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['em-tab']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['em-tab']) { stack1 = blockHelperMissing.call(depth0, 'em-tab', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program35(depth0,data) {
  
  
  data.buffer.push("\n                <p>Foo Content</p>\n            ");
  }

function program37(depth0,data) {
  
  
  data.buffer.push("\n                <p>Bar Content</p>\n            ");
  }

function program39(depth0,data) {
  
  
  data.buffer.push("\n                <p>Baz Content</p>\n            ");
  }

  data.buffer.push("<h1>Simple Tabs</h1>\n\nThe simplest form of the tabs component is simply laying down tabs and their panes on the same template.\n\n\n<h2>Demo</h2>\n\n");
  stack1 = (helper = helpers['em-tabs'] || (depth0 && depth0['em-tabs']),options={hash:{
    'configName': ("classic")
  },hashTypes:{'configName': "STRING"},hashContexts:{'configName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "em-tabs", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<h2>Markup</h2>\n\n<div class=\"well line-example\">\n                <pre><code class=\"handlebars\">\n                {{#em-tabs}}\n                    {{#em-tab-list}}\n                        {{#em-tab}}Foo{{/em-tab}}\n                        {{#em-tab}}Bar{{/em-tab}}\n                        {{#em-tab}}Baz{{/em-tab}}\n                    {{/em-tab-list}}\n                    {{#em-tab-panel}}\n                        &lt;p>Foo Content&lt;/p>\n                    {{/em-tab-panel}}\n                    {{#em-tab-panel}}\n                        &lt;p>Bar Content&lt;/p>\n                    {{/em-tab-panel}}\n                    {{#em-tab-panel}}\n                        &lt;p>Baz Content&lt;/p>\n                    {{/em-tab-panel}}\n                {{/em-tabs}}\n                </code></pre>\n</div>\n\n");
  return buffer;
  
});
