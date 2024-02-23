import React from 'react'
import Navbar1 from './Components/Navbar/Navbar1'
import HotProducts from './Components/HotProducts/HotProducts'
import Logos from './Components/Logos'
import Footer from './Components/Footer'

// function Home() {
//   return (
//     <div className='overflow-x-hidden'>
//         <div className='p-5 sticky top-0'>
//             <Navbar1/>
//         </div>
//         <div >
//           <img src="https://s3-alpha-sig.figma.com/img/4b09/9259/298eb37f594e1338758a4d70e7914275?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mKl-82Ent3JWJ1eP4OwcTHuS5KGCvU09NAf0L2GCJckjdudRCrz~tCoZ9BJOg-a7qjrvzzAsJsXPdY0CI6qHMddDBTJy2K9VkVIHUyz99NQmhUkScw~6D~zj1glmeIcdmagstVV-B62vmayktfcQGEaxnzTF7ksKCOH04LvSS9A1-hP5JPSOPdZ7nxj~Oa75wcZ3wDgA0EjFLy7exrAc2WjgQWqELRFWYv0xqGJvaLmizzbtKFW-4VTRiGrPE2~tIMTXgQ--XUN8fVRSXmZspMMvF0kze2KH9hZt9qLFhjdvomGZbFTFg3O2kgefYoNpOktcbL0ZRtVlWaWcMcui2A__" alt="image" />
//         </div>
//         <div>
//           <img src="https://s3-alpha-sig.figma.com/img/da35/6d64/8faaacf96a09c64b917abf549696c36f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gm19rxpoXFeRH7gtDIuGe4a9yDA6TZRjhPCW5TsCQlfG8YFhaBhx63mml0M5ZmcgucHzEWYxQlbMMJ~YYZsA9xTYUN1F0YMgVrvq~WUtTfIKO9NkTSYbTnvrkvDuk99hDkK7VwgIz3AUWRVFGPP9EmGNznhTtzSv5rMQLWb49ZaGfiNf-H3oTE4304sZDUuTuJLnuLHOBQoc5m-ksy7W9wTtudiJ7jX4hG2ClfPw2L7BRL2MilMlD58L-caRc6S0WjtapZ9BBb9M5gFj7tvzyEpHeyv~srd2UyTogkJCjrGd83Yv~axyATw5uQnHKiNX7JZtL8OI4-R5rLqhEGVJxg__" alt="" />
//         </div>
        
//     </div>
//   )
// }

// export default Home
function Home() {
  return (
    <div>
      <div className='p-5 sticky top-0 z-10 bg-white'>
          <Navbar1/>
      </div>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/4b09/9259/298eb37f594e1338758a4d70e7914275?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mKl-82Ent3JWJ1eP4OwcTHuS5KGCvU09NAf0L2GCJckjdudRCrz~tCoZ9BJOg-a7qjrvzzAsJsXPdY0CI6qHMddDBTJy2K9VkVIHUyz99NQmhUkScw~6D~zj1glmeIcdmagstVV-B62vmayktfcQGEaxnzTF7ksKCOH04LvSS9A1-hP5JPSOPdZ7nxj~Oa75wcZ3wDgA0EjFLy7exrAc2WjgQWqELRFWYv0xqGJvaLmizzbtKFW-4VTRiGrPE2~tIMTXgQ--XUN8fVRSXmZspMMvF0kze2KH9hZt9qLFhjdvomGZbFTFg3O2kgefYoNpOktcbL0ZRtVlWaWcMcui2A__" alt="image" />
      </div>
      <div className='flex justify-around pt-3 flex-wrap'>
        <img src="https://s3-alpha-sig.figma.com/img/da35/6d64/8faaacf96a09c64b917abf549696c36f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gm19rxpoXFeRH7gtDIuGe4a9yDA6TZRjhPCW5TsCQlfG8YFhaBhx63mml0M5ZmcgucHzEWYxQlbMMJ~YYZsA9xTYUN1F0YMgVrvq~WUtTfIKO9NkTSYbTnvrkvDuk99hDkK7VwgIz3AUWRVFGPP9EmGNznhTtzSv5rMQLWb49ZaGfiNf-H3oTE4304sZDUuTuJLnuLHOBQoc5m-ksy7W9wTtudiJ7jX4hG2ClfPw2L7BRL2MilMlD58L-caRc6S0WjtapZ9BBb9M5gFj7tvzyEpHeyv~srd2UyTogkJCjrGd83Yv~axyATw5uQnHKiNX7JZtL8OI4-R5rLqhEGVJxg__" alt="" className='h-[20rem] '/>
        <img src="https://s3-alpha-sig.figma.com/img/a85f/5a4f/89f1d773e1796da6c8af95bc41e01bb2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d1gsm6DWas0AGZydl0xqDK07yLNSrCz9x9d9KWEzpCl9nw048Vhvo0qk-bSco2V2A22cJofW4ZeEw-ZNp5Drbie3RHpaD-P8KjNaywl5H2VMGsFMjNlS2mZHM088OCEcEuoj6IyFE3i2hrR3U3sQfMgF3jhjIqkrPlPAUDFIFQV5Tpc9f29l4vWHfqOYwn2TVPU3LZq7hRHAU8TxVw-ZBO3ncO67nI05BhRnz3MvyYtPlowl6aheqZKqZ854K5jOT7MYas30hXBqY2gqjlatZwTQru6tT-VBSwSy1HG1z9y8b8C-0WGEXLP3jwJrnk7G8eNuHWTgborb6L8MnIPEug__" alt="" className='h-[20rem] w-[40rem]'/>
      </div>
      <div>
        <HotProducts/>
      </div>
      <div>
        <Logos/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home