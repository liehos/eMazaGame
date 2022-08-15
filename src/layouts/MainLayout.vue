<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="primary"
        />

        <q-toolbar-title>
          <div class="text-center">
            <div class="text-grey-10 q-pt-md">caloiro</div>
          <q-linear-progress
            rounded
            size="17px"
            :value="0.3"
            color="green-13"
            class="q-pt-md"
            >
          </q-linear-progress>
          <div class="text-green-13 q-pt-sm">300 pts <span class="text-grey-10">/ 1000 pts</span>
          </div>
        </div>
        </q-toolbar-title>

        <div class="q-pa-md q-gutter-sm">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-transparent">
      <div >
      <q-toolbar>
      <q-toolbar-title class=" rounded q-pb-md">
       <q-tabs
        v-model="tab"
        class="bg-white text-primary"

      >
        <q-route-tab
        name="mails"
        icon="eva-monitor-outline"
        to='/dashboard'
        />
        <q-route-tab
        name="alarms"
        icon="eva-pie-chart-outline"
        to='/statistics'
        />
        <q-route-tab
        name="movies"
        icon="eva-gift-outline"
        to="/ranking"
        />
        <q-route-tab
        name="movies"
        icon="eva-star-outline"
        to="/points"
        />
        <q-route-tab
        name="movies"
        icon="eva-person-outline"
        to="/account"
        />
      </q-tabs>

      </q-toolbar-title>
      </q-toolbar>
      </div>
   </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
