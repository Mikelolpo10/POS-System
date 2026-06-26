import { useState } from 'react'
import order from '../../data/order.json'
import Divider from '../../components/Divider'

type Menu = {
  name: string
  price: number
  image: string
}

type OrderDetailsProps = {
  menu: Menu[]
}

export default function OrderDetails({ menu }: OrderDetailsProps) {
  const [totalItems, setTotalItems] = useState<number>(0)

  return (
    <div className="px-4 flex flex-col min-w-100 bg-white shadow-primary box-border">
      <div className="py-5 flex items-center box-border">
        <h1>Order Details</h1>
      </div>
      <div className="relative flex flex-col">
        <input
          type="text"
          placeholder="Customer's Name"
          className="py-2 px-3 w-full border-2 border-gray-300 text-sm rounded-xl"
        />
        {/* <select className="absolute top-2/4 right-0 h-full flex rounded-xl bg-red-400 -translate-y-2/4">
        {Array.from({ length: maxTable }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            Meja {i + 1}
          </option>
        ))}
      </select> */}
      </div>

      <Divider />

      <div className='max-h-80 flex flex-col'>
        <div className="flex mb-4">
          <h2>Items(<span className="text-gray-800 font-medium">{totalItems}</span>)</h2>
          <button className="ml-auto text-dark-purple font-bold cursor-pointer">Clear</button>
        </div>
        <div className='overflow-y-scroll overflow-x-hidden scroll-smooth'>
          {order.map(({ name, price, image, quantity }, i) => {
            return (
              <>
                <div className="flex">
                  <img src={image} alt="" className="h-20 w-20 rounded-xl" />
                  <div className="ml-4 flex flex-col justify-between">
                    <span>{name}</span>
                    <span>Rp.{price.toLocaleString('id-ID')}</span>
                    <div className="p-1 h-8 w-fit flex bg-primary-bg rounded-lg">
                      <div className="px-1 flex rounded-md bg-dark-purple box-border aspect-square">
                        <img src="./minus.svg" alt="" />
                      </div>
                      <span className="px-3 flex items-center">{quantity}</span>
                      <div className="px-1 flex rounded-md bg-dark-purple box-border aspect-square">
                        <img src="./plus.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {i !== order.length - 1 && <Divider />}
              </>
            )
          })}
        </div>
      </div>

      {/* Bill */}
      <div className='mt-auto'>
        <Divider />
        <div className='flex flex-col gap-1'>
          <div className='flex'>
            <span className='text-gray-700'>Sub Total</span>
            <span className='ml-auto font-bold'>Rp.60.000</span>
          </div>
          <div className='flex'>
            <span className='text-gray-700'>Discount</span>
            <span className='ml-auto text-red-500 font-bold'>- Rp.0.00</span>
          </div>
          <div className='flex'>
            <span className='text-gray-700'>PPN(11%)</span>
            <span className='ml-auto font-bold'>Rp.6.600</span>
          </div>
        </div>
        <Divider />
        <div className='flex'>
          <span className='text-gray-700 text-base font-bold'>Total</span>
          <span className='ml-auto font-bold'>Rp.66.000</span>
        </div>
        <div className='pt-4 flex justify-between'>
          <div className='h-10 w-44 flex items-center justify-center bg-primary-bg font-bold rounded-xl cursor-pointer'>
            Hold
          </div>
          <div className='h-10 w-44 flex items-center justify-center bg-primary-bg font-bold rounded-xl cursor-pointer'>
            Discount
          </div>
        </div>
        <div className='my-4 py-2 text-center bg-dark-purple rounded-xl text-white font-bold cursor-pointer'>Proceed Payment</div>
      </div>
    </div>
  )
}