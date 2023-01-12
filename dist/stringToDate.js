function stringToDate(str) {
    const [date, time] = str.split(' ');
    const [day, month, year] = date.split("/").map(Number);
    const [hour, min] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hour, min);
}
export { stringToDate };
//# sourceMappingURL=stringToDate.js.map