import React from 'react'

function Footer() {
  return (
    <div className='border-t-[1px] border-t-gray-500 flex justify-around flex-wrap items-center'>
        <div className="pl-36 pr-36 pb-10 pt-8 flex flex-col gap-4">
            <div>
                <h1 className='font-bold font-poppins'>IMPORTANT LINKS</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-600'>Help & FAQs</p>
                <p className='text-sm text-gray-600'>Rhoncus</p>
                <p className='text-sm text-gray-600'>Shipping & Delivery</p>
                <p className='text-sm text-gray-600'>Orders History</p>
            </div>
        </div>

        <div className="pl-36 pr-36 pb-10 pt-8 flex flex-col gap-4">
            <div>
                <h1 className='font-bold font-poppins'>ABOUT US</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-600'>About Us</p>
                <p className='text-sm text-gray-600'>Careers</p>
                <p className='text-sm text-gray-600'>Our Stores</p>
                <p className='text-sm text-gray-600'>Sales</p>
            </div>
        </div>

        <div className="pl-36 pr-36 pb-10 pt-8 flex flex-col gap-4">
            <div>
                <h1 className='font-bold font-poppins'>MORE INFORMATION</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-600'>Affiliates</p>
                <p className='text-sm text-gray-600'>OfferZone</p>
                <p className='text-sm text-gray-600'>Gift Vouchers</p>
                <p className='text-sm text-gray-600'>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer