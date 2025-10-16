let path = new URLSearchParams(window.location.search);

let id = path.get("id");

let productPage = document.querySelector(".product");

let discountcards = document.querySelector(".product-dis-cards");

let discountFiltrProducts = products.filter((el) => el.discount > 0);
let discountFourSliceproducts = discountFiltrProducts.slice(discountFiltrProducts.length - 4, discountFiltrProducts.length);

let idProduct = products.filter((el) => el.id == id);

idProduct.map((el) => {
    productPage.innerHTML += 
    `
    <div class="container product mx-auto">
                <div class="flex items-center gap-[16px] flex-wrap"><a class="text-[12px] font-[400] whitespace-nowrap" href="../index.html">Главная</a><img
                        src="../assets/images/chevron-right.svg" alt=""><a class="text-[12px] font-[400]"
                        href="../pages/catalog.html">Каталог</a>
                    <img src="../assets/images/chevron-right.svg" alt="">
                    <a class="text-[12px] font-[400]" href="../pages/categories.html">${el.category}</a>
                    <img src="../assets/images/chevron-right.svg" alt="">
                    <span class="flex flex-wrap whitespace-wrap "><p class="text-[12px] font-[400] whitespace-wrap">${el.description}</p></span>
                </div>
                <h1 class="text-[16px] md:text-[20px] lg:text-[24px]  font-[700] pt-[30px] pb-[40px]">${el.description}</h1>
                <div class="flex items-center gap-[24px] whitespace-nowrap flex-wrap">
                <p>арт. 371431</p>
                <div class="flex items-center gap-[10px]">
                ${el.rating === 5 ?
        `<div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""></img>
                                            </div>`
        : el.rating === 4.5 ? `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/half-star.svg" alt=""></img>
                                            </div>
                                            `
            : el.rating === 4 ?
                `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></img>
                                            </div>
                                            `
                : el.rating === 3.5 ?
                    `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></img>
                                            </div>
                                            `
                    : el.rating === 3 ?
                        `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></img>
                                            </div>
                                            `
                        : el.rating === 2.5 ?
                            `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></img>
                                            </div>
                                            `
                            : el.rating === 2 ?
                                `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></img>
                                            </div>
                                            `
                                : el.rating === 1.5 ?
                                    `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></img>
                                            </div>
                                            `
                                    :
                                    `
                                            
                                            <div class="flex space-x-1">
                                        <img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></img>
                                            </div>
                                            `

                }
                <p>3 отзыва</p>
                </div>
                <div class="flex">
                <a class="flex gap-[8px]" href="">
                <img src="../assets/images/share-2.svg" alt="">Поделиться</a>
                </div>
                <div>
                <a class="flex gap-[8px]" href="../pages/favourites.html"><img src="../assets/images/heart.svg" alt="">В избраное</a>
                </div>
                </div>

                <div class="flex flex-col gap-[30px] md:grid grid-cols-2 pt-[26px] w-full">
                    <div class="flex items-center gap-[16px]">
                        <div class="flex flex-col gap-[7px]">
                        ${
                           el.images.map((el) => {
                               return `<img class="max-w-[60px] sm:max-w-[250px] md:max-w-[80px] lg:max-w-[140px] h-full max-h-[60px] md:max-h-[100px] lg:max-h-[140px] object-cover overflow-hidden" src="${el}" alt="">`
                                  
                           }).join(" ")
                           }
                            
                        </div>
                        <div class="h-full w-full relative">
                        <img class="w-full h-full object-cover" src="${el.images[0]}" alt="">
                        <p class="text-[white] text-[18px] absolute top-[20px] right-[20px] px-[15px] py-[7px] bg-[#FF6633] rounded-[4px]">-${el.discount}%</p>
                        </div>
                    </div>

            <div class="">
                <div>
                    <div class="flex items-center pb-[16px] justify-between">
                        <div class="flex flex-col whitespace-nowrap">
                            <h2 class="text-[16px] lg:text-[24px] font-[400] text-[#606060]">${el.price} ₽</h2>
                            <p class="text-[#BFBFBF] text-[12px] font-[400] pt-[10px]">Обычная цена</p>
                        </div>
                    <div class="flex flex-col items-end whitespace-nowrap">
                        <h1 class="text-[24px] lg:text-[36px] font-[700]">${el.price * (100 - el.discount) / 100} ₽</h1>
                        <p class="flex items-center gap-[5px] text-[#BFBFBF] text-[12px] font-[400]">С картой Северяночки<img src="../assets/images/info.svg" alt=""></p>
                    </div>
                </div>
                </div>
                <div class="flex justify-center">
                     <button class="flex items-center w-full max-w-[300px] p-[10px] lg:p-[16px] bg-[#FF6633] gap-[48px] text-[16px] lg:text-[24px] text-[white] cursor-pointer rounded-[4px]"><img src="../assets/images/shopping-cart.svg" alt="">В корзину</button>
               </div>
               <div class = "flex py-[24px]">
               <table class = "border-separate border-spacing-y-5" border="1">
                   
                    <tr class = "flex items-center w-full max-w-[600px] gap-[150px] bg-[#F3F2F1] py-[7px]">
                  <td class = "text-[12px]">Бренд</td>
                  <td class = "text-[12px] font-[700]">ПРОСТОКВАШИНО</td>
                  
                   </tr>
                   <tr class = "flex items-center w-full max-w-[600px] gap-[58px] py-[7px]">
                  <td class = "text-[12px]">Страна производителя</td>
                  <td class = "text-[12px] font-[700]">Россия</td>
                  
                   </tr>
                   <tr class = "flex items-center w-full max-w-[600px] gap-[132px] bg-[#F3F2F1] py-[7px]">
                  <td class = "text-[12px]">Упаковка</td>
                  <td class = "text-[12px] font-[700]">180 г</td>
                  
                   </tr>

                  
               </table>
               </div>

               </div>
            </div>
    `
});



discountFourSliceproducts.map((el) => {
    discountcards.innerHTML +=
        `
<div>
                    <a href="../pages/product.html?id=${el.id}"><div
                        class="my-[20px] overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">
                            <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-${el.discount}%</p>
                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="../assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400] line-through">${el.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>

                            ${el.rating === 5 ?
            `<div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""></img>
                                    </div>`
            : el.rating === 4.5 ? `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""></img>
                                    </div>
                                    `
                : el.rating === 4 ?
                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                    : el.rating === 3.5 ?
                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                        : el.rating === 3 ?
                            `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                            : el.rating === 2.5 ?
                                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                : el.rating === 2 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : el.rating === 1.5 ?
                                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                        :
                                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `

        }

                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>


                                        <a href="../pages/product.html?id=${el.id}"><div
                        class="sm:hidden my-[20px] overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">
                            <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-${el.discount}%</p>
                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="../assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${el.price * (100 - el.discount) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400] line-through">${el.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>

                            ${el.rating === 5 ?
            `<div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""></img>
                                    </div>`
            : el.rating === 4.5 ? `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""></img>
                                    </div>
                                    `
                : el.rating === 4 ?
                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                    : el.rating === 3.5 ?
                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                        : el.rating === 3 ?
                            `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                            : el.rating === 2.5 ?
                                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                : el.rating === 2 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : el.rating === 1.5 ?
                                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                        :
                                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="../assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `

        }

                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>

</div>
    `
});