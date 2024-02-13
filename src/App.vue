<template>
  <header id="wrapper">
    <!--navbar-->   
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <h1 class="text-light ms-3 me-5"><router-link to="/" 
          class="text-decoration-none">ArianeKayla</router-link></h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" 
          id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><p><router-link to="/About" class="text-decoration-none nav-link mt-lg-2">About</router-link></p></li>
            <li class="nav-item"><p><router-link to="/careers" class="mx-lg-5 mx-0 text-decoration-none nav-link mt-lg-2">Careers</router-link></p></li>
            <li class="nav-item"><p><router-link to="/contact" class="me-lg-5 me-0  text-decoration-none nav-link mt-lg-2">Contact</router-link></p></li>
            <li class="nav-item"><a target="_blank" href="https://www.instagram.com/arianekaylaa/?hl=en"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
            <li class="nav-item"><a target="_blank" href="https://www.linkedin.com/in/ariane-kayla-4a073b294/"><span class="['fab', 'linkedin-in']"></span></a></li>
            
          </ul>
        </div>      
        </div>
      </nav>
    </header>
      <!--End of navbar-->
  <!--<router-link to="/test">test</router-link>-->
  <router-view/>  
</template>

<style lang="scss">
html, body, .row{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

main{
  min-height: calc(100vh - (header + footer));
}

.nav-item :hover{
  box-shadow: -5px, -5px, #777777;
}

nav{
  position: fixed;
}

footer{
  min-height: 50px;
  max-height: 50px;
  margin: 0;
  padding: 0;
  width: 100%;
}


</style>
