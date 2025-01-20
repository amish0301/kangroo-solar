import { Link } from "react-router-dom"

const DropDownMenu = ({ list }) => {
    return (
        <div className="absolute bg-gray-800 dark:dark-theme border-none top-[90%] left-0 mt-2 dark:dark-theme shadow-lg p-4 rounded-md w-48 border border-gray-200 overflow-hidden z-10">
            <ul className="flex flex-col gap-y-3 justify-start">
                {
                    list.map((item) => (
                        <li key={item.id} className="group">
                            <Link to={item.href} className='flex items-center gap-x-2 rounded-md text-white hover:bg-gray-100 hover-link transition-colors duration-300 ease-in-out py-2 pl-4'>
                                {item?.icon && <item.icon style={{ marginRight: '6px', width: '1.2rem', height: '1.2rem' }} />}
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropDownMenu