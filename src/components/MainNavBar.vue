<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger shadow nav-gradient">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
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
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
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
  background: rgb(167,1,1); 
  background: linear-gradient(45deg, rgba(167,1,1,1) 0%, rgba(247,6,4,1) 100%);
}

/* Dropdown menu background color*/
.navbar-nav > li > .dropdown-menu {
  background: rgb(167,1,1); 
  background: linear-gradient(45deg, rgba(167,1,1,1) 0%, rgba(247,6,4,1) 100%);
}

/* Dropdown menu item text colour*/
.dropdown-menu .dropdown-item,
.dropdown-menu .dropdown-item:link {
  color: rgba(255, 255, 255, 0.55);
 }
 /* Dropdown menu item text colour when hovered over*/
.dropdown-menu .dropdown-item:hover {
  color: rgba(255, 255, 255, 0.75);
  background: rgb(167,1,1); 
  background: linear-gradient(45deg, rgba(167,1,1,1) 0%, rgba(247,6,4,1) 100%);
 }

</style>