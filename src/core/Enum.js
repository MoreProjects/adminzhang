/**
 * **************************************************************
 * 所有 可配置的 可重复使用的 属性都应该在这里统一维护入口
 *
 * **************************************************************
 */

/**
 * 数据异常更正模块，允许最大输入的字符数
 */
const errorFeedMaxLength = 100;

const errorFeedPlaceholder = '请输入错误数据和错误原因';


/**
 * [userRole 角色枚举类型]
 * @type {Object}
 */
const errorFeedErrors = {
    zeroLengthError: '报错字段不能为空',
    maxLengthError: '错误描述不超过' + errorFeedMaxLength + '个字'
};


/**
 * [dialogPlainText 确认对话框文案集合]
 * @type {Object}
 */
const dialogPlainText = {
    first: '取消',
    second: '确认'
};

/**
 * [processStatus 流程状态]
 * 未确认 0
 * 已确认 1
 * 用户处理 2
 * 超时系统自动确认 3
 * 管理员处理 4
 * @type {Object}
 */
const processStatus = {
    'init': 0,
    'unProcess': 0,
    'processed': 1,
    'processinguser': 2,
    'processedtimeout': 3,
    'processingadmin': 4
};

/**
 * 默认表格数据二级标题，为了程序方便，但实际不显示
 */
const defaultLevel2Name = '##DEFAULT##';

/**
 * 详情页分组标题文案
 */
const defaultTableTitle = '数据';


/**
 * [Enum 公用枚举对象，对外export]
 * @type {Object}
 */
const Enum = {
    errorFeedErrors: errorFeedErrors,
    errorFeedPlaceholder: errorFeedPlaceholder,
    errorFeedMaxLength: errorFeedMaxLength,

    dialogPlainText: dialogPlainText,

    processStatus: processStatus,

    defaultLevel2Name: defaultLevel2Name,

    defaultTableTitle: defaultTableTitle
};

export default Enum;
