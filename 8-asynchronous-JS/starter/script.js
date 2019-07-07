//const second = () => {
//    setTimeout(() => {
//        console.log('async hey there')
//    }, 2000)
//}
//
//const first = () => {
//    console.log('hey there')
//    second();
//    console.log('the end')
//}
//first()

/*

// ES5

function getRecipe() {
    setTimeout(() => {
        const recipeId = [234, 543, 643, 876];
        console.log(recipeId)

        setTimeout(id => {

            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe);
            }, 1500, recipe.publisher)
        }, 1000, recipeId[2]);

    }, 1500)
};

getRecipe();

*/


//ES6
/*
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([234, 543, 643, 876])
    }, 1500)
})

 const getRecipe = recID => {
     return new Promise((resolve, reject) => {
         setTimeout(ID => {
             const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
             resolve(`${ID}: ${recipe.title}`);
         }, 1500, recID);
     });
 };

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    })
}


getIDs
.then(IDs => {
    console.log(IDs)
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {console.log(error)});

*/

/*
// async await
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([234, 543, 643, 876])
    }, 1500)
})

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    })
}

async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs)
    const recipe = await getRecipe(IDs[2])
    console.log(recipe)
    const related = await getRelated('Jonas')
    console.log(related)
    return recipe
}

getRecipesAW().then(result => console.log(`result is: ${result}`))

*/

// Ajax fetch promises

function getWeather(woid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woid}/`)
        .then(result => {
            console.log(result)
            return result.json();
        })
        .then(data => {
            //console.log(data)
            const today = data.consolidated_weather[0];
            console.log(`temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`)
        })
        .catch(error => {
            console.log(error)
        })
}

//getWeather(796597)

// Ajax fetch promises async await

async function getWeather(woid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woid}/`);
        const data = await result.json();
        const today = data.consolidated_weather[0];
        console.log(`temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`)
        return data;
    } catch(error) {
        console.log(error)
    }
}

let dataPrg;

getWeather(796597).then(result => {
    dataPrg = result
    console.log(dataPrg)
})




















































