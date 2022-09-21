module.exports = function(employeeName, employeePosition) {
    if (playerName || playerPosition) {
        return fetchData().then(data => {
            expect(data).toBe(employeeName, employeePosition);
        });
    };
};