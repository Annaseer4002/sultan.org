const categoriesBtn = document.getElementsByClassName('categories-btn')
const categoriesList = document.getElementsById('categories-list')
const header = document.getElementsByClassName('tiles-header')


categoriesBtn.addEventListener('click', changeHeader())

const changeHeader = ()=>{
   header.innerHtml='abdul'
}

changeHeader()