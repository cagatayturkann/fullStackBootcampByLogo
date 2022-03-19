<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">
        SB Admin
        <sup>2</sup>
      </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item" v-on:click="setActive('home')" :class="{ active: isActive('home') }">
      <router-link to="/" class="nav-link">
        <i class="fas fa-house fa-cog"></i>
        <span>Home</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">JSONPLACEHOLDER API</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item" v-on:click="setActive('users')" :class="{ active: isActive('users') }">
      <router-link to="/users" class="nav-link">
        <i class="fas fa-fw fa-cog"></i>
        <span>Users</span>
      </router-link>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
      <router-link to="/users" class="nav-link">
        <i class="fas fa-fw fa-wrench"></i>
        <span>Comments</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">OTHER APIS</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item active">
      <router-link to="/users" class="nav-link">
        <i class="fas fa-fw fa-folder"></i>
        <span>Weather</span>
      </router-link>
    </li>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span>
      </a>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <a class="nav-link" href="tables.html">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
</template>/

<script>
export default {
  name: "SideBarComponent",
  data() {
    return { activeItem: 'home' }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
    }
  }
}
</script>
