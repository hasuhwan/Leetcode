/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    const totalEnergy=energy.reduce((acc,cur)=>acc+cur,0);
    const [_,addExperience]=experience.reduce((acc,cur)=>{
        if(acc[0]>cur){
            return [acc[0]+cur,acc[1]];
        }else{
            return [cur*2+1,acc[1]+cur-acc[0]+1];
        }
    },[initialExperience,0]);
    const addEnergy=initialEnergy>totalEnergy?0:totalEnergy-initialEnergy+1;
    return addExperience+addEnergy;
    
    
};