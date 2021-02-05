<template>
  <div id="app">
    <TheMainLayout>
      <router-view/>
    </TheMainLayout>
  </div>
</template>

<script>
import TheMainLayout from '@/layouts/TheMainLayout'
export default {
  name: 'app',
  components: {
    TheMainLayout
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
*{padding: 0;margin: 0;border: 0;}
*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
html,body{font-family: 'Quicksand', sans-serif;height:100%;width:100%;line-height:1;font-size:100%;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding:0;border:0;}
a,a:visited,a:hover{text-decoration: none;}
ul, ol{list-style: none;}
img{vertical-align: top;width: 100%;height: 100%;object-fit: contain;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}
</style>
