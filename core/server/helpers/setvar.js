module.exports=function setvar(varName, varValue, options){
	if (!options.data.root) {
      options.data.root = {};
  }
  options.data.root[varName] = varValue;
};