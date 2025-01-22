/**
 * 1. Declare base product interface, 
 *      this will be returned factory class and their sub clases
 * 
 * 2. Implement concrete product sub classes thar implements the base product class/interface
 * 
 * 3. Declare factory class/interface that retunrs objects that match the base product, not the concrete products
 * 
 * 4. Implement concrete factories sib classes that implements the base factory interface
 *      These classes will return concrete products in their factory method
 * 
 */

/**Step 1 */

class BaseProduct {
    showCost() {
        throw new Error("Method not implement");
    }
}

/**Step 2 */

class ProductA extends BaseProduct {
    showCost() {
        console.log('Product A cost')
    }
}

class ProductB extends BaseProduct {
    showCost() {
        console.log('Product B cost')
    }
}

/**Step 3 */

class Factory {
    makeProduct() {
        throw new Error("Method not implement");
    }
}

/**Step 4 */

class FactoryProductA extends Factory {
    makeProduct() {
        return new ProductA();
    }
}

class FactoryProductB extends Factory {
    makeProduct() {
        return new ProductB();
    }
}

function appFactory(factory) {
    const car = factory.makeProduct();
    car.showCost();
}

appFactory(new FactoryProductA());

