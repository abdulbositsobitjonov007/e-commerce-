let allProducts = document.querySelector(".allcards");

products.map((el) => {
    allProducts.innerHTML +=
        `
     <div class="allcards">
                        <a href="../pages/product.html?id=${el.id}"><div
                        class=" overflow-hidden w-full max-w-[572px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative overflow-hidden w-full h-[80px] sm:h-[160px] ">
                            <img class="w-full" style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="${el.name}">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="../assets/images/heart.svg" alt="">
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