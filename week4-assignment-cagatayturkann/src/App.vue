<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <SideBarComponent></SideBarComponent>
    <!-- End of Sidebar -->
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <NavbarComponent></NavbarComponent>
        <router-view/>
        <!-- End of Topbar -->
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->
  
        </div>
        <!-- End of Page Content -->
      </div>
      <!-- End of Main Content -->
      <!-- Footer -->
      <FooterComponent></FooterComponent>
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
  <!-- Logout Modal-->
  <LogoutComponent></LogoutComponent>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import LogoutComponent from './components/LogoutComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'
// import UsersComponent from './components/views/UsersComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SideBarComponent,
    FooterComponent,
    LogoutComponent,
    // UsersComponent
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
  /* margin-top: 60px; */
}

</style>
