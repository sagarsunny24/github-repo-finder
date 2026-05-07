import './SearchBar.css'
import { Search } from 'lucide-react'
export default function SearchBar({username, setUsername, setLoading, setShowRepo}){

  return (
    <div className='search-wrapper'>
    
    <input type='text' value={username} onChange={(e)=>{ setUsername(e.target.value)
      setLoading(true)
      setShowRepo(false)
    }} placeholder='Enter GitHub Name' />
    <Search size={18} className="search-icon" />
    </div>
  )
}