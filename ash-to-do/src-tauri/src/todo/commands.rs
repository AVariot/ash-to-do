
use serde_json::Value;

use crate::sys::file::write_in_file;

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
