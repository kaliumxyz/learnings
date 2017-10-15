use std::io;

fn main() {
		let mut res = String::new();
		io::stdin().read_line(&mut res)
			.expect("err");

		if res.trim() == "pewpewpew".to_string() {
				println!("good job.");
				println!("for your next task: msgs kalium on freenode");
		}
}
