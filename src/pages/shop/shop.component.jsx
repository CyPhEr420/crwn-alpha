import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


const ShopPage = (props) => {
    return (
        <div className="shop-page">
            <Routes>
                <Route path={'/'} element={<CollectionsOverview />} />
                <Route path={'/:collectionId'} element={<CollectionPage />} />
            </Routes>


        </div>
    );
}



export default ShopPage;