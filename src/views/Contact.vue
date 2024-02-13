<template>
  <body>
  <fieldset>
    <legend class="display-2 text-light text-center">Contact Form</legend>
  <form @submit.prevent="submitForm" id="contact-form" class="container-fluid text-light border border-light border-3">
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" v-model="user_name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" name="email" v-model="user_email" required>
    </div>
    <div>
      <label for="phone">Phone Number:</label>
      <input type="tel" name="phone" v-model="phone" required>
    </div>
    <div>
      <label for="reason">Reason for Contact:</label>
      <select name="reason" v-model="user_reason" required>
        <option class="text-light" value="collaboration">Collaboration</option>
        <option class="text-light" value="consulting">Consulting</option>
        <option class="text-light" value="commission">Commission</option>
        <option class="text-light" value="other">Other</option>
      </select>
    </div>
    <div v-if="user_reason === 'other'">
      <label for="otherReason">Other Reason:</label>
      <input type="text" name="otherReason" v-model="user_otherReason" required>
    </div>
    <div>
      <label for="time">Time:</label>
      <input type="datetime-local" name="time" v-model="user_time" required>
    </div>
    <button type="submit" class="btn btn-dark text-light">Submit</button>
  </form>
  </fieldset>
  <h2 class="text-center">Alternate Contact Options</h2>
  <div class="container-fluid ms-auto">
    <div class="row">
      <div class="w-25 ms-auto col-4">
        <a target="_blank" href="https://www.instagram.com/arianekaylaa/?hl=en"><CIcon icon="cibInstagram" class="w-25"/></a>
      </div>
      <div class="w-25 col-4">
        <a target="_blank" href="https://www.twitter.com/@McKayla_tt"><CIcon icon="cibTwitter" class="w-25"/></a>
      </div>
      <div class="w-25 col-4">
        <a target="_blank" href="mailto:arianekayla.t@gmail.com"><CIcon icon="cibGmail" class="w-25"/></a>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      user_name: '',
      user_email: '',
      phone: '',
      user_reason: '',
      user_otherReason: '',
      user_time: ''
    }
  },
  methods: {
    submitForm() {
      // Send form data to email address
      // Send email
      emailjs.sendForm('service_8jk7jb8', 'template_fm9ogvn', '#contact-form', 'vNW6oObj3B3izAXUO')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
     });
      // Add to Google Calendar
      // Reset form fields
      this.$router.go(0);
    },
  }
}
</script>

<style scoped>
body, main{
  background-color: purple;
  min-height: 100vh;
}
  
fieldset {
  padding-top: 5px;
  padding-right: 12px;
  padding-bottom: 10px;
  padding-left: 12px;
}

legend {
  float: none;
  width: inherit;
}


div{
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>
