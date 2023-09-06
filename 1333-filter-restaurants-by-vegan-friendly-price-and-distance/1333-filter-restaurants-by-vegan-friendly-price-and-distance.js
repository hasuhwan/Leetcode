/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    return restaurants.filter((el)=>{
        if((veganFriendly===1?el[2]===veganFriendly:true)&&el[3]<=maxPrice&&el[4]<=maxDistance){
            return true;
        }else{
            return false;
        }
    }).sort((a,b)=>{
        if(b[1]===a[1]){
            return b[0]-a[0];
        }else{
            return b[1]-a[1];
        }
    }).map(el=>el[0]);
};