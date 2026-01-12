function substr(str,start,len){
			var i=0,allBMP=true,es=0,el=0,se=0,ret='';
			str+='';
			var end=str.length;
			this.php_js=this.php_js||{};

			this.php_js.ini=this.php_js.ini||{};

			switch((this.php_js.ini['unicode.semantics']&&this.php_js.ini['unicode.semantics'].local_value.toLowerCase())){
				case'on':
					for(i=0;i<str.length;i++){
					if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){
						allBMP=false;
						break;
					}
				}
				if(!allBMP){
					if(start<0){
						for(i=end-1,es=(start+=end);i>=es;i--){
							if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){
								start--;
								es--;
							}
						}
						}else{
				var surrogatePairs=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
				while((surrogatePairs.exec(str))!=null){
					var li=surrogatePairs.lastIndex;
					if(li-2<start){
						start++;
					}else{
						break;
					}
				}
			}
			if(start>=end||start<0){
				return false;
			}
			if(len<0){
				for(i=end-1,el=(end+=len);i>=el;i--){
					if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){
						end--;
						el--;
					}
				}
				if(start>end){
				return false;
			}
			return str.slice(start,end);
			}else{
				se=start+len;
				for(i=start;i<se;i++){
					ret+=str.charAt(i);
					if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){
						se++;
					}
				}
				return ret;
			}
			break;
			}
			case'off':default:
				if(start<0){
				start+=end;
			}
			end=typeof len==='undefined'?end:(len<0?len+end:len+start);
				return start>=str.length||start<0||start>end?!1:str.slice(start,end);
			}
			return undefined;
		}
		
		function get_html_translation_table(table,quote_style){
		    var entities={},hash_map={},decimal=0,symbol='';
		    var constMappingTable={},constMappingQuoteStyle={};
		
		    var useTable={},useQuoteStyle={};
		
		    constMappingTable[0]='HTML_SPECIALCHARS';
		    constMappingTable[1]='HTML_ENTITIES';
		    constMappingQuoteStyle[0]='ENT_NOQUOTES';
		    constMappingQuoteStyle[2]='ENT_COMPAT';
		    constMappingQuoteStyle[3]='ENT_QUOTES';
		    useTable=!isNaN(table)?constMappingTable[table]:table?table.toUpperCase():'HTML_SPECIALCHARS';
		    useQuoteStyle=!isNaN(quote_style)?constMappingQuoteStyle[quote_style]:quote_style?quote_style.toUpperCase():'ENT_COMPAT';
		    if(useTable!=='HTML_SPECIALCHARS'&&useTable!=='HTML_ENTITIES'){
		        throw new Error("Table: "+useTable+' not supported');
		    }
		    entities['38']='&amp;';
		    if(useTable==='HTML_ENTITIES'){
		        entities['160']='&nbsp;';           entities['161']='&iexcl;';	        entities['162']='&cent;';
		        entities['163']='&pound;';	        entities['164']='&curren;';	        entities['165']='&yen;';
		        entities['166']='&brvbar;';	        entities['167']='&sect;';	        entities['168']='&uml;';
		        entities['169']='&copy;';	        entities['170']='&ordf;';	        entities['171']='&laquo;';
		        entities['172']='&not;';	        entities['173']='&shy;';	        entities['174']='&reg;';
		        entities['175']='&macr;';	        entities['176']='&deg;';	        entities['177']='&plusmn;';
		        entities['178']='&sup2;';	        entities['179']='&sup3;';	        entities['180']='&acute;';
		        entities['181']='&micro;';	        entities['182']='&para;';	        entities['183']='&middot;';
		        entities['184']='&cedil;';	        entities['185']='&sup1;';	        entities['186']='&ordm;';
		        entities['187']='&raquo;';	        entities['188']='&frac14;';	        entities['189']='&frac12;';
		        entities['190']='&frac34;';	        entities['191']='&iquest;';	        entities['192']='&Agrave;';
		        entities['193']='&Aacute;';	        entities['194']='&Acirc;';	        entities['195']='&Atilde;';
		        entities['196']='&Auml;';	        entities['197']='&Aring;';	        entities['198']='&AElig;';
		        entities['199']='&Ccedil;';	        entities['200']='&Egrave;';	        entities['201']='&Eacute;';
		        entities['202']='&Ecirc;';	        entities['203']='&Euml;';	        entities['204']='&Igrave;';
		        entities['205']='&Iacute;';	        entities['206']='&Icirc;';	        entities['207']='&Iuml;';
		        entities['208']='&ETH;';	        entities['209']='&Ntilde;';	        entities['210']='&Ograve;';
		        entities['211']='&Oacute;';	        entities['212']='&Ocirc;';	        entities['213']='&Otilde;';
		        entities['214']='&Ouml;';	        entities['215']='&times;';	        entities['216']='&Oslash;';
		        entities['217']='&Ugrave;';	        entities['218']='&Uacute;';	        entities['219']='&Ucirc;';
		        entities['220']='&Uuml;';	        entities['221']='&Yacute;';	        entities['222']='&THORN;';
		        entities['223']='&szlig;';	        entities['224']='&agrave;';	        entities['225']='&aacute;';
		        entities['226']='&acirc;';	        entities['227']='&atilde;';	        entities['228']='&auml;';
		        entities['229']='&aring;';	        entities['230']='&aelig;';	        entities['231']='&ccedil;';
		        entities['232']='&egrave;';	        entities['233']='&eacute;';	        entities['234']='&ecirc;';
		        entities['235']='&euml;';	        entities['236']='&igrave;';	        entities['237']='&iacute;';
		        entities['238']='&icirc;';	        entities['239']='&iuml;';	        entities['240']='&eth;';
		        entities['241']='&ntilde;';	        entities['242']='&ograve;';	        entities['243']='&oacute;';
		        entities['244']='&ocirc;';	        entities['245']='&otilde;';	        entities['246']='&ouml;';
		        entities['247']='&divide;';	        entities['248']='&oslash;';	        entities['249']='&ugrave;';
		        entities['250']='&uacute;';	        entities['251']='&ucirc;';	        entities['252']='&uuml;';
		        entities['253']='&yacute;';	        entities['254']='&thorn;';	        entities['255']='&yuml;';
		    }
		    if(useQuoteStyle!=='ENT_NOQUOTES'){
		        entities['34']='&quot;';
		    }
		    if(useQuoteStyle==='ENT_QUOTES'){
		        entities['39']='&#39;';
		    }
		    entities['60']='&lt;';
		    entities['62']='&gt;';
		    for(decimal in entities){
		        symbol=String.fromCharCode(decimal);
		        hash_map[symbol]=entities[decimal];
		    }
		    return hash_map;
		}
		
		function html_entity_decode(string,quote_style){
		    var hash_map={},symbol='',tmp_str='',entity='';
		    tmp_str=string.toString();
		    if(false===(hash_map=get_html_translation_table('HTML_ENTITIES',quote_style))){
		        return false;
		    }
		    delete(hash_map['&']);
		    hash_map['&']='&amp;';
		    for(symbol in hash_map){
		        entity=hash_map[symbol];
		        tmp_str=tmp_str.split(entity).join(symbol);
		    }
		    tmp_str=tmp_str.split('&#039;').join("'");
		    return tmp_str;
		}
		function htmlentities(string,quote_style){
		    var hash_map={},symbol='',tmp_str='',entity='';
		    tmp_str=string.toString();
		    if(false===(hash_map=get_html_translation_table('HTML_ENTITIES',quote_style))){
		        return false;
		    }
		    hash_map["'"]='&#039;';
		    for(symbol in hash_map){
		        entity=hash_map[symbol];
		        tmp_str=tmp_str.split(symbol).join(entity);
		    }
		    return tmp_str;
		}
		
		function str_replace(search,replace,subject,count){
		    var i=0,j=0,temp='',repl='',sl=0,fl=0,f=[].concat(search),r=[].concat(replace),s=subject,ra=r instanceof Array,sa=s instanceof Array;
		    s=[].concat(s);
		    if(count){
		        this.window[count]=0;
		    }
		    for(i=0,sl=s.length;i<sl;i++){
		        if(s[i]===''){
		            continue;
		        }
		        for(j=0,fl=f.length;j<fl;j++){
		            temp=s[i]+'';
		            repl=ra?(r[j]!==undefined?r[j]:''):r[0];
		            s[i]=(temp).split(f[j]).join(repl);
		            if(count&&s[i]!==temp){
		                this.window[count]+=(temp.length-s[i].length)/f[j].length;
		            }
		        }
		        }
		    return sa?s:s[0];
		}
		function date(format,timestamp){
		    var that=this,jsdate,f,formatChr=/\\?([a-z])/gi,formatChrCb,_pad=function(n,c){
		        if((n=n+"").length<c){
		            return new Array((++c)-n.length).join("0")+n;
		        }else{
		            return n;
		        }
		    },txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],txt_ordin={
		    1:"st",
		    2:"nd",
		    3:"rd",
		    21:"st",
		    22:"nd",
		    23:"rd",
		    31:"st"
		};
		
		formatChrCb=function(t,s){
		    return f[t]?f[t]():s;
		};
		
		f={
		    d:function(){return _pad(f.j(),2);},
		    D:function(){return f.l().slice(0,3);},
		    j:function(){return jsdate.getDate();},
		    l:function(){return txt_words[f.w()]+'day';},
		    N:function(){return f.w()||7;},
		    S:function(){return txt_ordin[f.j()]||'th';},
		    w:function(){
		        return jsdate.getDay();
		    },
		    z:function(){
		        var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);
		        return Math.round((a-b)/864e5)+1;
		    },
		    W:function(){
		        var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);
		        return 1+Math.round((a-b)/864e5/7);
		    },
		    F:function(){
		        return txt_words[6+f.n()];
		    },
		    m:function(){
		        return _pad(f.n(),2);
		    },
		    M:function(){
		        return f.F().slice(0,3);
		    },
		    n:function(){
		        return jsdate.getMonth()+1;
		    },
		    t:function(){
		        return(new Date(f.Y(),f.n(),0)).getDate();
		    },
		    L:function(){
		        var y=f.Y(),a=y&3,b=y%4e2,c=y%1e2;
		        return 0+(!a&&(c||!b));
		    },
		    o:function(){
		        var n=f.n(),W=f.W(),Y=f.Y();
		        return Y+(n===12&&W<9?-1:n===1&&W>9);
		    },
		    Y:function(){
		        return jsdate.getFullYear();
		    },
		    y:function(){
		        return(f.Y()+"").slice(-2);
		    },
		    a:function(){
		        return jsdate.getHours()>11?"pm":"am";
		    },
		    A:function(){
		        return f.a().toUpperCase();
		    },
		    B:function(){
		        var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();
		        return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);
		    },
		    g:function(){
		        return f.G()%12||12;
		    },
		    G:function(){
		        return jsdate.getHours();
		    },
		    h:function(){
		        return _pad(f.g(),2);
		    },
		    H:function(){
		        return _pad(f.G(),2);
		    },
		    i:function(){
		        return _pad(jsdate.getMinutes(),2);
		    },
		    s:function(){
		        return _pad(jsdate.getSeconds(),2);
		    },
		    u:function(){
		        return _pad(jsdate.getMilliseconds()*1000,6);
		    },
		    e:function(){
		        return'UTC';
		    },
		    I:function(){
		        var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);
		        return 0+((a-c)!==(b-d));
		    },
		    O:function(){
		        var a=jsdate.getTimezoneOffset();
		        return(a>0?"-":"+")+_pad(Math.abs(a/60*100),4);
		    },
		    P:function(){
		        var O=f.O();
		        return(O.substr(0,3)+":"+O.substr(3,2));
		    },
		    T:function(){
		        return'UTC';
		    },
		    Z:function(){
		        return-jsdate.getTimezoneOffset()*60;
		    },
		    c:function(){
		        return'Y-m-d\\Th:i:sP'.replace(formatChr,formatChrCb);
		    },
		    r:function(){
		        return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);
		    },
		    U:function(){
		        return jsdate.getTime()/1000|0;
		    }
		};
		
		this.date=function(format,timestamp){
		    that=this;
		    jsdate=((typeof timestamp==='undefined')?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));
		    return format.replace(formatChr,formatChrCb);
		};
		
		return this.date(format,timestamp);
		}
						
		var constants = {
			// Variables
            'DIV_TAG_VAR_MEMBER_DELIMITER' : '.',
			'DIV_TAG_REPLACEMENT_PREFIX' : '{',
			'DIV_TAG_REPLACEMENT_SUFFIX' : '}',
			'DIV_TAG_MULTI_MODIFIERS_PREFIX' : '{$',
			'DIV_TAG_MULTI_MODIFIERS_SEPARATOR' : '|',
			'DIV_TAG_MULTI_MODIFIERS_OPERATOR' : '|',			
			'DIV_TAG_MULTI_MODIFIERS_SUFFIX' : '|}',
			'DIV_TAG_SUBMATCH_SEPARATOR' : ':',
			
			// Variable's modifiers
			'DIV_TAG_MODIFIER_SIMPLE' : '$',
			'DIV_TAG_MODIFIER_CAPITALIZE_FIRST' : '^',
			'DIV_TAG_MODIFIER_CAPITALIZE_WORDS' : '^^',
			'DIV_TAG_MODIFIER_UPPERCASE' : '^^^',
			'DIV_TAG_MODIFIER_LOWERCASE' : '_',
			'DIV_TAG_MODIFIER_LENGTH' : '%',
			'DIV_TAG_MODIFIER_COUNT_WORDS' : '%%',
			'DIV_TAG_MODIFIER_COUNT_SENTENCES' : '%%%',
			'DIV_TAG_MODIFIER_COUNT_PARAGRAPHS' : '%%%%',
			'DIV_TAG_MODIFIER_ENCODE_URL' : '&',
			'DIV_TAG_MODIFIER_ENCODE_RAW_URL' : '&&',
			'DIV_TAG_MODIFIER_ENCODE_JSON' : 'json:',
			'DIV_TAG_MODIFIER_HTML_ENTITIES' : 'html:',
			'DIV_TAG_MODIFIER_NL2BR' : 'br:',
			'DIV_TAG_MODIFIER_TRUNCATE' : '~',
			'DIV_TAG_MODIFIER_WORDWRAP' : '/',
			'DIV_TAG_MODIFIER_SUBSTRING_SEPARATOR' : ',',
			'DIV_TAG_MODIFIER_SINGLE_QUOTES' : "'",
			'DIV_TAG_MODIFIER_JS' :  'js:',
			'DIV_TAG_MODIFIER_FORMAT' : '',
			
			// Data format
			'DIV_TAG_DATE_FORMAT_PREFIX' : '{/',
			'DIV_TAG_DATE_FORMAT_SUFFIX' : '/}',
			'DIV_TAG_DATE_FORMAT_SEPARATOR' : ':',
			
			'DIV_TAG_NUMBER_FORMAT_PREFIX' : '{#',
			'DIV_TAG_NUMBER_FORMAT_SUFFIX' : '#}',
			'DIV_TAG_NUMBER_FORMAT_SEPARATOR' : ':',
			
			// Formulas
			'DIV_TAG_FORMULA_BEGIN' : '(#',
			'DIV_TAG_FORMULA_END' : '#)',
			'DIV_TAG_FORMULA_FORMAT_SEPARATOR' : ':',
			
			// Sub-parsers
			'DIV_TAG_SUBPARSER_BEGIN_PREFIX' : '{',
			'DIV_TAG_SUBPARSER_BEGIN_SUFFIX' : '}',
			'DIV_TAG_SUBPARSER_END_PREFIX' : '{/',
			'DIV_TAG_SUBPARSER_END_SUFFIX' : '}',
			
			// Ignored parts
			'DIV_TAG_IGNORE_BEGIN' : '{ignore}',
			'DIV_TAG_IGNORE_END' : '{/ignore}',
			
			// Comments
			'DIV_TAG_COMMENT_BEGIN' : '<!--{',
			'DIV_TAG_COMMENT_END' : '}-->',
			
			// HTML to Plain text
			'DIV_TAG_TXT_BEGIN' : '{txt}',
			'DIV_TAG_TXT_END' : '{/txt}',			
			'DIV_TAG_TXT_WIDTH_SEPARATOR' : '=>',
			
			// Strip
			'DIV_TAG_STRIP_BEGIN' : '{strip}',
			'DIV_TAG_STRIP_END' : '{/strip}',
			
			// Loops
			'DIV_TAG_LOOP_BEGIN_PREFIX' : '[$',
			'DIV_TAG_LOOP_BEGIN_SUFFIX' : ']',
			'DIV_TAG_LOOP_END_PREFIX' : '[/$',
			'DIV_TAG_LOOP_END_SUFFIX' : ']',
			'DIV_TAG_EMPTY' : '@empty@',
			'DIV_TAG_BREAK' : '@break@',
			'DIV_TAG_LOOP_VAR_SEPARATOR' : '=>',
			
			// Iterations
			// Note: the @break@ and @empty@ tags should be same that loops
			'DIV_TAG_ITERATION_BEGIN_PREFIX' : '[:',
			'DIV_TAG_ITERATION_BEGIN_SUFFIX' : ':]',
			'DIV_TAG_ITERATION_END' : '[/]',
			'DIV_TAG_ITERATION_PARAM_SEPARATOR' : ',',
			
			// Conditional parts
			'DIV_TAG_CONDITIONAL_TRUE_BEGIN_PREFIX' : '?$',
			'DIV_TAG_CONDITIONAL_TRUE_BEGIN_SUFFIX' : '',
			'DIV_TAG_CONDITIONAL_TRUE_END_PREFIX' : '$',
			'DIV_TAG_CONDITIONAL_TRUE_END_SUFFIX' : '?',
			'DIV_TAG_CONDITIONAL_FALSE_BEGIN_PREFIX' : '!$',
			'DIV_TAG_CONDITIONAL_FALSE_BEGIN_SUFFIX' : '',
			'DIV_TAG_CONDITIONAL_FALSE_END_PREFIX' : '$',
			'DIV_TAG_CONDITIONAL_FALSE_END_SUFFIX' : '!',
			'DIV_TAG_ELSE' : '@else@',
			
			// Conditions
			'DIV_TAG_CONDITIONS_BEGIN_PREFIX' : '{?(',
			'DIV_TAG_CONDITIONS_BEGIN_SUFFIX' : ')?}',
			'DIV_TAG_CONDITIONS_END' : '{/?}',
			
			// Template vars
			'DIV_TAG_TPLVAR_BEGIN' : '{=',
			'DIV_TAG_TPLVAR_END' : '=}',
			'DIV_TAG_TPLVAR_ASSIGN_OPERATOR' : ':',
			'DIV_TAG_TPLVAR_PROTECTOR' : '*',
			
			// Default replacement
			'DIV_TAG_DEFAULT_REPLACEMENT_BEGIN' : '{@',
			'DIV_TAG_DEFAULT_REPLACEMENT_END' : '@}',
			
			// Includes
			'DIV_TAG_INCLUDE_BEGIN' : '{% ',
			'DIV_TAG_INCLUDE_END' : ' %}',
			
			// Pre-processed
			'DIV_TAG_PREPROCESSED_BEGIN' : '{%% ',
			'DIV_TAG_PREPROCESSED_END' : ' %%}',
			
			// Capsules
			'DIV_TAG_CAPSULE_BEGIN_PREFIX' : '[[',
			'DIV_TAG_CAPSULE_BEGIN_SUFFIX' : '',
			'DIV_TAG_CAPSULE_END_PREFIX' : '',
			'DIV_TAG_CAPSULE_END_SUFFIX' : ']]',
			
			// Multi replacements
			'DIV_TAG_MULTI_REPLACEMENT_BEGIN_PREFIX' : '{:',
			'DIV_TAG_MULTI_REPLACEMENT_BEGIN_SUFFIX' : '}',
			'DIV_TAG_MULTI_REPLACEMENT_END_PREFIX' : '{:/',
			'DIV_TAG_MULTI_REPLACEMENT_END_SUFFIX' : '}',
			
			// Friendly tags
			'DIV_TAG_FRIENDLY_BEGIN' : '<!--|',
			'DIV_TAG_FRIENDLY_END' : '|-->',
			
			// Aggregate functions
			'DIV_TAG_AGGREGATE_FUNCTION_COUNT' : 'count',
			'DIV_TAG_AGGREGATE_FUNCTION_MAX' : 'max',
			'DIV_TAG_AGGREGATE_FUNCTION_MIN' : 'min',
			'DIV_TAG_AGGREGATE_FUNCTION_SUM' : 'sum',
			'DIV_TAG_AGGREGATE_FUNCTION_AVG' : 'avg',
			'DIV_TAG_AGGREGATE_FUNCTION_SEPARATOR' : ':',
			'DIV_TAG_AGGREGATE_FUNCTION_PROPERTY_SEPARATOR' : '-',
			
			// Locations
			'DIV_TAG_LOCATION_BEGIN' : '(( ',
			'DIV_TAG_LOCATION_END' : ' ))',
			'DIV_TAG_LOCATION_CONTENT_BEGIN_PREFIX' : '{{',
			'DIV_TAG_LOCATION_CONTENT_BEGIN_SUFFIX' : '',
			'DIV_TAG_LOCATION_CONTENT_END_PREFIX' : '',
			'DIV_TAG_LOCATION_CONTENT_END_SUFFIX' : '}}',
			
			// Macros
			'DIV_TAG_MACRO_BEGIN' : '<?',
			'DIV_TAG_MACRO_END' : '?>',
			
			// Special replacements
			'DIV_TAG_SPECIAL_REPLACE_NEW_LINE' : '{\\n}',
			'DIV_TAG_SPECIAL_REPLACE_CAR_RETURN' : '{\\r}',
			'DIV_TAG_SPECIAL_REPLACE_HORIZONTAL_TAB' : '{\\t}',
			'DIV_TAG_SPECIAL_REPLACE_VERTICAL_TAB' : '{\\v}',
			'DIV_TAG_SPECIAL_REPLACE_NEXT_PAGE' : '{\\f}',
			'DIV_TAG_SPECIAL_REPLACE_DOLLAR_SYMBOL' : '{\\$}',
			
			// Others
			'DIV_TAG_TEASER_BREAK' : '<!--break-->'
			
		};		
		
		function array_search(needle,haystack,argStrict){
		    var strict=!!argStrict;
		    var key='';
		    for(key in haystack){
		        if((strict&&haystack[key]===needle)||(!strict&&haystack[key]==needle)){
		            return key;
		        }
		    }
		    return false;
		}
			
		function explode(delimiter,string,limit){
			var emptyArray={
				0:''
			};

			if(arguments.length<2||typeof arguments[0]=='undefined'||typeof arguments[1]=='undefined'){
				return null;
			}
			if(delimiter===''||delimiter===false||delimiter===null){
				return false;
			}
			if(typeof delimiter=='function'||typeof delimiter=='object'||typeof string=='function'||typeof string=='object'){
				return emptyArray;
			}
			if(delimiter===true){
				delimiter='1';
			}
			if(!limit){
				return string.toString().split(delimiter.toString());
			}else{
				var splitted=string.toString().split(delimiter.toString());
				var partA=splitted.splice(0,limit-1);
				var partB=splitted.join(delimiter.toString());
				partA.push(partB);
				return partA;
			}
		}

		function showModal(message,title){
			if (title === undefined || title === null) title = 'Notice';
			$("#modal-title").text(title);
			$("#modal-message").text(String(message));
			$("#modal-overlay").addClass("is-visible").attr("aria-hidden","false");
			$("#modal-ok").focus();
		}

		function hideModal(){
			$("#modal-overlay").removeClass("is-visible").attr("aria-hidden","true");
		}

		function applyTheme(theme){
			var next = (theme === "dark") ? "dark" : "light";
			document.documentElement.setAttribute("data-theme", next);
			$("#theme-toggle").html(next === "dark" ? "&#9790; Light mode" : "&#9790; Dark mode");
			try{
				window.localStorage.setItem("dialector-theme", next);
			}catch (e){}
		}

		function getStoredTheme(){
			var theme = null;
			try{
				theme = window.localStorage.getItem("dialector-theme");
			}catch (e){}
			if (theme !== "light" && theme !== "dark") theme = "dark";
			return theme;
		}

			
		function validate(verbose){
			if (!isset(verbose)) verbose = 2;
			var r=isValidCurrentDialect(); 
			if (r != true) {
				if (verbose >0) showModal('This dialect is not valid: ' + r);
			}else {
				if (verbose >1) showModal('This dialect is valid');
			} 
			return r;
		}
		
		function isValidCurrentDialect(){

			for(var c in constants){
				eval('window.' + c + ' = $("#' + c +'").val();');
			}
			
			$(".value").removeClass('invalid');
			
			//TODO: Improve this syntax checker
			
			$all_tags = [
				DIV_TAG_VAR_MEMBER_DELIMITER, DIV_TAG_REPLACEMENT_PREFIX , DIV_TAG_REPLACEMENT_SUFFIX , DIV_TAG_MULTI_MODIFIERS_PREFIX , DIV_TAG_MULTI_MODIFIERS_OPERATOR ,
				DIV_TAG_MULTI_MODIFIERS_SEPARATOR , DIV_TAG_MULTI_MODIFIERS_SUFFIX , DIV_TAG_SUBMATCH_SEPARATOR, DIV_TAG_MODIFIER_SIMPLE,
				DIV_TAG_MODIFIER_CAPITALIZE_FIRST, DIV_TAG_MODIFIER_CAPITALIZE_WORDS, DIV_TAG_MODIFIER_UPPERCASE, DIV_TAG_MODIFIER_LOWERCASE,
				DIV_TAG_MODIFIER_LENGTH, DIV_TAG_MODIFIER_COUNT_WORDS, DIV_TAG_MODIFIER_COUNT_SENTENCES, DIV_TAG_MODIFIER_COUNT_PARAGRAPHS,
				DIV_TAG_MODIFIER_ENCODE_URL, DIV_TAG_MODIFIER_ENCODE_RAW_URL, DIV_TAG_MODIFIER_ENCODE_JSON, DIV_TAG_MODIFIER_HTML_ENTITIES,
				DIV_TAG_MODIFIER_NL2BR, DIV_TAG_MODIFIER_TRUNCATE, DIV_TAG_MODIFIER_WORDWRAP, DIV_TAG_MODIFIER_SUBSTRING_SEPARATOR,
				DIV_TAG_MODIFIER_SINGLE_QUOTES, DIV_TAG_MODIFIER_JS, DIV_TAG_MODIFIER_FORMAT, DIV_TAG_DATE_FORMAT_PREFIX,
				DIV_TAG_DATE_FORMAT_SUFFIX, DIV_TAG_DATE_FORMAT_SEPARATOR, DIV_TAG_NUMBER_FORMAT_PREFIX, DIV_TAG_NUMBER_FORMAT_SUFFIX,
				DIV_TAG_NUMBER_FORMAT_SEPARATOR, DIV_TAG_FORMULA_BEGIN, DIV_TAG_FORMULA_END, DIV_TAG_FORMULA_FORMAT_SEPARATOR,
				DIV_TAG_SUBPARSER_BEGIN_PREFIX, DIV_TAG_SUBPARSER_BEGIN_SUFFIX, DIV_TAG_SUBPARSER_END_PREFIX, DIV_TAG_SUBPARSER_END_SUFFIX, DIV_TAG_IGNORE_BEGIN, DIV_TAG_IGNORE_END,
				DIV_TAG_COMMENT_BEGIN, DIV_TAG_COMMENT_END, DIV_TAG_TXT_BEGIN, DIV_TAG_TXT_END,
				DIV_TAG_TXT_WIDTH_SEPARATOR, DIV_TAG_STRIP_BEGIN, DIV_TAG_STRIP_END, DIV_TAG_LOOP_BEGIN_PREFIX,
				DIV_TAG_LOOP_BEGIN_SUFFIX, DIV_TAG_LOOP_END_PREFIX, DIV_TAG_LOOP_END_SUFFIX, DIV_TAG_EMPTY,
				DIV_TAG_BREAK, DIV_TAG_LOOP_VAR_SEPARATOR, DIV_TAG_ITERATION_BEGIN_PREFIX, DIV_TAG_ITERATION_BEGIN_SUFFIX,
				DIV_TAG_ITERATION_END, DIV_TAG_ITERATION_PARAM_SEPARATOR, DIV_TAG_CONDITIONAL_TRUE_BEGIN_PREFIX, DIV_TAG_CONDITIONAL_TRUE_BEGIN_SUFFIX,
				DIV_TAG_CONDITIONAL_TRUE_END_PREFIX, DIV_TAG_CONDITIONAL_TRUE_END_SUFFIX, DIV_TAG_CONDITIONAL_FALSE_BEGIN_PREFIX, DIV_TAG_CONDITIONAL_FALSE_BEGIN_SUFFIX,
				DIV_TAG_CONDITIONAL_FALSE_END_PREFIX, DIV_TAG_CONDITIONAL_FALSE_END_SUFFIX, DIV_TAG_ELSE, DIV_TAG_CONDITIONS_BEGIN_PREFIX,
				DIV_TAG_CONDITIONS_BEGIN_SUFFIX, DIV_TAG_CONDITIONS_END, DIV_TAG_TPLVAR_BEGIN, DIV_TAG_TPLVAR_END,
				DIV_TAG_TPLVAR_ASSIGN_OPERATOR, DIV_TAG_TPLVAR_PROTECTOR, DIV_TAG_DEFAULT_REPLACEMENT_BEGIN, DIV_TAG_DEFAULT_REPLACEMENT_END,
				DIV_TAG_INCLUDE_BEGIN, DIV_TAG_INCLUDE_END, DIV_TAG_PREPROCESSED_BEGIN, DIV_TAG_PREPROCESSED_END,
				DIV_TAG_CAPSULE_BEGIN_PREFIX, DIV_TAG_CAPSULE_BEGIN_SUFFIX, DIV_TAG_CAPSULE_END_PREFIX, DIV_TAG_CAPSULE_END_SUFFIX,
				DIV_TAG_MULTI_REPLACEMENT_BEGIN_PREFIX, DIV_TAG_MULTI_REPLACEMENT_BEGIN_SUFFIX, DIV_TAG_MULTI_REPLACEMENT_END_PREFIX, DIV_TAG_MULTI_REPLACEMENT_END_SUFFIX,
				DIV_TAG_FRIENDLY_BEGIN, DIV_TAG_FRIENDLY_END, DIV_TAG_AGGREGATE_FUNCTION_COUNT, DIV_TAG_AGGREGATE_FUNCTION_MAX,
				DIV_TAG_AGGREGATE_FUNCTION_MIN, DIV_TAG_AGGREGATE_FUNCTION_SUM, DIV_TAG_AGGREGATE_FUNCTION_AVG, DIV_TAG_AGGREGATE_FUNCTION_SEPARATOR,
				DIV_TAG_AGGREGATE_FUNCTION_PROPERTY_SEPARATOR, DIV_TAG_LOCATION_BEGIN, DIV_TAG_LOCATION_END, DIV_TAG_LOCATION_CONTENT_BEGIN_PREFIX, DIV_TAG_LOCATION_CONTENT_BEGIN_SUFFIX, DIV_TAG_LOCATION_CONTENT_END_PREFIX,
				DIV_TAG_LOCATION_CONTENT_END_SUFFIX, DIV_TAG_MACRO_BEGIN, DIV_TAG_MACRO_END, DIV_TAG_SPECIAL_REPLACE_NEW_LINE,
				DIV_TAG_SPECIAL_REPLACE_CAR_RETURN, DIV_TAG_SPECIAL_REPLACE_HORIZONTAL_TAB, DIV_TAG_SPECIAL_REPLACE_VERTICAL_TAB, DIV_TAG_SPECIAL_REPLACE_NEXT_PAGE,
				DIV_TAG_SPECIAL_REPLACE_DOLLAR_SYMBOL];
	
			// Required tags
			$names = [
			'DIV_TAG_VAR_MEMBER_DELIMITER','DIV_TAG_REPLACEMENT_PREFIX','DIV_TAG_REPLACEMENT_SUFFIX','DIV_TAG_MULTI_MODIFIERS_PREFIX','DIV_TAG_MULTI_MODIFIERS_OPERATOR','DIV_TAG_MULTI_MODIFIERS_SEPARATOR',
			'DIV_TAG_MULTI_MODIFIERS_SUFFIX','DIV_TAG_SUBMATCH_SEPARATOR','DIV_TAG_MODIFIER_SIMPLE','DIV_TAG_MODIFIER_CAPITALIZE_FIRST',
			'DIV_TAG_MODIFIER_CAPITALIZE_WORDS','DIV_TAG_MODIFIER_UPPERCASE','DIV_TAG_MODIFIER_LOWERCASE','DIV_TAG_MODIFIER_LENGTH',
			'DIV_TAG_MODIFIER_COUNT_WORDS','DIV_TAG_MODIFIER_COUNT_SENTENCES','DIV_TAG_MODIFIER_COUNT_PARAGRAPHS','DIV_TAG_MODIFIER_ENCODE_URL',
			'DIV_TAG_MODIFIER_ENCODE_RAW_URL','DIV_TAG_MODIFIER_ENCODE_JSON','DIV_TAG_MODIFIER_HTML_ENTITIES','DIV_TAG_MODIFIER_NL2BR',
			'DIV_TAG_MODIFIER_TRUNCATE','DIV_TAG_MODIFIER_WORDWRAP','DIV_TAG_MODIFIER_SUBSTRING_SEPARATOR','DIV_TAG_MODIFIER_SINGLE_QUOTES',
			'DIV_TAG_MODIFIER_JS','DIV_TAG_DATE_FORMAT_PREFIX','DIV_TAG_DATE_FORMAT_SUFFIX','DIV_TAG_DATE_FORMAT_SEPARATOR',
			'DIV_TAG_NUMBER_FORMAT_PREFIX','DIV_TAG_NUMBER_FORMAT_SUFFIX','DIV_TAG_NUMBER_FORMAT_SEPARATOR','DIV_TAG_FORMULA_BEGIN',
			'DIV_TAG_FORMULA_END','DIV_TAG_FORMULA_FORMAT_SEPARATOR','DIV_TAG_SUBPARSER_BEGIN_PREFIX','DIV_TAG_SUBPARSER_END_SUFFIX',
			'DIV_TAG_IGNORE_BEGIN','DIV_TAG_IGNORE_END','DIV_TAG_COMMENT_BEGIN','DIV_TAG_COMMENT_END',
			'DIV_TAG_TXT_BEGIN','DIV_TAG_TXT_END','DIV_TAG_TXT_WIDTH_SEPARATOR','DIV_TAG_STRIP_BEGIN','DIV_TAG_STRIP_END',
			'DIV_TAG_LOOP_BEGIN_PREFIX','DIV_TAG_LOOP_END_SUFFIX','DIV_TAG_EMPTY','DIV_TAG_BREAK','DIV_TAG_LOOP_VAR_SEPARATOR',
			'DIV_TAG_ITERATION_BEGIN_PREFIX','DIV_TAG_ITERATION_BEGIN_SUFFIX','DIV_TAG_ITERATION_END','DIV_TAG_ITERATION_PARAM_SEPARATOR',
			'DIV_TAG_CONDITIONAL_TRUE_BEGIN_PREFIX','DIV_TAG_CONDITIONAL_TRUE_END_SUFFIX','DIV_TAG_CONDITIONAL_FALSE_BEGIN_PREFIX',
			'DIV_TAG_CONDITIONAL_FALSE_END_SUFFIX','DIV_TAG_ELSE','DIV_TAG_CONDITIONS_BEGIN_PREFIX',
			'DIV_TAG_CONDITIONS_BEGIN_SUFFIX','DIV_TAG_CONDITIONS_END','DIV_TAG_TPLVAR_BEGIN','DIV_TAG_TPLVAR_END',
			'DIV_TAG_TPLVAR_ASSIGN_OPERATOR','DIV_TAG_TPLVAR_PROTECTOR','DIV_TAG_DEFAULT_REPLACEMENT_BEGIN','DIV_TAG_DEFAULT_REPLACEMENT_END',
			'DIV_TAG_INCLUDE_BEGIN','DIV_TAG_INCLUDE_END','DIV_TAG_PREPROCESSED_BEGIN','DIV_TAG_PREPROCESSED_END',
			'DIV_TAG_CAPSULE_BEGIN_PREFIX','DIV_TAG_CAPSULE_END_SUFFIX','DIV_TAG_MULTI_REPLACEMENT_BEGIN_PREFIX','DIV_TAG_MULTI_REPLACEMENT_END_SUFFIX',
			'DIV_TAG_FRIENDLY_BEGIN','DIV_TAG_FRIENDLY_END','DIV_TAG_AGGREGATE_FUNCTION_COUNT','DIV_TAG_AGGREGATE_FUNCTION_MAX',
			'DIV_TAG_AGGREGATE_FUNCTION_MIN','DIV_TAG_AGGREGATE_FUNCTION_SUM','DIV_TAG_AGGREGATE_FUNCTION_AVG','DIV_TAG_AGGREGATE_FUNCTION_SEPARATOR',
			'DIV_TAG_AGGREGATE_FUNCTION_PROPERTY_SEPARATOR','DIV_TAG_LOCATION_BEGIN','DIV_TAG_LOCATION_END','DIV_TAG_LOCATION_CONTENT_BEGIN_PREFIX',
			'DIV_TAG_LOCATION_CONTENT_END_SUFFIX','DIV_TAG_MACRO_BEGIN','DIV_TAG_MACRO_END','DIV_TAG_SPECIAL_REPLACE_NEW_LINE',
			'DIV_TAG_SPECIAL_REPLACE_CAR_RETURN','DIV_TAG_SPECIAL_REPLACE_HORIZONTAL_TAB','DIV_TAG_SPECIAL_REPLACE_VERTICAL_TAB','DIV_TAG_SPECIAL_REPLACE_NEXT_PAGE',
			'DIV_TAG_SPECIAL_REPLACE_DOLLAR_SYMBOL','DIV_TAG_TEASER_BREAK'];
	
			$r = [
			DIV_TAG_VAR_MEMBER_DELIMITER, DIV_TAG_REPLACEMENT_PREFIX,        DIV_TAG_REPLACEMENT_SUFFIX, DIV_TAG_MULTI_MODIFIERS_PREFIX, DIV_TAG_MULTI_MODIFIERS_OPERATOR, DIV_TAG_MULTI_MODIFIERS_SEPARATOR,
			DIV_TAG_MULTI_MODIFIERS_SUFFIX,    DIV_TAG_SUBMATCH_SEPARATOR, DIV_TAG_MODIFIER_SIMPLE, DIV_TAG_MODIFIER_CAPITALIZE_FIRST,
			DIV_TAG_MODIFIER_CAPITALIZE_WORDS, DIV_TAG_MODIFIER_UPPERCASE, DIV_TAG_MODIFIER_LOWERCASE, DIV_TAG_MODIFIER_LENGTH,
			DIV_TAG_MODIFIER_COUNT_WORDS,      DIV_TAG_MODIFIER_COUNT_SENTENCES, DIV_TAG_MODIFIER_COUNT_PARAGRAPHS, DIV_TAG_MODIFIER_ENCODE_URL,
			DIV_TAG_MODIFIER_ENCODE_RAW_URL,   DIV_TAG_MODIFIER_ENCODE_JSON, DIV_TAG_MODIFIER_HTML_ENTITIES, DIV_TAG_MODIFIER_NL2BR,
			DIV_TAG_MODIFIER_TRUNCATE,         DIV_TAG_MODIFIER_WORDWRAP, DIV_TAG_MODIFIER_SUBSTRING_SEPARATOR, DIV_TAG_MODIFIER_SINGLE_QUOTES,
			DIV_TAG_MODIFIER_JS,               DIV_TAG_DATE_FORMAT_PREFIX, DIV_TAG_DATE_FORMAT_SUFFIX, DIV_TAG_DATE_FORMAT_SEPARATOR,
			DIV_TAG_NUMBER_FORMAT_PREFIX,      DIV_TAG_NUMBER_FORMAT_SUFFIX, DIV_TAG_NUMBER_FORMAT_SEPARATOR, DIV_TAG_FORMULA_BEGIN,
			DIV_TAG_FORMULA_END,               DIV_TAG_FORMULA_FORMAT_SEPARATOR, DIV_TAG_SUBPARSER_BEGIN_PREFIX, DIV_TAG_SUBPARSER_END_SUFFIX,
			DIV_TAG_IGNORE_BEGIN,              DIV_TAG_IGNORE_END, DIV_TAG_COMMENT_BEGIN, DIV_TAG_COMMENT_END,
			DIV_TAG_TXT_BEGIN,                 DIV_TAG_TXT_END, DIV_TAG_TXT_WIDTH_SEPARATOR, DIV_TAG_STRIP_BEGIN, DIV_TAG_STRIP_END,
			DIV_TAG_LOOP_BEGIN_PREFIX,         DIV_TAG_LOOP_END_SUFFIX, DIV_TAG_EMPTY, DIV_TAG_BREAK, DIV_TAG_LOOP_VAR_SEPARATOR,
			DIV_TAG_ITERATION_BEGIN_PREFIX,    DIV_TAG_ITERATION_BEGIN_SUFFIX, DIV_TAG_ITERATION_END, DIV_TAG_ITERATION_PARAM_SEPARATOR,
			DIV_TAG_CONDITIONAL_TRUE_BEGIN_PREFIX, DIV_TAG_CONDITIONAL_TRUE_END_SUFFIX, DIV_TAG_CONDITIONAL_FALSE_BEGIN_PREFIX,
			DIV_TAG_CONDITIONAL_FALSE_END_SUFFIX,  DIV_TAG_ELSE, DIV_TAG_CONDITIONS_BEGIN_PREFIX,
			DIV_TAG_CONDITIONS_BEGIN_SUFFIX,       DIV_TAG_CONDITIONS_END, DIV_TAG_TPLVAR_BEGIN, DIV_TAG_TPLVAR_END,
			DIV_TAG_TPLVAR_ASSIGN_OPERATOR,        DIV_TAG_TPLVAR_PROTECTOR, DIV_TAG_DEFAULT_REPLACEMENT_BEGIN, DIV_TAG_DEFAULT_REPLACEMENT_END,
			DIV_TAG_INCLUDE_BEGIN,                 DIV_TAG_INCLUDE_END, DIV_TAG_PREPROCESSED_BEGIN, DIV_TAG_PREPROCESSED_END,
			DIV_TAG_CAPSULE_BEGIN_PREFIX,          DIV_TAG_CAPSULE_END_SUFFIX, DIV_TAG_MULTI_REPLACEMENT_BEGIN_PREFIX, DIV_TAG_MULTI_REPLACEMENT_END_SUFFIX,
			DIV_TAG_FRIENDLY_BEGIN,                DIV_TAG_FRIENDLY_END, DIV_TAG_AGGREGATE_FUNCTION_COUNT, DIV_TAG_AGGREGATE_FUNCTION_MAX,
			DIV_TAG_AGGREGATE_FUNCTION_MIN,         DIV_TAG_AGGREGATE_FUNCTION_SUM, DIV_TAG_AGGREGATE_FUNCTION_AVG, DIV_TAG_AGGREGATE_FUNCTION_SEPARATOR,
			DIV_TAG_AGGREGATE_FUNCTION_PROPERTY_SEPARATOR, DIV_TAG_LOCATION_BEGIN, DIV_TAG_LOCATION_END, DIV_TAG_LOCATION_CONTENT_BEGIN_PREFIX,
			DIV_TAG_LOCATION_CONTENT_END_SUFFIX,          DIV_TAG_MACRO_BEGIN, DIV_TAG_MACRO_END, DIV_TAG_SPECIAL_REPLACE_NEW_LINE,
			DIV_TAG_SPECIAL_REPLACE_CAR_RETURN,           DIV_TAG_SPECIAL_REPLACE_HORIZONTAL_TAB, DIV_TAG_SPECIAL_REPLACE_VERTICAL_TAB, DIV_TAG_SPECIAL_REPLACE_NEXT_PAGE,
			DIV_TAG_SPECIAL_REPLACE_DOLLAR_SYMBOL,        DIV_TAG_TEASER_BREAK];
	
			for(var $p in $r){
				if ($r[$p] == '' || $r[$p] == null){
					$("#" + $names[$p]).focus();
					$("#" + $names[$p]).addClass("invalid");
					return $names[$p] + ' is required';
				} 
			}
	
			// Unique tags
			$names = [
			'DIV_TAG_VAR_MEMBER_DELIMITER','DIV_TAG_MODIFIER_SIMPLE','DIV_TAG_MODIFIER_CAPITALIZE_FIRST',
			'DIV_TAG_MODIFIER_CAPITALIZE_WORDS','DIV_TAG_MODIFIER_UPPERCASE','DIV_TAG_MODIFIER_LOWERCASE',
			'DIV_TAG_MODIFIER_LENGTH','DIV_TAG_MODIFIER_COUNT_WORDS','DIV_TAG_MODIFIER_COUNT_SENTENCES',
			'DIV_TAG_MODIFIER_COUNT_PARAGRAPHS','DIV_TAG_MODIFIER_ENCODE_URL','DIV_TAG_MODIFIER_ENCODE_RAW_URL',
			'DIV_TAG_MODIFIER_ENCODE_JSON','DIV_TAG_MODIFIER_HTML_ENTITIES','DIV_TAG_MODIFIER_NL2BR',
			'DIV_TAG_MODIFIER_TRUNCATE','DIV_TAG_MODIFIER_WORDWRAP','DIV_TAG_MODIFIER_SUBSTRING_SEPARATOR',
			'DIV_TAG_MODIFIER_SINGLE_QUOTES','DIV_TAG_MODIFIER_JS','DIV_TAG_MODIFIER_FORMAT',
			'DIV_TAG_EMPTY','DIV_TAG_BREAK','DIV_TAG_ELSE',
			'DIV_TAG_AGGREGATE_FUNCTION_COUNT','DIV_TAG_AGGREGATE_FUNCTION_MAX','DIV_TAG_AGGREGATE_FUNCTION_MIN',
			'DIV_TAG_AGGREGATE_FUNCTION_SUM','DIV_TAG_AGGREGATE_FUNCTION_AVG','DIV_TAG_SPECIAL_REPLACE_NEW_LINE',
			'DIV_TAG_SPECIAL_REPLACE_CAR_RETURN','DIV_TAG_SPECIAL_REPLACE_HORIZONTAL_TAB','DIV_TAG_SPECIAL_REPLACE_VERTICAL_TAB',
			'DIV_TAG_SPECIAL_REPLACE_NEXT_PAGE','DIV_TAG_SPECIAL_REPLACE_DOLLAR_SYMBOL'];
	
			$r = [
			DIV_TAG_VAR_MEMBER_DELIMITER, DIV_TAG_MODIFIER_SIMPLE,                     DIV_TAG_MODIFIER_CAPITALIZE_FIRST,
			DIV_TAG_MODIFIER_CAPITALIZE_WORDS,           DIV_TAG_MODIFIER_UPPERCASE,                  DIV_TAG_MODIFIER_LOWERCASE,
			DIV_TAG_MODIFIER_LENGTH,                     DIV_TAG_MODIFIER_COUNT_WORDS,                DIV_TAG_MODIFIER_COUNT_SENTENCES,
			DIV_TAG_MODIFIER_COUNT_PARAGRAPHS,           DIV_TAG_MODIFIER_ENCODE_URL,                 DIV_TAG_MODIFIER_ENCODE_RAW_URL,
			DIV_TAG_MODIFIER_ENCODE_JSON,                DIV_TAG_MODIFIER_HTML_ENTITIES,              DIV_TAG_MODIFIER_NL2BR,
			DIV_TAG_MODIFIER_TRUNCATE,                   DIV_TAG_MODIFIER_WORDWRAP,                   DIV_TAG_MODIFIER_SUBSTRING_SEPARATOR,
			DIV_TAG_MODIFIER_SINGLE_QUOTES,              DIV_TAG_MODIFIER_JS,                         DIV_TAG_MODIFIER_FORMAT,
			DIV_TAG_EMPTY,                               DIV_TAG_BREAK,                               DIV_TAG_ELSE,
			DIV_TAG_AGGREGATE_FUNCTION_COUNT,            DIV_TAG_AGGREGATE_FUNCTION_MAX,               DIV_TAG_AGGREGATE_FUNCTION_MIN,
			DIV_TAG_AGGREGATE_FUNCTION_SUM,              DIV_TAG_AGGREGATE_FUNCTION_AVG,               DIV_TAG_SPECIAL_REPLACE_NEW_LINE,
			DIV_TAG_SPECIAL_REPLACE_CAR_RETURN,          DIV_TAG_SPECIAL_REPLACE_HORIZONTAL_TAB,	  DIV_TAG_SPECIAL_REPLACE_VERTICAL_TAB,
			DIV_TAG_SPECIAL_REPLACE_NEXT_PAGE,           DIV_TAG_SPECIAL_REPLACE_DOLLAR_SYMBOL];
	
			for(var $k in $r){
				$t = $r[$k];
				for(var $p in $r){ 
					if ($t == $r[$p] && $k != $p) {
						$("#" + $names[$p]).focus();
						$("#" + $names[$p]).addClass("invalid");
						return $names[$k] + ' must be unique and not equal to '.$names[$p];
					}
				}
			}
	
			// Teaser break must be unique
			if (array_search(DIV_TAG_TEASER_BREAK, $all_tags)) {
				$("#DIV_TAG_TEASER_BREAK").focus();
				$("#DIV_TAG_TEASER_BREAK").addClass("invalid");
				return 'DIV_TAG_TEASER_BREAK must be unique';
			}
	
			return true;
		
		}
		
	   /**
		 * Clone isset() PHP function
		 */
		function isset(v){
		    return typeof v !== 'undefined';
		}

		function scrollPreviewToCenter(c){
			var $preview = $("#preview");
			var $line = $(".preview-"+c).first().closest(".code-line");
			if ($preview.length < 1 || $line.length < 1) return;
			var targetTop = $line.offset().top - $preview.offset().top + $preview.scrollTop();
			var targetHeight = $line.outerHeight();
			var previewHeight = $preview.height();
			var nextTop = targetTop - (previewHeight / 2) + (targetHeight / 2);
			$preview.scrollTop(nextTop);
		}

		function setActivePreviewLine(c){
			$(".code-line").removeClass("is-active");
			var $line = $(".preview-"+c).first().closest(".code-line");
			if ($line.length > 0) $line.addClass("is-active");
		}

		function highlight(c, scroll){
			$(".preview-"+c).addClass('highlight');
			$("#"+c).addClass('highlight');
			
			if (scroll=='constants'){
				$(".preview-DIV_TAG_REPLACEMENT_PREFIX").focus();
				$(".preview-"+c).focus();
				setActivePreviewLine(c);
				scrollPreviewToCenter(c);
			} else if (scroll =='preview') {
				$("#"+c).focus();
				setActivePreviewLine(c);
			}
		
		}

		function unhighlight(c){
			$(".preview-"+c).removeClass('highlight');
			$("#"+c).removeClass('highlight');
			$(".code-line").removeClass("is-active");
		}
		
		function str_repeat(input,multiplier){
			return new Array(multiplier+1).join(input);
		}

		function normalizePreviewHtml(html){
			var container = document.createElement("div");
			container.innerHTML = html;
			var parts = [];
			var inlineTags = {
				b: true,
				i: true,
				label: true,
				span: true,
				strong: true,
				em: true
			};

			function append(text){
				parts.push(text);
			}

			function walk(node){
				if (node.nodeType === 3){
					var text = node.nodeValue;
					if (!text) return;
					text = text.replace(/\u00a0/g, " ");
					text = text.replace(/\s+/g, " ");
					if (text.trim() === "") return;
					append(text);
					return;
				}
				if (node.nodeType !== 1) return;
				var tag = node.tagName.toLowerCase();

				if (tag === "br"){
					append("\n");
					return;
				}
				if (tag === "legend"){
					append(node.textContent);
					append("\n");
					return;
				}
				if (tag === "button"){
					append(node.outerHTML);
					return;
				}
				if (inlineTags[tag]){
					append(node.outerHTML);
					return;
				}

				var isRow = tag === "tr";
				var isCell = tag === "td" || tag === "th";
				var isBlock = tag === "fieldset" || tag === "p" || tag === "div" || tag === "table" || tag === "pre" || isRow;

				if (isBlock) append("\n");
				var children = node.childNodes;
				for (var i = 0; i < children.length; i++){
					walk(children[i]);
				}
				if (isCell) append("  ");
				if (isBlock) append("\n");
			}

			var children = container.childNodes;
			for (var i = 0; i < children.length; i++){
				walk(children[i]);
			}

			var normalized = parts.join("");
			normalized = normalized.replace(/\r/g, "");
			normalized = normalized.replace(/[ \t]+\n/g, "\n");
			normalized = normalized.replace(/\n{3,}/g, "\n\n");
			normalized = normalized.replace(/^\n+|\n+$/g, "");
			return normalized;
		}

		function buildCodePreview(html){
			var normalized = normalizePreviewHtml(html);
			var lines = normalized.split("\n");
			var out = '<div class="code-view">';
			for (var i = 0; i < lines.length; i++){
				var line = lines[i];
				if (line.replace(/\s+/g, "") === "") line = "&nbsp;";
				out += '<div class="code-line" data-line="' + (i + 1) + '"><span class="code-gutter">' + (i + 1) + '</span><span class="code-content">' + line + '</span></div>';
			}
			out += "</div>";
			return out;
		}

		function strlen(string){
			var str=string+'';
			var i=0,chr='',lgth=0;
			if(!this.php_js||!this.php_js.ini||!this.php_js.ini['unicode.semantics']||this.php_js.ini['unicode.semantics'].local_value.toLowerCase()!=='on'){
				return string.length;
			}
			var getWholeChar=function(str,i){
				var code=str.charCodeAt(i);
				var next='',prev='';
				if(0xD800<=code&&code<=0xDBFF){
					if(str.length<=(i+1)){
						throw'High surrogate without following low surrogate';
					}
					next=str.charCodeAt(i+1);
					if(0xDC00>next||next>0xDFFF){
						throw'High surrogate without following low surrogate';
					}
					return str.charAt(i)+str.charAt(i+1);
				}else if(0xDC00<=code&&code<=0xDFFF){
					if(i===0){
						throw'Low surrogate without preceding high surrogate';
					}
					prev=str.charCodeAt(i-1);
					if(0xD800>prev||prev>0xDBFF){
						throw'Low surrogate without preceding high surrogate';
					}
					return false;
				}
				return str.charAt(i);
			};

			for(i=0,lgth=0;i<str.length;i++){
				if((chr=getWholeChar(str,i))===false){
					continue;
				}
				lgth++;
			}
			return lgth;
		}

		function preview(){
			var html = document.getElementById('example').innerHTML;
			var previewHtml = html;

			for(var c in constants){
			    var cc = htmlentities(constants[c]);
				if (document.getElementById(c)!=null) cc = document.getElementById(c).value;
				previewHtml = str_replace('{ ' + c + ' }', '<button class = "preview preview-' + c + '" title = "Click here for edit '+c+'" onmouseout="unhighlight(\'' + c + '\');" onmouseover="highlight(\'' + c + '\',\'\');" onclick="highlight(\'' + c + '\',\'preview\');">' + htmlentities(cc) + '</button>', previewHtml);				
			}

			document.getElementById('preview').innerHTML = buildCodePreview(previewHtml);
			
			html = '<span style="color:red;font-weight:bold;">&lt;?php</span>' + "\n\n<span style=\"color:green;\">/* Div PHP Template Engine Dialect - Generated by Div Dialect Creator - Last update " + date('Y-m-d') +" */</span> \n\n";
			html += '<span style=\"color:green;\">/* IMPORTANT!: Include this file before you include div.php */</span>\n\n';
			var i =0;
			for(var c in constants){
				
				if (document.getElementById(c) != null) var v = document.getElementById(c).value;
				else continue;
				
				if (v == constants[c]) continue;				
				
				i++;
				
				v = str_replace("'", '\\\'', v);
				var com = "'";
				if (v.indexOf("'")>-1) com = '"'; 
				var m = 70-strlen(c)-strlen(v);
				if (m<0) var nl = '\t\t\t';
				else var nl = str_repeat('&nbsp;',m); //
				if (i % 2 == 0) nl = '\n'; 
				html += "<b>define</b>(<span style=\"color:gray;\">'" + c + "'</span>, <span style=\"color:gray;\">" + com+htmlentities(v) + com + "</span>); "+nl; 
			}
			
			if (i<1) html += ('<span style="color:green;">// Nothing to generate. All the tags are original.</span>\n');
				
			html += '\n<span style=\"color:green;\">// End of file</span>\n';
			$("#phpcode").html(html);
			
		}
		
		function restore(c){
			if(document.getElementById(c)!=null) document.getElementById(c).value = constants[c];
			preview();
		}
		
		function blink(c){
			$(".preview-"+c).addClass("blink");
		}
		function unblink(c){
			$(".preview-"+c).removeClass("blink");
		}
		
		function strpos(haystack,needle,offset){
			var i=(haystack+'').indexOf(needle,(offset||0));
			return i===-1?false:i;
		}

		function getlineofconst(c){
			var html = $("#preview").html();
			var p = strpos(html, c);
			if (p!= false){
				var lines = explode('\n', substr(html,0,p));
				return lines.length;
			}
			return 0;
		}
		
		function showConstants(){
			var html = document.getElementById('constantstpl').innerHTML;
			
			//var html = '<table><tr>';
			var j =0;
			for(var i in constants){
				var c = i;
				html = str_replace('{ ' + c + ' }', '<input onblur="unblink(\''+ c + '\');" onfocus="blink(\''+c+'\');" title ="'+ c + '" id="' + c + '" class="value" onmouseout="unhighlight(\'' + c + '\');" onmouseover="highlight(\'' + c + '\',\'constants\');" onkeyup="preview();" value=""> <button class="restore" onclick = "restore(\'' + c + '\');" title = "Restore original value: ' + htmlentities(constants[c]) + '" aria-label="Restore original value">&#8635;</button>', html);
			}
			
			//html += '</table>';
			
			document.getElementById('constants').innerHTML = html;
			
			for(var i in constants){
				if(document.getElementById(i)!=null) document.getElementById(i).value = constants[i];
			}
						
			preview();
		}
		
		function showBuilder(){
			$("#phpcode").hide();
			$("#builder").show();
			$("#clipboard").hide();
			$('#load').hide(); 
			$('#tpl-example').hide();
			$("#constants").show();
			document.getElementById('builder').setAttribute('style','display:grid;');
			document.getElementById('phpcode').setAttribute('style','display:none;');
		}
		
		function showCode(){
			if (validate(1) == true){
				$("#builder").hide();
				$("#phpcode").show();
				resize();
			}
		}
		
		function resize(){
			var h = ($(window).height()-70) + 'px';
			$("#constants").css('height',h);
			$("#preview").css('height',h);
			$("#phpcode").css('height',h);
			$("#tpl-example").css('height',h);
		}
		
		function count(mixed_var,mode){
			var key,cnt=0;
			if(mixed_var===null){
				return 0;
			}else if(mixed_var.constructor!==Array&&mixed_var.constructor!==Object){
				return 1;
			}
			if(mode==='COUNT_RECURSIVE'){
				mode=1;
			}
			if(mode!=1){
				mode=0;
			}
			for(key in mixed_var){
				if(mixed_var.hasOwnProperty(key)){
					cnt++;
					if(mode==1&&mixed_var[key]&&(mixed_var[key].constructor===Array||mixed_var[key].constructor===Object)){
						cnt+=this.count(mixed_var[key],1);
					}
				}
			}
			return cnt;
		}

		function save(){
			if (validate(1) == true){
				showBuilder();
				var json = '{<br/>';
				var i =0;
				for(var c in constants){
					
					var v = $("#"+c).val();
					
					if (constants[c] == v) continue;
					
					i++;
					
					v = str_replace("'", '\\\'', v);
					var com = "'";

					if (i > 1) {
						json += ',<br/>';
					} 
					
					json += '&nbsp;&nbsp;\'' + c + '\': <span style="color: gray;">' + com + htmlentities(v) + com + '</span>'; 
				}
				json += '<br/>';
				if (i < 1) {
					showModal('Nothing to save!');
					return false;
				}
				
				json+='}';
				$('#constants').hide();
				$("#jsontosave").html(json);
				$("#clipboard").show();
				$('#load').hide(); 
			}
		}
		
		function showLoad(){
			showBuilder();
			$("#clipboard").hide();
			$('#load').show(); 
			$('#constants').hide();
		}
		
		function saveExample(){
			$("#clipboard").hide();
			$('#load').hide();
			$('#constants').hide();
			$("#phpcode").hide();
			
			var html = document.getElementById('example').innerHTML;

			html = str_replace('&nbsp;',' ',html);
			html = str_replace('<br/>','',html);
			html = str_replace('<br>','',html);
			html = str_replace('<fieldset>','',html);
			html = str_replace('</fieldset>','',html);
			html = str_replace('<legend>','',html);
			html = str_replace('</legend>','\n-------------------------\n',html);
			html = str_replace('<td align="right">','',html);
			html = str_replace('<table>','',html);
			html = str_replace('</table>','',html);
			html = str_replace('<tbody>','',html);
			html = str_replace('</tbody>','',html);
			html = str_replace('</td>','',html);
			html = str_replace('<td>',': ',html);
			html = str_replace('<tr>','',html);
			html = str_replace('</tr>','',html);
			html = str_replace('\t',' ',html);
			
			for(var c in constants){
			    var cc = htmlentities(constants[c]);
				if (document.getElementById(c)!=null) cc = document.getElementById(c).value;
				html = str_replace('{ ' + c + ' }',  cc, html);				
			}

			
			
			$("#tpl-example").html('<pre>' + htmlentities(html) + '</pre>');
			$('#tpl-example').show();
			resize();
		}
		
		function load(){
			showConstants();
			var json = $("#jsontoload").val();
			eval('newconstants = ' + json + ';'); 
			if (json != '') {
			
				try{
					var newconstants = {};
					eval('newconstants = ' + json + ';'); 
					
					for(var c in newconstants){
						if (isset(constants[c])) $("#"+c).val(newconstants[c]);
					}
					
					$('#load').hide(); 
					
					$('#constants').show();
					preview();
				} catch (e){
					showModal('Invalid JSON Code');
				}
			}
		}
		
		
		$(function(){
			applyTheme(getStoredTheme());
			$("#theme-toggle").on("click", function(){
				var current = document.documentElement.getAttribute("data-theme");
				applyTheme(current === "dark" ? "light" : "dark");
			});
			$("#modal-ok").on("click", function(){
				hideModal();
			});
			$("#modal-overlay").on("click", function(e){
				if (e.target === this) hideModal();
			});
			$(document).on("keydown", function(e){
				if (e.keyCode == 27 && $("#modal-overlay").hasClass("is-visible")) hideModal();
			});
			resize();
			$(window).resize(function(){
				resize();
			});
		});
