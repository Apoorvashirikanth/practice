function binarySearch(arr,target,start,end){
    var mid= start + Math.floor((end-start)/2) ;

    if(start>end){
        return -1;
    }
    if(arr[mid] == target){
        return mid;
    }

    if(arr[mid] < target){
        return binarySearch(arr,target,mid+1,end);
    }

    return binarySearch(arr,target,start,mid-1);
}

console.log(binarySearch([23,34,45,56,67,78,90,100,509],100,0,8));