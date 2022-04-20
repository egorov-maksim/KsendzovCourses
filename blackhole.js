const ages = [17,18,61,'17','18','aaa']

for (const age_1 of ages){
    check_age(age_1)
    function check_age(age_1){
        let age_2 = Number(age_1)
        if (age_2 < 18) {
            let answer = (`You don’t have access cause your age is ${age_2}. It’s less then.`)
            console.log('If you are ' + age_2 + ' years, the programm will print: ' + answer)
        }

        else if (age_2 >= 18 && age_1 < 60) {
            let answer = ('Welcome !')
            console.log('If you are ' + age_2 + ' years, the programm will print: ' + answer)
        }

        else if (age_2 > 60) {
            let answer = ('Keep calm and look Culture channel')
            console.log('If you are ' + age_2 + ' years, the programm will print: ' + answer)
        }

        else {
            let answer = ('Technical work')
            console.log('If you are ' + age_2 + ' years, the programm will print: ' + answer)
        }
    }
}
