 import React from 'react'
import DogWalker from '../../module/DogWalker'
import { dogWalkerProfile } from '../../../dummyData/dogWalker'

// image


 
 function BookDogWalker() {
   return (
    //book dog walker start here
     <section>
      {
        dogWalkerProfile?.map(profile=>(
         <DogWalker profile={profile}/>
        ))
      }
       
       {/* <DogWalker order="2"/>
       <DogWalker/> */}
     </section>
     //book dog walker end here
   )
 }
 
 export default BookDogWalker
 