(()=>{"use strict";var e,t={310:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(294),o=n(181),s=n(798);class a extends i.Component{constructor(e){super(e),this.state={}}render(){return i.createElement("table",{id:"categoryChooserTable",className:"categoryChooserTable"},i.createElement("tbody",null,i.createElement("tr",{id:"CategoryOptionsRow",className:"categoryTableElement categoryTableHeader"},i.createElement("th",{id:"CategoryOptionName"},chrome.i18n.getMessage("category")),i.createElement("th",{id:"CategorySkipOption",className:"skipOption"},chrome.i18n.getMessage("skipOption")),i.createElement("th",{id:"CategoryColorOption",className:"colorOption"},chrome.i18n.getMessage("seekBarColor")),i.createElement("th",{id:"CategoryPreviewColorOption",className:"previewColorOption"},chrome.i18n.getMessage("previewColor"))),this.getCategorySkipOptions()))}getCategorySkipOptions(){const e=[];for(const t of o.categoryList)e.push(i.createElement(s.default,{category:t,key:t}));return e}}t.default=a},798:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(294),o=n(542),s=n(181),a=n(683),r=n(980);class c extends i.Component{constructor(e){var t,n;super(e),this.state={color:e.defaultColor||(null===(t=o.default.config.barTypes[this.props.category])||void 0===t?void 0:t.color),previewColor:e.defaultPreviewColor||(null===(n=o.default.config.barTypes["preview-"+this.props.category])||void 0===n?void 0:n.color)}}render(){let e="disable";for(const t of o.default.config.categorySelections)if(t.name===this.props.category){switch(t.option){case a.CategorySkipOption.ShowOverlay:e="showOverlay";break;case a.CategorySkipOption.ManualSkip:e="manualSkip";break;case a.CategorySkipOption.AutoSkip:e="autoSkip"}break}return i.createElement(i.Fragment,null,i.createElement("tr",{id:this.props.category+"OptionsRow",className:"categoryTableElement"},i.createElement("td",{id:this.props.category+"OptionName",className:"categoryTableLabel"},chrome.i18n.getMessage("category_"+this.props.category)),i.createElement("td",{id:this.props.category+"SkipOption",className:"skipOption"},i.createElement("select",{className:"optionsSelector",defaultValue:e,onChange:this.skipOptionSelected.bind(this)},this.getCategorySkipOptions())),i.createElement("td",{id:this.props.category+"ColorOption",className:"colorOption"},i.createElement("input",{className:"categoryColorTextBox option-text-box",type:"color",onChange:e=>this.setColorState(e,!1),value:this.state.color})),"exclusive_access"!==this.props.category&&i.createElement("td",{id:this.props.category+"PreviewColorOption",className:"previewColorOption"},i.createElement("input",{className:"categoryColorTextBox option-text-box",type:"color",onChange:e=>this.setColorState(e,!0),value:this.state.previewColor}))),i.createElement("tr",{id:this.props.category+"DescriptionRow",className:"small-description categoryTableDescription"},i.createElement("td",{colSpan:2},chrome.i18n.getMessage("category_"+this.props.category+"_description")," ",i.createElement("a",{href:s.wikiLinks[this.props.category],target:"_blank",rel:"noreferrer"},`${chrome.i18n.getMessage("LearnMore")}`))))}skipOptionSelected(e){let t;switch(this.removeCurrentCategorySelection(),e.target.value){case"disable":return;case"showOverlay":t=a.CategorySkipOption.ShowOverlay;break;case"manualSkip":t=a.CategorySkipOption.ManualSkip;break;case"autoSkip":t=a.CategorySkipOption.AutoSkip}o.default.config.categorySelections.push({name:this.props.category,option:t}),o.default.config.categorySelections=o.default.config.categorySelections}removeCurrentCategorySelection(){for(let e=0;e<o.default.config.categorySelections.length;e++)if(o.default.config.categorySelections[e].name===this.props.category){o.default.config.categorySelections.splice(e,1),o.default.config.categorySelections=o.default.config.categorySelections;break}}getCategorySkipOptions(){const e=[];let t=["disable","showOverlay","manualSkip","autoSkip"];"exclusive_access"===this.props.category&&(t=["disable","showOverlay"]);for(const n of t)e.push(i.createElement("option",{key:n,value:n},chrome.i18n.getMessage("disable"!==n?n+(0,r.getCategorySuffix)(this.props.category):n)));return e}setColorState(e,t){clearTimeout(this.setBarColorTimeout),t?(this.setState({previewColor:e.currentTarget.value}),o.default.config.barTypes["preview-"+this.props.category].color=e.currentTarget.value):(this.setState({color:e.currentTarget.value}),o.default.config.barTypes[this.props.category].color=e.currentTarget.value),this.setBarColorTimeout=setTimeout((()=>{o.default.config.barTypes=o.default.config.barTypes}),50)}}t.default=c},875:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(294),o=n(935),s=n(542),a=n(759),r=n(657);let c;class l extends i.Component{constructor(e){super(e),this.state={keybind:s.default.config[this.props.option]}}render(){var e,t,n,o,s,a,c;return i.createElement(i.Fragment,null,i.createElement("div",{className:"keybind-buttons inline",title:chrome.i18n.getMessage("change"),onClick:()=>this.openEditDialog()},(null===(e=this.state.keybind)||void 0===e?void 0:e.ctrl)&&i.createElement("div",{className:"key keyControl"},"Ctrl"),(null===(t=this.state.keybind)||void 0===t?void 0:t.ctrl)&&i.createElement("span",{className:"keyControl"},"+"),(null===(n=this.state.keybind)||void 0===n?void 0:n.alt)&&i.createElement("div",{className:"key keyAlt"},"Alt"),(null===(o=this.state.keybind)||void 0===o?void 0:o.alt)&&i.createElement("span",{className:"keyAlt"},"+"),(null===(s=this.state.keybind)||void 0===s?void 0:s.shift)&&i.createElement("div",{className:"key keyShift"},"Shift"),(null===(a=this.state.keybind)||void 0===a?void 0:a.shift)&&i.createElement("span",{className:"keyShift"},"+"),null!=(null===(c=this.state.keybind)||void 0===c?void 0:c.key)&&i.createElement("div",{className:"key keyBase"},(0,r.formatKey)(this.state.keybind.key)),null==this.state.keybind&&i.createElement("span",{className:"unbound"},chrome.i18n.getMessage("notSet"))),null!=this.state.keybind&&i.createElement("div",{className:"option-button trigger-button inline",onClick:()=>this.unbind()},chrome.i18n.getMessage("unbind")))}equals(e){return(0,r.keybindEquals)(this.state.keybind,e)}toString(){return(0,r.keybindToString)(this.state.keybind)}openEditDialog(){c=parent.document.createElement("div"),c.id="keybind-dialog",parent.document.body.prepend(c),o.render(i.createElement(a.default,{option:this.props.option,closeListener:e=>this.closeEditDialog(e)}),c)}closeEditDialog(e){o.unmountComponentAtNode(c),c.remove(),null!=e&&this.setState({keybind:e})}unbind(){this.setState({keybind:null}),s.default.config[this.props.option]=null}}t.default=l},759:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(294),o=n(542),s=n(657);class a extends i.Component{constructor(e){super(e),this.keybindKeyPressed=e=>{if(!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey||e.getModifierState("AltGraph"))){if("Escape"==e.code)return void this.props.closeListener(null);this.setState({key:{key:e.key,code:e.code,ctrl:this.state.key.ctrl,alt:this.state.key.alt,shift:this.state.key.shift}},(()=>this.setState({error:this.isKeybindAvailable()})))}},this.keybindModifierChecked=e=>{const t=e.target.id,n=e.target.checked;this.setState({key:{key:this.state.key.key,code:this.state.key.code,ctrl:"change-keybind-ctrl"==t?n:this.state.key.ctrl,alt:"change-keybind-alt"==t?n:this.state.key.alt,shift:"change-keybind-shift"==t?n:this.state.key.shift}},(()=>this.setState({error:this.isKeybindAvailable()})))},this.state={key:{key:null,code:null,ctrl:!1,alt:!1,shift:!1},error:{message:null,blocking:!1}}}render(){var e,t;return i.createElement(i.Fragment,null,i.createElement("div",{className:"blocker"}),i.createElement("div",{className:"dialog"},i.createElement("div",{id:"change-keybind-description"},chrome.i18n.getMessage("keybindDescription")),i.createElement("div",{id:"change-keybind-settings"},i.createElement("div",{id:"change-keybind-modifiers",className:"inline"},i.createElement("div",null,i.createElement("input",{id:"change-keybind-ctrl",type:"checkbox",onChange:this.keybindModifierChecked}),i.createElement("label",{htmlFor:"change-keybind-ctrl"},"Ctrl")),i.createElement("div",null,i.createElement("input",{id:"change-keybind-alt",type:"checkbox",onChange:this.keybindModifierChecked}),i.createElement("label",{htmlFor:"change-keybind-alt"},"Alt")),i.createElement("div",null,i.createElement("input",{id:"change-keybind-shift",type:"checkbox",onChange:this.keybindModifierChecked}),i.createElement("label",{htmlFor:"change-keybind-shift"},"Shift"))),i.createElement("div",{className:"key inline"},(0,s.formatKey)(this.state.key.key))),i.createElement("div",{id:"change-keybind-error"},null===(e=this.state.error)||void 0===e?void 0:e.message),i.createElement("div",{id:"change-keybind-buttons"},i.createElement("div",{className:"option-button save-button inline"+((null===(t=this.state.error)||void 0===t?void 0:t.blocking)||null==this.state.key.key?" disabled":""),onClick:()=>this.save()},chrome.i18n.getMessage("save")),i.createElement("div",{className:"option-button cancel-button inline",onClick:()=>this.props.closeListener(null)},chrome.i18n.getMessage("cancel")))))}componentDidMount(){parent.document.addEventListener("keydown",this.keybindKeyPressed),document.addEventListener("keydown",this.keybindKeyPressed)}componentWillUnmount(){parent.document.removeEventListener("keydown",this.keybindKeyPressed),document.removeEventListener("keydown",this.keybindKeyPressed)}isKeybindAvailable(){if(null==this.state.key.key)return null;let e;e=/[a-zA-Z0-9,.+\-\][:]/.test(this.state.key.key)?[{key:"k"},{key:"j"},{key:"l"},{key:"p",shift:!0},{key:"n",shift:!0},{key:","},{key:"."},{key:",",shift:!0},{key:".",shift:!0},{key:"ArrowRight"},{key:"ArrowLeft"},{key:"ArrowUp"},{key:"ArrowDown"},{key:"ArrowRight",ctrl:!0},{key:"ArrowLeft",ctrl:!0},{key:"c"},{key:"o"},{key:"w"},{key:"+"},{key:"-"},{key:"f"},{key:"t"},{key:"i"},{key:"m"},{key:"a"},{key:"s"},{key:"d"},{key:"Home"},{key:"End"},{key:"0"},{key:"1"},{key:"2"},{key:"3"},{key:"4"},{key:"5"},{key:"6"},{key:"7"},{key:"8"},{key:"9"},{key:"]"},{key:"["}]:[{key:null,code:"KeyK"},{key:null,code:"KeyJ"},{key:null,code:"KeyL"},{key:null,code:"KeyP",shift:!0},{key:null,code:"KeyN",shift:!0},{key:null,code:"Comma"},{key:null,code:"Period"},{key:null,code:"Comma",shift:!0},{key:null,code:"Period",shift:!0},{key:null,code:"Space"},{key:null,code:"KeyC"},{key:null,code:"KeyO"},{key:null,code:"KeyW"},{key:null,code:"Equal"},{key:null,code:"Minus"},{key:null,code:"KeyF"},{key:null,code:"KeyT"},{key:null,code:"KeyI"},{key:null,code:"KeyM"},{key:null,code:"KeyA"},{key:null,code:"KeyS"},{key:null,code:"KeyD"},{key:null,code:"BracketLeft"},{key:null,code:"BracketRight"}];for(const t of e){const e=Object.assign({},t);if(/[0-9]/.test(this.state.key.key)||(e.shift=!0),this.equals(t)||this.equals(e))return{message:chrome.i18n.getMessage("youtubeKeybindWarning"),blocking:!1}}return"skipKeybind"!=this.props.option&&this.equals(o.default.config.skipKeybind)||"submitKeybind"!=this.props.option&&this.equals(o.default.config.submitKeybind)||"startSponsorKeybind"!=this.props.option&&this.equals(o.default.config.startSponsorKeybind)?{message:chrome.i18n.getMessage("keyAlreadyUsed"),blocking:!0}:null}equals(e){return(0,s.keybindEquals)(this.state.key,e)}save(){var e;null==this.state.key.key||(null===(e=this.state.error)||void 0===e?void 0:e.blocking)||(o.default.config[this.props.option]=this.state.key,this.props.closeListener(this.state.key))}}t.default=a},555:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{c(i.next(e))}catch(e){s(e)}}function r(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(294),s=n(935),a=n(542),r=n(181),c=n(938);window.SB=a.default;const l=n(147),d=n(298),u=n(875),y=n(657),g=n(707),h=new l.default;let f=!1;function p(){const e=document.getElementById("options-container"),t=document.getElementById("options");!f&&window.pageYOffset>90&&(window.innerHeight<=770||window.innerWidth<=1200)?e.classList.contains("sticky")||(t.style.marginTop=t.offsetTop.toString()+"px",e.classList.add("sticky")):(t.style.marginTop="unset",e.classList.remove("sticky"))}function m(e){return i(this,void 0,void 0,(function*(){return"true"===e.getAttribute("data-private-only")&&!(yield new Promise((e=>chrome.extension.isAllowedIncognitoAccess(e))))||"true"===e.getAttribute("data-no-safari")&&"Apple Computer, Inc."===navigator.vendor}))}function k(){const e=document.getElementById("options").querySelectorAll("*");for(let t=0;t<e.length;t++)"display"===e[t].getAttribute("data-type")&&v(e[t])}function v(e){const t=e.getAttribute("data-sync"),n=a.default.config[t];switch(e.innerText=n,t){case"invidiousInstances":{e.innerText=n.join(", ");let t=n.length==c.length;for(let e=0;e<c.length&&t;e++)n[e]!=c[e]&&(t=!1);t||e.parentElement.querySelector(".invidious-instance-reset").classList.remove("hidden");break}}}function b(e,t){const n=e.querySelector(".option-text-box"),o=e.querySelector(".trigger-button"),s=e.querySelector(".text-change-set"),r=e.querySelector(".text-change-reset"),l=e.querySelector(".invidious-instance-reset");s.addEventListener("click",(function(){return i(this,void 0,void 0,(function*(){if(""==n.value||n.value.includes("/")||n.value.includes("http"))alert(chrome.i18n.getMessage("addInvidiousInstanceError"));else{let i=a.default.config[t];i||(i=[]),i.push(n.value),a.default.config[t]=i;const s=document.querySelector("#support-invidious input");s.checked=!0,E(s,"supportInvidious"),l.classList.remove("hidden"),n.value="",e.querySelector(".option-hidden-section").classList.add("hidden"),o.classList.remove("disabled")}}))})),r.addEventListener("click",(function(){return i(this,void 0,void 0,(function*(){n.value="",e.querySelector(".option-hidden-section").classList.add("hidden"),o.classList.remove("disabled")}))})),l.addEventListener("click",(function(){confirm(chrome.i18n.getMessage("resetInvidiousInstanceAlert"))&&(a.default.config[t]=c,l.classList.add("hidden"))}))}function S(e,t){let n=["declarativeContent"];h.isFirefox()&&(n=[]),chrome.permissions.contains({origins:h.getPermissionRegex(),permissions:n},(function(n){n!=e.checked&&(a.default.config[t]=n,e.checked=n)}))}function E(e,t){return i(this,void 0,void 0,(function*(){return new Promise((n=>{e.checked?h.setupExtraSitePermissions((function(i){i?e.checked=!0:(a.default.config[t]=!1,e.checked=!1),n()})):h.removeExtraSiteRegistration()}))}))}function C(e){const t=e.querySelector(".trigger-button");if(t.classList.contains("disabled"))return;t.classList.add("disabled");const n=e.querySelector(".option-text-box"),o=e.getAttribute("data-sync");if("invidiousInstances"===o)return void e.querySelector(".option-hidden-section").classList.remove("hidden");let s=a.default.config[o];"*"===o&&(s=JSON.stringify(a.default.cachedSyncConfig)),n.value=s;const r=e.querySelector(".text-change-set");r.addEventListener("click",(()=>i(this,void 0,void 0,(function*(){w(o,e,n.value)})))),"userID"===o&&a.default.config[o]&&h.asyncRequestToServer("GET","/api/userInfo",{userID:a.default.config[o],values:["warnings","banned"]}).then((e=>{const t=JSON.parse(e.responseText);(t.warnings>0||t.banned)&&r.classList.add("hidden")})),e.querySelector(".option-hidden-section").classList.remove("hidden")}function w(e,t,n,o){return i(this,void 0,void 0,(function*(){const i=t.getAttribute("data-confirm-message");if(null===i||confirm(chrome.i18n.getMessage(i)))if("*"===e)try{const e=JSON.parse(n);for(const t in e)a.default.config[t]=e[t];if(e.supportInvidious){const e=document.querySelector("#support-invidious > div > label > input");e.checked=!0,yield E(e,"supportInvidious")}window.location.reload()}catch(e){alert(chrome.i18n.getMessage("incorrectlyFormattedOptions"))}else a.default.config[e]=n;else"function"==typeof o&&o()}))}function L(){const e=document.createElement("a"),t=JSON.parse(JSON.stringify(a.default.cachedSyncConfig)),n=(new Date).toJSON().replace("T","_").replace(/:/g,".").replace(/.\d+Z/g,"");e.setAttribute("href",`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(t))}`),e.setAttribute("download",`SponsorBlockConfig_${n}.json`),document.body.append(e),e.click(),e.remove()}function O(e){if(1==e.target.files.length){const t=e.target.files[0],n=new FileReader,i=document.querySelector("[data-sync='*']");n.onload=function(t){w("*",i,t.target.result,(()=>{e.target.value=null}))},n.readAsText(t)}}function A(){const e={debug:{userAgent:navigator.userAgent,platform:navigator.platform,language:navigator.language,extensionVersion:chrome.runtime.getManifest().version},config:JSON.parse(JSON.stringify(a.default.cachedSyncConfig))};delete e.config.userID,e.config.serverAddress=e.config.serverAddress===r.serverAddress?"Default server address":"Custom server address",e.config.invidiousInstances=e.config.invidiousInstances.length,e.config.whitelistedChannels=e.config.whitelistedChannels.length,navigator.clipboard.writeText(JSON.stringify(e,null,4)).then((()=>{alert(chrome.i18n.getMessage("copyDebugInformationComplete"))})).catch((()=>{alert(chrome.i18n.getMessage("copyDebugInformationFailed"))}))}window.addEventListener("DOMContentLoaded",(function(){return i(this,void 0,void 0,(function*(){if((0,g.localizeHtmlPage)(),""!=location.hash){const e=location.hash.slice(1);let t=document.querySelector(`[data-for='${e}']`);null==t&&(t=document.querySelector("[data-for='behavior']")),t.classList.add("selected")}else document.querySelector("[data-for='behavior']").classList.add("selected");if(document.getElementById("version").innerText="v. "+chrome.runtime.getManifest().version,"#embed"===window.location.hash){f=!0;for(const e of document.getElementsByClassName("titleBar"))e.classList.add("hidden");document.getElementById("options").classList.add("embed"),p()}a.default.configSyncListeners.includes(k)||a.default.configSyncListeners.push(k),yield h.wait((()=>null!==a.default.config)),a.default.config.darkMode||document.documentElement.setAttribute("data-theme","light");const e=document.getElementById("sbDonate");e.addEventListener("click",(()=>a.default.config.donateClicked=a.default.config.donateClicked+1)),(0,y.showDonationLink)()||e.classList.add("hidden");const t=document.getElementById("options"),n=t.querySelectorAll("*");for(let e=0;e<n.length;e++){const r=n[e].getAttribute("data-dependent-on"),c=t.querySelector(`[data-sync='${r}']`);let l=!1;if(c&&(l="reverse"===c.getAttribute("data-toggle-type")||"true"===n[e].getAttribute("data-dependent-on-inverted")),((yield m(n[e]))||c&&(l?a.default.config[r]:!a.default.config[r]))&&(n[e].classList.add("hidden","hiding"),!c))continue;const y=n[e].getAttribute("data-sync");switch(n[e].getAttribute("data-type")){case"toggle":{const o=a.default.config[y],s=n[e].querySelector("input"),r="reverse"===n[e].getAttribute("data-toggle-type"),c=n[e].getAttribute("data-confirm-message"),l="false"!==n[e].getAttribute("data-confirm-on");null!=o&&(s.checked=r?!o:o),"supportInvidious"===y&&S(s,y),s.addEventListener("click",(()=>i(this,void 0,void 0,(function*(){if(c&&(l&&s.checked||!l&&!s.checked)&&!confirm(chrome.i18n.getMessage(c)))return void(s.checked=!s.checked);switch(a.default.config[y]=r?!s.checked:s.checked,y){case"supportInvidious":E(s,y);break;case"disableAutoSkip":s.checked||(a.default.config.dontShowNotice=!1,document.querySelector("[data-sync='dontShowNotice'] > div > label > input").checked=!0);break;case"showDonationLink":s.checked?document.getElementById("sbDonate").classList.add("hidden"):document.getElementById("sbDonate").classList.remove("hidden");break;case"darkMode":s.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light");break;case"trackDownvotes":s.checked||(a.default.local.downvotedSegments={})}const e=t.querySelectorAll(`[data-dependent-on='${y}']`);for(let t=0;t<e.length;t++){const n="true"===e[t].getAttribute("data-dependent-on-inverted");!(yield m(e[t]))&&(!n&&s.checked||n&&!s.checked)?(e[t].classList.remove("hidden"),setTimeout((()=>e[t].classList.remove("hiding")),1)):(e[t].classList.add("hiding"),setTimeout((()=>e[t].classList.add("hidden")),400))}}))));break}case"text-change":{const t=n[e].querySelector(".option-text-box"),o=n[e].querySelector(".text-change-set");t.value=a.default.config[y],o.addEventListener("click",(()=>i(this,void 0,void 0,(function*(){switch(y){case"serverAddress":{const n=(e=(e=(e=t.value).trim()).replace(/\/+$/,"")).startsWith("https://")||e.startsWith("http://")?e:(alert(chrome.i18n.getMessage("customAddressError")),null);if(null===n)return;if(t.value=n,h.isFirefox()&&!(yield new Promise((e=>{chrome.permissions.request({origins:[t.value+"/"],permissions:[]},e)}))))return;break}}var e;a.default.config[y]=t.value})))),n[e].querySelector(".text-change-reset").addEventListener("click",(()=>{confirm(chrome.i18n.getMessage("areYouSureReset"))&&(a.default.config[y]=a.default.syncDefaults[y],t.value=a.default.config[y])}));break}case"private-text-change":{n[e].querySelector(".trigger-button").addEventListener("click",(()=>C(n[e]))),"*"==y&&(n[e].querySelector(".download-button").addEventListener("click",L),n[e].querySelector(".upload-button").addEventListener("change",(e=>O(e))));const t=n[e].getAttribute("data-sync");"invidiousInstances"===t&&b(n[e],t);break}case"button-press":{const t=n[e].querySelector(".trigger-button"),i=n[e].getAttribute("data-confirm-message");t.addEventListener("click",(()=>{if(null===i||confirm(chrome.i18n.getMessage(i)))switch(n[e].getAttribute("data-sync")){case"copyDebugInformation":A();break;case"resetToDefault":a.default.resetToDefault(),window.location.reload()}}));break}case"keybind-change":s.render(o.createElement(u.default,{option:y}),n[e].querySelector("div"));break;case"display":v(n[e]);break;case"number-change":{const t=a.default.config[y],i=n[e].querySelector("input");isNaN(t)||t<0?i.value=a.default.syncDefaults[y]:i.value=t,i.addEventListener("input",(()=>{a.default.config[y]=i.value}));break}case"selector":{const t=a.default.config[y],i=n[e].querySelector(".selector-element");i.value=t,i.addEventListener("change",(()=>{let e=i.value;isNaN(Number(e))||(e=Number(e)),a.default.config[y]=e}));break}case"react-CategoryChooserComponent":new d.default(n[e])}}const r=document.getElementsByClassName("tab-heading");for(let e=0;e<r.length;e++){const n=r[e].getAttribute("data-for");r[e].classList.contains("selected")&&document.getElementById(n).classList.remove("hidden"),r[e].addEventListener("click",(()=>{f||(location.hash=n),p(),document.querySelectorAll(".tab-heading").forEach((e=>{e.classList.remove("selected")})),t.querySelectorAll(".option-group").forEach((e=>{e.classList.add("hidden")})),r[e].classList.add("selected"),document.getElementById(n).classList.remove("hidden")}))}window.addEventListener("scroll",(()=>p())),t.classList.add("animated")}))}))},298:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(294),o=n(935),s=n(310);t.default=class{constructor(e){o.render(i.createElement(s.default,null),e)}}}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,i),s.exports}i.m=t,e=[],i.O=(t,n,o,s)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,s]=e[d],r=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(i.O).every((e=>i.O[e](n[c])))?n.splice(c--,1):(r=!1,s<a&&(a=s));if(r){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={798:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,[a,r,c]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(c)var d=c(i)}for(t&&t(n);l<a.length;l++)s=a[l],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},n=self.webpackChunksponsorblock=self.webpackChunksponsorblock||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[736],(()=>i(555)));o=i.O(o)})();