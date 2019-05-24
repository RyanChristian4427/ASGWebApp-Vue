import Login from '@/views/authentication/Login.vue';
import Register from '@/views/authentication/Register.vue';
import DashboardLayout from '@/components/layouts/Dashboard.vue';

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'ASG Login',
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            title: 'ASG Register',
        },
    },
    {
        path: '/',
        component: DashboardLayout,
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: () => import('@/views/Dashboard.vue'),
                meta: {
                    title: 'ASG Dashboard',
                },
            },
            {
                path: '/user-profile',
                name: 'User Profile',
                component: () => import('@/views/UserProfile.vue'),
                meta: {
                    title: 'ASG User Profile',
                },
            },
            {
                path: '/update-contact',
                name: 'Update Contact Details',
                component: () => import('@/views/UpdateContactDetails.vue'),
                meta: {
                    title: 'ASG Update Contact Details',
                },
            },
            {
                path: '/current-candidates',
                name: 'Current Candidates',
                component: () => import('@/views/CurrentCandidates.vue'),
                meta: {
                    title: 'ASG Current Candidates',
                },
            },
            {
                path: '/process-candidates',
                name: 'Process Candidates',
                component: () => import('@/views/ProcessCandidates.vue'),
                meta: {
                    title: 'ASG Process Candidates',
                },
            },
            {
                path: '/manage-user-accounts',
                name: 'Manage User Accounts',
                component: () => import('@/views/ManageUserAccounts.vue'),
                meta: {
                    title: 'ASG Manage Use Accounts',
                },
            },



            {
                path: '/table-list',
                name: 'Table List',
                component: () => import('@/views/TableList.vue'),
            },
            {
                path: '/typography',
                name: 'Typography',
                component: () => import('@/views/Typography.vue'),
            },
            {
                path: '/icons',
                name: 'Icons',
                component: () => import('@/views/Icons.vue'),
            },
            {
                path: '/maps',
                name: 'Maps',
                component: () => import('@/views/Maps.vue'),
            },
            {
                path: '/notifications',
                name: 'Notifications',
                component: () => import('@/views/Notifications.vue'),
            },
        ],
    },

    {
        path: '*',
        redirect: '/',
    },
];
