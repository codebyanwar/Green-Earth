const categoryCard=(id)=>{
    const url= `https://openapi.programming-hero.com/api/category/${id}`;
    
    fetch(url)
    .then(resp=>resp.json())
    .then(prom=>{
        console.log(prom.plants);
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