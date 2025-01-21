import { Link } from "react-router-dom"

const DropDownMenu = ({ list }) => {
    return (
        <div className="absolute bg-gray-900 dark:bg-gray-800 border-none top-[70%] left-0 mt-2 shadow-xl p-4 rounded-lg w-48 border border-gray-700 overflow-hidden z-10">
            <ul className="flex flex-col gap-y-3 justify-start">
                {list.map((item, index) => (
                    <li key={index} className="group">
                        <Link
                            to={item.href}
                            className="flex items-center gap-x-3 rounded-md text-white dark:hover:text-blue-600 transition-all duration-300 ease-in-out py-2 pl-4"
                        >
                            {item?.icon && (
                                <item.icon style={{ marginRight: '8px', width: '1.2rem', height: '1.2rem' }} />
                            )}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default DropDownMenu