#include "NativeHelloModule.h"
#include <chrono>

namespace facebook::react {

NativeHelloModule::NativeHelloModule(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeHelloModuleCxxSpec(std::move(jsInvoker)) {}

double NativeHelloModule::addNumbers(jsi::Runtime& rt, double a, double b) {
    return a + b;
}

std::string NativeHelloModule::getPlatformName(jsi::Runtime& rt) {
#ifdef __ANDROID__
    return "Android";
#elif defined(__APPLE__)
    #if TARGET_OS_IPHONE
        return "iOS";
    #else
        return "macOS";
    #endif
#elif defined(_WIN32)
    return "Windows";
#else
    return "Unknown";
#endif
}

double NativeHelloModule::getCurrentTimestamp(jsi::Runtime& rt) {
    auto now = std::chrono::system_clock::now();
    auto duration = now.time_since_epoch();
    auto millis = std::chrono::duration_cast<std::chrono::milliseconds>(duration).count();
    return static_cast<double>(millis);
}

} // namespace facebook::react