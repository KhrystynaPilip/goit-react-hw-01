import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }){
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

