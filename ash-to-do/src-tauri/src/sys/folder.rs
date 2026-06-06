
use std::fs::{self};

pub fn read_file_in_dir(path: &str) -> Result<Vec<String>, String> {
    let mut paths = Vec::new();
    let directory = fs::read_dir(path).map_err(|e| e.to_string())?;
    for file in directory {
        let path = file.map_err(|e| e.to_string())?.path();
        paths.push(path.to_string_lossy().to_string());
    }

    Ok(paths)
}
