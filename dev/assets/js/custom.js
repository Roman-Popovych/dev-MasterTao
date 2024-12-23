const swiper = new Swiper('#banner-slider', {
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


const swiperAdvantages = new Swiper('#advantages-slider', {
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 0,
            loop: false,
            slidersPerGroup: 8,
            simulateTouch: false,
            enabled: false,
            pagination: {
                enabled: false,
                clickable: false,
                el: '.swiper-pagination',
            }
        }
    }
});

// const swiperDelivery = new Swiper('#delivery', {
//     speed: 400,
//     loop: true,
//     slidesPerView: 1,
//     clickable: true,
//     pagination: {
//         el: '.swiper-pagination-delivery',
//         clickable: true,
//         enabled: true,
//     },
//     navigation: {
//         enabled: false,
//         nextEl: '.swiper-button-next-delivery',
//         prevEl: '.swiper-button-prev-delivery'
//     },

//     breakpoints: {
//        767: {
//         slidesPerView: 1,
//         navigation: {
//             enabled: true,
//             nextEl: '.swiper-button-next-delivery',
//             prevEl: '.swiper-button-prev-delivery'
//         },
//        },
//         861: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-delivery',
//                 prevEl: '.swiper-button-prev-delivery'
//             },
//             pagination: {
//                 enabled: false,
//             },
//         },

//         1252: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-delivery',
//                 prevEl: '.swiper-button-prev-delivery'
//             },
//         }
//     }
// });

// const swiperServices = new Swiper('#services', {
//     speed: 400,
//     loop: true,
//     slidesPerView: 1,
//     clickable: true,
//     pagination: {
//         el: '.swiper-pagination-services',
//         clickable: true,
//         enabled: true,
//     },
//     navigation: {
//         enabled: false,
//         nextEl: '.swiper-button-next-services',
//         prevEl: '.swiper-button-prev-services'
//     },

//     breakpoints: {
//        767: {
//         slidesPerView: 1,
//         navigation: {
//             enabled: true,
//             nextEl: '.swiper-button-next-services',
//             prevEl: '.swiper-button-prev-services'
//         },
//        },
//         861: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-services',
//                 prevEl: '.swiper-button-prev-services'
//             },
//             pagination: {
//                 enabled: false,
//             },
//         },

//         1252: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//             navigation: {
//                 enabled: true,
//                 nextEl: '.swiper-button-next-services',
//                 prevEl: '.swiper-button-prev-services'
//             },
//         }
//     }
// });


const swiperTemplate = document.querySelectorAll('.slider-template')

const sliderTemplatePrevArrow = document.querySelectorAll('.swiper-button-prev-unique')
const sliderTemplateNextArrow = document.querySelectorAll('.swiper-button-next-unique')

sliderTemplatePrevArrow.forEach((arrow, index) => {
    arrow.classList.add('swiper-button-prev-unique-' + index)
})
sliderTemplateNextArrow.forEach((arrow, index) => {
    arrow.classList.add('swiper-button-next-unique-' + index)
})

swiperTemplate.forEach((item, index) => {

    new Swiper(item, {
        speed: 400,
        loop: true,
        slidesPerView: 1,
        clickable: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            enabled: true,
        },
        navigation: {
            enabled: false,
            nextEl: '.swiper-button-next-unique-' + index,
            prevEl: '.swiper-button-prev-unique-' + index,
        },

        breakpoints: {
        767: {
            slidesPerView: 1,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next-unique-' + index,
                prevEl: '.swiper-button-prev-unique-' + index,
            },
        },
            861: {
                slidesPerView: 2,
                spaceBetween: 30,
                navigation: {
                    enabled: true,
                    nextEl: '.swiper-button-next-unique-' + index,
                    prevEl: '.swiper-button-prev-unique-' + index,
                },
                pagination: {
                    enabled: false,
                },
            },

            1252: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    enabled: true,
                    nextEl: '.swiper-button-next-unique-' + index,
                    prevEl: '.swiper-button-prev-unique-' + index,
                },
                pagination: {
                    enabled: false,
                },
            }
        }
    });
});

document.body.querySelectorAll('section').forEach(function(node,i){
    node.classList.add(i % 2?"1":"bg-section");
})

const firstSection = document.querySelector('.banner');
firstSection.classList.remove("bg-section");

$(document).ready(function(){
    $('[type="tel"]').mask('+38(000)-000-00-00');
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