type fetchProductsParameters = {
    query?: string,
    ids?: number[],
};

type ProductType = {
    _id: number,
    name: string,
    image: string,
    price: number,
};

type CartProductType = {
    id: number,
    amount: number,
};

const toPriceString = (price: number) => price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const products: ProductType[] = [
    {
        _id: 0,
        image: 'https://placehold.co/400/fdd/000',
        name: 'Bolo',
        price: 100,
    },
    {
        _id: 1,
        image: 'https://placehold.co/400/dfd/000',
        name: 'Casadinho',
        price: 50,
    },
    {
        _id: 2,
        image: 'https://placehold.co/400/ddf/000',
        name: 'Hamburguer',
        price: 25,
    },
    {
        _id: 3,
        image: 'https://placehold.co/400/ffd/000',
        name: 'Palha italiana',
        price: 5,
    },
];

const fetchProducts = async ({query, ids}: fetchProductsParameters) => {
    const productsByIds = ids ? products.filter(({_id}) => (ids.includes(_id))) : products;
    return (
        query
        ? productsByIds.filter(({name}) => name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()))
        : productsByIds
    );
}

export { toPriceString, fetchProducts };
export type { ProductType, CartProductType };