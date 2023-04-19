import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./body.scss";
import "../Head/head.scss"
import { Head } from '../Head/head';

export const Body = () => {
  const {status,setStatus}= useState(false);
  const avatarStyleAutorised = {
    dropShadow: '1px 2px 9px #000000',

  };

  const avatarStyleNotAutorised= {
    drophadow: '1px 2px 9px #ffffff',

  }
  return (
    <div className='body'>
        <Head className="head"/>

        <div className="container">
            <AccountCircleIcon className='avatarImg' style={status?avatarStyleAutorised:avatarStyleNotAutorised}/>

            <div className="info">
              <div className="infoContainer">

                <div className="userNameContainer">
                    <div className="nameLabel">Name</div>
                    <div className="userName">Hatim Fangour</div>
                </div>

                <div className="proContainer">
                    <div className="proLabel">Is</div>
                    <div className="pro">Engineer</div>
                </div>

              </div>

            <div className="infoAccess">
              
              <div className="dateContainer">
                    <div className="dateLabel">at</div>
                    <div className="date">12:34</div>
                </div>

                <div className="statusContainer">
                <div className="statusLabel">Status</div>
                  <div className="status">{status?"NotAutorised":"Autorised"}</div>
            </div>
            </div>

            </div>

        </div>
    </div>
  )
}
