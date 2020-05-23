import React from 'react';
import {inject, observer} from "mobx-react";
import {observable, computed, action} from "mobx";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import MenuItem from '@material-ui/core/MenuItem';
import CurrenciesStore from "../../stores/currenciesStore";
import ConverterStore from "../../stores/converterStore";


type IConverterBlock = {
    classes: any;
    currenciesStore?: CurrenciesStore;
    converterStore?: ConverterStore;
};


const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore', 'converterStore')(
    observer(({classes, currenciesStore, converterStore}) => {
        const coins: string[] = currenciesStore!.getItems.map(coin => coin.name);


        return (
            <Paper className={classes.paper}>
                <div className={classes.cryptoInputBox}>
                    <FormControl className={classes.currencyInput}>
                        <TextField label="Сумма"/>
                    </FormControl>
                    <FormControl className={classes.currencyType}>
                        <InputLabel shrink id="demo-simple-select-helper-label">
                            Валюта
                        </InputLabel>
                        <Select value={converterStore?.getSelectedCoin.name || ''}>
                            {coins.map(name => (
                                <MenuItem value={name}>{name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.cryptoInputBox}>
                    <FormControl className={classes.currencyInput}>
                        <TextField label="Сумма"/>
                    </FormControl>
                    <FormControl className={classes.currencyType}>
                        <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>
                        <Select value={coins[0] || ''}>
                            {coins.map(name => (
                                <MenuItem value={name}>{name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </Paper>)
    }));

export default ConverterBlock;