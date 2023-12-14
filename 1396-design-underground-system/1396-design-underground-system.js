
var UndergroundSystem = function() {
    this.checkInData=new Map();
    this.averageTime=new Map();

};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInData.set(id,[stationName,t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [name,time]=this.checkInData.get(id);
    const fromTo=name+"."+stationName;
    if(!this.averageTime.has(fromTo)){
        this.averageTime.set(fromTo,[]);
    }
    this.averageTime.get(fromTo).push(t-time);
    this.checkInData.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const data=this.averageTime.get(startStation+"."+endStation);
    const len=data.length;
    const total=data.reduce((acc,cur)=>acc+cur,0);
    
    return total/len;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */