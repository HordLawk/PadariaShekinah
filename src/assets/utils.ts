type fetchProductsParameters = {
    query?: string,
    ids?: number[],
};

type ProductType = {
    _id: number,
    name: string,
    image: string,
    price: number,
    description?: string,
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
        image: '/products/pao.jpg',
        name: 'Pão Francês',
        price: 1,
    },
    {
        _id: 1,
        image: "/products/bolo-kit-kat.jpg",
        name: 'Bolo Confeitado',
        price: 230,
    },
    {
        _id: 2,
        image: '/products/croissants.jpg',
        name: 'Croissants',
        price: 3,
    },
    {
        _id: 3,
        image: '/products/pao-tatu.jpg',
        name: 'Pão Tatu',
        price: 5,
    },
    {
        _id: 4,
        image: '/products/cookies.jpg',
        name: 'Cookie',
        price: 5,
    },
    {
        _id: 5,
        image: "/products/bolo-cenoura.jpg",
        name: 'Bolo de Cenoura',
        price: 20,
    },
    {
        _id: 6,
        image: '/products/mini-pizza.jpg',
        name: 'Mini Pizza',
        price: 6,
    },
    {
        _id: 7,
        image: '/products/pao-metro.jpg',
        name: 'Pão Metro',
        price: 3,
    },
    {
        _id: 8,
        image: "/products/pudim.jpg",
        name: 'Pudim',
        price: 45,
    },
    {
        _id: 9,
        image: '/products/rosca-goiabada.jpg',
        name: 'Rosca de Goiabada',
        price: 22,
    },
    {
        _id: 10,
        image: '/products/rosquinha-nata.jpg',
        name: 'Rosquinhas de Nata',
        price: 12,
    },
    {
        _id: 11,
        image: '/products/rosquinha.jpg',
        name: 'Rosquinhas com Manteiga',
        price: 20,
    },
    {
        _id: 12,
        image: '/products/bolo-infantil.jpg',
        name: 'Bolo Infantil',
        price: 180,
    },
    {
        _id: 13,
        image: "/products/bolo-morango.jpg",
        name: 'Bolo de Morango',
        price: 280,
    },
    {
        _id: 14,
        image: '/products/bolo-colorido.jpg',
        name: 'Bolo Confeitado',
        price: 165,
    },
    {
        _id: 15,
        image: '/products/pao-de-mel.jpg',
        name: 'Pão de Mel',
        price: 8,
    },
    {
        _id: 16,
        image: '/products/bolo-rosa.jpg',
        name: 'Bolo Confeitado (pedaço)',
        price: 18,
    },
    {
        _id: 17,
        image: '/products/croissant-bacon.jpg',
        name: 'Bandeja de Croissants de Bacon',
        price: 32,
    },
    {
        _id: 18,
        image: '/products/bolo-chocolate.jpg',
        name: 'Bolo Confeitado de Chocolate',
        price: 210,
    },
    {
        _id: 19,
        image: '/products/bolo-brilho.jpg',
        name: 'Bolo Confeitado (pedaço)',
        price: 20,
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