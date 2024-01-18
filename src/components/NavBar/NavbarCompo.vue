<template>
  <div class="wrapper">
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-logo">
        <router-link to="/" class="school-logo"
          >TFSSS Public School</router-link
        >
      </div>
      <div class="nav-links">
        <router-link class="nav-pages" to="/">Home</router-link> |
        <router-link class="nav-pages" to="/about">About</router-link> |
        <router-link class="nav-pages" to="/contact">Contact us</router-link>
      </div>
      <div class="login-links">
        <router-link class="login" to="/login">Login</router-link>
        <router-link class="signup" to="/signup">Sign up</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  width: 100%;
  z-index: 2;
}
.navbar {
  background-color: rgb(90, 10, 10);
  /* position: absolute; */
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  /* opacity: 0.5; */
}

.navbar.scrolled {
  /* background-color: rgb(90, 10, 10); */
  z-index: 2;
  opacity: 0.7;
}

.nav-logo {
  width: 35%;
}
.school-logo {
  color: white;
  font-size: 25px;
  transition: 0.5s ease-in-out;
}
.school-logo:hover {
  color: rgb(177, 176, 176);
  border-bottom: 10px solid #f73325;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.nav-links {
  width: 49%;
  font-size: 25px;
  display: flex;
  /* position: relative; */
}

.navbar .nav-pages {
  color: white;
  font-size: 25px;
  padding: 0 20px;
  text-decoration: none;
}
/* .nav-pages:hover {
  color: rgb(133, 133, 133);
  border-bottom: 1px solid red;
  transition: 0.5s;
} */
.nav-pages::after {
  content: "";
  width: 0%;
  height: 2px;
  background: #f73325;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.nav-pages:hover::after {
  width: 100%;
  color: rgb(133, 133, 133);
  font-size: x-large;
}

.login-links {
  display: flex;
}
.login-links a {
  color: white;
  padding: 0 10px;
  text-decoration: none;
}
.login-links a::after {
  content: "";
  width: 0%;
  height: 2px;
  background: #f73325;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.login-links a:hover::after {
  width: 100%;
  color: rgb(133, 133, 133);
  font-size: x-large;
}
</style>
