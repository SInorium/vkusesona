import React from 'react'
import { Header, Container, Footer, CarouselProduct } from "@/components";

import styles from './ordering.module.scss'

const title = 'Оформление заказа'

const Ordering = () => {
    return (
        <>
            <Header />
            <Container>
                <>
                    <h2 className={styles.title + ' ' + styles.wrapper}>
                        {title}
                    </h2>
                </>
            </Container>
        </>
    )
}

export default Ordering
