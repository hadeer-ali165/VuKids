import React from "react";
import styles from "./JoinForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function JoinForm() {
  return (
    <div className={styles.joinContainer}>
      <div className={styles.formSection}>
        <h2>Join To Our Family</h2>
        <form>
          <input type="text" placeholder="Name" />
          <div className={styles.row}>
            <input type="number" placeholder="Age" />
            <input type="tel" placeholder="Phone" />
          </div>
          <input type="email" placeholder="Email" />
          <div className={styles.row}>
            <select>
              <option>Select Type</option>
              <option>Student</option>
              <option>Parent</option>
            </select>
            <select>
              <option>Select Country</option>
              <option>Egypt</option>
              <option>Saudi Arabia</option>
            </select>
          </div>
          <select>
            <option>Select Course</option>
            <option>Programming</option>
            <option>Robotics</option>
          </select>
          <button type="submit" className={styles.joinBtn}>
            Join Us
          </button>
        </form>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoBox}>
          <FontAwesomeIcon icon={faHouse} className={styles.icon} />
          <p>Elmahalla Elkobra, Gharbia Egypt.</p>
        </div>
        <div className={styles.infoBox}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <p>
            +20 10 40927435 <br /> Sun to Fri 9am to 6pm
          </p>
        </div>
        <div className={styles.infoBox}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <p>
            vusoftco@gmail.com <br /> Send us your query anytime!
          </p>
        </div>
      </div>
    </div>
  );
}


