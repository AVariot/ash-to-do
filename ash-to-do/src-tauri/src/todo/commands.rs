
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
                    "color": "bg-blue-200",
                    "tasks": [
                        {{
                            "title": "Welcome to todo",
                            "description": "Todo",
                            "createdAt": "",
                            "deadLineAt": "",
                            "color": "bg-blue-300"
                        }}
                    ]
                }},
                {{
                    "name": "in progress",
                    "color": "bg-blue-200",
                    "tasks": [
                        {{
                            "title": "Welcome to todo",
                            "description": "Todo",
                            "createdAt": "",
                            "deadLineAt": "",
                            "color": "bg-blue-300"
                        }}
                    ]
                }}
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
        if !path.ends_with(".json") {
            continue;
        }
        let content = std::fs::read_to_string(&path).map_err(|e| e.to_string())?;
        let v: Value = serde_json::from_str(&content).map_err(|e| e.to_string())?;
        todos.push(v);
    }

    Ok(todos)
}
