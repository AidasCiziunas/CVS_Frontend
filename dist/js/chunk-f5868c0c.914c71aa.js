(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5868c0c"],{"7c8b":function(e,t,a){"use strict";a.r(t);var s,i,o,n,r,d,c,u=a("8336"),l=function(){var e=this,t=e._self._c;return t("div",[t("headerVue"),t("div",{staticClass:"flex-align flex-mobile-align"},[t("div",{staticClass:"left-side mobile-left mobile-left-side"},[e._m(0),t("div",{staticClass:"radio-content"},[t("div",{staticClass:"example ex1 mt-5"},[t("label",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.ear,expression:"ear"}],attrs:{value:"-1",type:"radio",name:"group1"},domProps:{checked:e._q(e.ear,"-1")},on:{change:function(t){e.ear="-1"}}}),t("span",[t("div",{class:-1==e.ear?"yellow-circle-tick":"circle"}),t("img",{attrs:{src:a("1f76")}}),t("p",[e._v("Left")])])]),t("label",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.ear,expression:"ear"}],attrs:{type:"radio",name:"group1",value:"0"},domProps:{checked:e._q(e.ear,"0")},on:{change:function(t){e.ear="0"}}}),t("span",[t("div",{class:0==e.ear?"yellow-circle-tick":"circle"}),t("img",{attrs:{src:a("858d")}}),t("p",[e._v("Both")])])]),t("label",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.ear,expression:"ear"}],attrs:{type:"radio",name:"group1",value:"1"},domProps:{checked:e._q(e.ear,"1")},on:{change:function(t){e.ear="1"}}}),t("span",[t("div",{class:1==e.ear?"yellow-circle-tick":"circle"}),t("img",{attrs:{src:a("7dba")}}),t("p",[e._v("Right")])])])])]),t("div",{staticClass:"align-step-button mt-10"},[t(u["a"],{staticClass:"warning-button-outline mr-5 mt-10",attrs:{color:"#CC0000",outlined:""},on:{click:function(t){return e.$router.push("/best-result")}}},[t("img",{attrs:{src:a("9b60")}})]),t(u["a"],{staticClass:"warning-button mt-10",on:{click:function(t){return e.submitEar()}}},[e._v("Next step\n          "),t("img",{staticClass:"ml-2",attrs:{src:a("e0ca")}})]),t("audio",{ref:"test",attrs:{id:"audio",src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3",crossorigin:"anonymous"}})],1)]),t("div",{ref:"myBtn",staticClass:"back-office-page mobile-right right-side"},[t("headephone",{attrs:{isPlaying:""}})],1)]),t("footerVue")],1)},h=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"audien-title"},[t("p",{staticClass:"mb-10 steps"},[e._v("STEP 3 of 20")]),t("h1",[e._v("In which ear do you hear the sound?")])])}],p=a("eb4e"),f=a("0219"),m=a("2773"),v=a("e443"),g={components:{headephone:p["a"],footerVue:f["a"],headerVue:m["a"]},computed:{sound:function(){return this.audios[Math.floor(Math.random()*this.audios.length)]}},watch:{ear:function(e,t){0==e&&this.$awn.alert("Please use stereo headphones or earphones that do not have noise cancellation or any filters applied. Bluetooth headphones or earphones often have mono audio output only. Try using wired headphones or earphones.",{labels:{alert:"Unfortunately, your headphones are not supported by this test."}}),c.pan.value=e}},created:function(){"left"==this.$store.state.HearingTest.dataLog.ear&&(this.ear=-1),"both"==this.$store.state.HearingTest.dataLog.ear&&(this.ear=0),"right"==this.$store.state.HearingTest.dataLog.ear&&(this.ear=1),this.$refs.myBtn.click()},mounted:function(){this.$refs.myBtn.click(),this.refreshData(),setInterval(this.refreshData,5e3)},methods:{submitEar:function(){var e=this,t=0;0==this.ear&&(t="both"),1==this.ear&&(t="right"),-1==this.ear&&(t="left"),this.$store.state.HearingTest.ID&&null!=this.$store.state.HearingTest.ID?v["a"].post("ear?id="+this.$store.state.HearingTest.ID,{ear:t}).then((function(t){e.$router.push("/adjust-volume")})):v["a"].post("ear",{ear:t}).then((function(t){e.$router.push("/adjust-volume")}))},refreshData:function(){d=window.AudioContext||window.webkitAudioContext,i=new d,s=this.$refs.test,o={pan:-1},r=i.createMediaElementSource(s),c=new StereoPannerNode(i,o),n=i.createGain(),r.connect(n).connect(c).connect(i.destination),c.pan.value=this.ear,s.play()}},data:function(){return{ear:-1,audios:[{id:1,sound:a("e600")},{id:1,sound:a("13b0")},{id:1,sound:a("68a9")},{id:1,sound:a("2ff7")},{id:1,sound:a("3077")},{id:1,sound:a("6a00")},{id:1,sound:a("0bd9")},{id:1,sound:a("9918")},{id:1,sound:a("e7fe")},{id:1,sound:a("4d95")},{id:1,sound:a("91fc")},{id:1,sound:a("5289")},{id:1,sound:a("c51d")},{id:1,sound:a("253d")},{id:1,sound:a("485f")},{id:1,sound:a("6be7")}]}}},b=g,w=(a("e427"),a("2877")),y=Object(w["a"])(b,l,h,!1,null,"36242913",null);t["default"]=y.exports},d0b1:function(e,t,a){},e427:function(e,t,a){"use strict";a("d0b1")}}]);
//# sourceMappingURL=chunk-f5868c0c.914c71aa.js.map