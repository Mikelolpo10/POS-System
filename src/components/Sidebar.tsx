import logo from '../assets/logo.png'
import cashier from '../assets/cashier.png'
import transactionHistory from '../assets/transaction-history.png'
import inventory from '../assets/Inventory.png'
import table from '../assets/table.png'
import dashboard from '../assets/dashboard.svg'

export default function Sidebar() {
  return (
    <div className="p-4 pt-6 sticky h-screen max-w-24 bg-white shadow-primary cursor-pointer box-border">
      <img src={logo} className='pb-8' />
      <nav className='flex flex-col gap-4'>
        <img src={cashier} />
        <img src={transactionHistory} />
        <img src={inventory} className='p-3' />
        <img src={table} className='p-3' />
        <img src={dashboard} className='p-3' />
      </nav>
    </div>
  )
}