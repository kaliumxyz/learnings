fn main() {
	for n in 0..100 {
		println!("{}: {}", n, fizzbuzz(n));
	}

}
fn fizzbuzz(n:u32) -> String {

	if n == 0 {
		return 0.to_string();
	}

	if n % 3 == 0 && n % 5 == 0 {
		return "fizzbuzz".to_string();
	} else if n % 3 == 0 {
		return "fizz".to_string();
	} else if n % 5 == 0 {
		return "buzz".to_string();
	} else {
		return n.to_string();
	}
}
