var data = {
    rooms: [
        {
            name: '10',
            tiles: {
                A: { clickAmount: 0 },
                B: { clickAmount: 0 },
                C: { clickAmount: 0 },
                D: { clickAmount: 0 },
                E: { clickAmount: 0 },
                F: { clickAmount: 0 },
                G: { clickAmount: 0 },
                H: { clickAmount: 0 },
                I: { clickAmount: 0 },
                J: { clickAmount: 0 },
                K: { clickAmount: 0 },
                L: { clickAmount: 0 },
                M: { clickAmount: 0 },
                N: { clickAmount: 0 },
                O: { clickAmount: 0 },
                P: { clickAmount: 0 },
                Q: { clickAmount: 0 },
                R: { clickAmount: 0 },
                S: { clickAmount: 0 },
                T: { clickAmount: 0 }
            }    
        },
        {
            name: '100',
            tiles: {
                A: { clickAmount: 0 },
                B: { clickAmount: 0 },
                C: { clickAmount: 0 },
                D: { clickAmount: 0 },
                E: { clickAmount: 0 },
                F: { clickAmount: 0 },
                G: { clickAmount: 0 },
                H: { clickAmount: 0 },
                I: { clickAmount: 0 },
                J: { clickAmount: 0 },
                K: { clickAmount: 0 },
                L: { clickAmount: 0 },
                M: { clickAmount: 0 },
                N: { clickAmount: 0 },
                O: { clickAmount: 0 },
                P: { clickAmount: 0 },
                Q: { clickAmount: 0 },
                R: { clickAmount: 0 },
                S: { clickAmount: 0 },
                T: { clickAmount: 0 }
            }            
        }
    ]
}

console.log(data);

const stringRepresentation = JSON.stringify(data);

localStorage.setItem('test', stringRepresentation)

console.log(localStorage.getItem('test'));

console.log(JSON.parse(localStorage.getItem('test')))