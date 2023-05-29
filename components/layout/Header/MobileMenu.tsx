import { Drawer } from 'antd'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import classNames from 'classnames'
import { menuItems } from './Menu'

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const showDrawer = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <button type="button" onClick={showDrawer}>
        <AiOutlineMenu size={25} />
      </button>
      <Drawer
        headerStyle={{ display: 'none' }}
        placement="right"
        bodyStyle={{ paddingTop: '15px' }}
        open={isOpen}
        width={300}
        closeIcon={null}
      >
        <div className="flex items-center pb-30">
          <div className="text-2xl font-semibold tracking-tight text-black">
            CodeStack
          </div>
          <button type="button" onClick={onClose} className="ml-auto">
            <AiOutlineClose size={25} />
          </button>
        </div>
        {menuItems.map(({ href, name }) => (
          <Link
            onClick={onClose}
            className={classNames(
              'block lg:inline-block !text-black text-lg mb-10 hover:!text-blue-500'
            )}
            key={`${href}-${name}`}
            href={href}
          >
            {name}
          </Link>
        ))}
      </Drawer>
    </>
  )
}

export default MobileMenu
