import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";

const serviceId = "portfolio-website";
const templateId = "template_wh6slb5";
const publicKey = "XEQMEsYgSklYMfO6N";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      await emailjs
        .sendForm(serviceId, templateId, formRef.current, { publicKey })
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Sent successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
            setIsSubmitting(false);
          },
          (error) => {
            toast.error("Error sending message... Pls try again later.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            setIsSubmitting(false);
            console.log("Failed...", error.text);
          }
        );
    } else {
      console.error("Form reference is null...");
    }

    formRef.current?.reset();
  };

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Contact Me</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.298222405596!2d79.89682166129609!3d6.881672039874907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a6d71470d1b%3A0x64e71656663e00d6!2sPita%20Kotte%2C%20Sri%20Jayawardenepura%20Kotte!5e0!3m2!1sen!2slk!4v1721326449983!5m2!1sen!2slk"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form ref={formRef} onSubmit={sendEmail} className="form">
          <div className="input-wrapper">
            <input
              required
              type="text"
              id="fullname"
              name="fullname"
              className="form-input bg-inherit rounded-[14px] py-[15px] px-[20px] border border-solid border-jet text-[15px]"
              placeholder="Full Name"
            />
            <input
              required
              type="email"
              id="email"
              name="user_email"
              className="form-input bg-inherit rounded-[14px] py-[15px] px-[20px] border border-solid border-jet text-[15px]"
              placeholder="Email address"
            />
          </div>
          <textarea
            required
            name="message"
            id="message"
            className="form-input bg-inherit"
            placeholder="Your message"
          ></textarea>
          <button
            className={isSubmitting ? "form-btn disabled" : "form-btn"}
            type="submit"
          >
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
