import Image from 'next/image'
import React from 'react'

function products() {
  return (
    <section className='mt-20 relative z-0 font-sans'>
      {/* top section */}
      <div className='py-20 px-5'>
        <p className='text-[#737373] text-xl text-center'>Featured Products</p>
        <h1 className='text-[#737373] text-2xl font-bold text-center my-3'>BESTSELLER PRODUCTS</h1>
        <p className='text-[#737373] text-center '>Problems trying to resolve the conflict between</p>
      </div>

      {/* columns part */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-[1124px] mx-auto h-auto justify-center items-center'>
        {/* Column 1 */}
        <div className='max-w-[238px] h-[615px]'>
          <div>
            <Image src={"/product1.png"} width={238} height={615} alt='img'></Image>
          </div>
          <div className='w-[239px] h-[188px]'>
            <div>
              <p className='text-center pt-5 font-semibold text-[#252B42]'>Graphic Design</p>
              <p className='text-center py-3 text-[#737373] text-md'>English Department</p>
              <p className='text-center'><span className='text-[#BDBDBD] font-bold'>$16.48</span> <span className='text-[#23856D] font-bold'>$6.48</span> </p>
            </div>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <div className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className='max-w-[238px] h-[615px]'>
          <div>
            <Image src={"/product2.png"} width={238} height={615} alt='img'></Image>
          </div>
          <div className='w-[239px] h-[188px]'>
            <div>
              <p className='text-center pt-5 font-semibold text-[#252B42]'>Graphic Design</p>
              <p className='text-center py-3 text-[#737373] text-md'>English Department</p>
              <p className='text-center'><span className='text-[#BDBDBD] font-bold'>$16.48</span> <span className='text-[#23856D] font-bold'>$6.48</span> </p>
            </div>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <div className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className='max-w-[238px] h-[615px]'>
          <div>
            <Image src={"/product3.png"} width={238} height={615} alt='img'></Image>
          </div>
          <div className='w-[239px] h-[188px]'>
            <div>
              <p className='text-center pt-5 font-semibold text-[#252B42]'>Graphic Design</p>
              <p className='text-center py-3 text-[#737373] text-md'>English Department</p>
              <p className='text-center'><span className='text-[#BDBDBD] font-bold'>$16.48</span> <span className='text-[#23856D] font-bold'>$6.48</span> </p>
            </div>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <div className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></div>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className='max-w-[238px] h-[615px]'>
          <div>
            <Image src={"/product4.png"} width={238} height={615} alt='img'></Image>
          </div>
          <div className='w-[239px] h-[188px]'>
            <div>
              <p className='text-center pt-5 font-semibold text-[#252B42]'>Graphic Design</p>
              <p className='text-center py-3 text-[#737373] text-md'>English Department</p>
              <p className='text-center'><span className='text-[#BDBDBD] font-bold'>$16.48</span> <span className='text-[#23856D] font-bold'>$6.48</span> </p>
            </div>
            <div className='flex justify-center items-center gap-2 mt-2'>
              <div className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></div>
              <div className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default products
