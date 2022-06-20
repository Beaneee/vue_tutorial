import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/data_binding/string',
    name: 'data_binding_string_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/data_binding/html',
    name: 'data_binding_html_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/data_binding/input',
    name: 'data_binding_input_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/data_binding/select',
    name: 'data_binding_select_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/data_binding/check',
    name: 'data_binding_check_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckBoxView.vue')
  },
  {
    path: '/data_binding/radio',
    name: 'data_binding_radio_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/data_binding/attribute',
    name: 'data_binding_attribute_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/data_binding/list',
    name: 'data_binding_list_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/data_binding/class',
    name: 'data_binding_class_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/data_binding/style',
    name: 'data_binding_style_view',
    component: () => import(/* webpackChunkName: "data_binding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
