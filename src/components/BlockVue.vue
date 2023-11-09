<template>
    <div v-if="showBlock" @click="funkcija()" class="block">
    </div>
</template>

<script>
export default {
    props: ['showBlock', 'vremePristignuvanje'],
    methods: {
        funkcija() {

            this.prikaziRezultati = true;
            this.vremeStisok = Date.now();
            var array = [this.prikaziRezultati, this.vremeStisok]
            this.$emit('bananica', array);


        },
    },
    data() {
        return {
            prikaziRezultati: false,
            vremeStisok: '',
        }
    },


}
</script>

<style>
.block {
    width: 150px;
    height: 150px;
    background-color: green;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 66%);
}
</style>

