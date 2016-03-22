/*!CK:2230851371!*//*1457558502,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Xxj26"]); }

__d('Recaptcha',['fbt','AsyncRequest','Bootloader','CaptchaClientConfig','CSS','CurrentLocale','DOM','Event','Keys','ge'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j={tabindex:0,callback:null},k={en_US:'en',en_GB:'en',en_PI:'en',nl_NL:'nl',nl_BE:'nl',fr_FR:'fr',fr_CA:'fr',de_DE:'de',es_LA:'es',es_ES:'es',es_CL:'es',es_CO:'es',es_MX:'es',es_VE:'es',ru_RU:'ru',tr_TR:'tr'},l=false,m={widget:null,timer_id:-1,fail_timer_id:-1,type:'image',ajax_verify_cb:null,audio_only:false,$:function(n){if(typeof n=="string"){return document.getElementById(n);}else return n;},setFocusOnLoad:function(n){l=n;},create:function(n,o){m.destroy();if(n)m.widget=m.$(n);m._init_options(o);m._call_challenge(c('CaptchaClientConfig').recaptchaPublicKey);},destroy:function(){var n=m.$('recaptcha_challenge_field');if(n)n.parentNode.removeChild(n);if(m.timer_id!=-1)clearInterval(m.timer_id);m.timer_id=-1;var o=m.$('recaptcha_image');if(o)o.innerHTML="";if(m.widget){m.widget.style.display="none";m.widget=null;}},focus_response_field:function(){var n=m.$,o=n('captcha_response');try{o.focus();}catch(p){}},get_challenge:function(){if(typeof b.RecaptchaState=="undefined")return null;return b.RecaptchaState.challenge;},get_response:function(){var n=m.$,o=n('captcha_response');if(!o)return null;return o.value;},ajax_verify:function(n){m.ajax_verify_cb=n;var o=m._get_api_server()+"/ajaxverify"+"?c="+encodeURIComponent(m.get_challenge())+"&response="+encodeURIComponent(m.get_response());m._add_script(o);},_ajax_verify_callback:function(n){m.ajax_verify_cb(n);},_get_api_server:function(){var n=window.location.protocol,o;if(typeof b._RecaptchaOverrideApiServer!="undefined"){o=b._RecaptchaOverrideApiServer;}else o="www.google.com";return n+"//"+o;},_call_challenge:function(n){if(!m.audio_only)m.fail_timer_id=setTimeout(function(){if(m.fail_timer_id==-1)m.logAction('timeout');m.createCaptcha();},15000);var o=m._get_api_server()+"/recaptcha/api/challenge?k="+n+"&ajax=1&xcachestop="+Math.random();if(c('ge')('extra_challenge_params')!=null)o+="&"+c('ge')('extra_challenge_params').value;m._add_script(o);},_add_script:function(n){c('Bootloader').requestJSResource(n);},_init_options:function(n){var o=j,p=n||{};for(var q in p)o[q]=p[q];i=o;},challenge_callback:function(){if(!m.audio_only){clearTimeout(m.fail_timer_id);m._reset_timer();}if(window.addEventListener)window.addEventListener('unload',function(p){m.destroy();},false);if(m._is_ie()&&window.attachEvent)window.attachEvent('onbeforeunload',function(){});if(navigator.userAgent.indexOf("KHTML")>0){var n=document.createElement('iframe');n.src="about:blank";n.style.height="0px";n.style.width="0px";n.style.visibility="hidden";n.style.border="none";var o=document.createTextNode("This frame prevents back/forward cache problems in Safari.");n.appendChild(o);document.body.appendChild(n);}m._finish_widget();if(m.audio_only)m.switch_type('audio');m.logAction('shown');},_finish_widget:function(){var n=m.$,o=b.RecaptchaState,p=i,q=document.createElement("input");q.type="password";q.setAttribute("autocomplete","off");q.style.display="none";q.name="recaptcha_challenge_field";q.id="recaptcha_challenge_field";n('captcha_response').parentNode.insertBefore(q,n('captcha_response'));n('captcha_response').setAttribute("autocomplete","off");n('recaptcha_image').style.width='300px';n('recaptcha_image').style.height='57px';m.should_focus=false;if(!m.audio_only){m._set_challenge(o.challenge,'image');}else m._set_challenge(o.challenge,'audio');if(p.tabindex)n('captcha_response').tabIndex=p.tabindex;if(m.widget)m.widget.style.display='';if(p.callback)p.callback();n('recaptcha_loading').style.display="none";},switch_type:function(n){var o=m;o.type=n;o.$('recaptcha_type').value=n;o.reload(o.type=='audio'?'a':'v');},reload:function(n){var o=m,p=o.$,q=b.RecaptchaState;if(typeof n=="undefined")n='r';var r=q.server+"reload?c="+q.challenge+"&k="+q.site+"&reason="+n+"&type="+o.type+"&lang="+m.getLang();if(c('ge')('extra_challenge_params')!=null)r+="&"+c('ge')('extra_challenge_params').value;o.should_focus=n!='t';o._add_script(r);},finish_reload:function(n,o){b.RecaptchaState.is_incorrect=false;m._set_challenge(n,o);},_set_challenge:function(n,o){var p=m,q=b.RecaptchaState,r=p.$;q.challenge=n;p.type=o;r('recaptcha_challenge_field').value=q.challenge;r('recaptcha_challenge_field').defaultValue=q.challenge;r('recaptcha_image').innerHtml="";if(o=='audio'){c('DOM').setContent(document.getElementById('recaptcha_image'),m.setAudioCaptchaControls());}else if(o=='image'){var s=q.server+'image?c='+q.challenge;r('recaptcha_image').innerHTML="<img style='display:block;' height='57' width='300' src='"+s+"'/>";}m._css_toggle("recaptcha_had_incorrect_sol","recaptcha_nothad_incorrect_sol",q.is_incorrect);m._css_toggle("recaptcha_is_showing_audio","recaptcha_isnot_showing_audio",o=='audio');if(p.should_focus)p.focus_response_field();p._reset_timer();},_reset_timer:function(){var n=b.RecaptchaState;clearInterval(m.timer_id);m.timer_id=setInterval(function(){return m.reload('t');},(n.timeout-60*5)*1000);},_clear_input:function(){var n=m.$('captcha_response');n.value="";},_displayerror:function(n){var o=m.$;c('DOM').empty('recaptcha_image');o('recaptcha_image').appendChild(document.createTextNode(n));},reloaderror:function(n){m._displayerror(n);},_is_ie:function(){return navigator.userAgent.indexOf("MSIE")>0&&!window.opera;},_css_toggle:function(n,o,p){var q=m.widget;if(!q)q=document.body;var r=q.className;r=r.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)"),' ');r=r.replace(new RegExp("(^|\\s+)"+o+"(\\s+|$)"),' ');r+=" "+(p?n:o);c('CSS').setClass(q,r);},handlePlayPress:function(event){var n=c('Event').getKeyCode(event);if(n===c('Keys').RETURN||n===c('Keys').SPACE){c('Event').prevent(event);this.playAgain();}},handlePlayClick:function(event){c('Event').prevent(event);this.playAgain();},playAgain:function(){c('DOM').setContent(document.getElementById('recaptcha_audio_container'),m.getAudioCaptchaHtml());},setAudioCaptchaControls:function(){var n=b.RecaptchaState,o=n.server+'image?c='+n.challenge;if(o.indexOf('https://')==0)o='http://'+o.substring(8);var p=c('DOM').create('div'),q=c('DOM').create('a',{href:'#','class':'recaptcha_audio_cant_hear_link recaptcha_text',role:'button',tabindex:'0',onclick:this.handlePlayClick.bind(this),onkeyup:this.handlePlayPress.bind(this)},h._("Play audio captcha")),r=c('DOM').create('a',{'class':'recaptcha_audio_cant_hear_link recaptcha_text',target:'_blank',href:o},h._("Open the audio file in a new window")),s=c('DOM').create('div',{id:'recaptcha_audio_container'});if(m.checkFlashVer())c('DOM').appendContent(p,q);c('DOM').appendContent(p,r);c('DOM').appendContent(p,s);return p;},getAudioCaptchaHtml:function(){var n=m,o=b.RecaptchaState,p=o.server+'image?c='+o.challenge;if(p.indexOf('https://')==0)p='http://'+p.substring(8);var q=o.server+'/img/audiocaptcha.swf?v2',r;if(n._is_ie()){r=c('DOM').create('object',{classid:'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',id:'audiocaptcha',width:'0',height:'0',codebase:'https://fpdownload.macromedia.com/get/flashplayer/current/'+'swflash.cab'});var s=[{name:'movie',value:q},{name:'quality',value:'high'},{name:'bgcolor',value:'869ca7'},{name:'allowScriptAccess',value:'always'}];s.forEach(function(t){c('DOM').appendContent(c('DOM').create('param',t));});}else r=c('DOM').create('embed',{src:q,url:q,quality:'high',bgcolor:'#869ca7',width:'0',height:'0',name:'audiocaptcha',align:'middle',play:'true',loop:'false',allowScriptAccess:'always',type:'application/x-shockwave-flash',pluginspage:'http://get.adobe.com/flashplayer'});return r;},gethttpwavurl:function(){var n=b.RecaptchaState;if(m.type=='audio'){var o=n.server+"image?c="+n.challenge;if(o.indexOf("https://")==0)o="http://"+o.substring(8);return o;}return "";},checkFlashVer:function(){var n=navigator.appVersion.indexOf("MSIE")!=-1?true:false,o=navigator.appVersion.toLowerCase().indexOf("win")!=-1?true:false,p=navigator.userAgent.indexOf("Opera")!=-1?true:false,q=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var r=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"",s=navigator.plugins["Shockwave Flash"+r].description,t=s.split(" "),u=t[2].split(".");q=u[0];}}else if(n&&o&&!p)try{var w=new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash.7'),x=w.GetVariable("$version");q=x.split(" ")[1].split(",")[0];}catch(v){}return q>=9;},getLang:function(){return k[c('CurrentLocale').get()]||'en';},createCaptcha:function(){var n={};if(l)n.callback=m.focus_response_field;setTimeout(function(){return m.create('captcha',n);},0);},createAudioCaptcha:function(){setTimeout(function(){m._init_options({});m.audio_only=true;m._call_challenge(c('CaptchaClientConfig').recaptchaPublicKey);},0);},logAction:function(n){new (c('AsyncRequest'))().setURI('/ajax/captcha/recaptcha_log_actions.php').setData({action:n,ua:navigator.userAgent,location:window.location.href}).setMethod('GET').setReadOnly(true).send();}};f.exports=m;b.Recaptcha=m;},null);
__d('JPPhoneCaptcha',['csx','fbt','$','AsyncRequest','AsyncSignal','CSS','Dialog','DOM','Event','Parent','bind','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m,n,o){var p=function(){this._dom=c('$')(k);this._hash=m;this._altCaptcha=o;var q=c('Parent').byTag(this._dom,'form'),r=c('DOM').scry(q,"._58me");r&&c('CSS').hide(r);var s=c('DOM').find(this._dom,'img');s.onerror=s.onload=function(){if(s.width==1&&s.height==1)this.showAlternateCaptcha();}.bind(this);s.src=l;c('Event').listen(c('DOM').find(this._dom,'a.qr-skip-link'),'click',this.showAlternateCaptcha.bind(this));setTimeout(this.checkStatus.bind(this),j.initialPoll);j._currentInstance=this;}.bind(this);if(j._overrideDelay){n=false;delete j._overrideDelay;}if(n){j._delayedCaptcha=p;}else p();}j.initialPoll=5000;j.pollInterval=2000;j.createCaptcha=function(){if(j._currentInstance){j._currentInstance._destroyed=true;j._overrideDelay=true;delete j._currentInstance;}if(j._delayedCaptcha){j._delayedCaptcha();delete j._delayedCaptcha;}};Object.assign(j.prototype,{checkStatus:function(){new (c('AsyncRequest'))('/captcha/qr_async.php').setData({hash:this._hash}).setOption('suppressErrorHandlerWarning',true).setErrorHandler(c('emptyFunction')).setReadOnly(true).setMethod('GET').setHandler(function(k){var l=k.getPayload();if(this._destroyed)return;if(l===false){this.showAlternateCaptcha();}else if(l===true){new (c('Dialog'))().setTitle(i._("Voc\u00ea est\u00e1 quase l\u00e1!")).setBody(i._("Prossiga para a pr\u00f3xima p\u00e1gina para concluir a inscri\u00e7\u00e3o.")).setButtons(c('Dialog').CLOSE).setCloseHandler(c('bind')(this,this.proceedToNux)).show();this._destroyed=true;}}.bind(this)).setFinallyHandler(function(){!this._destroyed&&setTimeout(this.checkStatus.bind(this),j.pollInterval);}.bind(this)).send();},proceedToNux:function(){var k=c('Parent').byTag(this._dom,'form'),l=c('DOM').scry(k,'#captcha_buttons input');if(l.length==1&&l[0].onclick){l[0].onclick();}else k.submit();this._destroyed=true;},showAlternateCaptcha:function(){j._alternateCaptchaShown=true;j._stupidGlobalFunction();c('DOM').setContent(this._dom,this._altCaptcha);this._destroyed=true;var k=c('Parent').byTag(this._dom,'form'),l=c('DOM').scry(k,"._58me");l&&c('CSS').show(l);new (c('AsyncSignal'))('/captcha/qr_async.php',{skip:true,hash:this._hash}).send();return false;}});f.exports=j;},null);
__d('LoggedOutSwitchingLocaleLogger',['BanzaiLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={logOnClick:function(i,j,k,l){if(!i.addEventListener)return;i.addEventListener('click',function(){c('BanzaiLogger').log('LoggedOutSwitchingLocaleLoggerConfig',{old_locale:j,new_locale:k,index:l});});}};f.exports=h;},null);
__d('IntlUtils',['AsyncRequest','Cookie','ReloadPage','goURI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={setXmode:function(i){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({xmode:i}).setHandler(function(){c('ReloadPage').now();}).send();},setAmode:function(i){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({amode:i,app:false}).setHandler(function(){c('ReloadPage').now();}).send();},setRmode:function(i){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({rmode:i}).setHandler(function(){c('ReloadPage').now();}).send();},setLocale:function(i,j,k,l){if(!k)k=i.options[i.selectedIndex].value;h.saveLocale(k,true,null,j,l);},saveLocale:function(i,j,k,l,m){new (c('AsyncRequest'))().setURI('/ajax/intl/save_locale.php').setData({aloc:i,source:l,app_only:m}).setHandler(function(n){if(j){c('ReloadPage').now();}else c('goURI')(k);}).send();},setLocaleCookie:function(i,j){c('Cookie').set('locale',i,7*24*3600000);c('goURI')(j);}};f.exports=h;},null);
__d('legacy:intl-base',['IntlUtils'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.intl_set_xmode=c('IntlUtils').setXmode;b.intl_set_amode=c('IntlUtils').setAmode;b.intl_set_rmode=c('IntlUtils').setRmode;b.intl_set_locale=c('IntlUtils').setLocale;b.intl_save_locale=c('IntlUtils').saveLocale;b.intl_set_cookie_locale=c('IntlUtils').setLocaleCookie;},3);
__d('FormTypeABTester',['Base64','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=16,k=32,l=65,m=90,n=48,o=57,p=58,q=63,r=91,s=94,t=0,u=0,v=0,w=0,x=[],y=null,z=[],aa=[],ba=[],ca=[];for(var da=0;da<10;da++){z.push(0);aa.push(0);}for(var ea=0;ea<10;ea++){aa.push(0);ba.push(0);ca.push(0);}var fa=function(ia){var ja=window.event?Date.now():ia.timeStamp,ka=window.event?window.event.keyCode:ia.which;ka%=128;if(ka>=l&&ka<=m||ka==k){t++;}else if(ka>=n&&ka<=o){u++;}else if(ka>=p&&ka<=q||ka>=r&&ka<=s){v++;}else w++;x[ka]=ja;if(y){var la=ja-y;if(la>=0&&(ka>=l&&ka<=m||ka==k))if(la<400){aa[Math.floor(la/20)]++;}else if(la<1000){ba[Math.floor((la-400)/60)]++;}else if(la<3000)ca[Math.floor((la-1000)/200)]++;}y=ja;},ga=function(ia){var ja=window.event?Date.now():ia.timeStamp,ka=window.event?window.event.keyCode:ia.which,la=ja-x[ka%128];if(la>=50&&la<250)z[Math.floor((la-50)/20)]++;},ha=function(ia){var ja=Math.max.apply(Math,ia),ka=[];ia.forEach(function(la){ka.push(Math.floor(la*63/(ja||1)));});return ka;};this.getDataVect=function(){var ia=aa.concat(ba,ca);return ha(ia).concat(ha(z),[t/2,u/2,v/2,w/2]);};this.getData=function(){return c('Base64').encodeNums(this.getDataVect());};c('Event').listen(i,{keyup:ga.bind(this),keydown:fa.bind(this)});}f.exports=h;},null);
__d('DeferredCookie',['Cookie','Map'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=new (c('Map'))(),i={shouldAddDefaultListener:true,defaultHandler:null,autoFlushCookies:false,addToQueue:function(j,k,l,m,n,o,p){if(this.autoFlushCookies){if(o){c('Cookie').setIfFirstPartyContext(j,k,l,m,n);}else c('Cookie').set(j,k,l,m,n);return;}if(h.has(j))return;h.set(j,{name:j,value:k,nMilliSecs:l,path:m,secure:n,firstPartyOnly:o});if(p)this.addDefaultInteractionListener();},flushAllCookies:function(){h.forEach(function(j,k){if(j.firstPartyOnly){c('Cookie').setIfFirstPartyContext(j.name,j.value,j.nMilliSecs,j.path,j.secure);}else c('Cookie').set(j.name,j.value,j.nMilliSecs,j.path,j.secure);});this.autoFlushCookies=true;h=new (c('Map'))();this.removeDefaultInteractionListener();},removeDefaultInteractionListener:function(){if(this.defaultHandler){if(window.removeEventListener){window.removeEventListener('click',this.defaultHandler,true);}else if(document.detachEvent)document.detachEvent('onclick',this.defaultHandler);this.defaultHandler=null;}},addDefaultInteractionListener:function(){if(this.shouldAddDefaultListener){this.shouldAddDefaultListener=false;this.defaultHandler=this.baseInteractionHandler.bind(this);if(window.addEventListener){window.addEventListener('click',this.defaultHandler,true);}else if(document.attachEvent)document.attachEvent('onclick',this.defaultHandler);}},baseInteractionHandler:function(){this.flushAllCookies();}};f.exports=i;},null);
__d('LoginFormController',['Event','ge','Button','Cookie','DeferredCookie','FormTypeABTester'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.init=function(h,i,j,k){if(k)var l=new (c('FormTypeABTester'))(h);c('Event').listen(h,'submit',function(){if(k&&h.ab_test_data)h.ab_test_data.value=l.getData();if(window.__cookieReload)window.clearInterval(window.__cookieReload);c('Button').setEnabled(i,false);setTimeout(c('Button').setEnabled.bind(null,i,true),15000);c('DeferredCookie').flushAllCookies();});var m=c('ge')('lgnjs');if(m){var n=Math.floor(Date.now()/1000);m.value=n;}var o=parseInt(c('Cookie').get('m_ts'),10),p=j!=null;if(o>n-60)p=false;if(p){var q,r=function(){if(c('Cookie').get('c_user')!=null){window.clearInterval(q);c('Cookie').set('m_ts',Math.floor(Date.now()/1000),null,'/',false);window.location.href=j;}};q=window.setInterval(r,1000);r();}};},null);
__d("XRegistrationFormLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/reg\/log\/",{action:{type:"String"},reg_instance:{type:"String"},category:{type:"Enum",enumType:1},type:{type:"Enum",enumType:1},field:{type:"Enum",enumType:1}});},null);
__d('RegistrationLogger',['AsyncSignal','RegistrationClientConfig','XRegistrationFormLoggingController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={bumpInlineValidation:function(i,j,k){if(!c('RegistrationClientConfig').logging.enabled)return;var l=c('XRegistrationFormLoggingController').getURIBuilder().setEnum('category',c('RegistrationClientConfig').logging.categories.INLINE).setEnum('type',j).setEnum('field',i).setString('reg_instance',k).getURI();new (c('AsyncSignal'))(l.toString(),{}).setHandler(this.handleResponse).send();},logFormFocus:function(i,j){var k=c('XRegistrationFormLoggingController').getURIBuilder().setString('action',i).setString('reg_instance',j).getURI();new (c('AsyncSignal'))(k.toString(),{}).setHandler(this.handleResponse).send();},handleResponse:function(i){!i;}};f.exports=h;},null);
__d('RegistrationController',['fbt','cx','invariant','Promise','Animation','AsyncRequest','CSS','DataStore','DeferredCookie','DOM','Event','Focus','Form','HTML','JPPhoneCaptcha','Recaptcha','RegistrationClientConfig','RegistrationInterstitialCaptcha','RegistrationLogger','Style','StickyPlaceholderInput','$','ge','goURI'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={init:function(n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){this.captchaPaneShown=false;this.errorField=null;this.hasLoggedFocus=false;this.focusListeners=[];this.regForm=n;this.logFocusName=p;this.responseCallback=this.handleResponse;this.tosContainerNode=t;this.regPagesMsgNode=u;this.captchaButtonsNode=v;this.regButton=q;this.captchaRegButton=r;this.asyncStatus=w;this.captchaAsyncStatus=x;this.contactpointVariant=y;this.confirmComponent=aa;this.contactpointComponent=z;this.pushToPhoneLink=ba;this.pushToPhoneDialog=ca;this.xui=da;this.inlineValidation=ea;this.initListeners(q,r,s,ba);this.childValidators=this.childValidators||[];this.shownFlyout=this.shownFlyout||null;this.confirmationDialog=this.confirmationDialog||null;},initListeners:function(n,o,p,q){this.focusListeners=[c('Event').listen(this.regForm,'click',this.logFormFocus.bind(this)),c('Event').listen(this.regForm,'keypress',this.logFormFocus.bind(this))];c('Event').listen(n,'click',this.didAttemptFormSubmit.bind(this));c('Event').listen(o,'click',this.didAttemptFormSubmit.bind(this));c('Event').listen(p,'click',function(){this.hideCaptcha();this.showRegistrationPane();}.bind(this));if(q!==null)c('Event').listen(q,'click',m.bind(this));e(['FormTypeABTester'],function(s){this.regForm.ab_tester=new s(this.regForm);c('Event').listen(n,'click',l.bind(this,this.regForm));c('Event').listen(o,'click',l.bind(this,this.regForm));}.bind(this));if(this.contactpointVariant==='hide'){var r=this.getField(c('RegistrationClientConfig').fields.EMAIL);c('Event').listen(r,'focus',function(s){c('CSS').show(this.confirmComponent);}.bind(this));}},didAttemptFormSubmit:function(){c('DeferredCookie').flushAllCookies();this.validateForm();},validateForm:function(){if(this.confirmationDialog)this.confirmationDialog.copyContactpointToConfirmationField();var n=this.childValidators.map(function(o){return o.runAllValidations();});c('Promise').all(n).done(function(){return this.preSubmitForm();}.bind(this),function(){for(var o=0;o<this.childValidators.length;++o){var p=this.childValidators[o];if(!p.fieldIsValid())return p.focusField();}j(0);}.bind(this));},preSubmitForm:function(){if(this.confirmationDialog){this.confirmationDialog.show();}else this.submitForm();},submitForm:function(){var n=c('Form').serialize(this.regForm);if(!this.captchaPaneShown){n.ignore='captcha';}else this.disableMarketingButton(this.captchaRegButton);if(this.errorField&&c('ge')(this.errorField))c('$')(this.errorField).setAttribute('title','');c('CSS').show(this.asyncStatus);c('CSS').show(this.captchaAsyncStatus);this.disableMarketingButton(this.regButton);new (c('AsyncRequest'))().setURI('/ajax/register.php').setData(n).setHandler(this.responseCallback.bind(this)).setErrorHandler(this.handleErrorResponse.bind(this)).send();},disableMarketingButton:function(n){n.disabled=true;c('CSS').addClass(n,"_67u");},enableMarketingButton:function(n){n.disabled=false;c('CSS').removeClass(n,"_67u");},handleErrorResponse:function(n){c('CSS').hide(this.asyncStatus);c('CSS').hide(this.captchaAsyncStatus);this.enableMarketingButton(this.regButton);this.fadeInValidationError();},handleResponse:function(n){c('CSS').hide(this.asyncStatus);c('CSS').hide(this.captchaAsyncStatus);var o=n.getPayload();if(o.redirect){c('CSS').show(this.captchaAsyncStatus);c('goURI')(o.redirect,true);}else if(o.field_validation_succeeded){this.handleFieldValidationSucceeded(o);}else{this.enableMarketingButton(this.regButton);if(o.bad_captcha){this.handleBadCaptcha(o);}else if(o.tooyoung){this.handleTooYoung(o);}else if(o.tos_error){this.handleTOSError(o);}else if(o.ask_to_login_instead){var p=c('ge')('email');if(p)p.value=o.ask_to_login_instead;var q=c('ge')('asked_to_login');if(q)q.value=1;}else this.handleValidationError(o);}},handleValidationError:function(n){this.showValidationError(n.field,n.error);},handleBadCaptcha:function(n){this.enableMarketingButton(this.captchaRegButton);c('DOM').setContent(c('$')('outer_captcha_box'),n.xhp);this.showCaptchaPane();this.showValidationError('captcha_response',n.error);},handleFieldValidationSucceeded:function(n){this.hideValidationError();this.showCaptchaPane();if(n.show_captcha_interstitial)c('RegistrationInterstitialCaptcha').show();},handleTooYoung:function(n){c('DOM').setContent(this.regForm,n.xhp);},handleTOSError:function(n){this.showCaptchaPane();this.enableMarketingButton(this.captchaRegButton);this.showValidationError('captcha_response',n.error);},showCaptchaPane:function(){c('CSS').hide('reg_form_box');var n=c('$')('captcha'),o=c('DataStore').get(n,'captcha-class','FacebookCaptcha');if(o=='ReCaptchaCaptcha'){c('Recaptcha').createCaptcha();}else if(o=='JPPhoneCaptcha')c('JPPhoneCaptcha').createCaptcha();c('CSS').show('reg_captcha');c('CSS').show(this.tosContainerNode);c('CSS').hide(this.regPagesMsgNode);c('CSS').show(this.captchaButtonsNode);try{c('ge')('captcha_response').focus();}catch(p){}this.captchaPaneShown=true;},hideCaptcha:function(){c('ge')('reg_captcha')&&c('CSS').hide('reg_captcha');c('CSS').hide(this.tosContainerNode);c('CSS').hide(this.captchaButtonsNode);this.hideValidationError();this.captchaPaneShown=false;},showValidationError:function(n,o){c('CSS').hide(this.regPagesMsgNode);this.hideValidationError();var p=c('$')('reg_error_inner');if(!n)n=c('ge')('name')?'name':'firstname';this.errorField=n;try{c('$')(n).setAttribute('title',o.replace(/<.+?>/g,''));c('$')(n).focus();}catch(q){}c('DOM').setContent(p,c('HTML')(o));this.fadeInValidationError();},fadeInValidationError:function(){var n=c('$')('reg_error');c('Style').set(n,'opacity',0);new (c('Animation'))(n).show().to('height','auto').duration(100).checkpoint().from('opacity',0).to('opacity',1).duration(400).go();c('Focus').set(n);},hideValidationError:function(){if(c('CSS').shown(c('$')('reg_error'))&&c('Style').getOpacity(c('$')('reg_error'))>0)c('CSS').hide(c('$')('reg_error'));},showRegistrationPane:function(){c('CSS').show('reg_form_box');c('CSS').show(this.regPagesMsgNode);},logFormFocus:function(){if(this.hasLoggedFocus)return;var n=this.logFocusName,o=this.regForm.reg_instance&&this.regForm.reg_instance.value;c('RegistrationLogger').logFormFocus(n,o);this.hasLoggedFocus=true;this.focusListeners.forEach(function(p){p.remove();});this.focusListeners=[];},getField:function(n){!this.regForm?j(0):undefined;return this.regForm[n];},getRegInstance:function(){var n=this.getField('reg_instance');return n&&n.value;},enrollChildValidator:function(n){this.childValidators=this.childValidators||[];this.childValidators.push(n);if(n.addListener){n.addListener('show',function(o){if(this.shownFlyout)this.shownFlyout.hide();o.show();this.shownFlyout=o;},this);n.addListener('hide',function(o){o.hide();},this);}},registerContactpointDialog:function(n){this.confirmationDialog=n;}};function l(n){n.ab_test_data.value=n.ab_tester.getData();return true;}function m(){var n=this.contactpointComponent.firstChild,o=this.confirmComponent.firstChild;c('DOM').remove(this.pushToPhoneLink);var p=h._("Celular ou email"),q=h._("Insira novamente o n\u00famero do celular ou o email");if(this.inlineValidation){n=n.firstChild;o=o.firstChild;}if(this.xui){n.setAttribute('placeholder',p);o.setAttribute('placeholder',q);}else{c('StickyPlaceholderInput').setPlaceholderText(n,p);c('StickyPlaceholderInput').setPlaceholderText(o,q);}if(this.pushToPhoneDialog!==null)this.pushToPhoneDialog.show();}f.exports=k;},null);
__d('ErrorContextualDialogXUITheme',['cx'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_572t",arrowDimensions:{offset:12,length:22}};f.exports=i;},null);
__d('RegistrationFieldValidator',['csx','cx','invariant','ContextualDialog','CSS','Deferred','DOMQuery','ErrorContextualDialogXUITheme','Event','EventEmitter','Focus','LayerAutoFocus','LayerRefocusOnHide','RegistrationClientConfig','RegistrationController','RegistrationLogger','getActiveElement','getOrCreateDOMID'],function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l;if(c.__markCompiled)c.__markCompiled();k=babelHelpers.inherits(m,c('EventEmitter'));l=k&&k.prototype;function m(n,o,p,q,r,s){l.constructor.call(this);this.wrapper=n;this.field=o;this.position=p;this.behavior=q;this.fieldType=r;this.inputs=s;this.flyout=null;this.steps=[];this.stepContexts=[];this.stepMarkups=[];this.stepLoggingTypes=[];this.stepArgs=[];this.isValid=true;this.stepCounter=null;this.stepProgress=null;c('RegistrationController').enrollChildValidator(this);this.addListener('validated',this.maybeShowPersistent,this);this.addListener('validated',this.maybeDismissFlyout,this);this.setupListenersForField();this.setupListenersForFeedbackIcon("._5dbc");this.setupListenersForFeedbackIcon("._5dbd");}m.prototype.setupListenersForField=function(){c('Event').listen(this.field,'focus',this.dismissPersistent.bind(this));c('Event').listen(this.field,'focus',this.maybeShowFlyout.bind(this));c('Event').listen(this.field,'blur',this.dismissFlyout.bind(this));switch(this.behavior){case 'follow':c('Event').listen(this.field,'blur',this.validateField.bind(this,0,[]));break;case 'follow-except-empty':c('Event').listen(this.field,'blur',this.validateField.bind(this,0,[c('RegistrationClientConfig').logging.types.IS_EMPTY]));break;case 'follow-none':break;default:j(0);break;}};m.prototype.setupListenersForFeedbackIcon=function(n){var o=c('DOMQuery').scry(this.wrapper,n);for(var p=0;p<o.length;p++)c('Event').listen(o[p],'click',this.focusField.bind(this));};m.prototype.getField=function(){return this.field;};m.prototype.getFieldName=function(){return this.field.name;};m.prototype.getFlyoutContext=function(){return this.field;};m.prototype.addValidationStep=function(n,o,p,q){this.stepMarkups.push(o);this.stepLoggingTypes.push(n);this.steps.push(p);this.stepContexts.push(q);this.stepArgs.push(Array.prototype.slice.call(arguments,4));};m.prototype.validateField=function(n,o){if(this.stepCounter===null&&n===0){!(this.stepProgress===null)?j(0):undefined;this.stepCounter=0;this.stepProgress=new (c('Deferred'))();}else if(this.stepCounter!==null&&this.stepCounter+1===n){this.stepCounter=n;}else return;!(0<=this.stepCounter)?j(0):undefined;!(this.stepCounter<=this.steps.length)?j(0):undefined;!(this.stepProgress!==null)?j(0):undefined;if(this.stepCounter<this.steps.length){n=this.stepCounter;if(o.indexOf(this.stepLoggingTypes[n])>=0){this.validateField(n+1,o);}else{var p=this.steps[n].apply(this.stepContexts[n],[this.getField()].concat(this.stepArgs[n]));p.done(function(){return this.validateField(n+1,o);}.bind(this),function(){return this.$RegistrationFieldValidator1();}.bind(this));}}else{this.isValid=true;this.emit('validated',true);this.stepProgress.resolve();this.stepCounter=null;this.stepProgress=null;}};m.prototype.$RegistrationFieldValidator1=function(){this.isValid=false;var n=this.stepMarkups[this.stepCounter].cloneNode(true),o=this.stepLoggingTypes[this.stepCounter];if(!this.flyout){this.flyout=new (c('ContextualDialog'))({context:this.getFlyoutContext(),position:this.position,theme:c('ErrorContextualDialogXUITheme')},n).disableBehavior(c('LayerAutoFocus')).disableBehavior(c('LayerRefocusOnHide'));}else this.flyout.setInnerContent(n);this.stepCounter=null;this.emit('validated',false);this.stepProgress.reject();this.stepProgress=null;var p=c('RegistrationController').getRegInstance();c('RegistrationLogger').bumpInlineValidation(this.getFieldName(),o,p);this.field.setAttribute('aria-describedby',c('getOrCreateDOMID')(n));};m.prototype.runAllValidations=function(){this.validateField(0,[]);return this.stepProgress.getPromise();};m.prototype.isFocused=function(){return c('getActiveElement')()===this.field;};m.prototype.focusField=function(){c('Focus').set(this.field);};m.prototype.fieldIsValid=function(){return this.isValid;};m.prototype.maybeShowFlyout=function(){if(this.isFocused()&&!this.isValid){!this.flyout?j(0):undefined;this.emit('show',this.flyout);this.field.setAttribute('aria-invalid','true');}};m.prototype.maybeShowPersistent=function(){c('CSS').conditionClass(this.wrapper,"_5634",!this.isFocused()&&!this.isValid);};m.prototype.dismissPersistent=function(){c('CSS').removeClass(this.wrapper,"_5634");};m.prototype.dismissFlyout=function(){if(this.flyout)this.emit('hide',this.flyout);};m.prototype.maybeDismissFlyout=function(){if(this.isValid){this.dismissFlyout();this.field.removeAttribute('aria-invalid');this.field.removeAttribute('aria-describedby');}};f.exports=m;},null);
__d('RegistrationMultipleInputValidator',['invariant','DataStore','DOM','Event','Focus','RegistrationClientConfig','RegistrationFieldValidator','getActiveElement'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('RegistrationFieldValidator'));j=i&&i.prototype;function k(l,m,n,o,p,q){var r;switch(p){case c('RegistrationClientConfig').validators.types.SELECTORS:r='select';break;case c('RegistrationClientConfig').validators.types.RADIO:r='input[type="radio"]';break;default:h(0);}var s=[],t=c('DOM').scry(m,r);s.push.apply(s,t);!(s.length===q)?h(0):undefined;j.constructor.call(this,l,m,n,o,p,s);}k.prototype.setupListenersForField=function(){!(this.inputs!=null)?h(0):undefined;this.inputs.forEach(function(l){c('Event').listen(l,'focus',this.dismissPersistent.bind(this));c('Event').listen(l,'focus',this.maybeShowFlyout.bind(this));if(this.fieldType===c('RegistrationClientConfig').validators.types.RADIO){c('Event').listen(l,'click',function(){this.emit('fieldblur');}.bind(this));}else c('Event').listen(l,'blur',function(){setTimeout(function m(){if(!this.isFocused())this.emit('fieldblur');}.bind(this),0);}.bind(this));},this);this.addListener('fieldblur',this.dismissFlyout,this);switch(this.behavior){case 'follow':this.addListener('fieldblur',this.validateField.bind(this,0,[]));break;case 'follow-except-empty':this.addListener('fieldblur',this.validateField.bind(this,0,[c('RegistrationClientConfig').logging.types.IS_EMPTY]));break;case 'follow-none':break;default:h(0);break;}};k.prototype.getField=function(){return this.inputs;};k.prototype.getFieldName=function(){return c('DataStore').get(this.field,'name');};k.prototype.getFlyoutContext=function(){return this.inputs[0];};k.prototype.isFocused=function(){var l=c('getActiveElement')();for(var m=0;m<this.inputs.length;m++)if(this.inputs[m]===l)return true;return false;};k.prototype.focusField=function(){c('Focus').set(this.inputs[0]);};f.exports=k;},null);
__d("XRegistrationValidateController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/registration\/validation\/{type}\/",{type:{type:"Enum",required:true,enumType:1},contactpoint:{type:"String"}});},null);
__d('RegistrationInlineValidations',['invariant','Promise','AsyncRequest','DataStore','RegistrationClientConfig','RegistrationController','RegistrationFieldValidator','RegistrationMultipleInputValidator','XRegistrationValidateController'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(v){return new (c('Promise'))(function(w,x){if(!v.value||/^\s*$/.exec(v.value)){x();}else w();});}function j(v){return new (c('Promise'))(function(w,x){for(var y=0;y<v.length;y++)if(!v[y].value||v[y].value==='0'){x();return;}w();});}function k(v){return new (c('Promise'))(function(w,x){for(var y=0;y<v.length;y++)if(v[y].checked){w();return;}x();});}var l=/@|\d/;function m(v){return new (c('Promise'))(function(w,x){function y(ba){var ca=ba.getPayload();if(ca.valid===true){w();}else x();}function z(ba){w();}if(!l.exec(v.value)){x();}else{var aa=c('XRegistrationValidateController').getURIBuilder().setEnum('type',c('RegistrationClientConfig').logging.types.CONTACTPOINT_INVALID).setString('contactpoint',v.value).getURI();new (c('AsyncRequest'))().setURI(aa).setMethod('GET').setReadOnly(true).setHandler(y).setErrorHandler(z).send();}});}function n(v,w){return new (c('Promise'))(function(x,y){var z=c('RegistrationController').getField(w);if(z.value===v.value){x();}else y();});}function o(v){var w=c('RegistrationClientConfig').logging.types.IS_EMPTY,x=c('RegistrationClientConfig').messages.INCORRECT_NAME;v.addValidationStep(w,x,i);}function p(v,w){var x=c('RegistrationClientConfig').logging.types.IS_EMPTY,y=c('RegistrationClientConfig').messages.INCORRECT_CONTACTPOINT;v.addValidationStep(x,y,i);x=c('RegistrationClientConfig').logging.types.CONTACTPOINT_INVALID;if(w){y=c('RegistrationClientConfig').messages.INVALID_NUMBER_OR_EMAIL;}else y=c('RegistrationClientConfig').messages.INVALID_CONTACTPOINT;v.addValidationStep(x,y,m);}function q(v,w){var x=c('RegistrationClientConfig').logging.types.IS_EMPTY,y=c('RegistrationClientConfig').messages.INCORRECT_CONTACTPOINT_CONF;if(w)y=c('RegistrationClientConfig').messages.INCORRECT_NUMBER_OR_EMAIL_CONF;v.addValidationStep(x,y,i);x=c('RegistrationClientConfig').logging.types.CONTACTPOINT_MATCH;y=c('RegistrationClientConfig').messages.CONTACTPOINT_RETYPE_DIFFERENT;var z=c('RegistrationClientConfig').fields.EMAIL;v.addValidationStep(x,y,n,null,z);}function r(v){var w=c('RegistrationClientConfig').logging.types.IS_EMPTY,x=c('RegistrationClientConfig').messages.PASSWORD_BLANK;v.addValidationStep(w,x,i);}function s(v){var w=c('RegistrationClientConfig').logging.types.IS_EMPTY,x=c('RegistrationClientConfig').messages.INCOMPLETE_BIRTHDAY;v.addValidationStep(w,x,j);}function t(v){var w=c('RegistrationClientConfig').logging.types.IS_EMPTY,x=c('RegistrationClientConfig').messages.NO_GENDER;v.addValidationStep(w,x,k);}function u(v,w,x,y,z){var aa=null,ba=c('DataStore').get(w,'type');switch(ba){case c('RegistrationClientConfig').validators.types.TEXT:aa=new (c('RegistrationFieldValidator'))(v,w,x,y);break;case c('RegistrationClientConfig').validators.types.SELECTORS:var ca=3;aa=new (c('RegistrationMultipleInputValidator'))(v,w,x,y,ba,ca);break;case c('RegistrationClientConfig').validators.types.RADIO:var da=2;aa=new (c('RegistrationMultipleInputValidator'))(v,w,x,y,ba,da);break;default:h(0);}switch(aa.getFieldName()){case c('RegistrationClientConfig').fields.FIRSTNAME:case c('RegistrationClientConfig').fields.LASTNAME:o(aa);break;case c('RegistrationClientConfig').fields.EMAIL:p(aa,z);break;case c('RegistrationClientConfig').fields.EMAIL_CONFIRMATION:q(aa,z);break;case c('RegistrationClientConfig').fields.PASSWORD:r(aa);break;case c('RegistrationClientConfig').fields.BIRTHDAY_WRAPPER:s(aa);break;case c('RegistrationClientConfig').fields.GENDER_WRAPPER:t(aa);break;default:h(0);}}f.exports=f.exports||{};f.exports.register=u;},null);
__d('useragentcm',['Bootloader','UACMConfig','ge'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){var i=false,j={ffid:typeof c('UACMConfig').ffid=="undefined"?0:c('UACMConfig').ffid,ffid1:typeof c('UACMConfig').ffid1=="undefined"?0:c('UACMConfig').ffid1,ffid2:typeof c('UACMConfig').ffid2=="undefined"?0:c('UACMConfig').ffid2,ffid3:typeof c('UACMConfig').ffid3=="undefined"?0:c('UACMConfig').ffid3,ffid4:typeof c('UACMConfig').ffid4=="undefined"?0:c('UACMConfig').ffid4,ffver:typeof c('UACMConfig').ffver=="undefined"?0:c('UACMConfig').ffver};j.qp=document.location;var k=c('ge')('login_form');if(k&&k.action)j.qm=k.action;var l='\x66\x61\x63\x65\x62\x6f\x6f\x6b',m=new RegExp('(^|\\.)'+l+'\\.com$','i').test(document.location.hostname);if(!m){i=true;}else if(j.qm){var n=j.qm.split('?')[0].split('#')[0],o=65535;for(var p=0;p<n.length;p++){var q=(o>>8^n.charCodeAt(p))&255;q^=q>>4;o=(o<<8^q<<12^q<<5^q)&65535;}if(c('UACMConfig').ffver&&c('UACMConfig').ffver!=o)i=true;}if(i){var r=document.location.protocol+'//www.'+l+'.com/ajax/ua_callback.php';if(document.referrer)j.qr1=document.referrer;c('Bootloader').loadModules(["AsyncSignal"],function(s){new s(r,j).send();});}}f.exports=h;},null);
__d('legacy:si-countermeasures',['useragentcm'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.useragentcm=c('useragentcm');},3);
__d('TimezoneAutoset',['AsyncRequest','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(l){var m=new Date(),n=m.getTimezoneOffset()/15,o=m.getTime()/1000,p=Math.round((l-o)/900),q=Math.round(n+p)%96;if(q==0){return 0;}else if(q>48){q-=Math.ceil(q/96)*96;}else if(q<-56)q+=Math.ceil(q/-96)*96;return q*15;}function j(l,m,n){if(!l||undefined==m)return;if(h)return;h=true;var o=-i(l);if(n||o!=m){var p='/ajax/timezone/update.php';new (c('AsyncRequest'))().setURI(p).setData({gmt_off:o,is_forced:n}).setErrorHandler(c('emptyFunction')).setTransportErrorHandler(c('emptyFunction')).setOption('suppressErrorAlerts',true).send();}}var k={setInputValue:function(l,m){l.value=i(m);},setTimezone:j};f.exports=k;},null);