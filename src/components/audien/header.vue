<template>
  <div class="flex-align header">
    <div class="left-header mobile-left-side">
      <div class="logo-align">
        <router-link to="/">
          <img :src="require('@/assets/media/Logo.png').default"
        /></router-link>
      </div>
    </div>
    <div
      class="right-header mobile-right-side back-office-page"
      :class="{ 'finish-page': isFinish }"
    >
      <div class="logo-align">
        <v-btn class="warning-button">
          <img :src="require('@/assets/media/lock.png')" />
          <span class="ml-2">Shop all hearing solutions</span>
        </v-btn>
      </div>
    </div>
    <div class="moobile-header" style="display: none">
      <div class="mobile-flex">
        <div>
          <router-link to="/">
            <img class="logo" :src="require('@/assets/media/logo-sm.png')" alt="logo"
          /></router-link>
        </div>

        <v-btn
          class="warning-button-outline mr-5"
          @click="$router.push('/completing-hearing')"
          color="#cc0000"
          rounded="pill"
          outlined
        >
          <img :src="require('@/assets/media/cart.png')" />
          <span class="ml-2">Shop all </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isFinish() {
      return /(finish)$/.test(this.$route.path);
    },
  },
};
</script>
<style scoped>
.header {
  /* height: auto;
  max-height: 10vh; */
}
@media only screen and (min-width: 300px) and (max-width: 800px) {
  .logo {
    display: block;
  }
  .moobile-header {
    display: block !important;
  }
  .left-header {
    display: none !important;
  }
  .right-header {
    display: none !important;
  }
  .mobile-flex {
    display: flex;
    justify-content: space-around !important;
    /* background: #102132; */
    height: 88px;
    width: 100vw;
    align-items: center;
  }
}
@media only screen and (min-width: 801px) and (max-width: 1400px) {
  .header {
    height: auto;
    max-height: 15vh;
  }
}
.warning-button-outline >>> .v-btn__content {
  font-family: "Lato";
  font-style: normal;
  font-weight: 800 !important;
  font-size: 1.7vh !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  color: #1E1D1B !important;
  border-radius: 10px !important;
  height: 10px !important;
}
.right-header.finish-page {
  /* background: #102132; */
}
</style>
