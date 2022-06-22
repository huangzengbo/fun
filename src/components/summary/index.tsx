import { ReactElement } from 'react';
import { summaryConvert } from './summary.calc';

interface summaryProps {
    list: iStockSet[];
}

function Summary({ list }: summaryProps): ReactElement {
    
    const summaryList: iSummaryItem[] = summaryConvert(list);

    return (
        <div className='section'>
            <div className='title'>
                <h2>Summary</h2>
            </div>
            <table className='summary'>
                <thead>
                    <tr>
                        <th>Stock</th>
                        <th>Starting</th>
                        <th>Lowest</th>
                        <th>Highest</th>
                        <th>Current</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        summaryList.map((summaryItem) => (
                            <tr>
                                <td>{summaryItem.name}</td>
                                <td>{summaryItem.start}</td>
                                <td>{summaryItem.low}</td>
                                <td>{summaryItem.high}</td>
                                <td>{summaryItem.current}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Summary;