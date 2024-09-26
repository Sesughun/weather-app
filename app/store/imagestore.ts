import { create } from 'zustand'
const imagestore = create((set) => ({
  images:{
  paris: "https://images.unsplash.com/photo-1557341159-bf9796d61ff8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWlmZmVsJTIwdG93ZXIlMjBzdW5ueXxlbnwwfHwwfHx8MA%3D%3D",
  washington:"https://images.unsplash.com/photo-1460644212565-a64ce7c7094c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZ3RvbnxlbnwwfHwwfHx8MA%3D%3D" ,
  london: "https://media.istockphoto.com/id/955191624/photo/the-london-tower-bridge-at-sunrise-on-a-sunny-summer-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=tTH2pds5HvY3LrmtnJnddpHUZIjsrKj1ele3oN3gkIE=",
  tokyo:"https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRva3lvfGVufDB8fDB8fHww",
  lagos: "https://images.unsplash.com/photo-1719314073622-9399d167725b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFnb3N8ZW58MHx8MHx8fDA%3D",
  abuja:"https://images.unsplash.com/photo-1567985207911-725f4e7c8926?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFidWphfGVufDB8fDB8fHww",
},
  currentBackground:"https://images.unsplash.com/photo-1557341159-bf9796d61ff8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWlmZmVsJTIwdG93ZXIlMjBzdW5ueXxlbnwwfHwwfHx8MA%3D%3D",
  currentLocation:"paris",
  backgroundUpdate:() => 
    set((state:any) => ({
      currentBackground: state.images[state.currentLocation] || state.currentBackground
    }))
  ,
  locationUpdate:(location:string) => 
    set((state:any) => ({
      currentLocation: location
    }))
  ,

}));
export default imagestore;