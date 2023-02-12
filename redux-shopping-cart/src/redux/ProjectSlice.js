import {createSlice, current} from "@reduxjs/toolkit"

export const ProductReducer =createSlice({
    name:"product",
    initialState: {
        products:[],
        filteredProducts:[],
        cart:[],
    },
    reducers: {
        SET_PRODUCTS(state,action){
            state.products=action.payload.products
            state.filteredProducts=action.payload.products
        },
        FILTER_PRODUCTS(state,action) {
            const search = action.payload.search  
            const category = action.payload.category  
            const brand = action.payload.brand  
            const range = action.payload.range  
            let newArray=current(state.products)

            /* --- FILTER BY CATEGORY AND NAME */
            category!=="all"? 
            newArray=newArray.filter(p => p.name.toLowerCase().includes(search) && p.category.toLowerCase().includes(category) ):
            newArray=newArray.filter(p => p.name.toLowerCase().includes(search))

            /* --- FILTER BY BRAND */
            let newArray2 = []
            brand==="all" ? 
            newArray2=[...newArray] :
            newArray2=newArray.filter(p =>p.brand.toLowerCase().includes(brand) )
            
            /* --- FILTER BY RANGE */
            let newArray3=newArray2.filter(p =>  Number(p.price) < Number(range))

            return {...state, products: state.products , filteredProducts:newArray3}
        },
        SORT_PRODUCTS(state,action){
            let filterArray = state.filteredProducts
           switch(action.payload.option) {
            case "highest price":
                state.filteredProducts=filterArray.sort((a,b)=> {
                    return b.price -a.price
                })
                break;
            case "lowest price":
                state.filteredProducts=filterArray.sort((a,b)=> {
                    return a.price -b.price
                })
                break;
            case "a-z":
                state.filteredProducts=filterArray.sort((a,b)=> {
                    return a.name.localeCompare(b.name)               
                })
                break;
            case "z-a":
                state.filteredProducts=filterArray.sort((a,b)=> {
                    return b.name.localeCompare(a.name)               
                })
                break;
            default:
                return state
          }
            

        },
        ADD_TO_CART(state,action){
            state.cart=[...state.cart, action.payload.product]
        },
        REMOVE_FROM_CART(state,action){
            const product=action.payload.product.name.toLowerCase()
            state.cart=state.cart.filter( item =>  !item.name.toLowerCase().includes(product))
        },
        INCREASE_QUANTITY(state,action){
            const product=action.payload.product.name.toLowerCase()
            state.cart.map( item => item.name.toLowerCase().includes(product) && item.quantity++)
        },
        DECREASE_QUANTITY(state,action){
            const product=action.payload.product.name.toLowerCase()
            state.cart.map( item =>  item.name.toLowerCase().includes(product) ? item.quantity>1 ? item.quantity-- : item.quantity: item )
        },
        CLEAR_CART(state){
            state.cart=[]
        },
    }
})

export const {  SET_PRODUCTS,
                FILTER_PRODUCTS,
                SORT_PRODUCTS,
                ADD_TO_CART,
                REMOVE_FROM_CART,
                INCREASE_QUANTITY,
                DECREASE_QUANTITY,
                FREE_SHIPPING,
                CLEAR_CART } = ProductReducer.actions

export const selectedProducts = state => state.product.products
export const filteredProducts = state => state.product.filteredProducts

export default ProductReducer;

