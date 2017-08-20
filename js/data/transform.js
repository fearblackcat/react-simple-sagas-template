/**
 * Created by russell on 8/13/2017.
 */
const transformToTreeData = (datas) => new Promise((resolve, reject) => {
    let result = {
        name: 'Total Test API',
        toggled: true,
        children: []
    }
    try {
        Array.prototype.forEach.call(datas, function (data, index) {
            let parent = {}, pdataidx = -1
            let bexist = Array.prototype.some.call(result.children, function (pnode, pidx) {
                if (pnode.name === data.action) {
                    pdataidx = pidx
                    return true
                }
            })
            if (!bexist) {
                parent.name = data.action
                parent.children = []
                let child = {}
                child.name = data.name
                child.url = data.api
                child.desc = data.descr
                child.params = data.params
                parent.children.push(child)
                result.children.push(parent)
            } else {
                let parentobj = result.children[pdataidx]
                let child = {}
                child.name = data.name
                child.url = data.api
                child.desc = data.descr
                child.params = data.params
                parentobj.children.push(child)
            }

        })

        resolve(result)
    } catch (e) {
        reject(e.message)
    }
})


const cancelActiveNode = (data) => {
    if(data.active) {
        delete data.active
    }
    let dataarr = data.children
    Array.prototype.forEach.call(dataarr, function(data, idx){
        if(data.active) {
            delete data.active
            if(data.children) {
                Array.prototype.forEach.call(data.children, function(child, index) {
                    if(child.active) {
                        delete child.active
                    }
                })
            }
        }
    })
}

module.exports = {
    transformToTreeData: transformToTreeData,
    cancelActiveNode: cancelActiveNode
}