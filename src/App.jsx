import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom';
import BlogLayout from './pages/BlogLayout';
// import BlogPostsPage,{loader as BlogPostsLoader} from './pages/BlogPosts';
import NewPostPage,{action as FormAction} from './pages/NewPost';
import PostDetailPage,{loader as BlogPostLoader} from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error'
import DefferedBlogPosts,{loader as BlogPostsLoader} from './pages/DefferedBlogPosts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<WelcomePage />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index 
            element={<DefferedBlogPosts />} 
            loader={BlogPostsLoader}
            errorElement ={<ErrorPage/>}/>
          <Route 
            path=":id" 
            element={<PostDetailPage />} 
            loader={BlogPostLoader}
            errorElement ={<ErrorPage/>}/>
        </Route>
        <Route path="/blog/new" element={<NewPostPage />} action={FormAction}/>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router}></RouterProvider> 
    
}

export default App;
