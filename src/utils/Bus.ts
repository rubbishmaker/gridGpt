//全局事件总线
type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}
type pramsKey = string | number | symbol;

type List = {
    [key: pramsKey]: Array<Function>
}
class Bus implements BusClass {
    list: List
    constructor() {
        this.list = {}
    }
    emit(name: string, ...args: Array<any>) {
        let eventName: Array<Function> = this.list[name]
        eventName.forEach(fn => {
            fn.apply(this, args)
        })
    }
    on(name: string, callback: Function) {
        let fn: Array<Function> = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn
    }
}
export default new Bus()
