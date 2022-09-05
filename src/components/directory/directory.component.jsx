import React from 'react';
import './directory.styles.scss';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

function Directory({ sections }) {
    return (
        <div className='directory-menu'>

            {
                sections.map(({ title, imageUrl, id, size }) => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} route={title} />))
            }
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);