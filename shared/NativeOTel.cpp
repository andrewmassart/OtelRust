#include "NativeOTel.h"

namespace facebook::react {

NativeOTel::NativeOTel(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeOTelCxxSpec(std::move(jsInvoker)) {}

double NativeOTel::addNumbers(jsi::Runtime& rt, double a, double b) {
    return otel_rust_core::rust_add_numbers(a, b);  // Call Rust instead of C++ logic
}

}