import React from "react";

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CategoryPage = () => {
    const { collectionId } = useParams();
    const { title, items } = useSelector(state => selectCollection(collectionId)(state));


    return (
        <div className="collection-page">
            <h1 className='title'>{title}</h1>
            <div className="items">
                {
                    items.map(item => (

                        <CollectionItem key={item.id} item={item} />

                    ))
                }
            </div>
        </div>
    );
}





export default CategoryPage;