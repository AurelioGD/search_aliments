const $btn_submit=document.getElementById('submit'),
    $alimento=document.getElementById('alimento'),
    $info=document.getElementById('info'),
    $img_alimento=document.getElementById('img_alimento');


const fill_img=(url)=>{
    $img_alimento.attributes['src'].value=url
}
const fill_table=(data)=>{
    let allaliments=` `
    data.forEach(element => {
        
            let row=`
            <tr>
                <th scope="row">${element.food.label}</th>
                <td>${element.food.nutrients.CHOCDF?element.food.nutrients.CHOCDF.toFixed(2):0}g</td>
                <td>${element.food.nutrients.ENERC_KCAL?element.food.nutrients.ENERC_KCAL.toFixed(2):0}kcal</td>
                <td>${element.food.nutrients.FAT?element.food.nutrients.FAT.toFixed(2):0}g</td>
                <td>${element.food.nutrients.FIBTG?element.food.nutrients.FIBTG.toFixed(2):0}g</td>
                <td>${element.food.nutrients.PROCNT?element.food.nutrients.PROCNT.toFixed(2):0}g</td>
            </tr>`;
            
        allaliments+=row;
        
        
    });
    $info.innerHTML=allaliments;
    console.log(allaliments);
    
    
    
}

$btn_submit.addEventListener('click', async ()=>{
        let alimento=$alimento.value;
     fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${alimento.trim()}&app_id=984bd9c8&app_key=e006ed5e3028fa9711ed172151bf4b21`)
     .then(response => response.json())
     .then(data => {
         fill_img(data.hints[0].food.image)
         fill_table(data.hints)

    });
        
})