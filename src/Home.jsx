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
        <img src="https://s3-alpha-sig.figma.com/img/4b09/9259/298eb37f594e1338758a4d70e7914275?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNMv5RzKvFZF8Wlm-Clv9NmtvvXXhNSUeKy2daqG05h69lpyrKMlL-jH61nHrj4lT4fyUM0QQTgqkk8aKXRAQ13XJl-BLIuvpx89Zrbs2QqlLkcTl0-PD5p37HqR~dNOa9cVhQuhfp-0dNT20zM7HFSYbQhiS6P6xOHuJOTVNuv083HcswyX85bK912bSBG9-Ux9cjIlhhCBYMcKnLsFL0bBMpATCR3qWuytUYm2lYubsbY0VhhvXHUJt74dRqxY0MroyuRUhJZrLE9lO5Jb0OuuwLa8cCcOSs6SVq3KtMuBNs3lXxluxpuPWJivyE8cVUTPKW8zKzmEYHOa~k6f5g__" alt="image" />
      </div>
      <div className='flex justify-around pt-3 flex-wrap'>
        <img src="https://s3-alpha-sig.figma.com/img/da35/6d64/8faaacf96a09c64b917abf549696c36f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0RRYQDSDdhDr2AF1BGAZQZuqVGMT5VLga8Zgh5iH2cdHGbp9vSjvenyP9VpfIKBT4IYZQD43OiWgHy~YrAuV4n4kHMFnQpAHDlpAvvOKXc-0vTkHDhHK2BfBOD7x4IhXgHxVU9rSEHwHJGai-MFQ~So764Rxa8ujrc5qYNXzFf0~D5jH2bO9m1k52GTrvc1jyoo1LBrtZgEVcWBdFf8~ZrpbLEFPjHJ06Z2u0sbqBrKgiyv8M34Tp3NKbX3FLK0AV0ykE4fjIScXI8xqeobP49C8AN5ZxA2ZxD913xISpGpy-6M-m0C5YPjEzzbcYIhthf~GdBDsNJbrVxuqxFAuA__" alt="" className='h-[20rem] '/>
        <img src="https://s3-alpha-sig.figma.com/img/a85f/5a4f/89f1d773e1796da6c8af95bc41e01bb2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1PO41k8L7OpwX~bV~EXFwy6VWvJE2U~fib6D775~73VaGOCM0kZ4KyuiMw1ek7R0~dKNw2mAp6RYo2prtlNIpVbSD-TlQs06ZK21iU8J4uhnqihYGXC5ieyK0ln3DEyXyzQXrZyQq56QW0q-ic43LmiZTz~S50r-QfR1NFWW6vlw08-bQvOyTr0iTmbXfoPuM-UjgUbpVWqMupzIlaFK6sbVBQeK4MhUW7XVT9fpXOTbLUGN3BiKRD0i1ZgEbzeVOHfrfaebOUBDQ1qbqXraI0n3QkNFk4xdFPKutqEr6WMeTqSOW2FxgLr81t2d25B~eEegubDeEuMX7bzsMOGhg__" alt="" className='h-[20rem] w-[40rem]'/>
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