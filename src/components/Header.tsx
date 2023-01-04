import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="sticky top-0 z-50 laptop:z-50 w-full max-w-8xl mx-auto flex-none flex h-16 laptop:h-20 shadow-lg justify-center">
            <div className="w-[1280px] flex justify-between">
                <div className="w-[150px] m-5">
                    <span className="font-bold text-xl w-auto text-black"><Link to="/">Header</Link></span>
                </div>
                <div className="flex justify-between items-center">
                    <nav className='bg-blue-200 flex'>
                        <ul className='inline-flex'>
                            <li className='m-3 list-none text-black'>
                                <Link to="/">index</Link>
                            </li>
                            <li className='m-3 list-none text-black'>
                                <Link to="/about">about</Link>
                            </li>
                            <li className='m-3 list-none text-black'>
                                <Link to="/goods">goods</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header