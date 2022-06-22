import { ReactElement } from 'react';

interface logProps {
    list: iStockSet[];
    triggerLog: () => void;
    buttonText: string;
}

function Log({ list = [], triggerLog, buttonText = 'Pause Log' }: logProps): ReactElement {
    const toggleLog = () => {
        triggerLog();
    }
    console.log(list)
    return (
        <div className='section'>
            <div className='title'>
                <h2>Log</h2>
                <button onClick={toggleLog} className="trigger-button">
                    {buttonText}
                </button>
            </div>
            {
                list.map((stockSetItem) => (
                    <div key={stockSetItem.time.getTime()} className={`log-item`}>
                        <div>
                        <p>Updates for {stockSetItem.time.toTimeString()}</p>
                        {
                            stockSetItem.stock.map((stockItem) => (
                                <p key={stockSetItem.time.getTime()+stockItem.code}>
                                    {stockItem.code}: {stockItem.price}
                                </p>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default Log;
