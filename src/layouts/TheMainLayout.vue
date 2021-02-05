<template>
  <div class="main-container">
    <TheSidebar/>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
export default {
  name: 'TheMainLayout',
  components: {
    TheSidebar
  }
}
</script>

<style lang="scss">

.main-container {
  min-height: 100vh;
  display: flex;
  color: #FFFEFC;
  @media (max-width: 650px){
    flex-direction: column;
  }
}

.main {
  flex: 1 1 auto;
  background-color: #2B2330;
}

</style>
