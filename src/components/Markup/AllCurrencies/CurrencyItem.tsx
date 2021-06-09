import React from "react";
import {CurrencyItemType} from "../../../redux/currency/currencyR";

interface CurrencyItemProps {
    currencyItem: CurrencyItemType
}

export const CurrencyItem: React.FC<CurrencyItemProps> = ({currencyItem}) => {
    return <div>
        <div>
            {currencyItem.currencyName}
        </div>
        <div>
            {currencyItem.id}
        </div><div>
            {currencyItem.currencySymbol}
        </div>
        <br/>
    </div>
}