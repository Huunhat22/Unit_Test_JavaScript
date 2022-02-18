// kiểm tra các phần tử trong mảng có phải số chẳn hay không

export function checkIfAllEven(NumberList) {
    if (!Array.isArray(NumberList) || NumberList.length === 0) return false;

    for (let index = 0; index < NumberList.length; index++) {
        if (NumberList[index] % 2 !== 0) return false;
    }

    return true;
}