let productCards = document.querySelector(".cards");

products.map((el) => {
    productCards.innerHTML +=
    `
     <div class="cards flex flex-col gap-[30px]">
                        <div
                        class="overflow-hidden w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px] max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative w-full">
                            <img class="block w-full h-full object-contain " style="max-width:100%; height:auto;"
                                src="${el.images[0]}" alt="">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">599,99 ₽</h1>

                            </div>
                            <div class="flex justify-between invisible">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
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
                    </div>

                    <div
                        class="sm:hidden w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px] max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                        <div class="relative w-full">
                            <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;"
                                src="./assets/images/kolbasa.png" alt="">

                            <img style="width: 29px; height: 28px;"
                                class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                src="./assets/images/heart.svg" alt="">
                        </div>

                        <div class="p-[8px] w-full">
                            <div class="flex justify-between">
                                <h1 class="text-[18px] font-[700]">599,99 ₽</h1>

                            </div>
                            <div class="flex justify-between invisible">
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                            </div>
                            <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">${el.description}</p>
                            <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;" src="./assets/images/star.svg"
                                    alt=""><img style="width: 16px; height: 16px;" src="./assets/images/star.svg" alt=""><img
                                    style="width: 16px; height: 16px;" src="./assets/images/empty-star.svg" alt=""><img
                                    style="width: 16px; height: 16px;" src="./assets/images/empty-star.svg" alt=""><img
                                    style="width: 16px; height: 16px;" src="./assets/images/empty-star.svg" alt=""></span>
                            <button
                                class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                корзину</button>
                        </div>
                    </div>
                    </div>
    `
})
