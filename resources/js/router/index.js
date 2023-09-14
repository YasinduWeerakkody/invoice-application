import { createRouter, createWebHistory } from "vue-router";

import invoiceIndex from '../components/invoices/index.vue'

import invoiceNew from '../components/invoices/new.vue'

import notfound from '../components/NotFound.vue'

const routes = [
    {
        path:'/',
        component: invoiceIndex
    },

    {
        path:'/invoice/new',
        component: invoiceNew
    },

    {
        path:'/:pathMatch(.*)*',
        component: notfound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router