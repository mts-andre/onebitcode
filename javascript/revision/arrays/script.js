const arr = [
    [
        "Produto 1",
        "Descrição do produto 1",
         "Preço do produto 1"
    ],

    [
        "Produto 2",
        "Descrição do produto 2",
        ["Preço do produto 2", "Preço unitário produto 2"]
    ],

    [
        "Produto 3",
        "Descrição do produto 3",
         "Preço do produto 3"
    ]
]


for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        const elements = arr[i][j]
        console.log(elements)
    }
}