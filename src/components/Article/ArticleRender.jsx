/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../img/Vector.png';

const ArticleRender = ({
  data: {
    title,
    body,
    slug,
    favoritesCount,
    author: { username, image },
  },
  calculatedData: [date, tags, userBtn, modal, likeIt],
}) => {
  return (
    <div className="content__block article">
      <div className="content__description">
        <h3 className="content__slug">{title}</h3>
        <button className="like" onClick={() => likeIt(slug)} type="button" >
          <img src={icon} alt="qwe" />
          {favoritesCount}
        </button>
        <div>{tags}</div>
        <p>{body}</p>
      </div>
      <div className="content__bar">
        <div className="content__owner">
          <div>
            <p className="content__name">{username}</p>
            <span className="content__date">{date}</span>
          </div>
          <img src={image} alt="avatar" />
          {modal}
        </div>
        {userBtn}
      </div>
    </div>
  );
};


ArticleRender.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string,
  slug: PropTypes.string,
  favoritesCount: PropTypes.number,
  author: PropTypes.object,
  username: PropTypes.string,
  image: PropTypes.string,
  calculatedData: PropTypes.array,
  date: PropTypes.string,
  tags: PropTypes.array,
  userBtn: PropTypes.object,
  modal: PropTypes.object,
  likeIt: PropTypes.func,
}

export default ArticleRender;
