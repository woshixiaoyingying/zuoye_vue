

export default [
  {
    path:"/",
    component:()=>import('@/components/home'),
  },
  {
    path:"/about",
    component:()=>import('@/components/about'),
  },
  {
    path:"/service",
    component:()=>import('@/components/service'),
  },
  {
    path:"/case",
    component:()=>import('@/components/case')
  },
  {
    path:"/secondary",
    component:()=>import('@/components/secondary')
  },
  {
    path:"/contact",
    component:()=>import('@/components/contact')
  }
]
