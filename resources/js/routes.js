// istruzioni rotte Vue

// importo vue

import Vue from "vue";

// importo il router

import VueRouter from "vue-router";

// dico a vue di usare il router

Vue.use(VueRouter);

// importo anche i vari componenti per poterli usare nel router

import HomeComp from './components/pages/HomeComp';
import AboutComp from './components/pages/AboutComp';
import BlogComp from './components/pages/BlogComp';
import ContactsComp from './components/pages/ContactsComp';


// creiamo il router

const router = new VueRouter({

    mode: 'history',
    routes:[
      {
          path: '/',
          name: 'home',
          component: HomeComp,
      },
      {
        path: '/chi-siamo',
        name: 'about',
        component: AboutComp,
      },
      {
        path: '/blog',
        name: 'blog',
        component: BlogComp,
      },
      {
        path: '/contatti',
        name: 'contacts',
        component: ContactsComp,
      },
    ]
});

// dopo aver creato il router faccio l'export per importarlo in front.js


export default router;
