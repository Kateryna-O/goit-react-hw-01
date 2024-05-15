import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{"@" + tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className={styles.statItem}>
            <span className={styles.statLabel}>{key}</span>
            <span className={styles.statValue}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
