import { useState } from "react";
import styles from "./NotificationBell.module.css";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bellContainer}>
        {/* Nút chuông thông báo */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={styles.bellButton}
          aria-label="Thông báo"
        >
          <span role="img" aria-label="bell">
            🔔
          </span>
          {/* Chấm đỏ thông báo mới */}
          <span className={styles.dot}></span>
        </button>

        {/* Tab thông báo */}
        {open && (
          <div className={styles.tab}>
            <div className={styles.tabHeader}>
              <strong className={styles.tabTitle}>Thông báo</strong>
            </div>
            <div className={styles.tabNav}>
              <button className={styles.tabBtn}>Tất cả</button>
              <button className={styles.tabBtnInactive}>Chưa đọc</button>
            </div>
            <div className={styles.tabContent}>
              <div className={styles.notifyRow}>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar"
                  className={styles.avatar}
                />
                <div>
                  <div className={styles.notifyText}>
                    <b>Quyen Ha</b> và <b>29 người khác</b> đã bày tỏ cảm xúc về
                    một bài viết:
                    <br />
                    <span className={styles.notifySub}>
                      Được làm Mentor hỗ trợ cho gà...
                    </span>
                  </div>
                  <div className={styles.notifyTime}>2 giờ</div>
                </div>
                <span className={styles.likeIcon} role="img" aria-label="like">
                  👍
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
