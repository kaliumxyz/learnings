use std::error::Error;
use std::io::{self, Read};


fn main() {
	let wc = run().expect("Failed to run");
	println!("{}", wc);
}

fn run() -> Result<usize, Box<Error>> {
	let mut buffer = String::new();
	io::stdin().read_to_string(&mut buffer)?;

	Ok(buffer.split_whitespace().count())
}
