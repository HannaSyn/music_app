<template>
  <div class="sidebar">
      <router-link to="/" class="logo">Room4.fm</router-link>
      <nav class="navigation">
        <ul>
          <li class="navigation__item"><router-link to="/" class="navigation__link"><img src="../assets/icons/list.svg" alt="list">Tracks</router-link></li>
          <li class="navigation__item"><router-link to="/search" class="navigation__link"><img src="../assets/icons/search.svg" alt="search">Search</router-link></li>
        </ul>
      </nav>
    </div>
</template>

<style lang="scss">
.sidebar {
  flex: 0 0 25%;
  background-color: #151518;
  padding: 30px;
}
.logo {
  font-size: 32px;
  font-weight: 700;
  color: #8D8DAD;
  transition: 0.3s ease;
  &:hover{
    color: #585897;
  }
}
.navigation {
  margin: 60px 0 0;

		// .navigation__item

		&__item {
      margin: 0 0 20px;
		}

		// .navigation__link

		&__link {
      color: #c2c1be;
      line-height: 1em;
      font-size: 20px;
      transition: 0.3s ease;
      &:hover{
        color: #FFFEFC;
      }
      & img{
        width: 20px;
        margin: 0 20px 0 0;
      }
		}
}
</style>
