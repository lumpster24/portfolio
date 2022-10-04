import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({ setShowConfirm, sendFailed }) {
  const closeHandler = () => {
    setShowConfirm(false);
  };

  return (
    <>
      {!sendFailed ? (
        <div className={`flex--col ${styles["confirmation-modal"]}`}>
          <h1 className="page-header">Thank you for reaching out!</h1>
          <p className="text">
            Your email has been sent. Please allow 1-2 business days for a
            reply.
          </p>
          <button className={`text ${styles.btn}`} onClick={closeHandler}>
            Got it
          </button>
        </div>
      ) : (
        <div className={styles["confirmation-modal"]}>
          <h3>Oh no! An error occured.</h3>
          <p className={styles.text}>{sendFailed}</p>
          <button className={styles.btn} onClick={closeHandler}>
            Got it
          </button>
        </div>
      )}
    </>
  );
}
