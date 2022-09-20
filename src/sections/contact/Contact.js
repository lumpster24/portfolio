import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles["contact-form"]}>
      <h2 className="title">Contact me</h2>
      <form className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name"></input>
        <label htmlFor="email">Email address:</label>
        <input type="email" id="email"></input>
        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
