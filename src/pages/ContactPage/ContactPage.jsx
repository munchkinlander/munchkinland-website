import "./ContactPage.scss";
import axios from "axios";
import { useState } from "react";


export default function ContactPage() {
      const baseUrl = import.meta.env.VITE_API_URL;

      const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
      });

      const [formStatus, setFormStatus] = useState("");

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();

        setFormStatus("Sending...");

        try {
          await axios.post(`${baseUrl}/send-email`, formData);
          setFormStatus("Email sent successfully!");
          setFormData({ name: "", email: "", comment: "" });
        } catch (error) {
          setFormStatus("Error sending email. Please try again.");
        }
      };

    return (
      <main className="contact">
        <div className="contact__container">
          <h1 className="contact__title">Contact Me</h1>
          <p className="contact__description">Want to inquire about a custom commission, make an order outside of Etsy, or drop a comment? Fill out the form below!</p>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__label" htmlFor="name">
              Name:
            </label>
            <input
              className="contact__field"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="contact__label" htmlFor="email">
              Email:
            </label>
            <input
              className="contact__field"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="contact__label" htmlFor="comment">
              Comment:
            </label>
            <textarea
              className="contact__field"
              id="comment"
              name="comment"
              rows="7"
              value={formData.comment}
              onChange={handleChange}
              required
            />

            <button className="contact__button" type="submit">
              Submit
            </button>
          </form>

          {formStatus && <p className="contact__status">{formStatus}</p>}
        </div>
      </main>
    );
}