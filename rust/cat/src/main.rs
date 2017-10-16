use std::error::Error;
use std::env;
use std::io::{Read};
use std::fs::File;

fn main() {
	let args: Vec<String> = env::args().collect();
	println!("{}", run(args[1].to_string()).expect("Failed to run"));
}

fn run(file_name: String) -> Result<String, Box<Error>> {
	let mut file = File::open(file_name)?;
	let mut buffer = String::new();
	file.read_to_string(&mut buffer)?;

	Ok(buffer)
}
