import styles from "./FriendSelectBox.module.css";
import { useState } from "react";

const FriendSelectBox = ({
  friendNameImage,
  friendImage,
  hoverFriendImage,
  category,
}) => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  const handleMouseOver = () => {
    setIsMouseHover(true);
  };
  const handleMouseLeave = () => {
    setIsMouseHover(false);
  };

  return (
    <div
      className={styles.friends}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={styles.friendName}
        src={friendNameImage}
        alt="friendName"
      />
      <img
        className={styles.friendImage}
        src={isMouseHover ? hoverFriendImage : friendImage}
        alt="friendImage"
      />
      <div className={styles.friendText}>{category}</div>
    </div>
  );
};
export default FriendSelectBox;
