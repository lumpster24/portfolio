import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({ sendFailed, closeHandler }) {
  return (
    <div className={`flex-col ${styles["confirmation-modal"]}`}>
      {!sendFailed ? (
        <>
          <h1 className="page-header">Thank you for reaching out!</h1>
          <p className="text">
            Your email has been sent. Please allow 1-2 business days for a
            reply.
          </p>
        </>
      ) : (
        <>
          <h1>Oh no! An error occured.</h1>
          <p className={styles.text}>{sendFailed}</p>
        </>
      )}
      <button className={`text ${styles.btn}`} onClick={closeHandler}>
        Got it
      </button>
    </div>
  );
}
