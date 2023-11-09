<template>
  <div class="backdrop">
    <div v-if="nesto" class="modal">
        <h1>Modal title</h1>
        <p>modal content</p>
        <p>{{header}}</p>
    </div>


<button @click="funkcija()"> Te molam klikni me </button>




  </div>
</template>

<script>
export default {
    // props:['header','pepe'],
data(){
    return{
        nesto:false
    }
},
methods:{
    funkcija(){
      console.log("Povikana e funkcijata kaj so se naogja customEventot");
      this.$emit('customClickEvent')
      this.nesto=!this.nesto;
    }, 
}
}
</script>

<style>
.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(176, 170, 231, 0.5); /* Add a semi-transparent background color */
  width: 100%;
  height: 100%;
  display: flex; /* Add flex display to center the modal */
  justify-content: center; /* Center the modal horizontally */
  align-items: center; /* Center the modal vertically */
}

.modal {
  width: 400px;
  background: red;
  padding: 20px;
  border-radius: 10px;
}
</style>