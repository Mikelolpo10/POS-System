import { useState } from "react"
import OrderDetails from "./OrderDetails"
import menu from '../../data/solaria_menu.json'

export default function Mainpage() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  // const maxTable: number = 56

  return (
    <div className="w-full flex">
      <div className="pl-8 max-h-16 w-full flex items-center bg-white">
        <h1>Order Menu</h1>
        <input
          name="search_item"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search" size={20} maxLength={30}
          className="mr-6 ml-auto py-1 px-4 rounded-lg text-lg font-semibold shadow-primary placeholder:text-gray-500 placeholder:font-semibold placeholder:text-base" />
      </div>

      <OrderDetails menu={menu} />
    </div>
  )
}