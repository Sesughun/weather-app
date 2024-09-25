import { create } from 'zustand'
const cartStore = create((set) => ({
  images: [],

  paris: {
    sunny:"",
    rainy:"",
    cloudy:""
  },
  washington: {
    sunny:"",
    rainy:"",
    cloudy:""
  },
  london: {
    sunny:"",
    rainy:"",
    cloudy:""
  },
  tokyo: {
    sunny:"",
    rainy:"",
    cloudy:""
  },
  lagos: {
    sunny:"",
    rainy:"",
    cloudy:""
  },
  abuja: {
    sunny:"",
    rainy:"",
    cloudy:""
  },
  general:{
    sunny:"",
    rainy:"",
    cloudy:""
  },
  
  amountUpdate:(amountCount:number) => set((state:any)=>{
    return{
      amount: amountCount}
  }),

}));
export default cartStore;