// //task 1
const rectagle = {
    height: 25,
    width: 30,
    getSquare() {
        let result = this.height * this.width;
        return result;
    }
}
console.log(rectagle.getSquare());


//task 2
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - (this.price * (this.discount.substr(0,2)/100));
    }
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());
//
//
// //task 3
const user = {
    name: 'Abraham',
};
user.getUserName = function () {
    return this.name;
}
user.getName = function () {
    return this.name;
}
console.log(user.getName());
//
// //task 4
const object = {
    height: 10,
    addHeight: function () {
        return this.height + 1;
    }
}
console.log(object.addHeight());

// //task 5
const numerator = {
    value: 1,
    double: function () {
        this.value*=2;
        return numerator;
    },
    plusOne: function () {
        this.value++;
        return numerator;

    },
    minusOne: function () {
        this.value--;
        return numerator;
    }
}
console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value);

//
// //task 6
const user = {
        name: 'Abraham'
    },
    otherUser = {
        name: 'John',
        getName: function () {
            return this.name;
        }
    }
user.getName; //underfined
// //В этом случае у объекта user нет метода getName
// //поэтому он ничего не выводит
//
// user.getName = otherUser.getName;
// //В этом случае мы одолжили поведение метода getName у объекта
// //otherUser и присвоили его объекту user
//
// user.getName();//"Abraham"
// //Теперь у объекта user есть метод с унаследованным поведением
// //но т.к. метод содержит неявный параметр this, который указывает
// //на адрес конкретного объекта, у которого он вызывается, поэтому
// //у объекта user вызывается именно его свойство name
// //со значением 'Abraham'
// otherUser.getName();//"John"
// //В данном случае у объекта otherUser вызывается его метод
// //с изначально присвоенным ему свойством.

//this. Task 2
const object = {
    price: 10,
    amountProducts: 5,
    getValueAllProducts: function () {
        console.log(this.price * this.amountProducts);
    }
};
object.getValueAllProducts.call(object);

// //task 3
const object = {
    price: 10,
    amountProducts: 5,
    getValueAllProducts: function () {
        return this.price * this.amountProducts;
    }
};
const object2 = {
    price: 20,
    amountProducts: 4
};
object2.getValueAllProducts = object.getValueAllProducts;
console.log(object2.getValueAllProducts());

// //task 4
let sizes = {
        width: 5,
        height: 10
    };
    getSquare = function () {
        return this.width * this.height;
    };
console.log (getSquare.call(sizes));
//
// //task 5
let numbers = [4, 12, 0, 10, -2, 4]
console.log(Math.min.apply(null, numbers));
//
// //task 6
const element = {
        height: '15px',
        marginTop: '5px',
        marginBottom: '5px',
        getFullHeight: function () {
            let a = this.height.substr(0, 1);
            let b = this.marginTop.substr(0, 1);
            let c = this.marginBottom.substr(0, 1);
            return Number(a) + Number(b) + Number(c);
        }
    },
    block = {
        height: '5px',
        marginTop: '3px',
        marginBottom: '3px'
    };
let result = element.getFullHeight.apply(block);
console.log(result);
//
// //task 7
let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());










