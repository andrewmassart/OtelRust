#[unsafe(no_mangle)] 
pub extern "C" fn rust_add_numbers(a: f64, b: f64) -> f64 {
    a + b
}