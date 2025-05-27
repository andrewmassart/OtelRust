import { TurboModule, TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
  readonly addNumbers: (a: number, b: number) => number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeOTel')
