/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.discount=discount;
    this.n=n;
    this.val=1;
    this.map=new Map();
    products.forEach((id,idx)=>{
        this.map.set(id,prices[idx]);
    });
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    let total=product.reduce((acc,cur,idx)=>acc+this.map.get(cur)*amount[idx],0);
    if(this.val%this.n===0){
        total-=total*this.discount/100
        Math.round(total*Math.pow(10,5))/Math.pow(10,5);
    }
    this.val++;
    return total;
};

/** 
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */