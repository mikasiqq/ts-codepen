(this["webpackJsonpts-codepen"]=this["webpackJsonpts-codepen"]||[]).push([[278],{454:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var s=0;s<i.length&&!(o>=r.length);s++){var p=i[s];if("string"==typeof p||p.content&&"string"==typeof p.content){var u=r[o],g=t.tokenStack[u],l="string"==typeof p?p:p.content,f=n(a,u),k=l.indexOf(f);if(-1<k){++o;var h=l.substring(0,k),d=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=l.substring(k+f.length),v=[];h&&v.push.apply(v,c([h])),v.push(d),m&&v.push.apply(v,c([m])),"string"==typeof p?i.splice.apply(i,[s,1].concat(v)):p.content=v}}else p.content&&c(p.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=278.a87cef92.chunk.js.map