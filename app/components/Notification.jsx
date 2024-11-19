import React from 'react'
import style from '@/styles/Notification.module.css'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'

export function Notification({onClose}) {
  return (
    <div className={style.window}>
        <div className={style.header}>
            <span></span>
            <button className={style.close} onClick={onClose}> <MdClose /> </button>
        </div>
        <Link href='/' className={style.body}>
            <Image src="/project.png" width={900} height={1600} className={style.image} alt="notification"/>
        </Link>
    </div>
  )
}

