class EventEmitter {
    constructor(){
        this.event=new Map();
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
        if(!this.event.has(eventName)){
            this.event.set(eventName,[]);
        }
        const list=this.event.get(eventName);
        list.push(callback);
        
		return {
			unsubscribe: () => {
                const index=list.indexOf(callback);
                if(index!==-1){
                    list.splice(index,1);
                }
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        if(!this.event.has(eventName)){
            return [];
        }
        const res=[];
        const list=this.event.get(eventName);
        list.forEach(fn=>{
            res.push(fn(...args));
        })
		return res;
        
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */