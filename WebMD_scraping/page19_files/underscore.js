/* repo: amd-modules/master@1.15.2-47-g7e6d3b8 - Package Version: 2.0.0 - 2018-05-07 06:08 pm - User:  */

(function(){var root=this,previousUnderscore=root._,ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype,push=ArrayProto.push,slice=ArrayProto.slice,concat=ArrayProto.concat,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty,nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind,_=function(obj){return obj instanceof _?obj:this instanceof _?void(this._wrapped=obj):new _(obj)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=_),exports._=_):root._=_,_.VERSION="1.7.0";var createCallback=function(func,context,argCount){if(void 0===context)return func;switch(null==argCount?3:argCount){case 1:return function(value){return func.call(context,value)};case 2:return function(value,other){return func.call(context,value,other)};case 3:return function(value,index,collection){return func.call(context,value,index,collection)};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection)}}return function(){return func.apply(context,arguments)}};_.iteratee=function(value,context,argCount){return null==value?_.identity:_.isFunction(value)?createCallback(value,context,argCount):_.isObject(value)?_.matches(value):_.property(value)},_.each=_.forEach=function(obj,iteratee,context){if(null==obj)return obj;iteratee=createCallback(iteratee,context);var i,length=obj.length;if(length===+length)for(i=0;i<length;i++)iteratee(obj[i],i,obj);else{var keys=_.keys(obj);for(i=0,length=keys.length;i<length;i++)iteratee(obj[keys[i]],keys[i],obj)}return obj},_.map=_.collect=function(obj,iteratee,context){if(null==obj)return[];iteratee=_.iteratee(iteratee,context);for(var currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,results=Array(length),index=0;index<length;index++)currentKey=keys?keys[index]:index,results[index]=iteratee(obj[currentKey],currentKey,obj);return results};var reduceError="Reduce of empty array with no initial value";_.reduce=_.foldl=_.inject=function(obj,iteratee,memo,context){null==obj&&(obj=[]),iteratee=createCallback(iteratee,context,4);var currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,index=0;if(arguments.length<3){if(!length)throw new TypeError(reduceError);memo=obj[keys?keys[index++]:index++]}for(;index<length;index++)currentKey=keys?keys[index]:index,memo=iteratee(memo,obj[currentKey],currentKey,obj);return memo},_.reduceRight=_.foldr=function(obj,iteratee,memo,context){null==obj&&(obj=[]),iteratee=createCallback(iteratee,context,4);var currentKey,keys=obj.length!==+obj.length&&_.keys(obj),index=(keys||obj).length;if(arguments.length<3){if(!index)throw new TypeError(reduceError);memo=obj[keys?keys[--index]:--index]}for(;index--;)currentKey=keys?keys[index]:index,memo=iteratee(memo,obj[currentKey],currentKey,obj);return memo},_.find=_.detect=function(obj,predicate,context){var result;return predicate=_.iteratee(predicate,context),_.some(obj,function(value,index,list){if(predicate(value,index,list))return result=value,!0}),result},_.filter=_.select=function(obj,predicate,context){var results=[];return null==obj?results:(predicate=_.iteratee(predicate,context),_.each(obj,function(value,index,list){predicate(value,index,list)&&results.push(value)}),results)},_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(_.iteratee(predicate)),context)},_.every=_.all=function(obj,predicate,context){if(null==obj)return!0;predicate=_.iteratee(predicate,context);var index,currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length;for(index=0;index<length;index++)if(currentKey=keys?keys[index]:index,!predicate(obj[currentKey],currentKey,obj))return!1;return!0},_.some=_.any=function(obj,predicate,context){if(null==obj)return!1;predicate=_.iteratee(predicate,context);var index,currentKey,keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length;for(index=0;index<length;index++)if(currentKey=keys?keys[index]:index,predicate(obj[currentKey],currentKey,obj))return!0;return!1},_.contains=_.include=function(obj,target){return null!=obj&&(obj.length!==+obj.length&&(obj=_.values(obj)),_.indexOf(obj,target)>=0)},_.invoke=function(obj,method){var args=slice.call(arguments,2),isFunc=_.isFunction(method);return _.map(obj,function(value){return(isFunc?method:value[method]).apply(value,args)})},_.pluck=function(obj,key){return _.map(obj,_.property(key))},_.where=function(obj,attrs){return _.filter(obj,_.matches(attrs))},_.findWhere=function(obj,attrs){return _.find(obj,_.matches(attrs))},_.max=function(obj,iteratee,context){var value,computed,result=-(1/0),lastComputed=-(1/0);if(null==iteratee&&null!=obj){obj=obj.length===+obj.length?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++)value=obj[i],value>result&&(result=value)}else iteratee=_.iteratee(iteratee,context),_.each(obj,function(value,index,list){computed=iteratee(value,index,list),(computed>lastComputed||computed===-(1/0)&&result===-(1/0))&&(result=value,lastComputed=computed)});return result},_.min=function(obj,iteratee,context){var value,computed,result=1/0,lastComputed=1/0;if(null==iteratee&&null!=obj){obj=obj.length===+obj.length?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++)value=obj[i],value<result&&(result=value)}else iteratee=_.iteratee(iteratee,context),_.each(obj,function(value,index,list){computed=iteratee(value,index,list),(computed<lastComputed||computed===1/0&&result===1/0)&&(result=value,lastComputed=computed)});return result},_.shuffle=function(obj){for(var rand,set=obj&&obj.length===+obj.length?obj:_.values(obj),length=set.length,shuffled=Array(length),index=0;index<length;index++)rand=_.random(0,index),rand!==index&&(shuffled[index]=shuffled[rand]),shuffled[rand]=set[index];return shuffled},_.sample=function(obj,n,guard){return null==n||guard?(obj.length!==+obj.length&&(obj=_.values(obj)),obj[_.random(obj.length-1)]):_.shuffle(obj).slice(0,Math.max(0,n))},_.sortBy=function(obj,iteratee,context){return iteratee=_.iteratee(iteratee,context),_.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)}}).sort(function(left,right){var a=left.criteria,b=right.criteria;if(a!==b){if(a>b||void 0===a)return 1;if(a<b||void 0===b)return-1}return left.index-right.index}),"value")};var group=function(behavior){return function(obj,iteratee,context){var result={};return iteratee=_.iteratee(iteratee,context),_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key)}),result}};_.groupBy=group(function(result,value,key){_.has(result,key)?result[key].push(value):result[key]=[value]}),_.indexBy=group(function(result,value,key){result[key]=value}),_.countBy=group(function(result,value,key){_.has(result,key)?result[key]++:result[key]=1}),_.sortedIndex=function(array,obj,iteratee,context){iteratee=_.iteratee(iteratee,context,1);for(var value=iteratee(obj),low=0,high=array.length;low<high;){var mid=low+high>>>1;iteratee(array[mid])<value?low=mid+1:high=mid}return low},_.toArray=function(obj){return obj?_.isArray(obj)?slice.call(obj):obj.length===+obj.length?_.map(obj,_.identity):_.values(obj):[]},_.size=function(obj){return null==obj?0:obj.length===+obj.length?obj.length:_.keys(obj).length},_.partition=function(obj,predicate,context){predicate=_.iteratee(predicate,context);var pass=[],fail=[];return _.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value)}),[pass,fail]},_.first=_.head=_.take=function(array,n,guard){if(null!=array)return null==n||guard?array[0]:n<0?[]:slice.call(array,0,n)},_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(null==n||guard?1:n)))},_.last=function(array,n,guard){if(null!=array)return null==n||guard?array[array.length-1]:slice.call(array,Math.max(array.length-n,0))},_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,null==n||guard?1:n)},_.compact=function(array){return _.filter(array,_.identity)};var flatten=function(input,shallow,strict,output){if(shallow&&_.every(input,_.isArray))return concat.apply(output,input);for(var i=0,length=input.length;i<length;i++){var value=input[i];_.isArray(value)||_.isArguments(value)?shallow?push.apply(output,value):flatten(value,shallow,strict,output):strict||output.push(value)}return output};_.flatten=function(array,shallow){return flatten(array,shallow,!1,[])},_.without=function(array){return _.difference(array,slice.call(arguments,1))},_.uniq=_.unique=function(array,isSorted,iteratee,context){if(null==array)return[];_.isBoolean(isSorted)||(context=iteratee,iteratee=isSorted,isSorted=!1),null!=iteratee&&(iteratee=_.iteratee(iteratee,context));for(var result=[],seen=[],i=0,length=array.length;i<length;i++){var value=array[i];if(isSorted)i&&seen===value||result.push(value),seen=value;else if(iteratee){var computed=iteratee(value,i,array);_.indexOf(seen,computed)<0&&(seen.push(computed),result.push(value))}else _.indexOf(result,value)<0&&result.push(value)}return result},_.union=function(){return _.uniq(flatten(arguments,!0,!0,[]))},_.intersection=function(array){if(null==array)return[];for(var result=[],argsLength=arguments.length,i=0,length=array.length;i<length;i++){var item=array[i];if(!_.contains(result,item)){for(var j=1;j<argsLength&&_.contains(arguments[j],item);j++);j===argsLength&&result.push(item)}}return result},_.difference=function(array){var rest=flatten(slice.call(arguments,1),!0,!0,[]);return _.filter(array,function(value){return!_.contains(rest,value)})},_.zip=function(array){if(null==array)return[];for(var length=_.max(arguments,"length").length,results=Array(length),i=0;i<length;i++)results[i]=_.pluck(arguments,i);return results},_.object=function(list,values){if(null==list)return{};for(var result={},i=0,length=list.length;i<length;i++)values?result[list[i]]=values[i]:result[list[i][0]]=list[i][1];return result},_.indexOf=function(array,item,isSorted){if(null==array)return-1;var i=0,length=array.length;if(isSorted){if("number"!=typeof isSorted)return i=_.sortedIndex(array,item),array[i]===item?i:-1;i=isSorted<0?Math.max(0,length+isSorted):isSorted}for(;i<length;i++)if(array[i]===item)return i;return-1},_.lastIndexOf=function(array,item,from){if(null==array)return-1;var idx=array.length;for("number"==typeof from&&(idx=from<0?idx+from+1:Math.min(idx,from+1));--idx>=0;)if(array[idx]===item)return idx;return-1},_.range=function(start,stop,step){arguments.length<=1&&(stop=start||0,start=0),step=step||1;for(var length=Math.max(Math.ceil((stop-start)/step),0),range=Array(length),idx=0;idx<length;idx++,start+=step)range[idx]=start;return range};var Ctor=function(){};_.bind=function(func,context){var args,bound;if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError("Bind must be called on a function");return args=slice.call(arguments,2),bound=function(){if(!(this instanceof bound))return func.apply(context,args.concat(slice.call(arguments)));Ctor.prototype=func.prototype;var self=new Ctor;Ctor.prototype=null;var result=func.apply(self,args.concat(slice.call(arguments)));return _.isObject(result)?result:self}},_.partial=function(func){var boundArgs=slice.call(arguments,1);return function(){for(var position=0,args=boundArgs.slice(),i=0,length=args.length;i<length;i++)args[i]===_&&(args[i]=arguments[position++]);for(;position<arguments.length;)args.push(arguments[position++]);return func.apply(this,args)}},_.bindAll=function(obj){var i,key,length=arguments.length;if(length<=1)throw new Error("bindAll must be passed function names");for(i=1;i<length;i++)key=arguments[i],obj[key]=_.bind(obj[key],obj);return obj},_.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache,address=hasher?hasher.apply(this,arguments):key;return _.has(cache,address)||(cache[address]=func.apply(this,arguments)),cache[address]};return memoize.cache={},memoize},_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args)},wait)},_.defer=function(func){return _.delay.apply(_,[func,1].concat(slice.call(arguments,1)))},_.throttle=function(func,wait,options){var context,args,result,timeout=null,previous=0;options||(options={});var later=function(){previous=options.leading===!1?0:_.now(),timeout=null,result=func.apply(context,args),timeout||(context=args=null)};return function(){var now=_.now();previous||options.leading!==!1||(previous=now);var remaining=wait-(now-previous);return context=this,args=arguments,remaining<=0||remaining>wait?(clearTimeout(timeout),timeout=null,previous=now,result=func.apply(context,args),timeout||(context=args=null)):timeout||options.trailing===!1||(timeout=setTimeout(later,remaining)),result}},_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result,later=function(){var last=_.now()-timestamp;last<wait&&last>0?timeout=setTimeout(later,wait-last):(timeout=null,immediate||(result=func.apply(context,args),timeout||(context=args=null)))};return function(){context=this,args=arguments,timestamp=_.now();var callNow=immediate&&!timeout;return timeout||(timeout=setTimeout(later,wait)),callNow&&(result=func.apply(context,args),context=args=null),result}},_.wrap=function(func,wrapper){return _.partial(wrapper,func)},_.negate=function(predicate){return function(){return!predicate.apply(this,arguments)}},_.compose=function(){var args=arguments,start=args.length-1;return function(){for(var i=start,result=args[start].apply(this,arguments);i--;)result=args[i].call(this,result);return result}},_.after=function(times,func){return function(){if(--times<1)return func.apply(this,arguments)}},_.before=function(times,func){var memo;return function(){return--times>0?memo=func.apply(this,arguments):func=null,memo}},_.once=_.partial(_.before,2),_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)_.has(obj,key)&&keys.push(key);return keys},_.values=function(obj){for(var keys=_.keys(obj),length=keys.length,values=Array(length),i=0;i<length;i++)values[i]=obj[keys[i]];return values},_.pairs=function(obj){for(var keys=_.keys(obj),length=keys.length,pairs=Array(length),i=0;i<length;i++)pairs[i]=[keys[i],obj[keys[i]]];return pairs},_.invert=function(obj){for(var result={},keys=_.keys(obj),i=0,length=keys.length;i<length;i++)result[obj[keys[i]]]=keys[i];return result},_.functions=_.methods=function(obj){var names=[];for(var key in obj)_.isFunction(obj[key])&&names.push(key);return names.sort()},_.extend=function(obj){if(!_.isObject(obj))return obj;for(var source,prop,i=1,length=arguments.length;i<length;i++){source=arguments[i];for(prop in source)hasOwnProperty.call(source,prop)&&(obj[prop]=source[prop])}return obj},_.pick=function(obj,iteratee,context){var key,result={};if(null==obj)return result;if(_.isFunction(iteratee)){iteratee=createCallback(iteratee,context);for(key in obj){var value=obj[key];iteratee(value,key,obj)&&(result[key]=value)}}else{var keys=concat.apply([],slice.call(arguments,1));obj=new Object(obj);for(var i=0,length=keys.length;i<length;i++)key=keys[i],key in obj&&(result[key]=obj[key])}return result},_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee))iteratee=_.negate(iteratee);else{var keys=_.map(concat.apply([],slice.call(arguments,1)),String);iteratee=function(value,key){return!_.contains(keys,key)}}return _.pick(obj,iteratee,context)},_.defaults=function(obj){if(!_.isObject(obj))return obj;for(var i=1,length=arguments.length;i<length;i++){var source=arguments[i];for(var prop in source)void 0===obj[prop]&&(obj[prop]=source[prop])}return obj},_.clone=function(obj){return _.isObject(obj)?_.isArray(obj)?obj.slice():_.extend({},obj):obj},_.tap=function(obj,interceptor){return interceptor(obj),obj};var eq=function(a,b,aStack,bStack){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;a instanceof _&&(a=a._wrapped),b instanceof _&&(b=b._wrapped);var className=toString.call(a);if(className!==toString.call(b))return!1;switch(className){case"[object RegExp]":case"[object String]":return""+a==""+b;case"[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case"[object Date]":case"[object Boolean]":return+a===+b}if("object"!=typeof a||"object"!=typeof b)return!1;for(var length=aStack.length;length--;)if(aStack[length]===a)return bStack[length]===b;var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&"constructor"in a&&"constructor"in b&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor))return!1;aStack.push(a),bStack.push(b);var size,result;if("[object Array]"===className){if(size=a.length,result=size===b.length)for(;size--&&(result=eq(a[size],b[size],aStack,bStack)););}else{var key,keys=_.keys(a);if(size=keys.length,result=_.keys(b).length===size)for(;size--&&(key=keys[size],result=_.has(b,key)&&eq(a[key],b[key],aStack,bStack)););}return aStack.pop(),bStack.pop(),result};_.isEqual=function(a,b){return eq(a,b,[],[])},_.isEmpty=function(obj){if(null==obj)return!0;if(_.isArray(obj)||_.isString(obj)||_.isArguments(obj))return 0===obj.length;for(var key in obj)if(_.has(obj,key))return!1;return!0},_.isElement=function(obj){return!(!obj||1!==obj.nodeType)},_.isArray=nativeIsArray||function(obj){return"[object Array]"===toString.call(obj)},_.isObject=function(obj){var type=typeof obj;return"function"===type||"object"===type&&!!obj},_.each(["Arguments","Function","String","Number","Date","RegExp"],function(name){_["is"+name]=function(obj){return toString.call(obj)==="[object "+name+"]"}}),_.isArguments(arguments)||(_.isArguments=function(obj){return _.has(obj,"callee")}),"function"!=typeof/./&&(_.isFunction=function(obj){return"function"==typeof obj||!1}),_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj))},_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj},_.isBoolean=function(obj){return obj===!0||obj===!1||"[object Boolean]"===toString.call(obj)},_.isNull=function(obj){return null===obj},_.isUndefined=function(obj){return void 0===obj},_.has=function(obj,key){return null!=obj&&hasOwnProperty.call(obj,key)},_.noConflict=function(){return root._=previousUnderscore,this},_.identity=function(value){return value},_.constant=function(value){return function(){return value}},_.noop=function(){},_.property=function(key){return function(obj){return obj[key]}},_.matches=function(attrs){var pairs=_.pairs(attrs),length=pairs.length;return function(obj){if(null==obj)return!length;obj=new Object(obj);for(var i=0;i<length;i++){var pair=pairs[i],key=pair[0];if(pair[1]!==obj[key]||!(key in obj))return!1}return!0}},_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=createCallback(iteratee,context,1);for(var i=0;i<n;i++)accum[i]=iteratee(i);return accum},_.random=function(min,max){return null==max&&(max=min,min=0),min+Math.floor(Math.random()*(max-min+1))},_.now=Date.now||function(){return(new Date).getTime()};var escapeMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},unescapeMap=_.invert(escapeMap),createEscaper=function(map){var escaper=function(match){return map[match]},source="(?:"+_.keys(map).join("|")+")",testRegexp=RegExp(source),replaceRegexp=RegExp(source,"g");return function(string){return string=null==string?"":""+string,testRegexp.test(string)?string.replace(replaceRegexp,escaper):string}};_.escape=createEscaper(escapeMap),_.unescape=createEscaper(unescapeMap),_.result=function(object,property){if(null!=object){var value=object[property];return _.isFunction(value)?object[property]():value}};var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+"";return prefix?prefix+id:id},_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var noMatch=/(.)^/,escapes={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},escaper=/\\|'|\r|\n|\u2028|\u2029/g,escapeChar=function(match){return"\\"+escapes[match]};_.template=function(text,settings,oldSettings){!settings&&oldSettings&&(settings=oldSettings),settings=_.defaults({},settings,_.templateSettings);var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join("|")+"|$","g"),index=0,source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){return source+=text.slice(index,offset).replace(escaper,escapeChar),index=offset+match.length,escape?source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'":interpolate?source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'":evaluate&&(source+="';\n"+evaluate+"\n__p+='"),match}),source+="';\n",settings.variable||(source="with(obj||{}){\n"+source+"}\n"),source="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+source+"return __p;\n";try{var render=new Function(settings.variable||"obj","_",source)}catch(e){throw e.source=source,e}var template=function(data){return render.call(this,data,_)},argument=settings.variable||"obj";return template.source="function("+argument+"){\n"+source+"}",template},_.chain=function(obj){var instance=_(obj);return instance._chain=!0,instance};var result=function(obj){return this._chain?_(obj).chain():obj};_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];return push.apply(args,arguments),result.call(this,func.apply(_,args))}})},_.mixin(_),_.each(["pop","push","reverse","shift","sort","splice","unshift"],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;return method.apply(obj,arguments),"shift"!==name&&"splice"!==name||0!==obj.length||delete obj[0],result.call(this,obj)}}),_.each(["concat","join","slice"],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result.call(this,method.apply(this._wrapped,arguments))}}),_.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define(function(){return _.noConflict()})}).call(this);