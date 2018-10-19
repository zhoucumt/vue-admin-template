/* eslint-disable */
/**
 *
 * @file router文件
 * @author zhouqinghuaicumt@163.com
 *
 */
import Vue from 'vue'
import Router from 'vue-router';
import Index from '@/views/Index';
import ArticleManage from '@/views/content/articleManage';
import CommentManage from '@/views/content/commentManage';
import UserAdd from '@/views/user/add';
import UserActive from '@/views/user/active';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },

        // 内容管理模块
        {
            path: '/content',
            name: 'article-manage',
            component: Index,
            children: [
                {
                    path: 'articleManage',
                    name: 'article-manage',
                    component: ArticleManage
                },

                {
                    path: 'commentManage',
                    name: 'comment-manage',
                    component: CommentManage
                }
            ]
        },

        // 用户管理模块
        {
            path: '/user',
            name: 'article-manage',
            component: Index,
            children: [
                {
                    path: 'add',
                    name: 'user-add',
                    component: UserAdd
                },

                {
                    path: 'active',
                    name: 'user-active',
                    component: UserActive
                }
            ]
        }
    ]
});
