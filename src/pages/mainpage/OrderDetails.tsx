import { useState } from 'react'
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

      <div className='flex flex-col'>
        <div className="flex mb-4">
          <h2>Items(<span className="text-gray-800 font-medium">{totalItems}</span>)</h2>
          <button className="ml-auto text-dark-purple font-bold cursor-pointer">Clear</button>
        </div>
        <div className="flex">
          <img src={menu[0].image} alt="" className="h-20 w-20 rounded-xl" />
          <div className="ml-4 flex flex-col justify-between">
            <span className="text-sm">{menu[0].name}</span>
            <span className="text-sm">Rp.{menu[0].price.toLocaleString('id-ID')}</span>
            <div className="p-1 h-8 w-fit flex bg-primary-bg rounded-lg">
              <div className="px-1 flex rounded-md bg-dark-purple box-border aspect-square">
                <img src="./minus.svg" alt="" />
              </div>
              <span className="px-3 flex items-center">1</span>
              <div className="px-1 flex rounded-md bg-dark-purple box-border aspect-square">
                <img src="./plus.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <div className="flex">
          <img src={menu[0].image} alt="" className="h-20 w-20 rounded-xl" />
          <div className="ml-4 flex flex-col justify-between">
            <span className="text-sm">{menu[0].name}</span>
            <span className="text-sm">Rp.{menu[0].price.toLocaleString('id-ID')}</span>
            <div className="p-1 h-8 w-fit flex bg-primary-bg rounded-lg">
              <div className="px-1 flex rounded-md bg-dark-purple box-border aspect-square">
                <img src="./minus.svg" alt="" />
              </div>
              <span className="px-3 flex items-center">1</span>
              <div className="px-1 flex rounded-md bg-dark-purple box-border aspect-square">
                <img src="./plus.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}