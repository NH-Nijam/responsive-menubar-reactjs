import React from 'react';

const List = ({route}) => {
    const {name, path} =route;
    return (
        <li className='mr-10 ps-10 md:p-0 '>
            <a href={path}>{name}</a>
        </li>
    );
};

export default List;