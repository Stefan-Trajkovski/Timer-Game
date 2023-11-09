<template>
  <div v-if="prikaziRezultati" :disabled="t" class="results">

    <h1 style="color:rgb(208, 208, 152)">{{ this.uspeh }}</h1>


  </div>
</template>

<script>
export default {
  props: ['razlika', 'prikaziRezultati'],
  data() {
    return {
      uspeh: ''
    };
  },

  updated() {
    if (this.razlika <= 0.300) {
      this.uspeh = "Супер, ти си вистински гејмер, успеа да го стиснеш квадратот за: " + this.razlika + " секунди";
    } else if (this.razlika >= 0.301 && this.razlika <= 0.500) {
      this.uspeh = "Ти направи среден успех, притоа го стисна квадратот за: " + this.razlika + " секунди";
    } else {
      this.uspeh = "Многу си спор, го стисна квадратот за: " + this.razlika + " секунди";
    }
  }
};
</script>

<style></style>