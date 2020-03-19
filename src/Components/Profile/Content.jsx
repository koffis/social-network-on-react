import React from 'react';
import s from'./Content.module.css';
import MyPost from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo/>
            </div>
          <div className={s.posts}>
              <MyPost state={props.state} />
          </div>
      </div>
    )
}

export default Content;