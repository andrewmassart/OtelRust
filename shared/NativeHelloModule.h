#pragma once

#include <AppSpecsJSI.h>
#include <memory>
#include <string>

namespace facebook::react {

class NativeHelloModule : public NativeHelloModuleCxxSpec<NativeHelloModule> {
public:
    NativeHelloModule(std::shared_ptr<CallInvoker> jsInvoker);
    
    double addNumbers(jsi::Runtime& rt, double a, double b);
    std::string getPlatformName(jsi::Runtime& rt);
    double getCurrentTimestamp(jsi::Runtime& rt);
};

} // namespace facebook::react