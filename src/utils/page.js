export function createPaggination(totalPages, page) {
    const arr = [];

    if (totalPages <= 6) {
        for (let i = 1; i <= totalPages; i++) {
            arr.push(i);
        }
    } else {
        if (page <= 4) {
            for (let i = 1; i <= 5; i++) {
                arr.push(i);
            }
            arr.push("...");
            arr.push(totalPages);
        }
        else if (page >= totalPages - 3) {
            arr.push(1);
            arr.push("...");
            for (let i = totalPages - 4; i <= totalPages; i++) {
                arr.push(i);
            }
        }
        else {
            arr.push(1);
            arr.push("...");
            for (let i = page - 1; i <= page + 1; i++) {
                arr.push(i);
            }
            arr.push("...");
            arr.push(totalPages);
        }
    }

    return arr;
}