import { Drawer } from 'antd'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { menuItems } from './Menu'
import Link from 'next/link'
import classNames from 'classnames'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showDrawer = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <button onClick={showDrawer}>
        <AiOutlineMenu size={25} />
      </button>
      <Drawer
        headerStyle={{ display: 'none' }}
        placement="right"
        bodyStyle={{ paddingTop: '15px' }}
        open={isOpen}
        width={300}
        closeIcon={<></>}
      >
        <div className="flex items-center pb-30">
          <div className="text-2xl font-semibold tracking-tight text-black">
            Codebox
          </div>
          <button onClick={onClose} className="ml-auto">
            <AiOutlineClose size={25} />
          </button>
        </div>
        {menuItems.map(({ href, name }) => (
          <Link
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
