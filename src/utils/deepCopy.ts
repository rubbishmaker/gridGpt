export const deepClone = (value: any)=>
    {
        if (!value || typeof value != "object")
        {
            return value;
        }
        let out: any = value.contructor === Array ? [] : {}
        let _clone: Function = ((o: Object, c: any) =>
        {
            for (let i in o)
            {
                if (o[i as keyof typeof o] && typeof o[i as keyof typeof o] === "object")
                {
                    if (Array.isArray(o[i as keyof typeof o]))
                    {
                        c[i] = []
                    }
                    else
                    {
                        c[i] = {}
                    }
                    _clone(o[i as keyof typeof o], c[i]);
                }
                else
                {
                    c[i] = o[i as keyof typeof o]
                }
            }
            return c;
        })
        return _clone(value, out)
    }
