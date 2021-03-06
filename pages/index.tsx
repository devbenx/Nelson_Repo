import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

// import styles from '../styles/Home.module.css'
import styles from '../styles/Home.module.css';

import { Attributes, Root as IGetProductResponse } from '../types/product'
import { Attributes as IGetCSProductResponse } from '../types/csproduct'
import NavigationBar from './components/navigationbar'
import Slider from './components/slider'
import DisplayModal from './components/displaymodal';
import axios from 'axios'

export interface ISelectedProduct {
        id: number | undefined,
        img: string | undefined,
        brand: string | undefined,
        color: string | undefined,
        size?: string | undefined,
        category: string | undefined,
        price: number | undefined,
}

enum PageState {
        LOADING = 'LOADING',
        LOADED = 'LOADED',
        ERROR = 'ERROR',
};

const Home: NextPage = () => {

        // Page Set Up
        const [pageState, setPageState] = useState<PageState>(PageState.LOADING);

        // Product Set Up
        const [productId, setProductId] = useState();
        const [Product, setProduct] = useState<Attributes>();
        const [selectedProduct, setSelectedProduct] = useState<ISelectedProduct>();

        // Basket Set Up
        const [basketItems, setBasketItems] = useState<ISelectedProduct[]>([]);
        const [basketAmount, setBasketAmount] = useState(0);

        // Modal Set Up
        const [modalState, setModalState] = useState(false);

        // Selecting the product to buy //event: React.ChangeEvent<HTMLSelectElement>
        const selectingProductHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
                console.log(`Selecting size...for id: ${productId}`);
                setSelectedProduct({
                        id: productId,
                        img: Product?.main_image.image_sizes.medium,
                        brand: Product?.brand.attributes.name,
                        color: Product?.product_attributes[0].value,
                        size: event.target.value,
                        category: Product?.product_attributes[8].value,
                        price: Number(Product?.price.attributes.available_max_regular_price_excl_vat.amount),
                });
                console.log('Size selected: ' + event.target.value);
        }

        // Add to basket logic
        const addToBasket = (selectedItem: ISelectedProduct) => {

                if (selectedProduct === undefined || selectedProduct.size === 'none') {
                        return console.log('Product not selected!');
                }

                console.log('addToBasket starting...');
                console.log(selectedItem);

                // setBasketItems([...basketItems, selectedItem]);
                basketItems.push(selectedItem);
                console.log(`setBasketItems: ${basketItems.length}`);
                console.log(basketItems);

                const result = basketItems.reduce<number>((accumulator, obj) => {
                        return accumulator + obj.price!;
                }, 0);
                setBasketAmount(result);
                // setBasketAmount(selectedItem.price! + basketAmount);

                return setModalState(true);
        }

        useEffect(() => {
                const product_id = 362950;
                // axios.get(`http://localhost:3000/api/product/product`)
                axios.get('/api/product/product')
                        .then(res => {
                                console.log(`Main Product API call response: ${res.data.data}`);
                                setProduct(res.data.data.attributes);
                                setProductId(res.data.data.id);
                                setPageState(PageState.LOADED)
                        })
                        .catch(err => setPageState(PageState.ERROR));
        }, [])

        useEffect(() => {
                console.log(`Modal state handler: ${modalState}`);
        }, [modalState])

        return (
                <div className={styles.container}>
                        <Head>
                                <title>Nelson Assignment</title>
                                <meta name="description" content="Nelson Assignment" />
                                <link rel="icon" href="/favicon.ico" />
                        </Head>
                        {pageState === PageState.LOADING &&
                                <h1 className={styles.Loading}>Loading...</h1>
                        }
                        {pageState === PageState.LOADED &&
                                <main className={styles.Container}>
                                        <NavigationBar />
                                        <Slider mediaImages={Product!.media} />
                                        <p className={styles.brandName}>{Product!.brand.attributes.name}</p> {/* Brand Name */}
                                        <p>{Product!.product_classification} - {Product!.product_attributes[0].value}</p> {/* name - Color */}
                                        <p>{Product!.price.attributes.available_max_regular_price_excl_vat.amount}</p> {/* Price name */}

                                        <select onChange={selectingProductHandler}>
                                                <option className={styles.selectCustom} value="none">{selectedProduct?.size ? selectedProduct?.size : 'Kies je maat'}</option>
                                                select: {Product!.child_products.map((select_size, index) => {
                                                        return <option value={select_size.attributes[0].value} key={index}>{select_size.attributes[0].value}</option>
                                                })}
                                        </select>

                                        <button className={styles.ToSelectButton} onClick={() => { addToBasket(selectedProduct!) }}>In winkelmandje <span>+</span></button>

                                        {<DisplayModal openModal={modalState} setOpenModal={setModalState} product={selectedProduct!} addToBasketMain={selectedItemModal => addToBasket(selectedItemModal)} basketAmount={basketAmount} />}
                                        <section>
                                                <h1>OMSCHRIJVING</h1>
                                                <ul>{Product!.description_bullet_points.map((bulletPoint, key) =>
                                                        <li key={key}> &#10003; {bulletPoint}</li>)}
                                                </ul>
                                        </section>
                                        <section className={styles.MaterialSpecsContainer}>
                                                <h1>MATERIAAL EN SPECIFICATIES</h1>
                                                <ul>
                                                        <li>Artikel: <span>{Product!.catalogue_number}</span></li>
                                                        <li>Merk:  <span>{Product!.brand.attributes.name}</span></li>
                                                        <li>Categorie:  <span>{Product!.product_attributes[5].value}</span></li>
                                                        <li>Kleur:  <span>{Product!.product_attributes[0].value}</span></li>
                                                        <li>Pasvorm:  <span>{Product!.categories[1].name}</span></li>
                                                        <li>Uitneembaar voetbed:  <span>{Product!.product_attributes[10].value ? 'Ja' : 'Nee'}</span></li>
                                                        <li>Voering: {Product!.product_attributes[8].value.map((item: any, index: any) => {
                                                                if (index == (Product!.product_attributes[8].value.length - 1)) {
                                                                        return <span key={index}> en {item}</span>
                                                                } else {
                                                                        return <span key={index}>{item}</span>
                                                                }
                                                        })}</li>
                                                        <li>Materiaal buitenkant:  <span>{Product!.product_attributes[9].value}</span></li>
                                                        <li>Materiaal binnenzool:  <span>{Product!.product_attributes[12].value}</span></li>
                                                        <li>Materiaal buitenzool:  <span>{Product!.product_attributes[13].value}</span></li>
                                                        <li>Sluiting:  <span>{Product!.product_attributes[3].value}</span></li>
                                                        <li>Kenmerken: {Product!.categories[0].name_path.split('/').map((item, index) => {
                                                                return <button key={index}>{item}</button>
                                                        })}</li>
                                                </ul>
                                        </section>
                                        <section className={styles.AboutBrand}>
                                                <h1>OVER VAN LIER</h1>
                                                <p>{Product!.brand.attributes.description}</p>
                                                <img alt='img' src={Product!.brand.attributes.logo.url} />
                                        </section>
                                </main>
                        }
                        {pageState === PageState.ERROR &&
                                <h1>Something went wrong...</h1>
                        }

                        <footer className={styles.footer}>
                                <h1>By Frank Benjamin A.</h1>
                        </footer>
                </div>
        )
}

export default Home

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
        // Fetch JSON for Displaying product
        const product_id = 362950;

        const request_mainproduct = await fetch(`http://dump.dataplatform.shoes/20201005_frontend_assignment/cross_sell_products_for_${product_id}.json`);

        const response_product = await request_mainproduct.json() // response

        // Pass data to the page via props
        return {
                props: { response_product }
        }
}
