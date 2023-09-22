fn is_palindrome(number: i32) -> bool {
    let str: String = number.to_string();
    let reversed: String = str.chars().rev().collect();

    str == reversed
}

fn main() {}

#[cfg(test)]
mod test {
    use crate::is_palindrome;

    #[test]
    fn case_1() {
        let result = is_palindrome(121);
        assert_eq!(result, true)
    }

    #[test]
    fn case_2() {
        let result = is_palindrome(-121);
        assert_eq!(result, false)
    }

    #[test]
    fn case_3() {
        let result = is_palindrome(10);
        assert_eq!(result, false)
    }
}
