import { Navigate, createBrowserRouter } from 'react-router-dom'
import { DashboardMain } from '../layouts/DashboardMain'
import FrontMain from '../layouts/FrontMain'
import RoleAll from '../dashboard/pages/admins/role/RoleAll'
import RoleCreate from '../dashboard/pages/admins/role/RoleCreate'
import RoleEdit from '../dashboard/pages/admins/role/RoleEdit'
import AdminAll from '../dashboard/pages/admins/admin/AdminAll'
import AdminCreate from '../dashboard/pages/admins/admin/AdminCreate'
import AdminEdit from '../dashboard/pages/admins/admin/AdminEdit'
import AdminLoginMain from '../layouts/AdminLoginMain'
import AdminLogin from '../dashboard/pages/login/AdminLogin'
import Forgot from '../dashboard/pages/login/Forgot'
import ResetPassword from '../dashboard/pages/login/ResetPassword'
import PrivateRoute from './PrivateRoute'
import CategoryAll from '../dashboard/pages/post/category/CategoryAll'
import CategoryCreate from '../dashboard/pages/post/category/CategoryCreate'
import CategoryEdit from '../dashboard/pages/post/category/CategoryEdit'
import SubCategoryAll from '../dashboard/pages/post/sub-category/SubCategoryAll'
import SubCategoryCreate from '../dashboard/pages/post/sub-category/SubCategoryCreate'
import SubSubCategoryAll from '../dashboard/pages/post/sub-sub-category/SubSubCategoryAll'
import SubSubCategoryCreate from '../dashboard/pages/post/sub-sub-category/SubSubCategoryCreate'
import SubSubCategoryEdit from '../dashboard/pages/post/sub-sub-category/SubSubCategoryEdit'
import TagAll from '../dashboard/pages/post/tags/TagAll'
import TagCreate from '../dashboard/pages/post/tags/TagCreate'
import TagEdit from '../dashboard/pages/post/tags/TagEdit'
import PostAll from '../dashboard/pages/post/posts/PostAll'
import PostCreate from '../dashboard/pages/post/posts/PostCreate'
import PostEdit from '../dashboard/pages/post/posts/PostEdit'


export const router = createBrowserRouter([



    {
        path: '/dashboard',
        element: <DashboardMain />,
        children: [

            {
                path: '/dashboard',
                element: <PrivateRoute><div>Dashboard</div></PrivateRoute>,
            },
            // Role
            {
                path: '/dashboard/admin/role',
                element: <PrivateRoute><RoleAll /></PrivateRoute>,
            },
            {
                path: '/dashboard/admin/role/create',
                element: <PrivateRoute><RoleCreate /></PrivateRoute>,
            },
            {
                path: '/dashboard/admin/role/edit/:id',
                element: <PrivateRoute><RoleEdit /></PrivateRoute>,
            },
            // Admin
            {
                path: '/dashboard/admin',
                element: <PrivateRoute><AdminAll /></PrivateRoute>,
            },
            {
                path: '/dashboard/admin/create',
                element: <PrivateRoute><AdminCreate /></PrivateRoute>,
            },
            {
                path: '/dashboard/admin/edit/:id',
                element: <PrivateRoute><AdminEdit /></PrivateRoute>,
            },

            // Category
            {
                path: '/dashboard/post/category',
                element: <PrivateRoute><CategoryAll /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/category/create',
                element: <PrivateRoute><CategoryCreate /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/category/edit/:id',
                element: <PrivateRoute><CategoryEdit /></PrivateRoute>,
            },
            // Sub Category
            {
                path: '/dashboard/post/subcategory',
                element: <PrivateRoute><SubCategoryAll /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/subcategory/create',
                element: <PrivateRoute><SubCategoryCreate /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/subcategory/edit/:id',
                element: <PrivateRoute><AdminEdit /></PrivateRoute>,
            },
            // Sub Sub Category
            {
                path: '/dashboard/post/subsubcategory',
                element: <PrivateRoute><SubSubCategoryAll /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/subsubcategory/create',
                element: <PrivateRoute><SubSubCategoryCreate /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/subsubcategory/edit/:id',
                element: <PrivateRoute><SubSubCategoryEdit /></PrivateRoute>,
            },
            // Tag
            {
                path: '/dashboard/post/tag',
                element: <PrivateRoute><TagAll /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/tag/create',
                element: <PrivateRoute><TagCreate /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/tag/edit/:id',
                element: <PrivateRoute><TagEdit /></PrivateRoute>,
            },
            // Post
            {
                path: '/dashboard/post',
                element: <PrivateRoute><PostAll /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/create',
                element: <PrivateRoute><PostCreate /></PrivateRoute>,
            },
            {
                path: '/dashboard/post/edit/:id',
                element: <PrivateRoute><PostEdit /></PrivateRoute>,
            },





        ]
    },





    {
        path: '/admin',
        element: <AdminLoginMain />,
        children: [
            {
                path: '/admin',
                element: < Navigate to="/admin/login" />,
            },
            {
                path: '/admin/login',
                element: <AdminLogin />,
            },
            {
                path: '/admin/password/forgot',
                element: <Forgot />,
            },
            {
                path: '/admin/password/forgot',
                element: <Forgot />,
            },
            {
                path: '/admin/reset/:token/:email',
                element: <ResetPassword />,
            },

        ]
    },







    {
        path: '/',
        element: <FrontMain />,
        children: [
            {
                path: '/',
                element: <div>Frontend</div>,
            },

        ]
    },













    // {
    //     path: '/*',
    //     element: <Page404 />,
    // },
])