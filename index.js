const categoryCard=(id)=>{
    const url= `https://openapi.programming-hero.com/api/category/${id}`;
    
    fetch(url)
    .then(resp=>resp.json())
    .then(prom=>{
        displayCatagoryCard(prom.plants);
    })
}

// "id": 4,
// "image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
// "name": "Gulmohar",
// "description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
// "category": "Flowering Tree",
// "price": 400

const displayCatagoryCard=(plants)=>{
    const catagoryProductContainr=document.getElementById('catagory-product-container');
    catagoryProductContainr.innerHTML= '';

    plants.forEach(plant=>{
        const products = document.createElement('div');

        products.innerHTML= `
            <div class="sm:p-2 md:p-3 bg-white sm:rounded-md md:rounded-lg h-full flex flex-col">
                <div>
                    <img class="sm:rounded-md md:rounded-lg h-80 w-full" src="${plant.image}" alt="">
                </div>

                <div>
                    <h3 class="text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#1F2937] mt-2 mb-1">${plant.name}</h3>
                    <p class="text-[12px] md:text-[14px] text-[#1F2937]">${plant.description}</p>

                    <div class="flex justify-between items-center mt-3 mb-4">
                        <h3 class="text-[#15803D] text-[12px] sm:text-[14px] px-3 py-1 bg-[#DCFCE7] rounded-3xl">${plant.category}</h3>
                        <span class="text-[#1F2937] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">৳${plant.price}</span>
                    </div>

                    <button class="btn bg-[#15803D] text-white border border-solid border-[#15803D] hover:text-[#15803D] hover:bg-transparent duration-300 ease-in w-full rounded-3xl">Add to Cart</button>
                </div>
            </div>
        `
        catagoryProductContainr.appendChild(products);
    })
}

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
            <a id='category-btn-${category.id}' onclick="categoryCard('${category.id}')" class="text-[#1F2937] text-[14px] md:text-[16px] py-1 md:py-2 px-1 md:px-2 cursor-pointer btn bg-transparent w-full justify-start shadow-none border-none">${category.category_name}</a>
        `;
        greenCategorys.append(eachCategory);
    })
}

categorys();