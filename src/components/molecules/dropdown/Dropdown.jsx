import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({
    selected_element,
    selected_icon,
    list_items,
    onClick,
}) => {
  return (
    <div className="relative inline-block text-left">
        <div>
            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {selected_element && selected_element?.label ? selected_element.label : 'Select'}
            {
                selected_icon ?
                <img src={selected_icon} />
                :
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            }
            </button>
        </div>
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            {
                Array.isArray(list_items) && list_items.length ?
                <div className="py-1" role="none">
                    {
                        list_items.map((item) => (
                            <button onClick={() => onClick(item)} key={item.id} className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id={item?.id}>{item?.label}</button>
                        ))
                    }
                </div>
                :  <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">No Data</a>
                </div>
            }
        </div>
    </div>
  )
}

Dropdown.propTypes = {
    list_items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    selected_element: PropTypes.object,
    selected_icon: PropTypes.object,
}

export default Dropdown