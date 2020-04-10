/* repo: newsletter/HEAD@22d9be4 - Package Version: 2.10.0 - 2019-11-07 05:49 pm - User:  */
/*! newsletter service wrapper */
define(["webmd-xdm/1/webmd-xdm","newsletter/1/authmodule"],function(e,t){var i;return i={authModule:t,urlSubscribe:"https://www"+webmd.url.getEnv()+".webmd.com/api/reg/regapi.svc/secure/json2/subscribe2",urlUnsubscribe:"https://member"+webmd.url.getEnv()+".webmd.com/api/reg/regapi.svc/secure/json2/unsub",urlGetPromo:"/api/reg/regapi.svc/secure/jsonp/getnlappmapping",urlGetPromoImg:window.image_server_url+"/webmd/consumer_assets/site_images/registration/images/newsletterpromo/",urlAddChild:"https://member"+webmd.url.getEnv()+".webmd.com/api/reg/regapi.svc/secure/cds/addchild",urlUpdateChild:"https://member"+webmd.url.getEnv()+".webmd.com/api/reg/regapi.svc/secure/cds/updatechild",urlDeleteChild:"https://member"+webmd.url.getEnv()+".webmd.com/api/reg/regapi.svc/secure/cds/deletechild",urlGetChildren:"https://member"+webmd.url.getEnv()+".webmd.com/api/reg/regapi.svc/secure/cds/children",urlSubscribe2:"https://member"+webmd.url.getEnv()+".webmd.com/api/reg/regapi.svc/secure/json2/subscribe2",timeout:15e3,names:{11:"Allergies and Asthma",12:"Arthritis",13:"Breast Cancer",14:"Cancer",16:"Cholesterol Management",17:"Chronic Pain",18:"Diabetes",19:"Emotional Wellness",22:"Digestive Health",24:"Heart Health",26:"Men's Health",25:"Hypertension",27:"Multiple Sclerosis",28:"Parenting and Children's Health",29:"Rheumatoid Arthritis",35:"Women's Health",36:"WebMD Daily",40:"Healthy Bones",44:"Depression",45:"Fibromyalgia",60:"Alzheimer's",61:"Cold and Flu",62:"Menopause",63:"Oral Health",66:"ADD/ADHD",74:"COPD",77:"Healthy Cats",78:"Healthy Dogs",82:"Alternative Health",84:"Pregnancy and Baby",97:"Eye Health",261:"Your Health Insurance Guide",882:"Migraines",960:"Food & Fitness",962:"Good Health",1006:"Navigating Type 2 Diabetes"},promoDefault:{image:"default.png",url:webmd.url.addLifecycleAndEnv("https://www.webmd.com/"),description:"Always safe &amp; secure, sign up with WebMD today and take advantage of a full suite of tools and services designed to help you on your journey to becoming a healthier you.",button:"Sign Up Now",appid:1,isMobile:!1},subscribe:function(i){var n,s,a,r,d={};if(a=this,n=new $.Deferred,s=n.promise(),i=$.extend({timeout:a.timeout},i),i.id===void 0)throw"Missing newsletter id";if(!i.email)throw"Missing email address";return $.isArray(i.id)&&(i.id=i.id.join(",")),d.NLRequest={},d.NLRequest.NLIDS=i.id,d.Email=i.email,i.privacy&&(d.PPAccept=1),i.vendor&&(d.Vendor=i.vendor),i.publisher&&(d.publisher=i.publisher),i.campaign&&(d.campaign=i.campaign),clearTimeout(r),r=setTimeout(function(){n.reject(s,"timeout","Newsletter service timed out.")},i.timeout),e.receiverUrl=webmd.url.addLifecycleAndEnv("https://www.webmd.com/xdm-oo"),s=e.call({service:"regapi/subscribe2",data:JSON.stringify(d),headers:t.generate()}).done(function(e){if("success"===e.stat){if(!webmd.cookie.exists("WBMD_AUTH")&&!webmd.cookie.exists("WBMD_SAUTH")){var t=webmd.object.get("subscriberKey",e);a.cookieSet(t)}}else-52===e.code?n.reject(s,"readonly","Newsletter service is in readonly mode"):n.reject(s,"error","Newsletter service returned an error")}).fail(function(){webmd.debug("Service Failed!"),wmdPageLink("reg-error_l-nl")})},subscribe2:function(i){var n,s,a,r,d={};if(a=this,n=new $.Deferred,s=n.promise(),i=$.extend({timeout:a.timeout},i),!i.Email)throw"Missing email address";if(i.NLRequest){if(d.NLRequest={},i.NLRequest.NLIDS===void 0)throw"Missing newsletter id";d.NLRequest.NLIDS=$.isArray(i.NLRequest.NLIDS)?i.NLRequest.NLIDS.join(","):i.NLRequest.NLIDS}if(i.CDSRequest){if(d.CDSRequest={},!i.CDSRequest.dob)throw"Missing birthdate";i.CDSRequest.firstname&&(d.CDSRequest.firstname=i.CDSRequest.firstname),i.CDSRequest.name&&(d.CDSRequest.name=i.CDSRequest.name),d.CDSRequest.dob=i.CDSRequest.dob,d.CDSRequest.gender=i.CDSRequest.gender||2}return d.Email=i.Email,clearTimeout(r),r=setTimeout(function(){n.reject(s,"timeout","Newsletter service timed out.")},i.timeout),webmd.debug("service.unsubscribe settings: ",i),e.receiverUrl=webmd.url.addLifecycleAndEnv("https://www.webmd.com/xdm-oo"),s=e.call({service:"regapi/subscribe2",data:JSON.stringify(d),headers:t.generate()}).done(function(e){if("success"===e.stat){if(!webmd.cookie.exists("WBMD_AUTH")&&!webmd.cookie.exists("WBMD_SAUTH")){var t=webmd.object.get("subscriberKey",e);a.cookieSet(t),3===e.code&&(wmdPageLink("reg-success_l-nl"),webmd.debug("service.subscribe: New, light user registration"))}}else-52===e.code?n.reject(s,"readonly","Newsletter service is in readonly mode"):n.reject(s,"error","Newsletter service returned an error")}).fail(function(){webmd.debug("Service Failed!"),wmdPageLink("reg-error_l-nl")})},cookieSet:function(e){var t,i,n;t=new Date,t.setTime(t.getTime()+23328e6),i=";expires="+t.toUTCString(),n="WBMD_MB9",_dom=document.domain.split("."),c_domain=webmd.url.getSLD(),document.cookie=n+"="+e+"; path=/ ;domain="+c_domain+i},unsubscribe:function(e){var i,n,s,a,r;if(a=this,n=new $.Deferred,s=n.promise(),e=$.extend({timeout:a.timeout},e),e.nlids===void 0)throw"Missing newsletter id";if(!e.email)throw"Missing email address";$.isArray(e.nlids)||(e.nlids=JSON.parse("["+e.nlids+"]")),i={nlids:e.nlids,email:e.email},clearTimeout(r),r=setTimeout(function(){n.reject(s,"timeout","Newsletter service timed out.")},e.timeout),webmd.debug("service.unsubscribe settings: ",e);var d=t.generate();return $.ajax(a.urlUnsubscribe,{type:"post",data:JSON.stringify(i),contentType:"application/json",headers:d,success:function(e){clearTimeout(r),n.resolve(e)},error:function(e,t,i){n.reject(e,t,i)}}),s},getPromo:function(e){var i,n,s,a;if(a=this,i={},n=new $.Deferred,s=n.promise(),e=$.extend({mobile:!1,timeout:a.timeout},e),e.cdsPromo){if(e.dob===void 0)throw"Missing Child date of birth"}else{if(e.id===void 0)throw"Missing newsletter id";$.isArray(e.id)||(e.id=[e.id]),i.nls=e.id.join(",")}e.mobile&&(i.mobile=1),e.dob&&(i.dob=e.dob);var r=t.generate();return $.ajax(a.urlGetPromo,{method:"get",data:i,headers:r,success:function(e){function t(t){return webmd.object.get("d.data.nlAppMapping."+t,e)||""}var i,s,a;s=!1,i=t("appIdField"),-1==i&&(i="",s=!0),a={image:t("sourceIdField")+".png",url:t("retURLField"),description:t("valuePropField"),button:webmd.cookie.exists("WBMD_AUTH")&&s===!1?"Get Started":t("driverLanguageField"),appid:i,isMobile:s},a.url||(a={}),n.resolve(a)},error:function(e,t,i){n.reject(e,t,i)}}),s},gotoPromo:function(e){e.isMobile?window.location=e.url:require(["registration/1/regOverlay"],function(t){t.show({appid:e.appid,mode:"signup",returl:e.url,formValues:{email:e.email}})},function(){window.location=e.url})},addChild:function(i){var n,s={},a=this;if(i=$.extend({timeout:a.timeout},i),i.email===void 0&&!webmd.cookie.exists("WBMD_AUTH"))throw"Missing email address";if(!i.dob)throw"Missing birthdate";if(i.firstname&&(s.firstname=i.firstname),i.token&&(s.token=i.token),i.name&&(s.name=i.name),s.email=i.email,s.dob=i.dob,s.gender=i.gender||2,i.vendor&&(s.vendor=i.vendor),i.publisher&&(s.publisher=i.publisher),i.campaign&&(s.campaign=i.campaign),!i.privacy_policy_accept)throw"Privacy Policy must be accepted";return s.privacy_policy_accept=1,e.receiverUrl=webmd.url.addLifecycleAndEnv("https://www.webmd.com/xdm-oo"),n=e.call({service:"regapi/cds/addchild",data:JSON.stringify(s),headers:t.generate()}).done(function(e){if("success"===e.d.stat&&!webmd.cookie.exists("WBMD_AUTH")&&!webmd.cookie.exists("WBMD_SAUTH")){var t=webmd.object.get("subscriberKey",e.d);null!=t&&a.cookieSet(t)}}).fail(function(){webmd.debug("Service Failed!")})},updateChild:function(e){var i,n,s,a={},r=this;if(e=$.extend({timeout:r.timeout},e),!e.id||e.id===void 0)throw"id is required";if(!e.dob)throw"Missing birthdate";e.name&&(a.name=e.name),e.gender&&(a.gender=e.gender),i=new $.Deferred,n=i.promise(),e=$.extend({timeout:r.timeout},e),clearTimeout(s),s=setTimeout(function(){i.reject(n,"timeout","Newsletter service timed out.")},e.timeout),a.id=e.id,a.dob=e.dob,e.token&&(a.token=e.token);var d=t.generate();return $.ajax(r.urlUpdateChild,{type:"post",data:JSON.stringify(a),contentType:"application/json",headers:d,success:function(e){clearTimeout(s),i.resolve(e)},error:function(e,t,n){i.reject(e,t,n)}}),n},deleteChild:function(e){var i,n,s,a={},r=this;if(e=$.extend({timeout:r.timeout},e),!e.id||e.id===void 0)throw"id is required";e.token&&(a.token=e.token),a.id=e.id,i=new $.Deferred,n=i.promise(),e=$.extend({timeout:r.timeout},e),clearTimeout(s),s=setTimeout(function(){i.reject(n,"timeout","Newsletter service timed out.")},e.timeout);var d=t.generate();return $.ajax(r.urlDeleteChild,{type:"post",data:JSON.stringify(a),contentType:"application/json",headers:d,success:function(e){clearTimeout(s),i.resolve(e)},error:function(e,t,n){i.reject(e,t,n)}}),n},getChildren:function(e){var t,i;return t=this.urlGetChildren,e&&e.guid&&(t=t+"?token="+e.guid),i=$.getJSON(t)},getName:function(e){return this.names[e]||""}}});