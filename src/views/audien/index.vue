<template>
  <div>
    <headerVue />
    <div class="flex-align">
      <div class="left-side mobile-left-side">
        <div class="audien-title">
          <h1>Take a <span>hearing</span> screener</h1>
          <p>
            This screener reflects your ability to understand speech in the
            presence of background noise, something individuals with hearing
            difficulty typically struggle with
          </p>
        </div>
        <div class="align-content-space-between mt-10">
          <div class="media">
            <div class="mt-1">
              <v-btn color="#F2F2F2;" class="mr-1" height="60">
                <img :src="require('@/assets/media/timer.png')"
              /></v-btn>
            </div>
            <div class="media-content mt-2 ml-1 mr-3">
              <p class="mb-1">COMPLETION TIME</p>

              <span>2 minutes</span>
            </div>
          </div>
          <div class="media">
            <div class="mt-1">
              <v-btn color="#F2F2F2;" class="mr-1" height="60">
                <img :src="require('@/assets/media/user.png')"
              /></v-btn>
            </div>
            <div class="media-content mt-2 ml-1">
              <p class="mb-1">Personal info</p>

              <span>3 questions</span>
            </div>
          </div>
        </div>
        <div class="start-btn-sm">
          <div class="button-start">
            <div class="gradient-one">
              <div class="gradient-two">
                <button @click="$router.push('/birth-day')" class="get-start">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side mobile-right-side back-office-page banner-with-person">
        <div class="banner-button-start">
          <div class="gradient-one">
            <div class="gradient-two">
              <button @click="$router.push('/birth-day')" class="get-start">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="banner-image">
          <img :src="require('@/assets/media/photo.png').default" />
        </div>
      </div>
    </div>
    <footerVue />
  </div>
</template>
<script>
import footerVue from '@/components/audien/footer.vue';
import headerVue from '@/components/audien/header.vue';
export default {
  components: {
    footerVue,
    headerVue,
  },
  mounted(){
     this.$store.dispatch('resetStore')
  }
};
</script>
<style scoped>
.banner-with-person > .banner-image {
  left: -2vw;
}
@media only screen and (min-width: 801px) {
  .start-btn-sm {
    display: none;
  }
  .audien-title p {
    margin-top: 40px;
  }
}
@media only screen and (min-width: 300px) and (max-width: 400px) {
  .button-start {
    /* position: absolute;
    left: -3% !important;
    right: 20% !important;
    top: 55vh; */
    display: inline-block;
  }
  .border-bottom {
    display: none;
  }

  .get-start {
    width: 20vh !important;
    height: 20vh !important;
    position: relative;
    /* left: 2.3vh !important;
    top: 2.9vh !important; */
    background: #CC0000;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    font-size: 3vh;
    /* line-height: 6vh; */
    /* padding-left: 2vh; */
    /* padding-right: 2vh; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    /* letter-spacing: 0.1em; */
    text-transform: uppercase;
    color: #102132;
    border-radius: 50%;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .gradient-two {
    position: relative;
    /* top: 0px; */
    border-radius: 50%;
    z-index: 1;
    /* margin: -5.1vw; */
    width: 25vh !important;
    height: 25vh !important;
  }
  .gradient-one {
    position: relative;
    /* top: 0px; */
    border-radius: 50%;
    z-index: 1;
    /* margin: -5.1vw; */
    width: 30vh ;
    height: 30vh ;
  }
  .start-btn-sm {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-side {
    min-height: 100vh;
    height: auto;
    width: 100vw;
  }
  .audien-title p {
    min-width: 78vw;
    /* width: 82vw; */
    font-size: 14px;
    line-height: 24px;
  }
  .align-content-space-between {
    margin: 0 10px;
    width: calc(100vw - 20px) !important;
  }
  .audien-title h1 {
    font-size: 48px !important;
    line-height: 56px !important;
    margin-bottom: 20px;
  }
}
@media only screen and (min-width: 401px) and (max-width: 800px) {
  .audien-title h1 {
    font-size: 48px !important;
    line-height: 56px !important;
    margin-bottom: 20px;
  }
  .left-side {
    height: 100vh;
    width: 100vw;
  }
  .mobile-right-side {
    display: none !important;
  }
  .start-btn-sm {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .audien-title p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    /* font-size: 20px; */
    /* min-width: 80vw; */
    text-align: center;
    /* width: 80vw; */
    line-height: 4vh;
    /* color: #ffffff; */

    font-size: 1rem;
  }
  .gradient-two {
    position: relative;
    /* top: 0px; */
    border-radius: 50%;
    z-index: 1;
    /* margin: -5.1vw; */
    width: 28vh !important;
    height: 28vh !important;
   
  }
  .gradient-one {
    position: relative;
    /* top: 0px; */
    border-radius: 50%;
    z-index: 1;
    /* margin: -5.1vw; */
    width: 33vh !important;
    height: 33vh !important;
  }
  .get-start {
    width: 22vh !important;
    height: 22vh !important;
    position: relative;
    /* left: 3.3vh !important; */
    /* top: 2.9vh !important; */
    background: #CC0000;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    font-size: 3vh;
    /* line-height: 6vh; */
    /* padding-left: 2vh; */
    /* padding-right: 2vh; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    /* letter-spacing: 0.1em; */
    text-transform: uppercase;
    color: #102132;
    border-radius: 50%;
  }
  .align-content-space-between {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 12px;
    line-height: 20px;
    gap: 3vw;
  }
}

.get-start {
  width: 22vh;
  height: 22vh;
  position: relative;
  /* left: 3.3vh; */
  /* top: 2.9vh; */
  background: #CC0000;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 800;
  font-size: 3vh;
  /* line-height: 6vh; */
  /* padding-left: 2vh; */
  /* padding-right: 2vh; */
  padding: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  /* letter-spacing: 0.1em; */
  text-transform: uppercase;
  color: #FFFFFF;
  border-radius: 50%;
}
.gradient-two {
  display: flex;  
  align-items: center;
  justify-content: center;

  position: relative;
  top: 0px;
  border-radius: 50%;
  z-index: 1;
  /* margin: -5.1vw; */
  /* width: 32vh; */
  /* height: 32vh; */
  /* bottom: 24px !important; */
  /* top: 3vh; */
  /* left: 1.5vw; */
  padding: 1.7rem;
  /* background: -webkit-gradient(
    linear,
    right top,
    left top,
    color-stop(26%, #ffffff3b),
    color-stop(151%, rgb(255 180 4 / 2%))
  );
  background: linear-gradient(270deg, #ffffff12 26%, rgb(255 180 4 / 2%) 151%); */
  background: linear-gradient(180deg, #0000001a 0%, rgba(255, 255, 255, 0) 100%);
  /* background: linear-gradient(180deg, #0000001a 0%, rgba(255, 255, 255, 0) 100%); */
  /* opacity: 0.1; */
}
.gradient-one {
  display: flex;  
  align-items: center;
  justify-content: center;

  position: relative;
  top: 0px;
  border-radius: 50%;
  z-index: 1;
  /* margin: -5.1vw; */
  /* width: 38vh; */
  /* height: 38vh; */
  /* bottom: 24px; */
  /* top: 5vh; */
  /* left: 6vw; */
  padding: 1.7em;
  background: linear-gradient(180deg, #0000001a 0%, rgba(255, 255, 255, 0) 100%);
}
.banner-button-start {
  position: absolute; 
  top: 23vh;
  left: -17vh;
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
</style>
