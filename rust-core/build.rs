extern crate cbindgen;

use std::{env, path::Path};

fn generate_c_headers() {
    let crate_dir = env::var("CARGO_MANIFEST_DIR").unwrap();
    
    let shared_path = Path::new(&crate_dir)
        .parent()
        .expect("Could not get parent directory")
        .join("shared");
    
    std::fs::create_dir_all(&shared_path).expect("Could not create shared directory");

    let config = cbindgen::Config::from_file("cbindgen.toml")
        .expect("Could not load cbindgen.toml");

    cbindgen::Builder::new()
        .with_crate(crate_dir)
        .with_config(config)
        .generate()
        .expect("Unable to generate bindings")
        .write_to_file(shared_path.join("otel_rust_core.h"));
}

fn main() {
    // Tell Cargo that if the given file changes, to rerun this build script.
    println!("cargo:rerun-if-changed=src/lib.rs");
    generate_c_headers();
}