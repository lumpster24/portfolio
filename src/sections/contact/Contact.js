import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import styles from "./Contact.module.css";
import ConfirmationModal from "./ConfirmationModal";

export default function Contact({ setSeeContactForm }) {
  const [isPending, setIsPending] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sendFailed, setSendFailed] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    setShowConfirm(false);
    setSendFailed(null);
    setEmailSent(false);

    emailjs
      .sendForm(
        "portfolio_inquieres",
        "portfolio_template",
        form.current,
        "luyzdEdGWr0UK3k0x"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setEmailSent(true);
          setShowConfirm(true);
          setIsPending(false);
        },
        (error) => {
          console.log(error.text);
          setSendFailed(error.text);
          setIsPending(false);
        }
      );
  };

  return (
    <div className={styles["contact-form"]}>
      <h2 className="title">Contact me</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={styles["close-icon"]}
        onClick={() => setSeeContactForm(false)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <form onSubmit={submitHandler} className={styles.form} ref={form}>
        <div className={styles["flex-column"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className={styles.input}
            name="name"
          ></input>
        </div>

        <div className={styles["flex-column"]}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            name="email"
          ></input>
        </div>

        <div className={`${styles["flex-column"]} ${styles["two-col"]}`}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            className={styles.input}
            name="subject"
          ></input>
        </div>

        <div className={`${styles["flex-column"]} ${styles["two-col"]}`}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className={styles.input}
            name="message"
          ></textarea>
        </div>

        {!isPending ? (
          <button className={styles.btn}>Send</button>
        ) : (
          <button disabled className={styles.btn}>
            Loading...
          </button>
        )}
      </form>
      {emailSent && showConfirm && (
        <ConfirmationModal
          setSeeContactForm={setSeeContactForm}
          setShowConfirm={setShowConfirm}
          sendFailed={sendFailed}
        />
      )}
    </div>
  );
}
