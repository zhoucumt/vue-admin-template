/* eslint-disable */
/*
 * @file 首页接口
 * @author zhouqinghuaicumt@163.com
 *
 */

import request from '@/utils/ajax'



export default {
    getIncome(params) {
        return request({
            url: '/get-income',
            method: 'get',
            params
        });
    }
}
