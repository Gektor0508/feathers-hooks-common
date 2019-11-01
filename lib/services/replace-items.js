
module.exports = function (context, items) {
  if (context.params && context.params._actOn === 'dispatch') {
    context.dispatch = items;
    return;
  }

  if (context.type === 'before') {
    context.data = items;
  } else if (context.method === 'find' && context.result && context.result.data) {
    let data = Array.isArray(items) ? items : [items];
    context.result.data = data;
    context.result.total = data.length;
  } else {
    context.result = items;
  }
};
