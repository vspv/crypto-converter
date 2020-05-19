import React from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {CryptoTable, ConverterBlock} from "./components";
import {TCoin} from "./types";
import useStyles from './styles'

function App() {
    const classes = useStyles();
    let [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

    React.useEffect(() => {
        axios
            .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({data}) => {
                const coins: TCoin[] = data.Data.map((coin: any) => {
                    const obj: TCoin = {
                        name: coin.CoinInfo.Name,
                        fullName: coin.CoinInfo.FullName,
                        imageUrl: `https:www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                        price: coin.RAW.USD.PRICE.toFixed(3),
                        volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR)
                    };
                    return obj;
                });
                setAllCoins(coins);
            });
    }, [classes]);

    return (
        <Container className="root" maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <CryptoTable classes={classes} items={allCoins}/>
                </Grid>
                <Grid item xs={4}>
                    <ConverterBlock classes={classes} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
