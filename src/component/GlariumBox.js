import React from 'react';
import'../css/GlariumBox.css';
import { Avatar } from "@material-ui/core";
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function GlariumBox() {
    const user = useSelector(selectUser);
    return (
        <div className="quoraBox">
          <div className="quoraBox__info">
            <Avatar
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <h5>{user.displayName ? user.displayName : user.email}</h5>
          </div>
          <div className="quoraBox__quora">
            <p>What is your question or link?</p>
          </div>
        </div>
    );
}

export default GlariumBox;
