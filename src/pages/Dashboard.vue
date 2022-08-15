<template>
  <q-page >
    <div style="font-size: 22px " class="text-weight-regular q-pl-md" >
      Bem-vinda Ashley
    </div>
    <div style="font-size: 27px " class="text-weight-bold q-pl-md">
      Vamos começar o dia
    </div>

    <div>
        <q-scroll-area style="height: 340px">
          <div class="row no-wrap">
            <div v-for="n in 10" :key="n" style="width: 290px">
              <q-card-section>
                <q-img src="public/images/image1.jpg" style="border-radius: 20px">
                  <div class="absolute-top">
                    <h4>Quero progredir</h4>
                    <p>Ganhar mais pontos</p>
                  </div>
                </q-img>
              </q-card-section>
            </div>
          </div>
        </q-scroll-area>
      </div>

<div class="q-pt-sm q-pl-md"> Jogos populares <span style="text-align:right">Ver todos</span></div>

<div Class="q-pa-md">
    <q-btn
    unelevated
    color="primary"
    label="Level 1"
    />
<q-btn
unelevated
color="primary"
label="Level 2" />
<q-btn
unelevated
color="primary"
label="Level 3" />

</div>




    </q-page>
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Dashboard'
})



</script>





