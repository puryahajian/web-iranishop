import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  PencilIcon,
} from '@heroicons/react/16/solid'
import Text from '../atoms/text'

function DropDownMenu({buttonMenu, buttonTop, buttonbottom, text, onClickEdit, onClickExit}) {
    return (
        <div className='mt-2'>
            <Menu>
                {({ open, close }) => (
                    <>
                        <MenuButton className="inline-flex outline-none items-center gap-2 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
                            {buttonMenu}
                            <Text className={`text-gray-500`}>{text}</Text>
                        </MenuButton>

                        {open && (
                            <div
                                className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
                                onClick={close} // روی بک‌دراپ کلیک شد، منو بسته میشه
                            />
                        )}

                        <MenuItems
                            transition
                            anchor="bottom end"
                            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 !top-[64px] !left-[150px] z-[1000] text-sm/6 text-white !transition !duration-200 !ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                        >
                            <MenuItem>
                                <button onClick={onClickEdit} className="group flex w-full items-center text-gray-500 gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                    <PencilIcon className="size-4 fill-gray-500" />
                                    {buttonTop}
                                    <kbd className="ml-auto hidden font-sans text-xs text-black group-data-focus:inline">⌘D</kbd>
                                </button>
                            </MenuItem>
                            <div className="my-1 h-px bg-white/5" />
                            <MenuItem>
                                <button onClick={onClickExit} className="group flex w-full items-center gap-2 text-gray-500 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 fill-gray-500">
                                        <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    {buttonbottom}
                                    <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-focus:inline">⌘A</kbd>
                                </button>
                            </MenuItem>
                        </MenuItems>
                    </>
                )}
            </Menu>
        </div>
    )
}

export default DropDownMenu
