const findTheOldest = function(people) {
    people.sort((a, b) => {
        if (a.yearOfDeath === undefined)
            a["yearOfDeath"] = 2025;
        if (b.yearOfDeath === undefined)
            b["yearOfDeath"] = 2025;

        return (b.yearOfDeath - b.yearOfBirth) - 
               (a.yearOfDeath - a.yearOfBirth) 
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
