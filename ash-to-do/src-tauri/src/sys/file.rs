
use std::fs::File;
use std::io::prelude::*;

pub fn write_in_file(name: &str, content: &str) -> std::io::Result<()> {
    let mut file = File::create(name)?;
    file.write_all(content.as_bytes())?;

    Ok(())
}
