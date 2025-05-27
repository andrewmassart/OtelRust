#pragma once

#include <AppSpecsJSI.h>
#include <memory>

#include "otel_rust_core.h"

namespace facebook::react {

class NativeOTel : public NativeOTelCxxSpec<NativeOTel> {
public:
    NativeOTel(std::shared_ptr<CallInvoker> jsInvoker);
    
    // Simple function - delegates to Rust
    double addNumbers(jsi::Runtime& rt, double a, double b);
};

} // namespace facebook::react