import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" className={css.img} />
      <p className={css.friendName}>{name}</p>
      <p
        className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
