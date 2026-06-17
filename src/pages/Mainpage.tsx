import { useState } from "react"

export default function Mainpage() {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <div className="flex">
      <div className="pl-12 max-h-24 w-full flex items-center bg-white">
        <h1 className="font-bold text-[28px]">Order Menu</h1>
        <input name="search_item" type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search" size={30} maxLength={30} className="mr-4 ml-auto py-3 px-8 text-xl font-semibold shadow-primary placeholder:text-gray-500 placeholder:font-semibold placeholder:text-xl" />
      </div>

      <div className="bg-white"></div>
    </div>
  )
}