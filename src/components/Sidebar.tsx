import logo from '../assets/logo.png'

export default function Sidebar() {
  return (
    <div className="p-3 fixed h-screen max-w-21 border bg-amber-200">
      <img src={logo}/>
    </div>
  )
}