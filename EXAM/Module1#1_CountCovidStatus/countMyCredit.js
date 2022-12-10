const countMyCredit = (subjArr) => {
    let credit = {}

    for (const subject of subjArr) {
        let year = subject.Year
        if (subject.Year === year) {
            if (credit?.[`Year${year}`] === undefined) {
                credit[`Year${year}`] = subject.credit
            } else {
                credit[`Year${year}`] = credit[`Year${year}`] + subject.credit
            }
        }
    }
    return credit
}

const subject = [
    { SubjId: 'INT101', Sem: 1, Year: 1, credit: 3 },
    { SubjId: 'INT103', Sem: 2, Year: 1, credit: 3 },
    { SubjId: 'INT105', Sem: 2, Year: 1, credit: 3 },
    { SubjId: 'INT201', Sem: 1, Year: 2, credit: 2 },
    { SubjId: 'INT202', Sem: 1, Year: 2, credit: 2 },
    { SubjId: 'INT214', Sem: 1, Year: 2, credit: 3 },
    { SubjId: 'INT301', Sem: 1, Year: 3, credit: 2 },
    { SubjId: 'INT313', Sem: 2, Year: 3, credit: 4 }
]

const subject2 = [
    { SubjId: 'INT101', Sem: 1, Year: 2, credit: 3 },
    { SubjId: 'INT103', Sem: 2, Year: 2, credit: 3 },
    { SubjId: 'INT105', Sem: 2, Year: 2, credit: 3 },
    { SubjId: 'INT201', Sem: 1, Year: 3, credit: 2 },
    { SubjId: 'INT202', Sem: 1, Year: 10, credit: 2 },
    { SubjId: 'INT214', Sem: 1, Year: 7, credit: 3 },
    { SubjId: 'INT301', Sem: 1, Year: 7, credit: 2 },
    { SubjId: 'INT313', Sem: 2, Year: 7, credit: 4 }
]
console.log(`--- Result ---`)
console.log(countMyCredit(subject))
//{ Year1: 9, Year2: 7, Year3: 6 }
console.log(countMyCredit(subject2))
//{ Year2: 9, Year3: 2, Year5: 2, Year7: 9 }

//{Year1Sem1: X, Year1Sem2: X, Year2Sem1: X, Year2Sem2: X}
