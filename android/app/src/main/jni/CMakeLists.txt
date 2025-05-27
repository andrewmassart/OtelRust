cmake_minimum_required(VERSION 3.13)
project(appmodules)

find_package(ReactAndroid REQUIRED CONFIG)

include(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)

target_sources(${CMAKE_PROJECT_NAME} PRIVATE ../../../../../shared/NativeOTel.cpp)

target_include_directories(${CMAKE_PROJECT_NAME} PUBLIC ../../../../../shared)
target_include_directories(${CMAKE_PROJECT_NAME} PUBLIC ../../build/generated/source/codegen/jni)

# Link Rust library
cmake_path(SET RUST_LIB_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../jniLibs/${ANDROID_ABI}/libotel_rust_core.a NORMALIZE)
add_library(otel_rust_core STATIC IMPORTED)
set_target_properties(otel_rust_core PROPERTIES IMPORTED_LOCATION ${RUST_LIB_PATH})

target_link_libraries(${CMAKE_PROJECT_NAME}
    otel_rust_core
    react_codegen_AppSpecs
)