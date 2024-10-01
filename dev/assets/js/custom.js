const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
        enabled: false,
    },

    breakpoints: {
        992: {
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});

const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item => {
    item.addEventListener('change', () => {
        const fileName = item.closest('.control-box_file').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})



















const user_1 = {
    name: "Bob",
    lastName: "Jix",
    old: 45,
    family: {
        parents: {
            mother: "Ludmila",
            father: "Konstantin",
        },
        brother: "john",
        sister: "Ammy",
    },
    education: "designer",
}

const user_2 = {
    name: "Stanly",
    lastName: "Dante",
    old: 14,
    family: {
        parents: {
            mother: "Lina",
            father: "NA",
        },
        sister: "Amanda",
    },
    education: "school continue",
}

const user_3 = {
    name: "Stix",
    lastName: "Droap",
    old: 23,
    family: {
        parents: {
            mother: "Nia",
            father: "Duke",
        },
    },
    education: "NA",
}

console.log(user_1.name, user_1.family.parents.father, user_1.family.sister)

console.log(user_2.name, user_2.family.mother, user_2.old, user_2.education)

console.log(user_3.name, user_3.lastName, user_3.old)


const cat = {
    name: "Murka",
    old: 3,
    color: "white",
    parents: {
        mother: {
            name: "Basya",
            old: 8,
            color: "white",
        },
        father: {
            name: "Arsen",
            old: 9,
            color: "aquamarine",
        },
    },
}

console.log(cat.parents.mother.name, cat.parents.mother.old, cat.parents.mother.color);
console.log(cat.parents.father.name, cat.parents.father.old, cat.parents.father.color);