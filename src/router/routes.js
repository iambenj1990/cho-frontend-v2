const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '', component: () => import('pages/DashBoard.vue'), meta: { requiresAuth: true } }, //dashboard
      {
        path: '/dashboard',
        component: () => import('pages/DashBoard.vue'),
        meta: { requiresAuth: true },
      }, //dashboard
      {
        path: '/customer',
        component: () => import('pages/NewClients.vue'),
        meta: { requiresAuth: true },
      }, //customers
      {
        path: '/customers',
        component: () => import('pages/ClientList.vue'),
        meta: { requiresAuth: true },
      }, //customers  list
      {
        path: '/customers/profile',
        component: () => import('pages/ClientProfile.vue'),
        meta: { requiresAuth: true },
      }, //customers  profile and order history
      {
        path: '/customers/profile/current',
        component: () => import('pages/ClientProfile_current.vue'),
        meta: { requiresAuth: true },
      }, //customers  profile and order history
      {
        path: '/customer/orders',
        component: () => import('pages/ClientOrderHistory.vue'),
        meta: { requiresAuth: true },
      }, // entire  customer from the beginning
      {
        path: '/customers/orders/new',
        component: () => import('pages/ClientOrders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/customers/orders/transaction',
        component: () => import('pages/ClientList.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer

      {
        path: '/items/list',
        component: () => import('pages/ItemsList.vue'),
        meta: { requiresAuth: true },
      }, //get all items
      {
        path: '/items/new',
        component: () => import('pages/NewItems.vue'),
        meta: { requiresAuth: true },
      }, //get all items
      {
        path: '/items/po',
        component: () => import('pages/ClientList.vue'),
        meta: { requiresAuth: true },
      }, // get items on a particular PO
      {
        path: '/items/expired',
        component: () => import('pages/ItemsExpiredList.vue'),
        meta: { requiresAuth: true },
      }, // get expired items
      {
        path: '/items/low-quantity',
        component: () => import('src/pages/ItemsLowStockList.vue'),
        meta: { requiresAuth: true },
      }, // get low quantity items
      {
        path: '/items/empty-quantity',
        component: () => import('src/pages/ItemsEmptyStocksList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/items/movement',
        component: () => import('pages/ItemsMovementList.vue'),
        meta: { requiresAuth: true },
      }, // get low quantity items
      {
        path: '/items/reports',
        component: () => import('pages/ItemReports.vue'),
        meta: { requiresAuth: true },
      }, // get low quantity items

      {
        path: '/inventory',
        component: () => import('pages/ItemsInventory.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer

      {
        path: '/items/temporary-po',
        component: () => import('pages/ItemsTemporaryPO.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/inventory/open',
        component: () => import('pages/ClientList.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer
      {
        path: '/inventory/close',
        component: () => import('pages/ClientList.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer
      {
        path: '/inventory/adjustment',
        component: () => import('pages/ItemsAdjustmentList.vue'),
        meta: { requiresAuth: true },
      }, //get all items

      {
        path: '/inventory/stockcard',
        component: () => import('pages/ItemsStockCard.vue'),
        meta: { requiresAuth: true },
      }, //get all items



      {
        path: '/reports/dispense/monthly',
        component: () => import('pages/ItemsMonthlyDispenseReport.vue'),
        meta: { requiresAuth: true },
      },

      {
        path: '/users/new',
        component: () => import('pages/RegisterUsers.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer
      {
        path: '/users/user/',
        component: () => import('pages/UpdateUsers.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer
      {
        path: '/users/list',
        component: () => import('pages/RegisteredUsersList.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer
      {
        path: '/users/credentials',
        component: () => import('pages/UserCredentials.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer

      {
        path: '/libraries/units',
        component: () => import('src/pages/library/UnitsList.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer
      {
        path: '/libraries/list',
        component: () => import('src/pages/library/LibraryPage.vue'),
        meta: { requiresAuth: true },
      }, // particular transaction order of a customer
      {
        path: '/libraries/config',
        component: () => import('src/pages/SystemConfiguration.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/libraries/catalog',
        component: () => import('src/pages/library/libItemsList.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
