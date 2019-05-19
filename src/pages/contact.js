import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact">
        <div className="email">
          <h1>اتصل بنا</h1>
          <p>عبر البريد الالكتروني :</p>
          <h3>contact@ta4rida.com</h3>
        </div>
        <form className="myForm">
          <div className="contact">
            <label>الاسم</label>
            <input type="text" id="name" />

            <label>البريد الإلكتروني </label>
            <input type="email" id="email" />

            <button type="submit">ارسال</button>
          </div>
          <div className="message">
            <label>الرسالة </label>
            <textarea id="msg" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
