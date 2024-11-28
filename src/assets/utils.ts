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
        image: `${import.meta.env.BASE_URL}/products/pao.jpg`,
        name: 'Pão Francês',
        price: 1,
    },
    {
        _id: 1,
        image: `${import.meta.env.BASE_URL}/products/bolo-kit-kat.jpg`,
        name: 'Bolo Confeitado',
        price: 230,
    },
    {
        _id: 2,
        image: `${import.meta.env.BASE_URL}/products/croissants.jpg`,
        name: 'Croissants',
        price: 3,
    },
    {
        _id: 3,
        image: `${import.meta.env.BASE_URL}/products/pao-tatu.jpg`,
        name: 'Pão Tatu',
        price: 5,
    },
    {
        _id: 4,
        image: `${import.meta.env.BASE_URL}/products/cookies.jpg`,
        name: 'Cookie',
        price: 5,
    },
    {
        _id: 5,
        image: `${import.meta.env.BASE_URL}/products/bolo-cenoura.jpg`,
        name: 'Bolo de Cenoura',
        price: 20,
    },
    {
        _id: 6,
        image: `${import.meta.env.BASE_URL}/products/mini-pizza.jpg`,
        name: 'Mini Pizza',
        price: 6,
    },
    {
        _id: 7,
        image: `${import.meta.env.BASE_URL}/products/pao-metro.jpg`,
        name: 'Pão Metro',
        price: 3,
    },
    {
        _id: 8,
        image: `${import.meta.env.BASE_URL}/products/pudim.jpg`,
        name: 'Pudim',
        price: 45,
    },
    {
        _id: 9,
        image: `${import.meta.env.BASE_URL}/products/rosca-goiabada.jpg`,
        name: 'Rosca de Goiabada',
        price: 22,
    },
    {
        _id: 10,
        image: `${import.meta.env.BASE_URL}/products/rosquinha-nata.jpg`,
        name: 'Rosquinhas de Nata',
        price: 12,
    },
    {
        _id: 11,
        image: `${import.meta.env.BASE_URL}/products/rosquinha.jpg`,
        name: 'Rosquinhas com Manteiga',
        price: 20,
    },
    {
        _id: 12,
        image: `${import.meta.env.BASE_URL}/products/bolo-infantil.jpg`,
        name: 'Bolo Infantil',
        price: 180,
    },
    {
        _id: 13,
        image: `${import.meta.env.BASE_URL}/products/bolo-morango.jpg`,
        name: 'Bolo de Morango',
        price: 280,
    },
    {
        _id: 14,
        image: `${import.meta.env.BASE_URL}/products/bolo-colorido.jpg`,
        name: 'Bolo Confeitado',
        price: 165,
    },
    {
        _id: 15,
        image: `${import.meta.env.BASE_URL}/products/pao-de-mel.jpg`,
        name: 'Pão de Mel',
        price: 8,
    },
    {
        _id: 16,
        image: `${import.meta.env.BASE_URL}/products/bolo-rosa.jpg`,
        name: 'Bolo Confeitado (pedaço)',
        price: 18,
    },
    {
        _id: 17,
        image: `${import.meta.env.BASE_URL}/products/croissant-bacon.jpg`,
        name: 'Bandeja de Croissants de Bacon',
        price: 32,
    },
    {
        _id: 18,
        image: `${import.meta.env.BASE_URL}/products/bolo-chocolate.jpg`,
        name: 'Bolo Confeitado de Chocolate',
        price: 210,
    },
    {
        _id: 19,
        image: `${import.meta.env.BASE_URL}/products/bolo-brilho.jpg`,
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