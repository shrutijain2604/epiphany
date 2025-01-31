import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const EmailForFutureMe = () => {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [scheduled, setScheduled] = useState(false);
  const [scheduledEmails, setScheduledEmails] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editMessage, setEditMessage] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem("scheduledEmails")) || [];
    setScheduledEmails(storedEmails);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmail = { message, date };
    const updatedEmails = [...scheduledEmails, newEmail];
    localStorage.setItem("scheduledEmails", JSON.stringify(updatedEmails));
    setScheduledEmails(updatedEmails);
    setScheduled(true);
    sendEmail(message, date);
  };

  const handleEditSave = () => {
    const updatedEmails = [...scheduledEmails];
    updatedEmails[editingIndex] = { message: editMessage, date: editDate };
    localStorage.setItem("scheduledEmails", JSON.stringify(updatedEmails));
    setScheduledEmails(updatedEmails);
    setEditingIndex(null); // Close editing mode
    sendEmail(editMessage, editDate); // Re-send the email with updated content
  };

  const sendEmail = (message, date) => {
    const templateParams = { message, date };

    emailjs
      .send(
        "service_dwxom2q", // Your EmailJS service ID
        "template_48phkbm", // Your EmailJS template ID
        templateParams,
        "IdSIULwMK_QyoNUWI" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const startEditing = (index, email) => {
    setEditingIndex(index);
    setEditMessage(email.message);
    setEditDate(email.date);
  };

  const updateEmail = (index) => {
    const updatedEmails = [...scheduledEmails];
    updatedEmails[index] = { message: editMessage, date: editDate };
    localStorage.setItem("scheduledEmails", JSON.stringify(updatedEmails));
    setScheduledEmails(updatedEmails);
    setEditingIndex(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>✉️ Email for Future Me</h2>
      {!scheduled ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>
              Your Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a heartfelt message to your future self..."
              style={styles.textarea}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="date" style={styles.label}>
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={styles.dateInput}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Schedule Email
          </button>
        </form>
      ) : (
        <p style={styles.successMessage}>Your email is scheduled for {date}!</p>
      )}

      <h3 style={styles.subHeading}>📅 Scheduled Emails</h3>
      <ul style={styles.emailList}>
        {scheduledEmails.map((email, index) => (
          <li key={index} style={styles.emailItem}>
            {editingIndex === index ? (
              <div style={styles.editForm}>
                <textarea
                  value={editMessage}
                  onChange={(e) => setEditMessage(e.target.value)}
                  style={styles.textarea}
                />
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  style={styles.dateInput}
                />
                <button onClick={() => updateEmail(index)} style={styles.editButton}>
                  Save
                </button>
                <button onClick={() => setEditingIndex(null)} style={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            ) : (
              <div style={styles.emailContent}>
                <p style={styles.emailMessage}>{email.message}</p>
                <p style={styles.emailDate}>📅 {email.date}</p>
                <button onClick={() => startEditing(index, email)} style={styles.editButton}>
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailForFutureMe;

// Styles
const styles = {
  container: {
    maxWidth: "800px", // Default width for smaller screens
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#F9F9F9",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    "@media (min-width: 1200px)": {
      maxWidth: "1200px", // Wider for larger screens
    },
  },
  heading: {
    fontSize: "32px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "16px",
    color: "#555",
  },
  textarea: {
    width: "100%",
    minHeight: "150px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #E6E6FA",
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif",
    resize: "vertical",
  },
  dateInput: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #E6E6FA",
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif",
  },
  button: {
    backgroundColor: "#FF6F61",
    color: "#FFF",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  successMessage: {
    textAlign: "center",
    fontSize: "18px",
    color: "#333",
    marginTop: "20px",
  },
  subHeading: {
    fontSize: "24px",
    color: "#333",
    marginTop: "40px",
    marginBottom: "20px",
  },
  emailList: {
    listStyle: "none",
    padding: "0",
  },
  emailItem: {
    backgroundColor: "#FFF",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  emailContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  emailMessage: {
    fontSize: "16px",
    color: "#333",
  },
  emailDate: {
    fontSize: "14px",
    color: "#555",
  },
  editForm: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  editButton: {
    backgroundColor: "#88D8C0",
    color: "#FFF",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  cancelButton: {
    backgroundColor: "#FF6F61",
    color: "#FFF",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
};