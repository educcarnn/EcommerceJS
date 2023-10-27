let arrayCar = []
let preco = 0
let quantidade = 0

    const descrition = document.getElementsByClassName('descrition-name-tittle')[0]
    const descrititonName = document.getElementsByClassName('descrition-name')[0]
    // Criar carrinho vazio pelo dom

function postsMain(listPosts) {
    const listOne = document.querySelector('.itens')

    for (let i = 0; i < listPosts.length; i++) {
        const li = document.createElement('li');
        li.classList.add('all-elements')

        const image = document.createElement('img')
        image.src = listPosts[i].img

        const category = document.createElement('span')
        category.classList.add('category')
        category.innerText = listPosts[i].categorias

        const title = document.createElement('h2')
        title.innerText = listPosts[i].titulo

        const text = document.createElement('p')
        text.classList.add('text-between')
        text.innerText = listPosts[i].descricao

        const price = document.createElement('span')
        price.classList.add('price')
        price.innerText = listPosts[i].preco

        const addCar = document.createElement('p')
        addCar.classList.add('remove-car')
        addCar.innerText = listPosts[i].adicionar
        

        addCar.addEventListener('click', (e) => {
            let x = e.target.parentElement.childNodes[4].innerText.split(' ')
            preco += Number(x[1])

            let blockInformation = document.getElementsByClassName('block-information')[0]
            let div = document.createElement('div')
            div.classList.add('block-price')
         
                let img = document.createElement('img')
                img.src = e.target.parentElement.childNodes[0].src
                img.classList.add('img-car')

                let h2 = document.createElement('h2')
                h2.innerHTML = e.target.parentElement.childNodes[2].innerHTML
                h2.classList.add('title-product')

                let span = document.createElement('span')
                span.innerHTML = e.target.parentElement.childNodes[4].innerHTML
                span.classList.add('price-dom')

                let spanRemove = document.createElement('span')
                spanRemove.innerHTML = e.target.parentElement.childNodes[0].innerHTML
                spanRemove.innerText = 'Remover produto'
                spanRemove.classList.add('text-price-remove')
        
            quantidade++  
            blockInformation.appendChild(div)
                        div.appendChild(img)              
                        div.appendChild(h2)
                        div.appendChild(span)
                        div.appendChild(spanRemove)
            //Função para remover
            spanRemove.addEventListener('click', (e) => {

                let x = e.target.parentElement.childNodes[2]
                x = x.textContent.slice(3,6)
                preco -= Number(x)

                    let precoTotal = document.getElementById('total-price')
                    precoTotal.innerText = `R$ ${preco}.00`

            quantidade--
                    let quantidadeRemover = document.getElementById('quantity-calcul')
                    quantidadeRemover.innerText = quantidade
                    e.target.parentElement.remove('')
            })
    
            removeBackground()
        })
   
        listOne.appendChild(li)
        li.appendChild(image)
        li.appendChild(category)
        li.appendChild(title)
        li.appendChild(text)
        li.appendChild(price)
        li.appendChild(addCar)
    }
}
postsMain(dataBase)

function removeBackground() {
   descrition.remove('')
   descrititonName.remove('')
    if (quantidade >= 0) {
        
        const blockInformation = document.getElementsByClassName('block-information')[0]
        blockInformation.classList.add('block-information-dom')

        const domPrice = document.getElementById('block-dom')
        domPrice.innerHTML = ''

            const barraPrice = document.createElement('div')    
            barraPrice.classList.add('quantity-price')

        domPrice.appendChild(barraPrice)    

            const quantity = document.createElement('span')
            quantity.id = 'quantity'
            quantity.innerText = 'Quantidade: '

            const price = document.createElement('span')
            price.id = 'price' 
            price.innerText = 'Total: '
    
            const quantityCalcul = document.createElement('span')
            quantityCalcul.id = 'quantity-calcul'
            quantityCalcul.innerText = `${quantidade}`

            let totalPrice = document.createElement('span')
            totalPrice.id= 'total-price'
            totalPrice.innerText = `R$ ${preco}.00`
     

        barraPrice.appendChild(quantity)
        barraPrice.appendChild(price)
        barraPrice.appendChild(quantityCalcul)
        barraPrice.appendChild(totalPrice)

    }
}

