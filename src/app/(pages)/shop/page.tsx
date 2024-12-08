import Image from 'next/image'
import React from 'react'

function Shop() {
  return (
    <section>
<div className='bg-[#FAFAFA] mt-20 '>


<div className='bg-[#FAFAFA] max-w-[1050px] mx-auto my-10'>
  <div className='flex justify-between'>
    <h1 className='bold '>Shop</h1>
    <p>Home {">"} Shop</p>
  </div>

</div>

<div className='max-w-[1440px] '>
{/* parent */}
<div className='max-w-[1088px] h-[223px] grid lg:grid-cols-5 grid-cols-1 gap-5 mx-auto mt-5'>

{/* img1 */}
<div className='max-w-[205px]'>
  <Image src={"/col1.png"} width={204} height={223} alt='img'></Image>
</div>

{/* img2 */}
<div className='max-w-[205px]'>
  <Image src={"/col2.png"} width={204} height={223} alt='img'></Image>
</div>

{/* img3 */}
<div className='max-w-[205px]'>
  <Image src={"/col3.png"} width={204} height={223} alt='img'></Image>
</div>

{/* img4 */}
<div className='max-w-[205px]'>
  <Image src={"/col4.png"} width={204} height={223} alt='img'></Image>
</div>

{/* img5 */}
<div className='max-w-[205px]'>
  <Image src={"/col5.png"} width={204} height={223} alt='img'></Image>
</div>

</div>

</div>

<div className='max-w-[1440px]'>
<div className='max-w-[1050px] mx-auto mt-10'>
<Image src={"/row.png"} width={1000} height={223} alt='img'></Image>
</div>
</div>

</div>

    </section>
  )
}

export default Shop