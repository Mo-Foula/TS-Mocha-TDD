export class Test {
    test_true() {
        return true
    }

    static test_true() {
        return true
    }
}

console.log('Running Applications')
console.log(Test.test_true());
