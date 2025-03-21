import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    plan: "starter",
    state: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Fake account created!");
    console.log(formData);
  };

  return (
    <div style={styles.page}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Create Your EcoBox Account</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Full Name */}
          <label style={styles.label}>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
              style={styles.input}
            />
          </label>

          {/* Email */}
          <label style={styles.label}>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              style={styles.input}
            />
          </label>

          {/* Password */}
          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </label>

          {/* Plan Selection */}
          <div style={styles.section}>
            <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Choose a Plan:
            </p>
            {["starter", "smart-home", "eco-pro"].map((plan) => (
              <label key={plan} style={styles.radioLabel}>
                <input
                  type="radio"
                  name="plan"
                  value={plan}
                  checked={formData.plan === plan}
                  onChange={handleChange}
                  style={styles.radio}
                />
                {plan === "starter" && "Starter ($50/month)"}
                {plan === "smart-home" && "Smart Home ($75/month)"}
                {plan === "eco-pro" && "Eco Pro ($100/month)"}
              </label>
            ))}
          </div>

          {/* State Dropdown */}
          <label style={styles.label}>
            State / Region
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="">-- Select One --</option>
            </select>
          </label>

          {/* Terms Checkbox */}
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              style={{ marginRight: "0.5rem" }}
            />
            I agree to the Terms & Conditions
          </label>

          {/* Submit */}
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "1.75rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "500",
  },
  input: {
    padding: "0.6rem",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "0.3rem",
  },
  section: {
    marginTop: "0.5rem",
  },
  radioLabel: {
    display: "block",
    marginBottom: "0.4rem",
    fontWeight: "400",
  },
  radio: {
    marginRight: "0.5rem",
  },
  checkboxLabel: {
    fontSize: "0.95rem",
    display: "flex",
    alignItems: "center",
  },
  button: {
    padding: "0.8rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default SignUp;
