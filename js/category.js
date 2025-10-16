let path = new URLSearchParams(window.location.search);

let category = path.get("category");

let productCategory = document.querySelector(".product-type");

let typeProduct = products.filter((el) => el.category == category);

typeProduct.map((el) => {
    productCategory.innerHTML +=      
    `
          <div class="container product-type mx-auto">
                <div class="flex items-center gap-[16px]"><a class="text-[12px] font-[400]" href="../index.html">Главная</a><img
                        src="../assets/images/chevron-right.svg" alt=""><a class="text-[12px] font-[400]" href="../pages/catalog.html">Каталог</a>
                        <img src="../assets/images/chevron-right.svg" alt=""><p class="text-[12px] font-[400]">${el.category}</p>
                    </div>
                <h1 class="text-[26px] md:text-[34px] lg:text-[48px]  font-[700] pt-[30px] pb-[40px]">Молоко, сыр, яйцо</h1>

                <div class="lg:flex justify-between gap-[20px]">
                    <div class="max-w-[272px]">
                         <h1 class="text-center lg:text-left max-w-[128px] lg:max-w-[272px] h-[44px] p-[10px] mb-[32px] lg:mb-[0] bg-[#F3F2F1] cursor-pointer hover:bg-[#70C05B] hover:text-[white] duration-300">Фильтр</h1>
                         <div class="hidden lg:flex lg:flex-col">
                            <div class="flex max-w-[272px] justify-between pt-[40px] items-center">
                                <p>Цена</p>
                                <p class="text-[12px] text-[#606060] px-[16px] py-[8px] bg-[#F3F2F1] cursor-pointer">Очистить</p>
                            </div>
                            <div class="flex justify-between max-w-[272px] pt-[20px] gap-[20px]">
                                <div class="">
                                     <input class="outline-transparent px-[16px] max-w-[124px] h-[40px] bg-[white] border-[1px] border-[#BFBFBF] rounded-[4px]" placeholder="1" type="number">
                                </div>
                                <div>
                                    <input class="outline-transparent px-[16px] max-w-[124px] h-[40px] bg-[white] border-[1px] border-[#BFBFBF] rounded-[4px]" placeholder="100000" type="number" >
                                </div>
                            </div>
                            <div class="pt-[20px] flex justify-center">
                            <input type="range" min="0" max="100" value="40"
                                class="w-[172px] h-[5px] bg-[#70C05B] rounded-lg appearance-none cursor-pointer accent-[#70C05B]">
                            </div>


                         </div>
                    </div>
<div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-[40px]">

                            <div
                                class="w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px] max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                                <div class="relative w-full">
                                    <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;"
                                        src="../assets/images/cream-cheese.png" alt="">

                                    <img style="width: 29px; height: 28px;"
                                        class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                        src="../assets/images/heart.svg" alt="">
                                </div>

                                <div class="p-[8px] w-full">
                                    <div class="flex justify-between">
                                        <h1 class="text-[18px] font-[700]">139,99 ₽</h1>

                                    </div>
                                    <div class="flex justify-between invisible">
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                    </div>
                                    <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">Комбайн КЗС-1218
                                        «ДЕСНА-ПОЛЕСЬЕ
                                        GS12»</p>
                                    <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></span>
                                    <button
                                        class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                        корзину</button>
                                </div>
                            </div>

                            <div
                                class=" w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px] max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                                <div class="relative w-full">
                                    <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;"
                                        src="../assets/images/milk.png" alt="">
                                        <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-50%</p>
                                    <img style="width: 29px; height: 28px;"
                                        class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                        src="../assets/images/heart.svg" alt="">
                                </div>

                                <div class="p-[8px] w-full">
                                    <div class="flex justify-between">
                                        <h1 class="text-[18px] font-[700]">69,99 ₽</h1>
                                        <h2 class="text-[16px] font-[400] text-[#606060]">140,50 ₽</h2>
                                    </div>
                                    <div class="flex justify-between ">
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                    </div>
                                    <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное</p>
                                    <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></span>
                                    <button
                                        class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                        корзину</button>
                                </div>
                            </div>

                            <div
                                class="w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px]  max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                                <div class="relative w-full">
                                    <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;"
                                        src="../assets/images/condensed-milk.png" alt="">
                                        <p class="text-[white] absolute left-[10px] bottom-[10px] px-[8px] py-[4px] bg-[#FF6633] rounded-[4px]">-50%</p>
                                    <img style="width: 29px; height: 28px;"
                                        class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                        src="../assets/images/heart.svg" alt="">
                                </div>

                                <div class="p-[8px]">
                                    <div class="flex justify-between">
                                        <h1 class="text-[18px] font-[700]">77,99 ₽</h1>
                                        <h2 class="text-[16px] font-[400] text-[#606060]">168,50 ₽</h2>
                                    </div>
                                    <div class="flex justify-between invisible">
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                    </div>
                                    <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром</p>
                                    <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/half-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></span>
                                    <button
                                        class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                        корзину</button>
                                </div>
                            </div>

                            <div
                                class=" w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px]  max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                                <div class="relative w-full">
                                    <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;"
                                        src="../assets/images/butter.png" alt="">

                                    <img style="width: 29px; height: 28px;"
                                        class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                        src="../assets/images/heart.svg" alt="">
                                </div>

                                <div class="p-[8px]">
                                    <div class="flex justify-between">
                                        <h1 class="text-[18px] font-[700]">192,99 ₽</h1>

                                    </div>
                                    <div class="flex justify-between invisible">
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                    </div>
                                    <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                                    <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></span>
                                    <button
                                        class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                        корзину</button>
                                </div>
                            </div>

                            <div
                                class="w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px]  max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                                <div class="relative w-full">
                                    <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;"
                                        src="../assets/images/yoghurt.png" alt="">

                                    <img style="width: 29px; height: 28px;"
                                        class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                        src="../assets/images/heart.svg" alt="">
                                </div>

                                <div class="p-[8px]">
                                    <div class="flex justify-between">
                                        <h1 class="text-[18px] font-[700]">29,99 ₽</h1>

                                    </div>
                                    <div class="flex justify-between invisible">
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                    </div>
                                    <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">Комбайн КЗС-1218
                                        «ДЕСНА-ПОЛЕСЬЕ
                                        GS12»</p>
                                    <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></span>
                                    <button
                                        class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                        корзину</button>
                                </div>
                            </div>

                            <div
                                class=" w-[160px] sm:w-[204px] md:w-[224px] xl:w-[272px]  max-h-[343px] sm:max-h-[349px] bg-[white] rounded-[4px] shadow-md hover:shadow-orange-300 hover:shadow-xl duration-300">
                                <div class="relative w-full">
                                    <img class="block w-full h-full object-contain" style="max-width:100%; height:auto;"
                                        src="../assets/images/yoghurt.png" alt="">

                                    <img style="width: 29px; height: 28px;"
                                        class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                        src="../assets/images/heart.svg" alt="">
                                </div>

                                <div class="p-[8px]">
                                    <div class="flex justify-between">
                                        <h1 class="text-[18px] font-[700]">29,99 ₽</h1>

                                    </div>
                                    <div class="flex justify-between invisible">
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                        <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                    </div>
                                    <p class="text-[17px] font-[400] font-rubik pt-[5px] pb-[5px] line-clamp-2">Комбайн КЗС-1218
                                        «ДЕСНА-ПОЛЕСЬЕ
                                        GS12»</p>
                                    <span class="flex pb-[10px] space-x-1"><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""><img style="width: 16px; height: 16px;"
                                            src="../assets/images/empty-star.svg" alt=""></span>
                                    <button
                                        class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                        корзину</button>
                                </div>
                            </div>



                        </div>
                    <div class="flex justify-center mt-[40px] text-[#606060] cursor-pointer"><p class="py-[8px] px-[24px] bg-[#F3F2F1]">Показать ещё</p></div></div>
                </div>

            </div>
          `
});

let allCategories = document.querySelector(".all-categories");

products.map((el) => {
    allCategories.innerHTML += 
    `
    <div id="res-menu" class="all-categories hidden duration-600 bg-[white] sm:flex translate-y-[-100%] fixed w-full top-[0] z-[2] pt-[65px] border-b-[3px] border-[#E8E2C8]">
      <ul class=" px-[20px] sm:grid py-[20px] md:py-[30px] container mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-[20px] lg:gap-[30px]">
        <li><a class="font-bold" href="../pages/categories.html?id=${el.category}">Молоко, сыр, яйцо</a></li>
        <li><a class="font-bold" href="">Хлеб</a></li>
        <li><a class="font-bold" href="">Фрукты и овощи</a></li>
        <li><a class="font-bold" href="">Замороженные продукты</a></li>
        <li><a class="font-bold" href="">Напитки</a></li>
        <li><a class="font-bold" href="">Кондитерские изделия</a></li>
        <li><a class="font-bold" href="">Чай, кофе</a></li>
        <li><a class="font-bold" href="">Бакалея</a></li>
        <li><a class="font-bold" href="">Здоровое питание</a></li>
        <li><a class="font-bold" href="">Зоотовары</a></li>
        <li><a class="font-bold" href="">Непродовольственные товары</a></li>
        <li><a class="font-bold" href="">Детское питание</a></li>
        <li><a class="font-bold" href="">Мясо, птица, колбаса</a></li>
    </ul>
    </div>
    `
});