<template>
  <q-page class="text-center q-pt-xl" >
    <img
      src="/public/images/image_homepage.png"
      style="width: 180px; height: 300px"
    >
    <div>
    <div class="q-pt-md">Torne-se fluente em quanlquer língua</div>
    <div>Agora pelo Celular</div>
    </div>
    <div class="q-pt-xl">
     <q-btn
     push color="green"
     label="Começar Agora"
     to="/dashboard"
     ></q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

