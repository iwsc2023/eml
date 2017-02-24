/*! numbers2words v0.2.0 */
Number.isInteger||(Number.isInteger=function(a){return"number"==typeof a&&isFinite(a)&&a>-9007199254740992&&9007199254740992>a&&Math.floor(a)===a});var T2W=function(a){var b,c=a;if("function"!=typeof T2W[c])throw{name:"Error",message:"Locale with name '"+c+"' doesn't exist."};b=new T2W[c],b._tokenLength=T2W[c].TOKEN_LENGTH|T2W.DEFAULT_TOKEN_LENGTH;for(var d in T2W.prototype)T2W.prototype.hasOwnProperty(d)&&"function"!==b[d]&&(T2W[c].prototype[d]=T2W.prototype[d]);return b};T2W.RADIX=10,T2W.DEFAULT_TOKEN_LENGTH=1,T2W.SINGLE_INDEX=0,T2W.TEN_INDEX=1,T2W.HUNDRED_INDEX=2,T2W.prototype.toWords=function(a){if("function"!=typeof this.translate)throw{name:"Error",message:"The function 'translate' is not implemented."};return this.translate(this.tokenize(a,this._tokenLength))},T2W.prototype.tokenize=function(a,b){if(!Number.isInteger(a))throw{name:"NumberFormatExceprion",message:"'"+a+"' is not Integer."};if(0===a)return[0];for(var c=[],d=Math.pow(T2W.RADIX,b);a;)c.push(a%d),a=parseInt(a/d,T2W.RADIX);return c},T2W.CS_CZ=function(){},T2W.CS_CZ.DICTIONARY={ones:[["","jedna","dva","tři","čtyři","pět","šest","sedm","osm","devět"],["","jedentisíc","dvatisíce","třitisíce","čtyřitisíce","pěttisíc","šesttisíc","sedmtisíc","osmtisíc","devěttisíc"],["","jedenmilión","dvamilióny","třimilióny","čtyřimilióny","pětmiliónů","šestmiliónů","sedmmiliónů","osmmiliónů","devěmiliónů"]],teens:["deset","jedenáct","dvanáct","třináct","čtrnáct","patnáct","šestnáct","sedmnáct","osmnáct","devatenáct"],tens:["","","dvacet","třicet","čtyřicet","padesát","šedesát","sedmdesát","osmdesát","devadesát"],hundreds:["","sto","dvěstě","třista","čtyřista","pětset","šestset","sedmset","osmset","devětset"],radix:["","tisíc","miliónů"],exceptions:["nula","","dvě"]},T2W.CS_CZ.TOKEN_LENGTH=3,T2W.CS_CZ.MAX_NUMBERS=9,T2W.CS_CZ.prototype.translate=function(a){if(a.length*T2W.CS_CZ.TOKEN_LENGTH>T2W.CS_CZ.MAX_NUMBERS)throw{name:"Error",message:"The length of numbers is longer than the maximum value("+T2W.CS_CZ.MAX_NUMBERS+")."};if(0===a[T2W.SINGLE_INDEX]&&1===a.length)return T2W.CS_CZ.DICTIONARY.exceptions[a[T2W.SINGLE_INDEX]];for(var b=[],c=0,d=a.length;d>c;c++)b.unshift(this._getTrio(this.tokenize(a[c],1),c));return b.join("")},T2W.CS_CZ.prototype._getTrio=function(a,b){var c="",d="",e="",f=this._getRadix(b);return a[T2W.HUNDRED_INDEX]&&(c=this._getHundreds(a[T2W.HUNDRED_INDEX])),a[T2W.TEN_INDEX]&&(d=this._getTeens(a[T2W.SINGLE_INDEX])),a[T2W.TEN_INDEX]>=2&&(d=this._getTens(a[T2W.TEN_INDEX])+this._getOnes(a[T2W.SINGLE_INDEX],T2W.SINGLE_INDEX)),a[T2W.TEN_INDEX]||(e=this._getOnes(a[T2W.SINGLE_INDEX],T2W.SINGLE_INDEX)),a[T2W.HUNDRED_INDEX]||a[T2W.TEN_INDEX]||2!==a[T2W.SINGLE_INDEX]||(e=T2W.CS_CZ.DICTIONARY.exceptions[a[T2W.SINGLE_INDEX]]),b>0&&1===a.length&&(e=this._getOnes(a[T2W.SINGLE_INDEX],b),f=""),c+d+e+f},T2W.CS_CZ.prototype._getOnes=function(a,b){return T2W.CS_CZ.DICTIONARY.ones[b][a]},T2W.CS_CZ.prototype._getTens=function(a){return T2W.CS_CZ.DICTIONARY.tens[a]},T2W.CS_CZ.prototype._getTeens=function(a){return T2W.CS_CZ.DICTIONARY.teens[a]},T2W.CS_CZ.prototype._getHundreds=function(a){return T2W.CS_CZ.DICTIONARY.hundreds[a]},T2W.CS_CZ.prototype._getRadix=function(a){return T2W.CS_CZ.DICTIONARY.radix[a]},T2W.EN_US=function(){},T2W.EN_US.DICTIONARY={zero:"zero",ones:["","one","two","three","four","five","six","seven","eight","nine"],teens:["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],tens:["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],hundred:"hundred",radix:["","thousand","million"],delimiters:["-","and"]},T2W.EN_US.TOKEN_LENGTH=3,T2W.EN_US.MAX_NUMBERS=9,T2W.EN_US.prototype.translate=function(a){if(a.length*T2W.EN_US.TOKEN_LENGTH>T2W.EN_US.MAX_NUMBERS)throw{name:"Error",message:"The length of numbers is longer than the maximum value("+T2W.EN_US.MAX_NUMBERS+")."};if(0===a[T2W.SINGLE_INDEX]&&1===a.length)return T2W.EN_US.DICTIONARY.zero;for(var b=[],c=0,d=a.length;d>c;c++)b.unshift(this._getTrio(this.tokenize(a[c],1),c,d));return b.join("")},T2W.EN_US.prototype._getTrio=function(a,b,c){var d="",e="",f="",g=this._getRadix(a,b);return a[T2W.HUNDRED_INDEX]&&(d=a[T2W.TEN_INDEX]||a[T2W.SINGLE_INDEX]?this._getOnes(a[T2W.HUNDRED_INDEX])+" "+T2W.EN_US.DICTIONARY.hundred+" "+T2W.EN_US.DICTIONARY.delimiters[1]+" ":this._getOnes(a[T2W.HUNDRED_INDEX])+" "+T2W.EN_US.DICTIONARY.hundred),a[T2W.TEN_INDEX]&&(e=this._getTeens(a[T2W.SINGLE_INDEX])),a[T2W.TEN_INDEX]>=2&&(e=a[T2W.SINGLE_INDEX]?this._getTens(a[T2W.TEN_INDEX])+T2W.EN_US.DICTIONARY.delimiters[0]+this._getOnes(a[T2W.SINGLE_INDEX]):this._getTens(a[T2W.TEN_INDEX])),a[T2W.TEN_INDEX]||(f=this._getOnes(a[T2W.SINGLE_INDEX])),c>b+1&&(a[T2W.HUNDRED_INDEX]||a[T2W.TEN_INDEX]||a[T2W.SINGLE_INDEX])&&(d=" "+d),0===b&&c>b+1&&!a[T2W.HUNDRED_INDEX]&&(a[T2W.TEN_INDEX]||a[T2W.SINGLE_INDEX])&&(d=" "+T2W.EN_US.DICTIONARY.delimiters[1]+" "),d+e+f+g},T2W.EN_US.prototype._getOnes=function(a){return T2W.EN_US.DICTIONARY.ones[a]},T2W.EN_US.prototype._getTens=function(a){return T2W.EN_US.DICTIONARY.tens[a]},T2W.EN_US.prototype._getTeens=function(a){return T2W.EN_US.DICTIONARY.teens[a]},T2W.EN_US.prototype._getRadix=function(a,b){var c="";return b>0&&(a[T2W.HUNDRED_INDEX]||a[T2W.TEN_INDEX]||a[T2W.SINGLE_INDEX])&&(c=" "+T2W.EN_US.DICTIONARY.radix[b]),c},"undefined"!=typeof module&&module.exports&&(module.exports=T2W);