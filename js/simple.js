var SimpleDate = (function(module)
{
	module.GetDate = function(resultObject)
	{
		resultObject.prepend(Date()+'<br/>');
	};
	return module;
}(SimpleDate||{}));