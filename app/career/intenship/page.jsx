"use client"
import React, { useState } from 'react'
import style from '@/app/page.module.css'
import Main from "@/components/Main";


export default function page() {
  return (
    <>
        <Main>
            <section className={style.pageMain} style={{textAlign:"center"}}>
                <h3>IntenShip Application Form</h3>
                <span className={style.muted}>Please fill out the form below to submit
                Your Intenship application.</span>
                <form action='https://formsubmit.co/d2d876f5c78dbd4c64e83ecdf8dc364f' method='POST'>
                <div className={style.flex}>
                    <input type="text" name="Name" className='form-control' placeholder='Full Name' required/>
                    <input type="email" name="Email" className='form-control' placeholder='Email' required/>
                </div>
                <div className={style.flex}>
                <input type="number" name="ContactNo" className='form-control' placeholder='Contact/Phone No' />
                <input type="text" name="Position" className='form-control' placeholder='Application for Position' />
                </div>
                <textarea className='form-control' name='Message' cols={6} rows={2} placeholder="Cover your letter." required/>
                <br />
                <button className={style.button} type="submit">Submit</button>
                </form>
            </section>
        </Main>
    </>
  )
}
