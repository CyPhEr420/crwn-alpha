import './collection-preview.styles.scss';
import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview' >
            <h1 className='title'><a href={`shop/${title.toLowerCase()}`}>{title.toUpperCase()}</a > </h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }

            </div>
        </div>
    )

}

export default CollectionPreview;