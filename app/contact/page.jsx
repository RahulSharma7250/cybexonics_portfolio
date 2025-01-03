import Main from '@/components/Main';
import style from '../page.module.css';
import React from 'react';
import Image from 'next/image';

function contact() {
  const handleFormSubmit = (event) => {

    console.log('Form submitted');
  };

  return (
    <Main>
      <div className={style.pageMain}>
        <div className={style.center}>
          <span className={style.muted}>contact</span>
          <h3>Contact Us</h3>
          <div className={style.reverse}>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="79a0e1f8-5b01-476c-9fef-5d4aa32f43f7"
              />
              <div className={style.block}>
                <div className={style.textFlex}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="Email"
                    required
                  />
                </div>
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="Subject"
                  required
                />
                <br />
                <textarea
                  className="form-control"
                  placeholder="Message...."
                  rows="6"
                  name="Message"
                  required
                />
                <br />
                <button
                  id={style.btn}
                  className={style.button}
                  type="submit"
                  style={{ textAlign: 'center' }}
                >
                  Submit
                </button>
              </div>
            </form>
            <Image
              width={200}
              height={500}
              className={style.half}
              src="/contact.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </Main>
  );
}

export default contact;
