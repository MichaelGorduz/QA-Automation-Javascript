// Function declaration

function getArea(width, height) {
return width * height;
}

console.log(getArea(5, 10));


// Function expression 

const getMeArea = function(width, height) {
    return width * height;
};

console.log(getMeArea(5, 10));

// Arrow function 

const getMyArea = (width, height) => {
    return width * height;
};

console.log(getMyArea(5, 10));