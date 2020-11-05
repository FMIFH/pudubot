<template>
    <a href="home"> Home</a>
    <a href="robot">Register Robot</a>
    <a href="cliente">Register Client</a>
    <a href="dashboards">Dashboards</a>
</template>

<script>

</script>

<style>
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: gray;
  overflow-x: hidden;
  padding-top: 20px;
  border-radius: 0px 6px 0px 6px;
}

/* The navigation menu links */
.sidenav a {
  padding: 12px 16px 12px 16px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
</style>