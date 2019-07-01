import loadable from "loadable-components";

export const routerMap = [
  {
    path: "/login",
    component: () => import("../views/login")
  },
  {
    path: "/good",
    component: () => import("../views/good")
  }
];

export const routers = routerMap.map(item => {
  return {
    ...item,
    component: loadable(item.component)
  };
});
