var proxy = require('./proxy'),
    SafeString = proxy.SafeString;

module.exports = function prepare_tags(list) {
	var arr=[],name,tag
	for(var i in list) {
		tag=list[i];
		console.log(tag);
		name=tag.name;
		arr.push( name.toLowerCase() );
	}
  return arr;
};