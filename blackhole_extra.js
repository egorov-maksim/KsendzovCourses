function check_age(age_1){
    let age_2 = Number(age_1)
    if (age_2 < 18) {
        return (`You don’t have access cause your age is ${age_2}. It’s less then.`)
    }
    else if (age_2 >= 18 && age_1 < 60) {
        return ('Welcome!')   
        }
    else if (age_2 > 60) {
        return ('Keep calm and look Culture channel')
        }
    else {
        return ('Technical work')
        }
    }

const ages = [17,18,61,'17','18','aaa']

for (const age_1 of ages){
    let age_2 = Number(age_1)
    let answer = check_age(age_1)
    console.log(`If you are ${age_2} years, the programm will print: ${answer}`)
}
