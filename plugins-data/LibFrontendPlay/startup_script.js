(()=>{function u(n,o,l){return{function:function(...i){o instanceof Function&&(o=[o]),l instanceof Function&&(l=[l]);let t={cancel:!1,args:void 0,skip:!1},e;for(let r of o??[]){if(t=r(...i),t?.cancel)return;if(t?.args&&(e=e??t?.args),t?.skip)break}e&&console.log(e,i);let c;c=n.apply(this,e??i);for(let r of l??[])c=r?.apply(c,i)??c;return c},origin:n}}var s={};window.registeredCalls=s;channel.registerCall=u(channel.registerCall,(n,o)=>{if(s[n]??=[],n==="storage.onexecsqldone"){let l=u(o,(...i)=>{let t=i.filter(e=>typeof e=="string").join("-");if(localStorage["libfrontendplay.disableNCMLocalFile"]!=="false"&&t.includes("ffline"))return{args:[...i.map(e=>{if(e instanceof Array){let c=e.length;e=e.filter(r=>!r.relative_path?.endsWith(".ncm")),console.log(`[LFP] Patched exec sql done [${t}] result: ${c} -> ${e.length}`,e)}return e})]}});return{args:[n,l.function]}}s[n].push(o)}).function;localStorage["libfrontendplay.debug"]==="true"&&(channel.call=u(channel.call,(n,o,l)=>{if(n!=="audioplayer.onPlayProgress")return n.includes("audio")||n.includes("player")?console.log(n,o,l):console.debug(n,o,l),{args:[n,u(o,(...i)=>{n.includes("audio")||n.includes("player")?console.log("[Callback]",n,i):console.debug("[Callback]",n,i)}).function,l]}}).function);})();
