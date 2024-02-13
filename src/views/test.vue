<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ArianeKayla</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Career</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Stuff
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Love</a></li>
            <li><a class="dropdown-item" href="#">Reset</a></li>
            <li><a class="dropdown-item" href="#">Change</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="row">
  <div class="col-lg-10 col-sm-12">
    <div>
      <figure id="1" class="mx-auto">
        <a href="#2"><img class="img-fluid p-3" src="../img/Photography/Dazed.jpeg"/></a>
        <figcaption class="text-center text-light">Dazed</figcaption>
      </figure>
    </div>
    <div>
      <figure id="2" class="mx-auto">
        <a href="#3"><img class="img-fluid p-3" src="../img/Photography/Jackie.jpeg"/></a>
        <figcaption class="text-center text-light">Jackie</figcaption>
      </figure>
    </div>
    <div>
      <figure id="3" class="mx-auto">
        <a href="#4"><img class="img-fluid p-3" src="../img/Photography/Twothreeseven.jpeg"/></a>
        <figcaption class="text-center text-light">Twothreeseven</figcaption>
      </figure>
    </div>
  </div>
  <div class="col-lg-2 d-none d-lg-block re">
    <div>
      <figure class="mx-auto">
        <a href="#1"><img class="w-25 img-thumbnail" src="../img/Photography/Dazed.jpeg"/></a>
      </figure>
    </div>
    <div>
      <figure class="mx-auto">
        <a href="#2"><img class="w-25 img-thumbnail" src="../img/Photography/Jackie.jpeg"/></a>
      </figure>
    </div>
    <div>
      <figure class="mx-auto">
        <a href="#3"><img class="w-25 img-thumbnail" src="../img/Photography/Twothreeseven.jpeg"/></a>
      </figure>
    </div>
    <div>
      <figure class="mx-auto">
        <a href="#4"><img class="w-25 img-thumbnail" src="../img/Photography/Wicked.jpeg"/></a>
      </figure>
    </div>
    <div>
      <figure class="mx-auto">
        <a href="#5"><img class="w-25 img-thumbnail" src="../img/Photography/Champagne.jpeg"/></a>
      </figure>
    </div>
  </div>
</div>
<div v-for="pics in Pic" v-bind:key="pics.id">
  <div>
    <figure>
      <img :src="pics.get_image" />
      <p>{{pics.title}}</p>
    </figure>
  </div>
</div>
<form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.re {
    margin-top: 25%;
    position: sticky;
    top: 0;
    right: 0;
    height: 100vh;
    overflow-y: scroll;
  }
</style>

<script>
import emailjs from '@emailjs/browser';

export default{
  methods: {
    sendEmail() {
      emailjs.sendForm('service_8jk7jb8', 'template_fm9ogvn', this.$refs.form, 'vNW6oObj3B3izAXUO')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
/*import axios from 'axios'

export default{
  data(){
    return{
      pic: []
    }
  },
  mounted(){
    this.getPic
  },
  methods: {
    getPic(){
      axios
        .get('/api/gallery/')
        .then(response => {
          this.Pic = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  } 
}*/
</script>