
use serde_json::Value;

use crate::sys::file::write_in_file;
use crate::sys::folder::read_file_in_dir;

#[tauri::command]
pub fn create_todo(name: &str) -> Result<Value, String> {
    let data = &format!(r#"
        {{
            "name": "{}",
            "columns": [
                {{
                    "name": "todo",
                    "color": "ffffff",
                    "tasks": [
                        "title": "Welcome to todo",
                        "description": "Todo",
                        "createdAt": "",
                        "deadLineAt": ""
                    ]
                }},
                {{
                    "name": "in progress",
                    "color": "f6ffff",
                    "tasks": [
                        "title": "Welcome to todo",
                        "description": "Todo",
                        "createdAt": "",
                        "deadLineAt": ""
                    ]
                }},
            ]
        }}
    "#, name);
    write_in_file(name, data);
    let v: Value = serde_json::from_str(data).map_err(|e| e.to_string())?;

    Ok(v)
}

#[tauri::command]
pub fn get_all_todo() -> Result<Vec<Value>, String> {
    let paths = read_file_in_dir("./")?;
    let mut todos = Vec::new();

    for path in paths {
        let content = std::fs::read_to_string(&path).map_err(|e| e.to_string())?;
        let v: Value = serde_json::from_str(&content).map_err(|e| e.to_string())?;
        todos.push(v);
    }

    Ok(todos)
}
