export const summaryConvert = (inputList: iStockSet[]): iSummaryItem[] => {
    let returnList: iSummaryItem[] = [];

    const sumSet: iStock[] = [];
    inputList.map((stockItem) => {
        stockItem.stock.map((item) => {
            sumSet.push({
                code: item.code,
                price: item.price,
                time: stockItem.time.getTime() || 0
            });
        });
    });

    if (inputList.length > 0) {
        const firstInputStock: iStock[] = inputList[0].stock;
        firstInputStock.map((stockItem) => {
            returnList.push(
                {
                    name: stockItem.code,
                    start: findPriceBy(sumSet, stockItem.code, 'time', true) || 0,
                    low: findPriceBy(sumSet, stockItem.code, 'price', true) || 0,
                    high: findPriceBy(sumSet, stockItem.code, 'price', false) || 0,
                    current: findPriceBy(sumSet, stockItem.code, 'time', false) || 0,
                }
            );
        });
    }
    
    return returnList;
}

export const findPriceBy = (sumSet: iStock[], code: string, findBy: 'price' | 'time', isAesc: boolean = true) => {
    const stockNameItems: iStock[] = sumSet.filter(item => item.code === code);
    if (!stockNameItems) {
        return 0;
    }
    if (findBy === 'price') {
        return stockNameItems.sort((a, b) => isAesc ? (a.price - b.price) : (b.price - a.price))[0].price;
    }
    if (findBy === 'time') {
        return stockNameItems.sort((a, b) => isAesc ? (a.time || 0) - (b.time || 0) : (b.time || 0) - (a.time || 0))[0].price;
    }
}