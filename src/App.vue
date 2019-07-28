<template>
  <div id="app">
    <header>
      <div class="position-relative page-header">
        <div class="banner-wrapper d-flex position-absolute w-100 h-100">
          <div class="terminal logo banner-caption-wrapper align-self-center text-center w-100">
            <h1 id="main-title" class="display-1 text-secondary logo text-uppercase mt-5 mt-md-4 mt-lg-0 mb-2">Terra{<img src="./assets/logo.png">}Code</h1>
          </div>
        </div>
      </div>
    </header>
    <section id="greeting">
      <h2>Школа программирования для детей</h2>
      <p>Добро пожаловать!</p>
    </section>
    <router-view/>
    <footer>
      <div class="footer-container">
        <div>
          <a href="https://terracode.ru"><h4 class="text">Terra{<img src="./assets/logo.png" width="30" height="30">}Code</h4></a>
          <p>IT пространство для детского творчества</p>
          <p class="copyright">&copy; 2019 <a href="https://terracode.ru">TerraCode</a>. All rights reserved.</p>
          <p class="copyright">Курсы программирования для детей</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #717171;
  text-align: left;
  font-family: "Cocon-Regular", sans-serif;
}

#app {
  font-family: "Cocon-Regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

header {
  box-sizing: border-box;
}

h1 {
  margin: 0;
}

@media (min-width: 1200px).page-header {
  min-height: 1000px;
}

a {
  text-decoration: none;
}

.position-relative {
  position: relative !important;
}

@media (min-width: 1200px).page-header {
  min-height: 1000px;
}

@media (min-width: 768px).page-header {
  min-height: 480px;
}

.page-header {
  min-height: 1000px;
  background: url("./assets/header.jpg") no-repeat center fixed;
  background-size: cover;
}

.h-100 {
  height: 100% !important;
}

.w-100 {
  width: 100% !important;
}

.position-absolute {
  position: absolute !important;
}

.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.banner-wrapper {
  top: 0;
  left: 0;
  z-index: 1;
}

.page-header::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.8;
  background-color: #17202A;
}

.text-center {
  text-align: center !important;
}

.w-100 {
  width: 100% !important;
}

.align-self-center {
  -ms-flex-item-align: center !important;
  align-self: center !important;
}

.page-header .navbar, .banner-caption-wrapper {
  z-index: 2;
}

@media (min-width: 1200px).display-1 {
  font-size: 6rem;
}

@media (min-width: 768px).display-1 {
  font-size: 4.5rem;
}

@media (min-width: 460px).display-1 {
  font-size: 3rem;
}

@media (min-width: 300px).display-1 {
  font-size: 2rem;
}

.display-1 {
  font-size: 3rem;
}

.text-secondary {
  color: #45b39d !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

@media (min-width: 992px).mt-lg-0, .my-lg-0 {
  margin-top: 0 !important;
}

@media (min-width: 768px).mt-md-4, .my-md-4 {
  margin-top: 1.5rem !important;
}

.mt-5, .my-5 {
  margin-top: 3rem !important;
}

.mb-2, .my-2 {
  margin-bottom: 0.5rem !important;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

#greeting {
  padding-bottom: 3rem !important;
  padding-top: 3rem !important;
  font-family: "Cocon-Regular", sans-serif;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: #0071bc;
}

footer {
  background: #17202a !important;
  padding-top: 3rem !important;
  color: rgba(255, 255, 255, 0.5) !important;
  margin-bottom: 0;
}

.footer-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1200px).footer-container {
    max-width: 1140px;
}

@media (min-width: 992px).footer-container {
    max-width: 960px;
}

@media (min-width: 768px).footer-container {
    max-width: 720px;
}

@media (min-width: 576px).footer-container {
    max-width: 540px;
}

.text {
  color: #45b39d !important;
  font-size: 1.5rem;
  text-transform: uppercase !important;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
}

.text-secondary {
  color: #45b39d !important;
  font-size: 6rem;
  text-transform: uppercase !important;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
}

.copyright {
  font-size: 0.75rem;
  color: rgba(255,255,255, 0.5);
  margin-bottom: 0;
  padding-bottom: 1rem;
}
</style>
