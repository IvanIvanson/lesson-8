'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});


// корзина товаров

let numberOfProducts = document.getElementById('numberOfProducts');// получаем span 
let buttonsCart = document.querySelectorAll('.featuredImgDark');
let score = 0;
let table = document.querySelector('table');
let cartIcon = document.querySelector('.cartIcon');
let out = document.querySelector('.out');
let totalSumm = document.querySelector('#totalSumm');
let tr = document.querySelectorAll('tr');

// извлекаем данные карточек товаров

let productsData = [];
let productCarts = document.querySelectorAll('.featuredItem');
productCarts.forEach(function(productCart){
    let name = productCart.querySelector('.featuredName').innerText;
    let desc = productCart.querySelector('.featuredText').innerText;
    let price =  +productCart.querySelector('.featuredPriceValue').innerText;
    productsData.push({
        name,
        desc,
        price
    });
})

// функция - счетчик товара
function addScore(){
    numberOfProducts.innerText = score+1;
    score++;
}
// функция - показа(скрытия) корзины товаров
    cartIcon.addEventListener('click', function(){
        table.classList.toggle('tableVisible');
        out.classList.toggle('tableVisible');

    });
// функция - добавления строк с данными о товаре
function addTableRow(item){
    // addScore();
    let nameProd = productsData[item].name;
    let priceProd = productsData[item].price;
    let tr = document.querySelectorAll('tr');
   if(tr.length <= (item + 1)){
    table.innerHTML += `<tr><td></td><td></td><td></td><td></td></tr>`;
    score=1;

   }
 
   table.rows[item].cells[0].innerText = `${nameProd}`;
   table.rows[item].cells[1].innerText = `${score} шт`;
   table.rows[item].cells[2].innerText = priceProd;
   table.rows[item].cells[3].innerText = `${priceProd*score}`;
}

table.addEventListener('click', del)

function del(){
//    while(table.rows.length){
//       table.deleteRow(table.rows.length-5); 
//    } 

let rowCount = table.rows.length;
for(let i = 1; i < rowCount; i++){
    table.deleteRow(rowCount - (rowCount+i)); 
}
   
};


//  общая сумма товара
function totalSum(i){
    if(i===1){
  return  totalSumm.innerHTML = +table.rows[i].cells[3].innerText;
    }
    if(i===2){
        return  totalSumm.innerHTML = +table.rows[i-1].cells[3].innerText + +table.rows[i].cells[3].innerText;
          }
          if(i===3){
            return  totalSumm.innerHTML = +table.rows[i-2].cells[3].innerText + +table.rows[i-1].cells[3].innerText + +table.rows[i].cells[3].innerText;
              }
            if(i===4){
    return  totalSumm.innerHTML = +table.rows[i-3].cells[3].innerText + +table.rows[i-2].cells[3].innerText + +table.rows[i-1].cells[3].innerText + +table.rows[i].cells[3].innerText;
                  }
                  if(i===5){
                    return  totalSumm.innerHTML = +table.rows[i-4].cells[3].innerText + +table.rows[i-3].cells[3].innerText + +table.rows[i-2].cells[3].innerText + +table.rows[i-1].cells[3].innerText + +table.rows[i].cells[3].innerText;
                                  }
                                  if(i===6){
                                    return  totalSumm.innerHTML = +table.rows[i-5].cells[3].innerText + +table.rows[i-4].cells[3].innerText + +table.rows[i-3].cells[3].innerText + +table.rows[i-2].cells[3].innerText + +table.rows[i-1].cells[3].innerText + +table.rows[i].cells[3].innerText;
                                                  }
}


buttonsCart.forEach(function(cart){
    let button = cart.querySelector('button');
    button.addEventListener('click', addScore);
    
   if(button.id === 'one'){
    // button.addEventListener('click', addTableRow1);
    button.addEventListener('click', function(){
        addTableRow(1);
        totalSum(1);
       
    });
   }
   if(button.id === 'two'){
    button.addEventListener('click', function(){
        addTableRow(2);
        totalSum(2);
    });
   }
   if(button.id === 'three'){
    button.addEventListener('click', function(){
        addTableRow(3);
        totalSum(3);
    });
   }
   if(button.id === 'four'){
    button.addEventListener('click', function(){
        addTableRow(4);
        totalSum(4);
    });
   }
   if(button.id === 'five'){
    button.addEventListener('click', function(){
        addTableRow(5);
        totalSum(5);
    });
   }
   if(button.id === 'six'){
    button.addEventListener('click', function(){
        addTableRow(6);
        totalSum(6);
    });
   }
});
