<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger shadow nav-gradient">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  Home
                </span>
            </RouterLink>
          </li>
          <li class="nav-item">
              <RouterLink to="/about" class="nav-link" aria-current="page">
                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                  About
                </span>
              </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" href="#">Action</a></li>
              <li><a class="dropdown-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" href="#">Another action</a></li>
              <li><a class="dropdown-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

/* main nav colour and gradient */
.nav-gradient {
  background: rgb(12,1,106);
  background: linear-gradient(117deg, rgba(12,1,106,1) 0%, rgba(26,9,205,1) 100%);
}

/* Dropdown menu background color*/
.navbar-nav > li > .dropdown-menu {
  background: rgb(12,1,106);
  background: linear-gradient(117deg, rgba(12,1,106,1) 0%, rgba(26,9,205,1) 100%);
  border: 0px;
}

/* Dropdown menu item text colour*/
.dropdown-menu .dropdown-item,
.dropdown-menu .dropdown-item:link {
  color: rgba(255, 255, 255, 0.55);
 }
 /* Dropdown menu item text colour when hovered over*/
.dropdown-menu .dropdown-item:hover {
  color: rgba(255, 255, 255, 0.75);
  background-color: rgba(0, 0, 0, 0);
 }

/* Dynamic Hamburger Icon */
/* https://jsfiddle.net/njhgr40m/ */

/* Remove border from toggler */
.navbar-toggler {
    border: 0 !important;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none !important;
    box-shadow: none !important;
    border: 0 !important;
}

/* Lines of the Toggler */
.toggler-icon{
    width: 30px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.75);
    display: block;
    transition: all 0.2s;
}

/* Adds Space between the lines */
.middle-bar{
    margin: 5px auto;
}

/* State when navbar is opened (START) */
.navbar-toggler .top-bar {
    transform: rotate(45deg);
    transform-origin: 10% 10%;
}

.navbar-toggler .middle-bar {
    opacity: 0;
    filter: alpha(opacity=0);
}

.navbar-toggler .bottom-bar {
    transform: rotate(-45deg);
    transform-origin: 10% 90%;
}

/* State when navbar is opened (END) */

/* State when navbar is collapsed (START) */
.navbar-toggler.collapsed .top-bar {
    transform: rotate(0);
}

.navbar-toggler.collapsed .middle-bar {
    opacity: 1;
    filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .bottom-bar {
    transform: rotate(0);
}

/* State when navbar is collapsed (END) */

/* Color of Toggler when collapsed */
.navbar-toggler.collapsed .toggler-icon {
    background-color: rgba(255, 255, 255, 0.75);
}

</style>
