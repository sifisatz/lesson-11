import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'
const CollectionPage = ({ match }) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
)


const mapStateToProps = (state, ownProps) => ({
    //this is necessary because unlike others selectors, this selector needs a part of the state depending on the URL parameter!
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);