export function lastTrueInArray(array, index){
    if(array[index] == false) {
        return false;
    } else {
        if(array[index+1] == true) {
            return false;
        } else {
            return true;
        }
    }
}