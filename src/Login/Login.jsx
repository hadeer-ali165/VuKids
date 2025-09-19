import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../assets/auth.png";

export default function Login() {
  const [role, setRole] = useState(""); // 🆕 اختيار الراديو
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!role) {
      newErrors.role = "Please select a role";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={logo} alt="Login" className={styles.image} />
        <h2>Login with your email</h2>
     
        <div className={styles.radioGroup}>
          <label
            className={`${styles.radioBtn} ${role === "admin" ? styles.active : ""}`}
          >
            <input
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>

          <label
            className={`${styles.radioBtn} ${role === "instuctor" ? styles.active : ""}`}
          >
            <input
              type="radio"
              value="instuctor"
              checked={role === "instuctor"}
              onChange={(e) => setRole(e.target.value)}
            />
            Instructor
          </label>
          <label
            className={`${styles.radioBtn} ${role === "student" ? styles.active : ""}`}
          >
            <input
              type="radio"
              value="student"
              checked={role === "student"}
              onChange={(e) => setRole(e.target.value)}
            />
            Student
          </label>
        </div>
        {errors.role && <p className={styles.error}>{errors.role}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} ${errors.password ? styles.errorInput : ""}`}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <button type="submit" className={styles.loginBtn}>
            Log In
          </button>
        </form>

        {success && <div className={styles.successCard}>✅ تم إدخال البيانات بنجاح</div>}
      </div>
    </div>
  );
}
