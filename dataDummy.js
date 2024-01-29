var data = {
    rooms: [
        {
            name: '10',
            tiles: {
                A: {
                    clickAmount: 0
                },
                B: {
                    clickAmount: 0
                }
            }
        },
        {
            name: '100',
            tiles: {
                A: {
                    clickAmount: 0
                },
                B: {
                    clickAmount: 0
                }
            }
        }
    ]
}

console.log(data);

const stringRepresentation = JSON.stringify(data);

localStorage.setItem('test', stringRepresentation)

console.log(localStorage.getItem('test'));

console.log(JSON.parse(localStorage.getItem('test')))


