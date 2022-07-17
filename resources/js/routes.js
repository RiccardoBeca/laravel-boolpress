// istruzioni rotte Vue

// importo vue

import Vue from "vue";

// importo il router

import VueRouter from "vue-router";

// dico a vue di usare il router

Vue.use(VueRouter);

// creiamo il router

const router = new VueRouter({

    mode: 'history',
    routes:[
      {
          path: '/',
          name: 'home',
          component: ''
      }
    ]
});

// dopo aver creato il router faccio l'export per importarlo in front.js


export default router;
