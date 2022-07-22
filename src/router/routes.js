const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue")
  },
  {
    path: "/test",
    component: () => import("layouts/TestLayout.vue")
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
