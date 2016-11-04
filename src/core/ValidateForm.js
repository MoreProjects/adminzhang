/**
 * Created by weny on 2016/4/8.
 */
/**
 * [validateForm 验证表单]
 * @param  {[Object]} self [当前的React组件对象]
 * @param  {[String]} formRef [在form标签里指定的ref值]
 * @param  {[Array]} arrayName [需要验证的表单name值]
 * @return {[object]}
 * {ele:[object HTMLInputElement],flag: [boolean],}
 * [ele:没验证通过的第一个表单元素对象,flag:表单是否验证通过]
 */
const ValidateForm = (self, formRef , arrayName) => {
    let ele = null;
    let formEle = self.refs[formRef];
    let eleArr = arrayName.map((item, index, array) => {//返回需要验证的表单元素对象数组
            return formEle[item];
    });
    let flag = eleArr.every((item, index, array) => {
        ele = item;
        return item.value !== "";
    });
    ele.focus();
    ele.blur();
    return {
        ele: ele, //没验证通过的第一个表单元素对象
        flag: flag //表单是否验证通过
    }
}
export default ValidateForm;