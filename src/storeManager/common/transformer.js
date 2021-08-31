export function getTotalMBR(array) {
    const updatedArray = [...array];
    let total = 0;
    updatedArray.forEach(element => {
        if (element.mbr) {
            total += parseInt(element.mbr, 10);
        }
    });
    return total;
}
