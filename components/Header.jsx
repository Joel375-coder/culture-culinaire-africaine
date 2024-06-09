
import Navbar from '@/components/Navbar'
import styles from '@/components/Header.module.css'
export default function Header({setPage}){
    return(
        <header>
        <div>
        <Navbar setPage={setPage}/>
        </div>
        </header>
    )
}