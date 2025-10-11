let productCards = document.querySelector(".cards");
let allProductsCards = document.querySelector(".all-cards");
let discountCards = document.querySelector(".dis-cards");
let discountFilterProducts = products.filter((eld) => eld.discount > 0);
let discountFourSliceProducts = discountFilterProducts.slice(discountFilterProducts.length -4, discountFilterProducts.length);
let recentProducts = document.querySelector(".recent-products");
let recentFourProducts = products.slice(products.length -4, products.length);

discountFourSliceProducts.map((eld) => {
    discountCards.innerHTML +=
        `
     <div class="cards flex flex-col gap-[30px]">
                        <a href="./pages/product.html"><div
                        class="my-[20px] overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${eld.images[0]}" alt="${eld.name}">
                            <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-${eld.discount}%</p>
                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${eld.price * (100 - eld.discount) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400] line-through">${eld.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${eld.description}</p>
                            
                            ${eld.rating === 5 ? 
                                `<div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""></img>
                                    </div>`
                                    : eld.rating === 4.5 ? `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : eld.rating === 4 ? 
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : eld.rating === 3.5 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : eld.rating === 3 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : eld.rating === 2.5 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : eld.rating === 2 ?
                                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : eld.rating === 1.5 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : 
                                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    
                            }
                            
                            
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>

                    <a href="./pages/product.html"><div
                        class="sm:hidden overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${eld.images[0]}" alt="${eld.name}">
                            <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-${eld.discount}%</p>
                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${eld.price * (100 - eld.discount) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400] line-through">${eld.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${eld.description}</p>
                            <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></span>
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>


                    </div>
    `
});

products.map((el) => {
    productCards.innerHTML +=
    `
     <div class="cards flex flex-col gap-[30px]">
                        <a href="./pages/product.html"><div
                        class="my-[20px] overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${el.price * (100 - 6) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400]">${el.price} ₽</h1>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
                            ${el.rating === 5 ?
        `<div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""></img>
                                    </div>`
        : el.rating === 4.5 ? `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""></img>
                                    </div>
                                    `
            : el.rating === 4 ?
                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                : el.rating === 3.5 ?
                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                    : el.rating === 3 ?
                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                        : el.rating === 2.5 ?
                            `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                            : el.rating === 2 ?
                                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                : el.rating === 1.5 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    :
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    
                            }
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>

                    <a href="./pages/product.html"><div
                        class="sm:hidden overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${el.price * (100 - 6) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400]">${el.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
                            <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></span>
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>


                    </div>
    `
});

products.map((el) => {
    allProductsCards.innerHTML +=
        `
     <div class="cards flex flex-col gap-[30px]">
                        <a href="./pages/product.html"><div
                        class="my-[20px] overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${el.price * (100 - 6) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400]">${el.price} ₽</h1>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
                            ${el.rating === 5 ?
            `<div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""></img>
                                    </div>`
            : el.rating === 4.5 ? `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""></img>
                                    </div>
                                    `
                : el.rating === 4 ?
                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                    : el.rating === 3.5 ?
                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                        : el.rating === 3 ?
                            `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                            : el.rating === 2.5 ?
                                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                : el.rating === 2 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    : el.rating === 1.5 ?
                                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                        :
                                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `

        }
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>

                    <a href="./pages/product.html"><div
                        class="sm:hidden overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">${el.price * (100 - 6) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400]">${el.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
                            <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></span>
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>


                    </div>
    `
});

recentFourProducts.map((el) => {
    recentProducts.innerHTML +=
        `
     <div class="cards flex flex-col gap-[30px]">
                        <a href="./pages/product.html"><div
                        class="my-[20px] overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                            <h1 class="text-[18px] font-[700]">${el.price * (100 - 6) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400]">${el.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
                            ${el.rating === 5 ?
        `<div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""></img>
                                    </div>`
        : el.rating === 4.5 ? `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""></img>
                                    </div>
                                    `
            : el.rating === 4 ?
                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                : el.rating === 3.5 ?
                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                    : el.rating === 3 ?
                        `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                        : el.rating === 2.5 ?
                            `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                            : el.rating === 2 ?
                                `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                : el.rating === 1.5 ?
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    :
                                    `
                                    
                                    <div class="flex pb-[10px] space-x-1">
                                <img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></img>
                                    </div>
                                    `
                                    
                            }
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a>

                    <a href="./pages/product.html"><div
                        class="sm:hidden overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full h-full">
                            <div class="flex justify-between">
                            <h1 class="text-[18px] font-[700]">${el.price * (100 - 6) / 100} ₽</h1>
                                <h1 class="text-[18px] font-[400]">${el.price} ₽</h1>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
                            <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                    src="./assets/images/empty-star.svg" alt=""></span>
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div></a> 


                    </div>
    `
});

