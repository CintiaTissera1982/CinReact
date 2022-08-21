import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from './index'
import { createAdaptedProductFromFirestore } from '../../adapters/productAdapter'

export const getProducts = (categoryId) => {
        const collectionRef = !categoryId 
            ? collection(db, 'productos')
            : query(collection(db, 'productos'), where('category', '==', categoryId))

        return getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            return productsAdapted
        }).catch(error => {
            return error
        })
}