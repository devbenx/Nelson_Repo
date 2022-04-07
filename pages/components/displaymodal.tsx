import React from "react";
import ReactDOM, { FunctionComponent, useEffect, useState } from "react"
import { Hit as IGetCSProductResponse } from '../../types/csproduct'
// import { createPortal } from "react-dom"
import Modal from 'react-modal';
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import { ISelectedProduct } from '../index'
// Modal.setAppElement('#react-modals');

enum PageState {
        LOADING = 'LOADING',
        LOADED = 'LOADED',
        ERROR = 'ERROR',
};

const DisplayModal: FunctionComponent<{ openModal: boolean, setOpenModal: React.Dispatch<React.SetStateAction<boolean>>, product: ISelectedProduct, addToBasketMain: (selectedItem: ISelectedProduct) => void, basketAmount: number }> = ({ openModal, product, setOpenModal, addToBasketMain, basketAmount }) => {

        // Cross Selling Products Set Up
        const [crossSellingProducts, setCrossSellingProducts] = useState<IGetCSProductResponse[]>();
        const [crossSellingProductsState, setCrossSellingProductsState] = useState<PageState>(PageState.LOADING);
        const [selectedItem, setSelectedItem] = useState<ISelectedProduct>();

        useEffect(() => {
                if (openModal) {
                        console.log(`Opening modal ${openModal}`);
                        console.log(`Opening modal for id ${product.id}`);
                        // axios.get(`${process.env.API_KEY}/api/product/cross_selling_products/${product.id}`)
                        axios.get(`/api/product/cross_selling_products/${product.id}`)
                                .then(res => {
                                        console.log('Display Modal API call response: loading...')
                                        setCrossSellingProducts(res.data.data.hits);
                                        setCrossSellingProductsState(PageState.LOADED);
                                })
                                .catch(err => setCrossSellingProductsState(PageState.ERROR));
                }

        }, [openModal])

        useEffect(() => {
                if (selectedItem != undefined) {
                        console.log(selectedItem);
                        addToBasketMain(selectedItem);
                }
        }, [selectedItem])

        const selectingItemHandler = (item: IGetCSProductResponse) => {
                console.log(`selectingItemHandler...`)
                setSelectedItem({
                        id: item.attributes.product.id,
                        img: item.attributes.product.attributes.main_image.image_sizes.original,
                        brand: item.attributes.product.attributes.brand.name,
                        color: item.attributes.product.attributes.product_attributes.color,
                        category: item.attributes.product.attributes.product_classification,
                        price: Number(item.attributes.product.attributes.price.available_max_regular_price.amount)
                })
                console.log(`Modal state ${openModal}`);
                console.log(selectedItem);
        }

        const toggleModalStateHandler = () => {
                setOpenModal(false)
                console.log(`Closing modal ${openModal}`)
        }

        if (openModal === false) return null;

        if (openModal) return <section className={styles.ModalContainer}>
                <section data-testid="modalTestId" className={styles.ModalContainerContent}>
                        <header>
                                <h1>TOEGEVOEGD AAN JE WINKELMANDJE!</h1>
                                <button onClick={toggleModalStateHandler}>&#10005;</button>
                        </header>
                        <section className={styles.selectedProductContainer}>
                                <div className={styles.selectedProductContainerImg}>
                                        <img alt='img' src={product?.img} />
                                </div>
                                <section>
                                        <h1>{product?.brand}</h1>
                                        <p>{product?.category}</p>
                                        <p>Kleur: {product?.color}</p>
                                        <p>Maat: {product?.size}</p>
                                </section>
                        </section>
                        <section className={styles.crossSellingContainer}>
                                {crossSellingProductsState === PageState.LOADED &&
                                        <section>
                                                {crossSellingProducts?.map((item, index) => {
                                                        return <section key={`sec${index}`} className={styles.crossSellingItem}>
                                                                <img key={`img${index}`} alt='img' src={item.attributes.product.attributes.main_image.image_sizes.medium} />
                                                                <div key={`div${index}`}>
                                                                        <p key={`p1${index}`}>{item.attributes.product.attributes.name}</p>
                                                                        <p key={`p2${index}`}>{item.attributes.product.attributes.product_classification}</p>
                                                                        <p key={`p3${index}`}>{item.attributes.product.attributes.price.min_regular_price.amount}</p>
                                                                </div>
                                                                <button key={`button${index}`} onClick={() => { selectingItemHandler(item) }}>+</button>
                                                        </section>
                                                })}
                                        </section>}
                                {crossSellingProductsState === PageState.LOADING &&
                                        <section>
                                                Loading...
                                        </section>}
                        </section>
                        <section className={styles.BasketContainer}>
                                <h1>TOTAL: {Math.floor(basketAmount)}</h1>
                        </section>
                </section>
        </section>

        return null
}

export default DisplayModal;