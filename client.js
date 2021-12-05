const axios = require('axios').default;

async function addBook(){
    await axios.post('http://localhost:3000/books', {
        ID: 3,
        name: 'My Boook',
        author: 'Me and only me'
    }).then((res) => {
        console.log(res.data);
    }).catch(err => {
        console.log(err.response.data);
    });
}

async function addNewBook(){
    // Atividade 1
    await axios.post('http://localhost:3000/books', {
        ID: 4,
        name: 'Novo Livro',
        author: 'Desconhecido'
    }).then((res) => {
        console.log(res.data);
    }).catch(err => {
        console.log(err.response.data);
    });
}


// Atividade 2
async function showBooks(){
    await axios.get('http://localhost:3000/books')
        .then((response) => {
            console.log(response.data);
            response.data.forEach(livro => {
                axios.get('http://localhost:3000/books/' + livro.ID).then((book) => {
                    console.log(book.data)
                })
            })
        });
}

// Atividade 4
async function checkLog(){
    await axios.get('http://localhost:3000/log').then((response) => {
        console.log(response.data)
    })
}

addBook();
addNewBook();
addNewBook();
showBooks();
checkLog();
