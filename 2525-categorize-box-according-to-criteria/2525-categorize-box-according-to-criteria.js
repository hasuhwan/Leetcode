/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const category={
        Heavy:false,
        Bulky:false,
    };
    if(length>=10000 ||width>=10000||height>=10000||width*height*length>=Math.pow(10,9)){
        category["Bulky"]=true;
    }
    if(mass>=100){
        category["Heavy"]=true;
    }
    if(category["Bulky"]===true&&category["Heavy"]===true){
        return "Both";
    }
    if(category["Bulky"]===true&&category["Heavy"]===false){
        return "Bulky";
    }
    if(category["Bulky"]===false&&category["Heavy"]===true){
        return "Heavy";
    }
    return "Neither";
};