        // Manage spinner start  
const manageSpainner=(status)=>{
    if(status===true){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('catagory-product-container').classList.add('hidden');
    }else{
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('catagory-product-container').classList.remove('hidden');
    }
}
        // Manage spinner end  


const allPlants=()=>{
    manageSpainner(true);
    const url= 'https://openapi.programming-hero.com/api/plants';

    fetch(url)
    .then(respon=>respon.json())
    .then(data=>{
        displayAllPlants(data.plants);
        manageSpainner(false);
    })
}

const displayAllPlants=(datas)=>{

    const categoryProductContainer =document.getElementById('catagory-product-container');

    categoryProductContainer.innerHTML= '';

    datas.forEach(data=>{
        const div= document.createElement('div');

        div.innerHTML=`
            <div class="sm:p-2 md:p-3 bg-white sm:rounded-md md:rounded-lg h-full flex flex-col justify-between">
                <div>
                    <img class="sm:rounded-md md:rounded-lg h-60 w-full" src="${data.image}" alt="">
                </div>

                <div>
                    <h3 class="text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#1F2937] mt-2 mb-1">${data.name}</h3>
                    <p class="text-[12px] md:text-[14px] text-[#1F2937]">${data.description}</p>

                    <div class="flex justify-between items-center mt-3 mb-4">
                        <h3 class="text-[#15803D] text-[12px] sm:text-[14px] px-3 py-1 bg-[#DCFCE7] rounded-3xl">${data.category}</h3>
                        <span class="text-[#1F2937] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">৳${data.price}</span>
                    </div>

                    <button onclick="addToCardBTN('${data.name}', '${data.price}'); addToCartCalculation('${data.price}')" class="btn bg-[#15803D] text-white border border-solid border-[#15803D] hover:text-[#15803D] hover:bg-transparent duration-300 ease-in w-full rounded-3xl">Add to Cart</button>
                </div>
            </div>
        `
        categoryProductContainer.appendChild(div);
    })
    
}

const categoryCard=(id)=>{
    manageSpainner(true);

    const url= `https://openapi.programming-hero.com/api/category/${id}`;
    
    fetch(url)
    .then(resp=>resp.json())
    .then(prom=>{
        displayCatagoryCard(prom.plants);
        manageSpainner(false);
    })
}

const displayCatagoryCard=(plants)=>{
    const catagoryProductContainr=document.getElementById('catagory-product-container');
    catagoryProductContainr.innerHTML= '';

    plants.forEach(plant=>{
        const products = document.createElement('div');

        products.innerHTML= `
            <div class="sm:p-2 md:p-3 bg-white sm:rounded-md md:rounded-lg h-full flex flex-col justify-between">
                <div>
                    <img class="sm:rounded-md md:rounded-lg h-60 w-full" src="${plant.image}" alt="">
                </div>

                <div>
                    <h3 class="text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#1F2937] mt-2 mb-1">${plant.name}</h3>
                    <p class="text-[12px] md:text-[14px] text-[#1F2937]">${plant.description}</p>

                    <div class="flex justify-between items-center mt-3 mb-4">
                        <h3 class="text-[#15803D] text-[12px] sm:text-[14px] px-3 py-1 bg-[#DCFCE7] rounded-3xl">${plant.category}</h3>
                        <span class="text-[#1F2937] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">৳${plant.price}</span>
                    </div>

                    <button onclick="addToCardBTN('${plant.name}', '${plant.price}'); addToCartCalculation('${plant.price}')" class="btn bg-[#15803D] text-white border border-solid border-[#15803D] hover:text-[#15803D] hover:bg-transparent duration-300 ease-in w-full rounded-3xl add-to-card">Add to Cart</button>
                </div>
            </div>
        `
        catagoryProductContainr.appendChild(products);
    })
}


// add to card start

    const addToCardBTN =(plantName, plantPrice)=>{
        const addToCardContainer = document.getElementById('add-to-card-container');


        // empty message remove
        const emptyMsg = document.getElementById('empty-card-message');
        if(emptyMsg){
            emptyMsg.remove();
        }
        
        const div = document.createElement('div');
        div.innerHTML = `
            <div id='card-single-item' class="px-3 py-3 bg bg-[#F0FDF4] rounded-md flex justify-between items-center mb-2.5">
                <div>
                    <h3 class="text-[16px] font-semibold text-[#111] mb-2.5">${plantName}</h3>
                    <p class="text-[#1F2937]">$<span>${plantPrice}</span><i class="bi bi-x"></i><span>1</span></p>
                </div>
                <div>
                    <button onclick="removeFromAddToCard(this); addToCartLessCalculation('${plantPrice}')" class="text-[30px] text-[#1F2937] hover:text-red"><i class="bi bi-x"></i></button>
                </div>
            </div>
        `
        addToCardContainer.appendChild(div);
    }

    const removeFromAddToCard=(btn)=>{
        btn.closest('#card-single-item').remove();
    }

// add to card end


const categorys=()=>{
    const url ='https://openapi.programming-hero.com/api/categories';
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayCategorys(data.categories);
    })
}

const displayCategorys=(categories)=>{
    const greenCategorys=document.getElementById('green_categorys');
    greenCategorys.innerHTML= '';

    categories.forEach(category=>{
        const eachCategory=document.createElement('div');
    
        eachCategory.innerHTML= `
            <a id='category-btn-${category.id}' onclick="categoryCard('${category.id}'); setActiveCategory('${category.id}');" class="text-[#1F2937] text-[14px] md:text-[16px] py-1 md:py-2 px-1 md:px-2 cursor-pointer btn bg-transparent w-full justify-start shadow-none border-none plant-category">${category.category_name}</a>
        `;
        greenCategorys.append(eachCategory);
    })
}

setActiveCategory=(id)=>{
    const plantCategory = document.querySelectorAll('.plant-category');

    for(const cat of plantCategory){
        cat.classList.remove('active');
    }

    const activeBTN = document.getElementById(`category-btn-${id}`);
    activeBTN.classList.add('active');
}

setAllActive=()=>{
    const allCategory = document.querySelectorAll('.plant-category');

    allCategory.forEach(cate=>{
        cate.classList.remove('active');
    });

    const activeBTN = document.getElementById(`all-category`);
    activeBTN.classList.add('active');
}


// add to cart calculation start 
const addToCartCalculation =(price)=>{
    const availableAmountInTotal = document.getElementById('available-amonun-in-total');

    const currentTotal = parseInt(availableAmountInTotal.innerText);
    const newPrice = parseInt(price);

    availableAmountInTotal.innerText = currentTotal + newPrice;
}

const addToCartLessCalculation=(price)=>{
    const availableAmountInTotal = document.getElementById('available-amonun-in-total');

    const currentTotal = parseInt(availableAmountInTotal.innerText);
    const lessPrice = parseInt(price);

    const total = currentTotal - lessPrice;

    availableAmountInTotal.innerText = total;


    // message start

    if(total===0){
        const addToCardContainer = document.getElementById('add-to-card-container');

        addToCardContainer.innerHTML = `
            <p id="empty-card-message" class="text-[16px] text-[#1F2937]">
                your cart is empty
            </p>
        `;
    // message end
    }
}
// add to cart calculation end 


categorys();


window.addEventListener('DOMContentLoaded', () => {
    allPlants();
    setAllActive();
});