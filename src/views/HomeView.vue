<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import request from '@/utils/http'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script lang="ts">

var config = {
   method: 'post',
   url: '/api/v1/auth/login?username=admin&password=123456'

};

request(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});


// request.post('/api/v1/auth/login',{"username":"admin","password":"123456"})


// request.get('/api/v1/auth/captcha')
</script>
