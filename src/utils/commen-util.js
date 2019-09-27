// 如果传入参数为空字符串 返回true
function isBlank(str) {
    return str == null || 
    str == undefined || 
    str == ''
}

function isNotBlank(str) {
return !isBlank(str)
}


export {
    isBlank,
    isNotBlank
}