.PHONY: android ios build-rust test-rust clean help

help:
	@echo "Available targets:"
	@echo "  android     - Build Rust + run Android app"
	@echo "  ios         - Build Rust + run iOS app (Mac only)"
	@echo "  build-rust  - Build Rust library for Android"
	@echo "  test-rust   - Run Rust unit tests"
	@echo "  clean       - Clean all build artifacts"
	@echo "  help        - Show this help"

android: build-rust
	npx react-native run-android

ios: build-rust
	npx react-native run-ios

build-rust:
	@echo "🦀 Building Rust library for Android..."
	cd rust-core && cbindgen --config cbindgen.toml --crate otel-rust-core --output ../shared/otel_rust_core.h
	cd rust-core && cargo ndk --target aarch64-linux-android --target x86_64-linux-android build --release
	@echo "📁 Creating jniLibs directories..."
ifeq ($(OS),Windows_NT)
	-mkdir android\\app\\src\\main\\jniLibs\\arm64-v8a 2>nul
	-mkdir android\\app\\src\\main\\jniLibs\\x86_64 2>nul
	copy rust-core\\target\\aarch64-linux-android\\release\\libotel_rust_core.a android\\app\\src\\main\\jniLibs\\arm64-v8a\\
	copy rust-core\\target\\x86_64-linux-android\\release\\libotel_rust_core.a android\\app\\src\\main\\jniLibs\\x86_64\\
else
	mkdir -p android/app/src/main/jniLibs/arm64-v8a android/app/src/main/jniLibs/x86_64
	cp rust-core/target/aarch64-linux-android/release/libotel_rust_core.a android/app/src/main/jniLibs/arm64-v8a/
	cp rust-core/target/x86_64-linux-android/release/libotel_rust_core.a android/app/src/main/jniLibs/x86_64/
endif
	@echo "✅ Rust library ready for Android!"

test-rust:
	@echo "🧪 Running Rust tests..."
	cd rust-core && cargo test

clean:
	@echo "🧹 Cleaning build artifacts..."
	cd rust-core && cargo clean
ifeq ($(OS),Windows_NT)
	-del /Q android\\app\\src\\main\\jniLibs\\*\\*.a 2>nul
else
	-rm -f android/app/src/main/jniLibs/*/*.a
endif
	@echo "✅ Clean complete!"