import { useState } from "react";
import axios from "../../api/axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { validateContactForm } from "./contactValidation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();

  const handleAdminAccess = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/admin/dashboard");
    } else {
      navigate("/admin/login");
    }
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors =
      validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      setApiError("");

      setSuccess("");

      await axios.post("/contact", formData);

      setSuccess(
        "Your message has been sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
        setApiError(
          error.response?.data?.message ||
          "Unable to send message."
        );
    } finally {
        console.log("Loading false");
        setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-8
        shadow-xl
      "
    >
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={handleAdminAccess}
          className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Admin Panel
        </button>
      </div>
      <h3 className="mb-6 text-3xl font-bold text-white">
        Send a Message
      </h3>

      {/* Name */}
      <div className="mb-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-white
            outline-none
            focus:border-cyan-400
          "
        />

        {errors.name && (
          <p className="mt-2 text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-5">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-white
            outline-none
            focus:border-cyan-400
          "
        />

        {errors.email && (
          <p className="mt-2 text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="mb-5">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-white
            outline-none
            focus:border-cyan-400
          "
        />

        {errors.subject && (
          <p className="mt-2 text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mb-5">
        <textarea
          rows="6"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          className="
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-white
            outline-none
            focus:border-cyan-400
          "
        />

        {errors.message && (
          <p className="mt-2 text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Success */}
      {success && (
        <p className="mb-4 text-green-400">
          {success}
        </p>
      )}

      {/* Error */}
      {apiError && (
        <p className="mb-4 text-red-400">
          {apiError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-xl
          bg-cyan-500
          py-3
          font-semibold
          text-slate-950
          transition
          hover:bg-cyan-400
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "Sending..." : "✓ Sent"}
      </button>
    </motion.form>
  );
};

export default ContactForm;