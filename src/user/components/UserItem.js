import React from 'react';
import './UserItem.css';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/UIElements/components/UIElements/Avatar';
import Cards from '../../shared/UIElements/components/UIElements/Card';

const UserItem = (props) => {
  return (
    <li className='user-item'>
      <Cards className='user-item__content'>
        <Link to={`/${props.id}/places`}>
          <div className='user-item__image'>
            <Avatar
              image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
              alt={props.name}
            />
          </div>
          <div className='user-item__info'>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Cards>
    </li>
  );
};

export default UserItem;
