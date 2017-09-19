// (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:597076,hjsv:5};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
// })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

!function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
    (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
    f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
    h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");


rg4js('apiKey', 'Tu9PXPBhlI1vanXAOophtA==');
rg4js('enableCrashReporting', true);
rg4js('enablePulse', true);