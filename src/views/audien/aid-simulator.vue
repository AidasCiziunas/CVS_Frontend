<template>
  <div>
    <headerVue />
    <div class="flex-align flex-mobile-align">
      <div class="left-side mobile-left mobile-left-side">
        <div class="audien-title">
          <span class="mb-5 steps">STEP 20 of 20</span>
          <h1>Hearing aid simulator</h1>
        </div>
        <div class="radio-content mb-16">
          <div class="example ex1 mt-5">
            <label class="radio">
              <input v-model="ear" value="off" type="radio" name="group1" />
              <span>
                <div :class="ear == 'off' ? 'yellow-circle-tick' : 'circle'"></div>
                <img :src="require('@/assets/media/ear-off.png')" />
                <p>Hearing aid Off</p>
              </span>
            </label>
            <label class="radio">
              <input type="radio" name="group1" v-model="ear" value="on" />
              <span>
                <div :class="ear == 'on' ? 'yellow-circle-tick' : 'circle'"></div>
                <img :src="require('@/assets/media/ear.png')" />
                <p>Hearing aid On</p>
              </span>
            </label>
          </div>
        </div>
        <div class="align-step-button mt-16" style="margin-top: 20vh !important">
          <v-btn
            class="warning-button-outline mr-5 mt-2"
            @click="$router.push('/disclaimer')"
            color="#cc0000"
            outlined
          >
            <img :src="require('@/assets/media/arrow-right-1.png')"
          /></v-btn>

          <v-btn 
            class="warning-button mt-2" 
            @click="$router.push('/finish')"
          >
            Next Step
            <img class="ml-2" :src="require('@/assets/media/arrow-right.png')" />
          </v-btn>
        </div>
      </div>
      <div class="back-office-page mobile-right right-side">
        <headephone />
      </div>
    </div>
    <footerVue />
  </div>
</template>
<script>
import footerVue from "../../components/audien/footer.vue";
import headerVue from "../../components/audien/header.vue";
import headephone from "./headephone2.vue";

let audioElement,audioCtx,pannerOptions,gainNode,track,AudioContext,panner,hissGainParam
export default {
  components: {
    headephone,
    footerVue,
    headerVue,
  },
  watch: {
    // whenever question changes, this function will run
    ear(selectedEar, oldQuestion) {
     panner.pan.value = -1;
      // this.refreshData();
      	// panner.pan.value = newQuestion;	
    
    }
  },
 created(){
      
    this.$refs.myBtn.click()
    },
  mounted(){
    this.$refs.myBtn.click()
   
    //  this.refreshData()
    setInterval(this.refreshData, 5000)
  },
  data() {
    return {
      ear: "off",
      audio:false

    };
  },
  methods:{
   
   async  refreshData() {
    this.audio =true;
     try {
       AudioContext = await window.AudioContext || window.webkitAudioContext;
    } catch (error) {
      window.alert(
        `Sorry, but your browser doesn't support the Web Audio API!`
    );
    }
if (AudioContext !== undefined) {
      
 audioCtx = new AudioContext();

// load some sound
 audioElement = await  this.$refs.test;

 pannerOptions = {pan: -1};
 track = audioCtx.createMediaElementSource(audioElement);
 panner = new StereoPannerNode(audioCtx, pannerOptions);
 gainNode = audioCtx.createGain();
track.connect(gainNode).connect(panner).connect(audioCtx.destination);
      	panner.pan.value = -1;
       
      audioElement.play()
}
        
    }
  }
};
</script>
<style scoped>
.example label {
    margin-right: 20px;
}
@media only screen and (min-width: 401px) and (max-width: 800px) {
  .ex1 span {
    display: block;
    /* padding: 24px 4px 3px 11px; */
    /* border: 2px solid #142435; */
    background: #fff;
    border-radius: 5px;
    width: 38vw !important;
    /* height: 18vh !important; */
    padding-top: 27px !important;
    position: relative;
    border-radius: 10px;
    -webkit-transition: all 0.25s linear;
    transition: all 0.25s linear;
    text-align: center;
    min-width: 150px;
  }
  .ex1 span p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 1vw;
    line-height: 3vh !important;
    width: 9vh !important;
    /* line-height: 58px; */
    margin-right: auto;
    margin-left: auto;
    /* display: flex; */
    /* align-items: center; */
    /* text-align: center; */
    color: #ffffff;
  }
}
.radio-content {
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  /* width: 34vw; */
  /* max-width: 39vw; */
  min-width: 26vw;
  margin-left: 10.6vw;
  margin-right: auto;
}
.ex1 span {
  padding-bottom: 20px;
  display: block;
  /* padding: 24px 4px 3px 11px; */
  background: #fff;
  border-radius: 5px;
  width: 11vw;
  /* height: 8.2vw; */
  padding-top: 27px;
  position: relative;
  border-radius: 10px;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.24);
}
.footer {
  height: 100px;
  background: #07121c;
  display: flex;
  justify-content: space-around;
}
.flex-align {
  display: flex;
  flex-direction: row;
}
.ex1 span img {
  width: 2vw;
  margin: 0 auto;
  position: relative;
  bottom: 0.6vw;
}
/* .ex1 span[data-v-a396c8c0] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  border: 2px solid #142435;
  background: #1f2f40;
  border-radius: 5px;
  width: 11vw;
  height: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  padding-bottom: 7px;
  border-radius: 10px;
  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;
  text-align: center;
} */
.ex1 span p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  line-height: 3vh;
  width: 10vh;
  margin-right: auto;
  margin-left: auto;
  /* display: flex; */
  /* align-items: center; */
  /* text-align: center; */
  color: #1E1D1B;
}
.button-label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* or 130% */

  text-align: center;

  color: #ffffff;
}
@media only screen and (max-width: 800px) {
  .radio-content {
    margin: 0;
  }
  .example label {
    margin-right: 0;
  }
}
</style>
