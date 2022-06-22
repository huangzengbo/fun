import { summaryConvert, findPriceBy } from '../summary.calc';

const summaryInput = [
    {
        "time": new Date(2010,0,0),
        "stock": [
            {
                "code": "AFAIK",
                "price": 172.69
            },
            {
                "code": "AKA",
                "price": 115.43
            },
        ]
    },
    {
        "time": new Date(),
        "stock": [
            {
                "code": "AFAIK",
                "price": 172.7
            },
            {
                "code": "AKA",
                "price": 115.33
            },
        ]
    }
];

const summaryOutput = [
    {
        name: "AFAIK",
        start: 172.69,
        low: 172.69,
        high: 172.7,
        current: 172.7,
    },
    {
        name: "AKA",
        start: 115.43,
        low: 115.33,
        high: 115.43,
        current: 115.33,
    }
    
]

const sumText = [
    {
        "code": "TMI",
        "price": 200,
        "time": 1234563
    },
    {
        "code": "XTLA",
        "price": 20,
        "time": 1234567
    },
    {
        "code": "TMI",
        "price": 1,
        "time": 1234564
    },
    {
        "code": "XTLA",
        "price": 10,
        "time": 1234567
    }
]

describe('findPriceBy', () => {
  it('min price', () => {
    expect(findPriceBy(sumText, 'TMI','price',true)).toEqual(1);
  });

  it('max price', () => {
    expect(findPriceBy(sumText, 'TMI','price',false)).toEqual(200);
  });

  it('latest price', () => {
    expect(findPriceBy(sumText, 'TMI','time',false)).toEqual(1);
  });

  it('earliest price', () => {
    expect(findPriceBy(sumText, 'TMI','time',true)).toEqual(200);
  });
});


describe('summaryConvert', () => {
    it('convert', () => {
      expect(summaryConvert(summaryInput)).toEqual(summaryOutput);
    });
  });
  