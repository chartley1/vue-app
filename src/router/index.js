import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import SummaryView from '../views/SummaryView.vue';
import IncomeView from '../views/IncomeView.vue';
import ExpensesView from '../views/ExpenseView.vue';

export default new Router({
  routes: [
    {
      path: '/summary',
      component: SummaryView
    },
    {
      path: '/income',
      component: IncomeView
    },
    {
      path: '/expenses',
      component: ExpensesView
    }
  ]
});