var hasCycle = function(head) {
    let num = head;
    const contains = new Set();
    while(num){
        if(contains.has(num)){
            return true
        }
        contains.add(num)
        num = num.next
    }
    return false
};
