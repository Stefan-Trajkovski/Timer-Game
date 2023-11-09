<template>
  <div id="#app">


    <button v-show="!showPlayAgain" @click="funkcija()" :disabled="buttonDisabled">Стисни да ја играш играта</button>
    <button v-show="showPlayAgain" @click="funkcija()">Играј повторно</button>
    <BlockVue :showBlock="showBlock" :vremePristignuvanje="vremePristignuvanje" @bananica="povratBlock"></BlockVue>

    <ResultsVue :razlika="razlika" :prikaziRezultati="prikaziRezultati"></ResultsVue>

  </div>
</template>

<script>
import BlockVue from './components/BlockVue.vue';
import ResultsVue from './components/ResultsVue.vue';


export default {
  name: 'App',
  components: {
    BlockVue,
    ResultsVue
  },
  methods: {
    funkcija() {
      this.prikaziRezultati = '';
      this.buttonDisabled = true;

      const randomNumber = (Math.random() * 2);
      setTimeout(() => {
        this.showBlock = true;
        this.vremePristignuvanje = Date.now();
      }, randomNumber * 1000)

    },
    povratBlock(value) {
      this.prikaziRezultati = value[0];
      this.vremeStisok = value[1];
      this.razlika = (this.vremeStisok - this.vremePristignuvanje) / 1000;
      this.showBlock = false;
      this.showPlayAgain = true;

    }





  },

  data() {
    return {
      showBlock: false,
      vremePristignuvanje: '',
      prikaziRezultati: '',
      vremeStisok: '',
      razlika: '',
      buttonDisabled: false,
      showPlayAgain: false,

    }
  }

}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
