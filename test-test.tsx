const arr1 = [
    {
        name: 'BTC',
        fullName: 'Bitcoin',
        imageUrl: 'https:// www.cryptocompre.com//media/19633/btc.png',
        price: '6644.520',
        volume24Hour: 91274,
    },
    {
        name: 'ETH',
        fullName: 'Ethereum',
        imageUrl: 'https:// www.cryptocompre.com//media/20646/eth_logo.png',
        price: '139.270',
        volume24Hour: 584666,
    },
];

const arr2 = [
    {
        name: 'BTC',
        fullName: 'Bitcoin',
        imageUrl: 'https:// www.cryptocompre.com//media/19633/btc.png',
        price: '6644.520',
        volume24Hour: 91274,
    },
    {
        name: 'ETH',
        fullName: 'Ethereum',
        imageUrl: 'https:// www.cryptocompre.com//media/20646/eth_logo.png',
        price: '139.270',
        volume24Hour: 584666,
    },
];

const result = arr1.filter((obj, index) => {
    if (obj.price != arr2[index].price) {
        return true;
    }
    return false
});

